import mysql from "mysql2";

// 데이터베이스 연결
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'root',
    database: 'week10',
    password: '2104963bj&',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }
); // mysql에 접속하는 코드입니다.

// async / await 사용
const promisePool = pool.promise();

// select query
export const selectSql = {
  getUsers : async () => {
    const [rows] = await promisePool.query(`select * from user`);
    return rows
  },
  getDepartment : async () => {
    const [rows] = await promisePool.query(`select * from department`);

    return rows
  },
  getProject : async () => {
    const [rows] = await promisePool.query(`select * from project`);

    return rows
  },
} // query문을 돌리는 부분입니다. select 문으로 user의 정보와 department정보를 받아옵니다.
//  


// delete query
export const deleteSql = {
  deleteDepartment : async (data) => {
    console.log('deleteSql.deleteDepartment :', data.Dnumber);
    const sql = `delete from department where Dnumber=${data.Dnumber}`;
    await promisePool.query(sql);
  },

  deleteProject : async (data2) => {
    console.log('deleteSql.deleteProject :', data2.Pname);
    const sql = `delete from project where Pname='${data2.Pname}'`;
    await promisePool.query(sql);
  },

}   //delete query 문을 불러오는 부분입니다. console에서 deleteSql.deleteDepartment문장을 불러오고 
    //data.Dnumber로 삭제하고 싶은 Dnumber를 html에서 클릭으로 지울 수 있게 만듭니다.  
    // 다음 sql delete from department where Dnumber = 다음에 Dnumber를 받아와서 지우게 됩니다.
    // 두번째 delete 커리문은 Pname을 받아왔습니다.
  