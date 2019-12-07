
const mysql = require('mysql2/promise');
//MYSQL Thread Pool
module.exports = function (state) {

    var pool = mysql.createPool({
      //  host: (process.env.NODE_ENV.indexOf('production') > -1) ? process.env.MYSQL_HOST_PROD : process.env.MYSQL_HOST_DEV,
        host:'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: state,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });

    async function _query(query, params, callback) {
        const connection = await pool.getConnection();
        await connection.beginTransaction();
        try {
            const rows = await connection.query(query, params)
            callback(false, rows[0]);
            await connection.commit();
        } catch (error) {
            await connection.rollback();
            callback(error, null);
            throw error;
        } finally {
            connection.release();
        }

    };

    return {
        query: _query
    };
}
