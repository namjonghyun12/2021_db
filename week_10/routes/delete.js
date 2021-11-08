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
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();

// 기존의 입력 값 불러오기
router.get('/', async (req, res) => {
    const department = await selectSql.getDepartment();
    const project = await selectSql.getProject();
    //async와 await으로 getDepartment하기
    res.render('delete', {
        title: "부서 삭제",
        title2: "프로젝트 삭제", //두번째 제목을 만들어줬습니다.
        department,
        project
    });
});
// 삭제 버튼을 눌렀을 경우 delete query를 실행하며 삭제 페이지로 이동
router.post('/', async (req, res) => {
    console.log('delete router:', req.body.delBtn); // 첫번째 버튼을 누르면 버튼에 해당하는 정보가 req에 옵니다.
    console.log('delete router:', req.body.delBtn2);// 두번째 버튼을 누르면 project의 정보가 옵니다.
 //req.body 하면 버튼의 정보를 받아옵니다.
    const data = {
        Dnumber: req.body.delBtn, // data는 Dnumber입니다.
    };
    const data2 = {
        Pname: req.body.delBtn2, // data2를 만들어서 delete커리에 주게됩니다.
    };

    if(data.Dnumber!=null){
        await deleteSql.deleteDepartment(data); // data가 두개여서 구분하기 위해 써줘야 돌아갑니다.
    }//null이 아닐때만 커리를 돌립니다.
    if(data2.Pname!=null) {
        await deleteSql.deleteProject(data2);
    }
    res.redirect('/delete'); // 다시 delte 페이지로 접속합니다.
});

module.exports = router; // module.export는 router를 참조합니다.