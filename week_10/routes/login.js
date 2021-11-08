// Copyright 2021 kms
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import express from "express";
import { selectSql } from "../database/sql"; //selectSql을 database 파일에 있는 sql.js 에서 받아오게 됩니다.

const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', async (req, res) => {
    const vars = req.body; //입력한 값은 vars에 들어오게 됨
    const users = await selectSql.getUsers(); //users변수에다가 user를 mysql에서 받아서 입력하기
    let whoAmI = ''; //whoami 변수를 만들어서 user인지 admin인지 구분
    //값을 바꿀수 있는 값 일때 let을 씀 값을 바꿀수 없으면 const 
    let checkLogin = false; //login을 했는지 안 했는지 구분해 주는 변수 
    //login 화면에서 user를 받아오는 부분입니다.
    //admin일때 delete 페이지로 가게 user면 select 페이지로 가게
    

    //루프를 돌지 않고 mysql에 있는 값이랑 입력한 값이랑 비교 할 수 있게 만드는 함수
    //map이라는 함수를 이용하여 callback함수로 하나씩 체크하는 기능을 수행하는
    users.map((user) => { // 여기서 user는 user[i] 랑 동일함 하나씩 비교해줌
        console.log(user.Id);
        if (vars.id === user.Id && vars.password === user.Password){
            checkLogin = true;//입력하는 Id와 password 와 login이 되어 있는지 확인하는 코드를 작성
            console.log('login success!'); // 만약 동일하다면 login sucess! 를 출력
            if(vars.id === 'admin') {
                whoAmI = 'admin'; //만약 admin이면 whoamI변수를 admin으로 
            } else {
                whoAmI = 'user'; //만약 user이면 whoamI변수를 user로
            }
        }
    })

    if (checkLogin && whoAmI === 'admin') {
        res.redirect('/delete'); // 만약 admin이면 delete커리로 가기
    } else if (checkLogin && whoAmI === 'user') {
        res.redirect('/select'); // 만약 user이면 select 커리로 가기
    } else { //나머지는 로그인 실패로 간주
        console.log('login falied!');
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>");
    }
})
module.exports = router;