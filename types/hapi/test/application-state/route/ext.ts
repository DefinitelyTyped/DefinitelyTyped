import { Server } from "hapi";

interface RequestApplicationState {
    requestProp: {requestValue: string};
}

interface ServerApplicationState {
    serverProp: {serverValue: string};
}

const server = new Server<ServerApplicationState, RequestApplicationState>();

server.route({
    method: 'get',
    path: "/test",
    options: {
        ext: {
            onPreResponse: {
                method(_request, h) {
                    const {requestValue} = _request.app.requestProp;
                    const {serverValue} = _request.server.app.serverProp;
                    return h.continue;
                },
            },
            onPostHandler: [{
                method(_request, h) {
                    const {requestValue} = _request.app.requestProp;
                    const {serverValue} = _request.server.app.serverProp;
                    return h.continue;
                },
            }],
        }
    }
});
