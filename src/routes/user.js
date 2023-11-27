const express = require('express');

const router = express.Router();

const validation = require('./validation');

const user = require('../../models/user_table');


router.route('')
    .post(validation.user_singup,async(req,res)=>{
        console.log(req.query.UserID);
        const insertUser =  await user.create({
            UserID: req.query.UserID,
            UserPassword: req.query.UserPassword,
            UserName: req.query.UserName,
            UserSex: req.query.UserSex,
            UserBirth: req.query.UserBirth,
            UserPhoneNumber: req.query.UserPhoneNumber,
        });

        res.send('DB에 데이터가 성공적으로 입력되었습니다.');
    })
    .get((req,res)=>{
        res.send('GET');
    })
    .put((req,res)=>{
        res.send('PUT');
    })
    .delete((req,res)=>{
        res.send('DELETE');
    })
module.exports = router;