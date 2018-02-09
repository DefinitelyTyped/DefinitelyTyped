// https://github.com/hapijs/hapi/blob/master/API.md#route-options
import {
    Request,
    ResponseToolkit,
    RouteOptions,
    RouteOptionsAccess,
    RouteOptionsAccessEntity,
    RouteOptionsAccessMode,
    RouteOptionsAccessPayload,
    RouteOptionsCors,
    RouteOptionsPayload,
    RouteOptionsPrivacy,
    RouteOptionsResponse,
    RouteOptionsValidate,
    Server
} from "hapi";

const routeOptionsAccess: RouteOptionsAccess = {
    access: {},
    scope: false,
    entity: RouteOptionsAccessEntity.User,
    mode: RouteOptionsAccessMode.Optional,
    payload: RouteOptionsAccessPayload.Optional,
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

const payloadOptions: RouteOptionsPayload = {
    allow: 'string',
    compression: {
        test1: {
            test: 2
        }
    },
    defaultContentType: 'application/json',
    failAction: (request: Request, h: ResponseToolkit) => {
        return 'ok: ' + request.path;
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

const pre1 = (request: Request, h: ResponseToolkit) => {
    return 'Hello';
};

const pre2 = (request: Request, h: ResponseToolkit) => {
    return 'World';
};

const pre3 = (request: Request, h: ResponseToolkit) => {
    return `request.pre.m1 request.pre.m2`;
};

const routeOptionsResponse: RouteOptionsResponse = {
    emptyStatusCode: 200,
    failAction: (request: Request, h: ResponseToolkit) => {
        return 'ok: ' + request.path;
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
    }
};

const routeOptionsValidate: RouteOptionsValidate = {
    errorFields: {},
    failAction: (request: Request, h: ResponseToolkit) => {
        return 'ok: ' + request.path;
    },
    headers: false,
    options: {},
    params: false,
    payload: true,
    query: true,
};

const routeOptions: RouteOptions = {
    app: {},
    auth: routeOptionsAccess,
    bind: null,
    cache: {
        privacy: RouteOptionsPrivacy.Default,
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
    handler: (request: Request, h: ResponseToolkit) => {
        return 'ok: ' + request.path;
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
        failAction: (request: Request, h: ResponseToolkit) => {
            return 'ok: ' + request.path;
        },
    },
    tags: ['test', 'test', 'test'],
    timeout: {
        server: 10000,
        socket: false
    },
    validate: routeOptionsValidate
};

const server = new Server({
    port: 8000,
    routes: routeOptions
});
server.start();

server.events.on('start', () => {
    console.log('Server started at: ' + server.info.uri);
});
