import { Lifecycle, Request, ResponseToolkit, Server, ServerRoute } from "hapi";

interface RequestApplicationState {
    requestProp: {requestValue: string};
}

interface ServerApplicationState {
    serverProp: {serverValue: string};
}

const server = new Server<ServerApplicationState, RequestApplicationState>();
server.route([
    {
        path: '/test1',
        method: 'GET',
        handler: (request, h) => {
            const {requestValue} = request.app.requestProp;
            const {serverValue} = request.server.app.serverProp;
            return h.continue;
        }
    }
]);
