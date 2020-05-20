// https://github.com/hapijs/hapi/blob/master/API.md#-serverdecoratetype-property-method-options
import { Request, ResponseToolkit, Server } from "hapi";

declare module 'hapi' {
    interface HandlerDecorations {
        test?: {
            test: number;
        };
    }
}

// Test basic types.

const server = new Server({
    port: 8000,
});

server.start();
server.decorate('toolkit', 'success', function() {
    return this.response({ status: 'ok' });
});
server.decorate('handler', 'test', (route, options) => (req, h) => 123);
server.route({
    method: 'GET',
    path: '/',
    handler: {
        test: {
            test: 123,
        }
    }
});

console.log(server.decorations.toolkit);

// Test decorators with additional arguments

declare module 'hapi' {
    interface Server {
        withParams(x: number, y: string): string;
    }

    interface ResponseToolkit {
        withParams(x: number, y: string): string;
    }
}

function decorateServerWithParams(this: Server, x: number, y: string) {
    return `${x} ${y}`;
}

server.decorate('server', 'withParams', decorateServerWithParams);
server.withParams(1, "one");

function decorateToolkitWithParams(this: ResponseToolkit, x: number, y: string) {
    return `${x} ${y}`;
}

server.decorate('toolkit', 'withParams', decorateToolkitWithParams);

server.decorate('toolkit', Symbol('hi'), decorateToolkitWithParams);

server.route({
    method: 'GET',
    path: '/toolkitWithParams',
    handler: (r, h) => {
        return h.withParams(1, "one");
    }
});

// Test request + apply option types

declare module 'hapi' {
    interface Request {
        withApply(x: string, y: number): string;
    }
}

function decorateRequestWithApply(request: Request) {
    return (x: string, y: number) => {
        return `${x} ${y}`;
    };
}

server.decorate('request', 'withApply', decorateRequestWithApply, {apply: true});

server.route({
    method: 'GET',
    path: '/requestWithApply',
    handler: (r, h) => {
        return r.withApply("one", 1);
    }
});

// Test extend option type

declare module 'hapi' {
    interface Server {
        withExtend(x: string, y: number): string;
    }
}

const decorateServerWithExtend = (existing: () => void) => {
    return (x: string, y: number) => {
        existing();
        return `${x} ${y}`;
    };
};

server.decorate('server', 'withExtend', decorateServerWithExtend, {extend: true});
server.withExtend("one", 1);
