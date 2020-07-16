// Added test in addition to docs, for request.query
import { Lifecycle, Request, RequestQuery, ResponseToolkit, Server, ServerOptions, ServerRoute } from "@hapi/hapi";

const options: ServerOptions = {
    port: 8000,
};

const handlerFn: Lifecycle.Method = (request, h) => {
    const query1 = request.query;
    console.log(query1);

    const query2 = request.query;
    // http://localhost:8000/?name=test
    return `You asked for ${query2.name}`;
};

const serverRoute: ServerRoute = {
    path: '/',
    method: 'GET',
    handler: handlerFn
};

const server = new Server(options);
server.route(serverRoute);
server.start();
console.log('Server started at: ' + server.info.uri);
