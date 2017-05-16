
// From https://hapijs.com/api/16.1.1#replyentityoptions

import * as Hapi from 'hapi';
const server = new Hapi.Server();
server.connection({ port: 80 });

server.route({
    method: 'GET',
    path: '/',
    config: {
        cache: { expiresIn: 5000 },
        handler: function (request, reply) {

            const response = reply.entity({ etag: 'abc' });
            if (response) {
                response.header('X', 'y');
                return;
            }

            return reply('ok');
        }
    }
});
