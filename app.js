// node_modules의 express 패키지를 가져온다.
var express = require("express");

//app이라는 변수에 express 함수의 변환 값을 저장한다.
var app = express();

const port = 3306;

//mysql
const mysql = require("mysql"); // mysql 모듈 로드
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
});

connection.connect(function (error) {
  if (error) throw error;
  console.log("connected");
  connection.query("created database", function (error, result) {
    if (error) throw error;
    console.log("database created");
  });
});

app.get("/", function (req, res) {
  res.send("<h1>ㅡㅡ하 빡쳐서 사망</h1>");
});

// express 서버를 실행할 때 s필요한 포트 정의 및 실행 시 callback 함수를 받습니다

app.listen(port, () => console.log(`the port number is ${port}`));
