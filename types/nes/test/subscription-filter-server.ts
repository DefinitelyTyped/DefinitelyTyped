// from https://github.com/hapijs/nes#subscription-filter

import Hapi = require('hapi');
import Basic = require('hapi-auth-basic');
import Bcrypt = require('bcrypt');
import Nes = require('nes');

var server = new Hapi.Server();
server.connection();

server.register([Basic, Nes], function (err) {

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

    var validate: Basic.ValidateFunc = function (request, username, password, callback) {

        var user = users[username];
        if (!user) {
            return callback(null, false);
        }

        Bcrypt.compare(password, user.password, function (err, isValid) {

            callback(err, isValid, { id: user.id, name: user.name, username: user.username });
        });
    };

    server.auth.strategy('simple', 'basic', 'required', { validateFunc: validate });

    // Set up subscription

    server.subscription('/items', {
        filter: function (path, message, options, next) {

            return next(message.updater !== options.credentials.username);
        }
    });

    server.start(function (err) {

        server.publish('/items', { id: 5, status: 'complete', updater: 'john' });
        server.publish('/items', { id: 6, status: 'initial', updater: 'steve' });
    });
});
