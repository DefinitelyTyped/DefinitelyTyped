import { Server, Request } from 'hapi';
import * as yar from 'yar';

async function boot() {
    const server = new Server();
    await server.register({
        plugin: yar,
        options: {
            cookieOptions: {
                password: 'test',
                isSecure: true,
            },
        },
    });

    server.route({
        path: '/test',
        method: 'get',
        handler(request: Request) {
            const example = request.yar.get('example');
            return {
                id: request.yar.id,
                key: example.key,
            };
        },
    });
}
