// from https://github.com/hapijs/hapi-auth-basic#hapi-auth-basic

import Bcrypt = require('bcrypt');
import Basic = require('@hapi/basic');
import { Server } from '@hapi/hapi';

const server = new Server();

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

const validate: Basic.Validate = async (request, username, password, h) => {

    const user = users[username];
    if (!user) {
        return { isValid: false, credentials: null };
    }

    let isValid = await Bcrypt.compare(password, user.password)

    return { isValid, credentials: { id: user.id, name: user.name } };
};

server.register(Basic).then(() => {

    server.auth.strategy('simple', 'basic', { validate });
	server.auth.default('simple');

    server.route({ method: 'GET', path: '/', options: { auth: 'simple' } });
});
