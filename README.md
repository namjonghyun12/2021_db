# 2021-02-database
## 3주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:namjonghyun12/2021_db.git
    - (token을 사용하는 경우) git clone https://github.com/namjonghyun12/2021_db.git
2. week_3 폴더로 이동
    > cd week_3
3. 콘솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)
<pre>
<code>
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root', // 본인이 만든 데이터베이스 이름
        password: '2104963bj&', // 본인의 mysql password
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);
</code>
</pre>
<br>
## <span style="color:red">테이블 작성법</span>
<span>STUDENT 테이블</span>
StudentID|StudentName|StudentGrade|StudentDepartment|StudentEmail
---|---|---|---|---|
12171779|남종현|3|정보통신공학과|ehakqoa963@gmail.com|
12171231|배현철|3|전자공학과|bhc1020@gmail.com|
<br>

5. 서버 실행 후 웹 페이지 확인
    - npm run start
    - 주소창에 localhost:3000 입력
6. 기본 화면
    - 테이블의 값을 localhost:3000으로 접속하여 DB에 있는 값을 불러와서 출력

## 8주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:namjonghyun12/2021_db.git
    - (token을 사용하는 경우) git clone https://github.com/namjonghyun12/2021_db.git
2. week_8 폴더로 이동
    > cd week_8
3. 콘솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)
<pre>
<code>
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root', // 본인이 만든 데이터베이스 이름
        password: '2104963bj&', // 본인의 mysql password
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);
</code>
</pre>

## <span style="color:red">8주차 테이블 작성법</span>
<span>employee 테이블</span>
Fname|Minit|Lname|Ssn|Bdate|Address|Sex|Salary|Super_ssn|Dno|
---|---|---|---|---|---|---|---|---|---|
이|b|동선|12171717|1998-01-09|시흥|남|900|12171779|2|
윤|c|기벽|12171761|1997-10-24|인천|남|900|12171779|3|
남|a|종현|12171779|1997-11-14|정왕동|남|3000|NULL|1|
공|d|우택|12171717|1999-01-04|시흥|천안|600|12171717|2|
이|f|현준|12171717|2000-11-24|시흥|인천|700|12171761|3|

<span>department 테이블</span>
Dname|Dnumber|Mgr_ssn|Mgr_start_date|
---|---|---|---|
수뇌부|1|12171779|2003-10-24|
기획부|2|12171717|2003-10-24|
경영부|3|12171761|2005-11-15|
<br>



5. 서버 실행(powershell에서 ) 후 확인
    - npm run start
    - 브라우저를 켜서 주소창에 localhost:3000 입력
6. 기본 화면
    - (데이터베이스 설정이 된 경우) localhost:3000/select로 들어가면 DB에 있는 값을 불러와서 출력

## <span style="color:red">8주차 테이블 수정법</span>

1. 직원 테이블 갱신: Salary 칸의 봉급을 바꾸고 수정을 누르면 해당 직원이 갱신됨
2. 부서 테이블 갱신: Dname 칸의 이름을 바꾸고 수정을 누르면 해당 부서의 이름이 갱신됨

<br>

## 10주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@github.com:hojun-Park/2021-02-database.git
    - (token을 사용하는 경우) git clone https://github.com/hojun-Park/2021-02-database.git
2. week10 폴더로 이동
    > cd week10
3. 콘솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)
<pre>
<code>
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root', // 본인이 만든 데이터베이스 이름
        password: '2104963bj&', // 본인의 mysql password
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);
</code>
</pre>

## <span style="color:red">10주차 테이블 작성법</span>
<span>부서 테이블</span>
Dname|Dnumber|
---|---|
전기공학과|3|
전자공학과|2|
전파공학과|4|
정보통신공학과|1|
컴퓨터공학과|5|

<br>

<span>프로젝트 테이블</span>
Pname|Pnumber|Plocation
---|---|---|
Project_b|3|수원|
Project_c|4|여수|
Project_d|5|김포|
Project_x|1|시흥시|
Project_a|2|인천|



5. 서버 실행(powershell에서 ) 후 확인
    - npm run start
    - 브라우저를 켜서 주소창에 localhost:3000 입력
6. 기본 화면
    - (데이터베이스 설정이 된 경우) localhost:3000/select로 들어가면 DB에 있는 값을 불러와서 출력

## <span style="color:red">10주차 테이블 삭제법</span>

1. 부서 테이블 삭제: 삭제를 원하는 테이블 옆에 삭제를 누르면 해당 테이블의 Dnumber를 받아와서 delete 커리를 돌리게 됨
2. 프로젝트 테이블 삭제: 삭제를 원하는 테이블 옆에 삭제를 누르면 해당 테이블의 Pname을 받아와서 delete 커리를 돌리게 됨

<br>

## 텍스트 강조
- **데이터베이스** 실습은 재미 ~~없어요~~있어요.
