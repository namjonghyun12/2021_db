import express from "express";
import logger from "morgan";
import path from "path";

import loginRouter from "../routes/login"; // login 화면을 띄우기 위한 부분입니다. 
import selectRouter from "../routes/select"; // select 화면을 띄우기 위한 부분입니다.
import deleteRouter from "../routes/delete"; // delete 화면을 띄우기 위한 부분입니다.

const PORT = 3000;

const app = express(); 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs') // hbs에 html코드를 연동 시키는 부분입니다.

app.use(logger("dev"));

app.use('/', loginRouter);
app.use('/select', selectRouter);
app.use('/delete', deleteRouter); // 각 Router를 불러오기 위한 부분입니다.

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`) // 앞에 지정해둔 port 번호 3000번으로 연결합니다.
})