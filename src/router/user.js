const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')
const {verifyAccess} = require('../middlewares/auth')
const images = require('../middlewares/multer')


router
  .get('/', verifyAccess, userController.getAllUser)
  .get('/:id', userController.getUserById)
  // .post('/', userController.insertUser)
  .put('/:id', images.single('image'), userController.updateUser)
  .delete('/:id', userController.deleteUser)
  .post('/register', userController.register)
  .post('/login', userController.login)

module.exports = router
