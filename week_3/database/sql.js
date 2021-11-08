import mysql from "mysql2";
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
      host: 'localhost',
      user: 'root', // 본인의 mysql user id
      database: 'students', // 본인이 만든 데이터베이스 이름
      password: '2104963bj&', // 본인의 mysql password
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    }
  );

  const promisePool = pool.promise();

const sql = {

  getStudents : async () => {
    const [rows] = await promisePool.query(`
      SELECT * FROM students
    `)
    
    return rows
  },
}

module.exports = sql
  
  