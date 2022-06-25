const mysql = require('mysql');
const Pool = mysql.createPool({
    host:'localhost',
    user: 'newuser',
    password:'password',
    port:3306,
    database:'Cars',
    connectionLimit:20

})

module.exports = {
    Pool,
}