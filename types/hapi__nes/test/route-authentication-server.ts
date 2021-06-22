// from https://github.com/hapijs/nes#route-authentication

import { AuthCredentials, Request, ResponseToolkit, Server } from '@hapi/hapi';
import Basic = require('@hapi/basic');
import Bcrypt = require('bcrypt');
import Nes = require('@hapi/nes');

const server = new Server();

declare module '@hapi/hapi' {
    interface AuthCredentials {
        id: string;
        name: string;
    }
}

server.register([Basic, Nes]).then(() => {

    // Set up HTTP Basic authentication

    interface User {
        username: string;
        password: string;
        name: string;
        id: string;
    }

    const users: { [index: string]: User } = {
        john: {
            username: 'john',
            password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',   // 'secret'
            name: 'John Doe',
            id: '2133d32a'
        }
    };

    const validate: Basic.Validate = async (request, username, password, h) => {

        const user = users[username];
        if (!user) {
            return { credentials: null, isValid: false };
        }

        let isValid = await Bcrypt.compare(password, user.password)

        return { isValid, credentials: { id: user.id, name: user.name } };
    };

    server.auth.strategy('simple', 'basic', {validateFunc: validate});
    server.auth.default('simple');

    // Configure route with authentication

    server.route({
        method: 'GET',
        path: '/h',
        options: {
            id: 'hello',
            handler: function (request: Request, h: ResponseToolkit) {

                return 'Hello ' + request.auth.credentials.name;
            }
        }
    });

    return server.start();
});
