// https://github.com/hapijs/hapi/blob/master/API.md#-await-serverinjectoptions
import { Request, ResponseToolkit, Server, ServerRoute } from "hapi";

const server = new Server({
    port: 8000,
});

const serverRoute: ServerRoute = {
    path: '/',
    method: 'GET',
    handler: (request: Request, h: ResponseToolkit) => {
        return 'Success!';
    }
};

server.route(serverRoute);
server.start();

server.inject('/').then(res => console.log(res.result));
