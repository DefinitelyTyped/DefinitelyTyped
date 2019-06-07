import { Request, ResponseToolkit, Server, ServerOptions, ServerRoute } from "hapi";

interface RequestApplicationState {
    requestProp: {requestValue: string};
}

interface ServerApplicationState {
    serverProp: {serverValue: string};
}

const serverRoutes: Array<ServerRoute<ServerApplicationState, RequestApplicationState>> = [
    {
        path: '/test1',
        method: 'GET',
        handler(request, h) {
            const responseRequest = h.request;
            const {requestValue} = responseRequest.app.requestProp;
            const {serverValue} = responseRequest.server.app.serverProp;
            return h.continue;
        }
    }
];

const server = new Server<ServerApplicationState, RequestApplicationState>();
server.route(serverRoutes);
