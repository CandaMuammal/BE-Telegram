<p align="center">
     <img src="https://i.postimg.cc/pT9Ypg8w/teleg.png"   alt= border="0" /> <br/>
     <img src="https://i.postimg.cc/XNd1LCGT/telltel.png"   alt= border="0" />

</p>

<p align="center">
    <br />
    <br />
    <br />
    <a href="https://fe-telegram.vercel.app/login">View Demo</a>
    ·
    <a href="https://github.com/CandaMuammal/FE-Telegram/issues">Report Bug</a>
    ·
  </p>

---


## Contents

- [About](#about)
- [Packages](#Packages)
- [Installation](#installation)
- [Endpoint](#endpoint)
- [Authors](#authors)

##  About

<p align="justify">Telegram is a real-time chat application that'll allows you to chat with the others. Update your profile so your friend won't get bored because you have fresh photo everytime you update your profile.
</p>

##  Packages


#### Built Wth
- ExpressJs
- NodeJs
- MySQL
- JWT

#### Packages (Backend)
    "bcrypt": "^5.0.1",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "eslint": "^7.30.0",
    "express": "^4.17.1",
    "http-errors": "^1.8.0",
    "ip": "^1.1.5",
    "jsonwebtoken": "^8.5.1",
    "md5": "^2.3.0",
    "moment": "^2.29.1",
    "morgan": "^1.10.0",
    "multer": "^1.4.2",
    "mysql": "^2.18.1",
    "mysql2": "^2.2.5",
    "nodemailer": "^6.6.3",
    "socket.io": "^4.1.3",
    "uuid": "^8.3.2"


## Installation

- Clone This Repo to your local

```
git clone https://github.com/CandaMuammal/BE-Telegram
```

- Go To Folder Repo

```
cd BE-Telegram
```

- Install Module

```
npm install
```

- Type ` npm start` To Start Website

<br/>

## Telegram - Frontend

:rocket: [`Frontend Telegram`](https://github.com/CandaMuammal/FE-Telegram)

<br/>

## Endpoint

#### History Endpoint

|  METHOD  |             API             |                    ACTIONS                    |
| :------: | :-------------------------: | :-------------------------------------------: |
|  `POST`   |           /history/     |               add chat history             |
|  `GET`   |       /history/:idReceiver      |              get chat history by id             |


#### User Endpoint

|  METHOD  |             API             |                    ACTIONS                    |
| :------: | :-------------------------: | :-------------------------------------------: |
|  `POST`   |       /user//register     |              register user            |
|  `POST`   |           /user//login     |               login user             |
|  `GET`   |       /user/:id      |              get user by id             |
| `PUT` |       /user/:id        |            update user           |
| `GET` |       /user        |             get all user           |
| `DELETE` |       /user/:id        |             delete  user           |


## Authors

:rocket: [Canda Muammal](https://github.com/CandaMuammal)
