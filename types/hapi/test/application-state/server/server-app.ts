import { Request, ResponseToolkit, Server, ServerOptions, ServerRoute } from "hapi";

interface RequestApplicationState {
    requestProp: {requestValue: string};
}

interface ServerApplicationState {
    serverProp: {serverValue: string};
}

const server = new Server<ServerApplicationState, RequestApplicationState>();
server.app.serverProp.serverValue = 'value2';

const serverRoute: ServerRoute<ServerApplicationState, RequestApplicationState> = {
    path: '/',
    method: 'GET',
    handler(request, h) {
        return 'key: ' + request.server.app.serverProp.serverValue;
    }
};

server.route(serverRoute);

server.start();
console.log('Server started at: ' + server.info.uri);
