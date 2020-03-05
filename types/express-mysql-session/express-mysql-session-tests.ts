import * as mysqlSession from 'express-mysql-session';
import * as session from 'express-session';

const MySQLStore = mysqlSession(session);

const options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'session_test',
};

const sessionStore = new MySQLStore(options);

sessionStore.close();
