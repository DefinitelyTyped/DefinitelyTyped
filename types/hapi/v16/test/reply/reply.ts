
// From https://hapijs.com/api/16.1.1#replyerr-result

import * as Hapi from 'hapi';

// verbose notation

const handler: Hapi.RouteHandler = function (request, reply) {

    const response = reply('success');
    response.type('text/plain');
    response.header('X-Custom', 'some-value');
};

// Chained notation

const handler2: Hapi.RouteHandler = function (request, reply) {

    return reply('success')
        .type('text/plain')
        .header('X-Custom', 'some-value');
};
