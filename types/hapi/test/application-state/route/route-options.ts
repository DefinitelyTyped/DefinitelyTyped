import {
    Lifecycle,
    Request,
    ResponseToolkit,
    RouteOptions,
    RouteOptionsAccess,
    RouteOptionsCors,
    RouteOptionsPayload,
    RouteOptionsResponse,
    RouteOptionsValidate,
    Server,
    RouteOptionsSecureObject
} from "hapi";

interface RequestApplicationState {
    requestProp: {requestValue: string};
}

interface ServerApplicationState {
    serverProp: {serverValue: string};
}

const routeOptionsAccess: RouteOptionsAccess = {
    access: [
        {
            scope: false
        },
        {
            entity: 'user'
        }
    ],
    scope: false,
    entity: 'user',
    mode: 'optional',
    payload: 'optional',
    strategies: ['', ''],
    strategy: ''
};

const corsOption: RouteOptionsCors = {
    origin: 'ignore',
    maxAge: 5000,
    headers: ['test', 'test', 'test'],
    additionalHeaders: ['test', 'test', 'test'],
    exposedHeaders: ['test', 'test', 'test'],
    additionalExposedHeaders: ['test', 'test', 'test'],
    credentials: false
};

const payloadOptions: RouteOptionsPayload<ServerApplicationState, RequestApplicationState> = {
    allow: 'string',
    compression: {
        test1: {
            test: 2
        }
    },
    defaultContentType: 'application/json',
    failAction(request, h) {
        const {requestValue} = request.app.requestProp;
        const {serverValue} = request.server.app.serverProp;
        return h.continue;
    },
    maxBytes: 1048576,
    multipart: {
        output: 'annotated'
    },
    output: 'stream',
    override: '',
    parse: 'gunzip',
    timeout: 5000,
    uploads: 'dir/'
};

const pre1: Lifecycle.Method<ServerApplicationState, RequestApplicationState> = (request, h) => {
    const {requestValue} = request.app.requestProp;
    const {serverValue} = request.server.app.serverProp;
    return h.continue;
};

const pre2: Lifecycle.Method<ServerApplicationState, RequestApplicationState> = (request, h) => {
    const {requestValue} = request.app.requestProp;
    const {serverValue} = request.server.app.serverProp;
    return h.continue;
};

const pre3: Lifecycle.Method<ServerApplicationState, RequestApplicationState> = (request, h) => {
    const {requestValue} = request.app.requestProp;
    const {serverValue} = request.server.app.serverProp;
    return h.continue;
};

const routeOptionsResponse: RouteOptionsResponse<ServerApplicationState, RequestApplicationState> = {
    emptyStatusCode: 200,
    failAction(request, h) {
        const {requestValue} = request.app.requestProp;
        const {serverValue} = request.server.app.serverProp;
        return h.continue;
    },
    modify: false,
    options: undefined,
    ranges: true,
    sample: 100,
    schema: true,
    status: {
        200: true,
        302: true,
        404: false,
    },
    disconnectStatusCode: 123,
};

const routeOptionsValidate: RouteOptionsValidate<ServerApplicationState, RequestApplicationState> = {
    errorFields: {},
    failAction(request, h) {
        const {requestValue} = request.app.requestProp;
        const {serverValue} = request.server.app.serverProp;
        return h.continue;
    },
    headers: false,
    options: {},
    params: false,
    payload: true,
    query: true,
};

declare module 'hapi' {
    interface RouteOptionsApp {
        one: number;
        two: string;
    }
}

const routeOptions: RouteOptions<ServerApplicationState, RequestApplicationState> = {
    app: {
        one: 1,
        two: "2"
    },
    auth: routeOptionsAccess,
    bind: null,
    cache: {
        privacy: 'default',
        statuses: [200],
        otherwise: 'no-cache'
    },
    compression: {
        test1: {
            test: 2
        }
    },
    cors: corsOption,
    description: 'description here',
    ext: undefined,
    files: { relativeTo: '.' },
    handler(request, h) {
        const {requestValue} = request.app.requestProp;
        const {serverValue} = request.server.app.serverProp;
        return h.continue;
    },
    id: 'test',
    isInternal: false,
    json: undefined,
    jsonp: 'callback',
    log: { collect: false },
    notes:  ['test', 'test', 'test'],
    payload: payloadOptions,
    plugins: {
        plugin1: {},
        plugin2: {},
    },
    pre: [
        [
            // m1 and m2 executed in parallel
            { method: pre1, assign: 'm1' },
            { method: pre2, assign: 'm2' }
        ],
        { method: pre3, assign: 'm3' },
    ],
    response: routeOptionsResponse,
    security: false,
    state: {
        parse: true,
        failAction(request, h) {
            const {requestValue} = request.app.requestProp;
            const {serverValue} = request.server.app.serverProp;
            return h.continue;
        },
    },
    tags: ['test', 'test', 'test'],
    timeout: {
        server: 10000,
        socket: false
    },
    validate: routeOptionsValidate
};

const server = new Server<ServerApplicationState, RequestApplicationState>({
    port: 8000,
    routes: routeOptions
});
server.start();

server.events.on('start', () => {
    console.log('Server started at: ' + server.info.uri);
});
