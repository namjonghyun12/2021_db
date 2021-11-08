import express from "express";
import logger from "morgan";
import path from "path";

import homeRouter from "../routes/home";  // 그냥 / 만 하면 home이 뜹니다.
import updateRouter from "../routes/update"; // /update/department를 해야지 부서를 바꿀 수 있습니다.
import selectRouter from "../routes/select"; // /select로 불러옵니다.

const PORT = 3000;

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs') // hbs 파일로 뷰 엔진을 설정하는 것을 볼 수 있습니다.

app.use(logger("dev"));

app.use('/', homeRouter);
app.use('/update', updateRouter);
app.use('/select', selectRouter);

    app.listen(PORT, () => {
        console.log(`Example app listening at http://localhost:${PORT}`)
    })

// 웹페이지와 연동하는 부분입니다.