import express from "express";
import { insertSql, selectSql } from "../database/sql";
//database안의 sql을 import해옵니다.

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});
// home을 불러오기 위한 부분입니다. 


router.post('/', (req, res) => {
    const vars = req.body;
    const var_lenth = Object.keys(req.body).length; 

    if(var_lenth > 4){
        const data = {
            Fname: vars.fname,
            Minit: vars.minit,
            Lname: vars.lname,
            Ssn: vars.ssn,
            Bdate: vars.bdate,
            Address: vars.address,
            Sex: vars.sex,
            Salary: vars.salary,
            Super_ssn: vars.super_ssn,
            Dno: vars.dno
        };
        // 이를 html에서 순차적으로 보여주려고 이런식으로 작성하게 됩니다.

        insertSql.setEmployee(data);// 데이터들을 이렇게 sql에 있는 setEmployee를 돌려서 안에 넣게 됩니다.
    } else {
        const data = {
            Dname: vars.dname,
            Dnumber: vars.dnumber,
            Mgr_ssn: vars.mgr_ssn,
            Mgr_start_date: vars.mgr_start_date
        };

        insertSql.setDepartment(data);// 마찬가지로 setdepartment를 돌려서 안에 넣게 됩니다.
    }

    res.redirect('/');
})

module.exports = router;