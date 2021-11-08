import mysql from "mysql2"

const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week8',
        password: '2104963bj&',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);//데이터 베이스를 불러오는 부분입니다. 이를 통해서 mysql에 접속합니다.

const promisePool = pool.promise();

export const selectSql =  {
    getEmployee : async () => {
        const [rows] = await promisePool.query(`select * from employee`);
        console.log(rows)
        return rows
    },// employee를 받아오는 커리문입니다. 여기서 데이터베이스의 select *from employee가 실행됩니다.
    getDepartment : async () => {
        const [rows] = await promisePool.query(`select * from department`);

        return rows
    },// department를 받아오는 커리문입니다. 여기서 데이터베이스의 select *from department가 실행됩니다.
}

export const insertSql = {
    setEmployee : async (data) => {
        const sql = `insert into employee values (
            "${data.Fname}", "${data.Minit}", "${data.Lname}", "${data.Ssn}", "${data.Bdate}",
            "${data.Address}", "${data.Sex}", "${data.Salary}", "${data.Super_ssn}", "${data.Dno}")`;
        
            await promisePool.query(sql);

    },//데이터 베이스의 있는 그대로를 받아와서 insert 할 수 있는 insert 커리입니다.

    setDepartment :  async (data) => {
        const sql = `insert into department values (
            "${data.Dname}", "${data.Dnumber}", "${data.Mgr_ssn}", "${data.Mgr_start_date}")`;
        
            await promisePool.query(sql);
    },
}//데이터 베이스의 있는 그대로를 받아와서 insert 할 수 있는 insert 커리입니다.

export const updateSql = {
    updateEmployee : async (data) => {
        const sql = `update employee set salary = ${data.Salary} where  Address= "시흥"`;
        await promisePool.query(sql);

    },//이게 과제 step3에 해당하는 salary 고치기 입니다. 저는 시흥에 사는 직원의 salary를 고치려고 where문을 작성했습니다.
    updateDepartment : async (data) => {
        const sql = `update department set dname = "${data.Dname}" where Dnumber = 1`;
        await promisePool.query(sql);

    },//이건 Dname을 고치려고 whrere에서 dnumber가 1인 부서의 이름을 바꿉니다.
}