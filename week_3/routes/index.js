import express from "express";
import sql from "../database/sql";

const router = express.Router();

router.get('/', async function(req, res, next) {
  const students = await sql.getStudents()
  
  // 데이터베이스에서 Students 목록 가져와서 Students.hbs에가 값을 넘겨줌
  res.render('students', { 
    title: '사용자 목록',
    students
  });
});

module.exports = router;
