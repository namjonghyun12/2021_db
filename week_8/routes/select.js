import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', async function(req, res) {
    const employee = await selectSql.getEmployee();
    const department = await selectSql.getDepartment(); // select 커리를 돌리는데 이는 그냥 display해주는 용도입니다.

    res.render('select', {
        title: '직원 테이블',
        title2: '부서 테이블',
        employee,
        department
    });// 보여주기 위한 부분이며 /select 를 쳐야지 select 창이 넘어가는것을 알 수 있습니다.
});

module.exports = router;