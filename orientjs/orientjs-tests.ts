/// <reference path="../node/node.d.ts" />
/// <reference path="orientjs.d.ts" />
import * as orientjs from 'orientjs';


var dbserver = orientjs({
    host: 'localhost',
    port: 2424,
    username: 'root',
    password: 'root'
    });
    var db = dbserver.use({
        name: 'mytestdb',
        username: 'root',
        password: 'root'
    });

