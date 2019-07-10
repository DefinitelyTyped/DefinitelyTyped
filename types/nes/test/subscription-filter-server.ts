// from https://github.com/hapijs/nes#subscription-filter

import {Server} from 'hapi';
import Basic = require('hapi-auth-basic');
import Bcrypt = require('bcrypt');
import Nes = require('nes');

var server = new Server();

server.register([Basic, Nes]).then(() => {

    // Set up HTTP Basic authentication

    interface User {
        username: string;
        password: string;
        name: string;
        id: string;
    }

    const users: {[index: string]: User} = {
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

        return { isValid, credentials: { id: user.id, name: user.name, username: user.username } };
    };

    server.auth.strategy('simple', 'basic', { validate });
    server.auth.default('simple')

    // Set up subscription

    server.subscription('/items', {
        filter: (path, message, options) => {

            return message.updater !== options.credentials.username;
        }
    });

    server.start().then(() => {

        server.publish('/items', { id: 5, status: 'complete', updater: 'john' });
        server.publish('/items', { id: 6, status: 'initial', updater: 'steve' });
    });
});
