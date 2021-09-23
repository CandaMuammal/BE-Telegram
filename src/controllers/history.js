// const userModel = require("../models/user");

// const history = require("../models/history")
// const helper = require("../helpers/printHelper");

// exports.sendMessage = async (req, res) => {
//     const { idFrom, idTo, chat, date } = req.body;
//     const data = {
//         idFrom,
//         idTo,
//         chat,
//         date
//     };
//     try {
//         const user = await userModel.findUser(idFrom, "cek pengirim");
//         if (user < 1) {
//             helper.responseErr(res, 400, `Cannot find one users with id = ${idFrom}`);
//             return;
//         } else {
//             const receiver = await userModel.findUser(idTo, "cek penerima");
//             if (receiver < 1) {
//                 helper.responseErr(res, 400, `Cannot find one users with id = ${idTo}`);
//                 return;
//             }
//             await history.createMessages(data);
//             helper.responseSuccess(res, 200, "Create Messages successfully", data);
//         }
//     } catch (err) {
//         console.log(err);
//         helper.responseErr(res, 400, `something wrong`);
//     }
// };

// exports.findMessages = async (req, res) => {
//     const { idFrom, idTo } = req.params;

//     try {
//         const getMessagesSender = await history.getMessageByidFrom(idFrom);
//         const getMessagesTarget = await history.getMessageByIdSender(idTo);
//         const result = [...getMessagesSender, ...getMessagesTarget];
//         helper.responseSuccess(res, 200, "Find messages successfully", result);
//     } catch (err) {
//         if (err.message === "Internal server error") {
//             helper.responseErr(res, 500, err.message);
//         }
//         helper.responseErr(res, 400, err.message);
//     }
// };

// exports.deleteHistory = (req, res) => {
//     try {
//         const id = req.params.id;
//         history
//             .deleteHistoryChat(id)
//             .then((response) => {
//                 if (response.affectedRows != 0) {
//                     // Kalau ada yang terhapus
//                     helper.responseSuccess(res, 200, "deleting History Success", response);
//                 } else {
//                     // Kalau tidak ada yang terhapus
//                     helper.responseErr(res, 400, "Nothing Deleted, Wrong IDs");
//                 }
//             })
//             .catch((err) => {
//                 // Kalau ada salah di parameternya
//                 helper.responseErr(res, 400, "Wrong Parameter Type");
//             });
//     } catch (err) {
//         // Kalau ada salah lainnya
//         console.log(err.message);
//         helper.responseErr(res, 500, "Internal Server Error");
//     }
// };

const historyModel = require('../models/history')
const helpers = require('../helpers/helper') 
// const socket = require('socket.io')

const getHistoryById =(req, res)=>{
  const idReceiver = req.params.idReceiver
  const idSender = req.idUser
  console.log('idReceiver', idReceiver);
  console.log('idSender', idSender);
  historyModel.getHistoryById(idSender, idReceiver)
  .then((result)=>{
    helpers.responseSuccess(res, 200, "Find messages successfully", result)
  })
  .catch((err)=>{
    console.log(err);
  })
}

module.exports = {
  getHistoryById
}