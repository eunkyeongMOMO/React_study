const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());
let cors = require('cors');
//npm install cors도 입력해야함 
app.use(cors());

app.use(express.static(path.join(__dirname,'./')))
app.get('',(req,rsp)=>{
    rsp.sendFile(path.join(__dirname,'경로'))
})

app.get('/postsList', (req,rsp)=>{
    rsp.json()
})

//리액트 라우터 쓰려면 꼭 써줘야함.
app.get('',(req,rsp)=>{
    rsp.sendFile(path.join(__dirname,'경로'))
})
