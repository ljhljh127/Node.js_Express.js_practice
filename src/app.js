// require() 외부 모듈을 가져옴
// ex) require('express'), or require('./test.js')
const express = require('express')

//express framework의 CreateApplication() 함수를 시작하는 명령어
const app = express();

// express.static() 특정 폴더를 정적 폴더로 지정(참고사항)
// 이를 통하여 기능 없는 정적 파일 html,css 등을 public 으로 넣고 js 소스를 숨길 수 있음
// app.use(express.static('public'));

//database 연결
require("../models/index");

app.listen(3000, function(){console.log("API 서버가 정상적으로 실행 중입니다.")});