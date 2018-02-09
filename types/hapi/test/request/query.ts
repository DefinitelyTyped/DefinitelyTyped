// Added test in addition to docs, for request.query
import { Lifecycle, Request, ResponseToolkit, Server, ServerOptions, ServerRoute } from "hapi";

const options: ServerOptions = {
    port: 8000,
};

const handlerFn: Lifecycle.Method = (request: Request, h: ResponseToolkit) => {
    const query = request.query as GetThingQuery;
    // http://localhost:8000/?name=test
    return `You asked for ${query.name}`;
};

const serverRoute: ServerRoute = {
    path: '/',
    method: 'GET',
    handler: handlerFn
};

interface GetThingQuery {
    name: string;
}

const server = new Server(options);
server.route(serverRoute);
server.start();
console.log('Server started at: ' + server.info.uri);
