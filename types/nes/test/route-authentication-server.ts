// from https://github.com/hapijs/nes#route-authentication

import Hapi = require('hapi');
import Basic = require('hapi-auth-basic');
import Bcrypt = require('bcrypt');
import Nes = require('nes');

var server = new Hapi.Server();
server.connection();

server.register([Basic, Nes]).then(() => {

    // Set up HTTP Basic authentication

    interface User {
        username: string;
        password: string;
        name: string;
        id: string;
    }

    var users: {[index: string]: User} = {
        john: {
            username: 'john',
            password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',   // 'secret'
            name: 'John Doe',
            id: '2133d32a'
        }
    };

    var validate: Basic.Validate = async (request, username, password, h) => {

        var user = users[username];
        if (!user) {
            return { credentials: null, isValid: false };
        }

        let isValid = await Bcrypt.compare(password, user.password)

        return { isValid, credentials: { id: user.id, name: user.name } };
    };

    server.auth.strategy('simple', 'basic', { validateFunc: validate });
    server.auth.default('simple');

    // Configure route with authentication

    server.route({
        method: 'GET',
        path: '/h',
        config: {
            id: 'hello',
            handler: function (request, h) {

                return 'Hello ' + request.auth.credentials.name;
            }
        }
    });

    return server.start();
});
