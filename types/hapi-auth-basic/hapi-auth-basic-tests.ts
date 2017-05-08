// from https://github.com/hapijs/hapi-auth-basic#hapi-auth-basic

import Bcrypt = require('bcrypt');
import Basic = require('hapi-auth-basic');
import * as Hapi from 'hapi';

const server = new Hapi.Server();

interface User {
    username: string;
    password: string;
    name: string;
    id: string;
}

const users: {[index: string]: User} = {
    john: {
        username: 'john',
        password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',  // 'secret'
        name: 'John Doe',
        id: '2133d32a'
    }
};

const validate: Basic.ValidateFunc = function (request, username, password, callback) {

    const user = users[username];
    if (!user) {
        return callback(null, false);
    }

    Bcrypt.compare(password, user.password, (err, isValid) => {

        callback(err, isValid, { id: user.id, name: user.name });
    });
};

server.register(Basic, (err) => {

    server.auth.strategy('simple', 'basic', { validateFunc: validate });
    server.route({ method: 'GET', path: '/', config: { auth: 'simple' } });
});
