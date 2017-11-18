import MySQLStore = require('express-mysql-session');

const options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'session_test'
};

const sessionStore = new MySQLStore(options);

sessionStore.close();
