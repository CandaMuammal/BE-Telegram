require('dotenv').config()
const express = require('express')
const socket = require('socket.io')
const http = require("http")
const cors = require('cors')
const morgan = require('morgan')
const moment = require('moment')
const PORT = process.env.PORT
moment.locale('id')
const app = express()
const httpServer = http.createServer(app)
const route = require('./src/router/index')
const jwt = require('jsonwebtoken')
const modelHistory = require('./src/models/history')
const createError = require('http-errors')


// use middle
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// app.get('/', (req, res)=>{
//   res.json({message: 'success'})
// })
app.use('/v1', route)
app.use('/file', express.static('./images'))

app.use('*', (req, res, next) => {
  const error = new createError.NotFound()
  next(error)
  // res.status(404).json({
  //   message: 'url not found'
  // })
})



app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.status || 500).json({
    message: err.message || 'internal server Error'
  })
})

// config socket
const io = socket(httpServer, {
  cors: {
    origin: '*'
  }
})

io.use((socket, next)=>{
  const token = socket.handshake.query.token

  jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        const error = new Error('token expired')
        error.status = 401
        return next(error)
      } else if (err.name === 'JsonWebTokenError') {
        const error = new Error('token invalid')
        error.status = 401
        return next(error)
      } else {
        const error = new Error('token not active')
        error.status = 401
        return next(error)
      }

    }
      socket.userId = decoded.id
      socket.join(decoded.id)
      next()
   
  });
})

// use socket
io.on('connection', (socket)=>{
  console.log('my user id is ', socket.userId);
 
  socket.on('sendMessage', ({ idReceiver, messageBody}, callback)=>{
    const dataMessage = {
      sender_id: socket.userId,
      receiver_id: idReceiver,
      messages: messageBody,
      created_at: new Date()
    }
    callback({
      ...dataMessage,
      created_at: moment(dataMessage.created_at).format('LT')
    })

    // save message to database
    modelHistory.insertHistory(dataMessage)
      .then(() => {
        socket.broadcast.to(idReceiver).emit('msgFromBackend', {
          ...dataMessage,
          created_at: moment(dataMessage.created_at).format('LT')
        })
      })
  })

  socket.on('disconnect', ()=>{
    console.log('a device just disconnected ', socket.id);
  })
  
})


httpServer.listen(PORT, ()=>{
  console.log('server is running port' + PORT);
})
// const app = express()