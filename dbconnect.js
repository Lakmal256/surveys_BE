const mysql = require('mysql')

let pool = mysql.createPool({
    connectionLimit: 50,
    host: 'localhost',
    user: 'root',
    password: 'Mysql@256',
    database: 'surveys'
});

const getConnection = (cb) => {
    pool.getConnection(function (err, connection) {
        if (err) {
            return console.error('error: ' + err.message);
        }

        if (cb) {
            cb(connection);
        }

    });
}

module.exports = {getConnection} ;