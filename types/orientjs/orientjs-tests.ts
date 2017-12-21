import * as orientjs from 'orientjs';

const dbserver = orientjs({
    host: 'localhost',
    port: 2424,
    username: 'root',
    password: 'root'
});
const db = dbserver.use({
    name: 'mytestdb',
    username: 'root',
    password: 'root'
});
