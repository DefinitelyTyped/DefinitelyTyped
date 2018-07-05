
// From https://hapijs.com/api/16.1.1#route-prerequisites

import * as Hapi from '../../';
const server = new Hapi.Server();
server.connection({ port: 80 });

const pre1: Hapi.RoutePrerequisiteRequestHandler = function (request, reply) {

    return reply('Hello');
};

const pre2: Hapi.RoutePrerequisiteRequestHandler = function (request, reply) {

    return reply('World');
};

const pre3: Hapi.RoutePrerequisiteRequestHandler = function (request, reply) {
    const pre = request.pre as Pre1;
    return reply(pre.m1 + ' ' + pre.m2);
};

server.route({
    method: 'GET',
    path: '/',
    config: {
        pre: [
            [
                // m1 and m2 executed in parallel
                { method: pre1, assign: 'm1' },
                { method: pre2, assign: 'm2' }
            ],
            { method: pre3, assign: 'm3' },
        ],
        handler: function (request, reply) {
            const pre = request.pre as Pre2;
            return reply(pre.m3 + '\n');
        }
    }
});
interface Pre1 {
    m1: string;
    m2: string;
}
interface Pre2 extends Pre1 {
    m3: string;
}
