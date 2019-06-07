import { Lifecycle, Request, ResponseToolkit, Server, ServerRoute } from "hapi";

interface RequestApplicationState {
    requestProp: {requestValue: string};
}

interface ServerApplicationState {
    serverProp: {serverValue: string};
}

const handler: Lifecycle.Method<ServerApplicationState, RequestApplicationState> = (request, h) => {
    const {requestValue} = request.app.requestProp;
    const {serverValue} = request.server.app.serverProp;
    return h.continue;
};

const serverRoutes: Array<ServerRoute<ServerApplicationState, RequestApplicationState>> = [
    {
        path: '/test1',
        method: 'GET',
        handler
    }
];

const server = new Server<ServerApplicationState, RequestApplicationState>();
server.route(serverRoutes);
