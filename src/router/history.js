const express = require('express')
const router = express.Router()
const { verifyAccess } = require('../middlewares/auth')
const historyController = require('../controllers/history')

router
  .get('/:idReceiver', verifyAccess, historyController.getHistoryById)

module.exports = router


