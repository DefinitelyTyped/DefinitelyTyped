import * as hapi from 'hapi';
import { controller, get, post, put, cache, config, route, validate, Controller } from 'hapi-decorators';

@controller('/test')
class TestController implements Controller {
    baseUrl: string;
    routes: () => hapi.IRouteConfiguration[];

    @get('/')
    @config({
        auth: false
    })
    @cache({
        expiresIn: 42000
    })
    @validate({
        payload: false
    })
    getHandler(request: hapi.Request, reply: hapi.IReply) {
        reply({ success: true });
    }

    @post('/')
    postHandler(request: hapi.Request, reply: hapi.IReply) {
        reply({ success: true });
    }

    @put('/{id}')
    putHandler(request: hapi.Request, reply: hapi.IReply) {
        reply({ success: true });
    }

    @route('delete', '/{id}')
    deleteHandler(request: hapi.Request, reply: hapi.IReply) {
        reply({ success: true });
    }
}

const server = new hapi.Server();

server.route(new TestController().routes());

@controller('/test')
class SimpleTestController implements Controller {

    foo: string;

    constructor(foo: string) {
        this.foo = foo;
    }

    baseUrl: string;
    routes: () => hapi.IRouteConfiguration[];
}

server.route(new SimpleTestController('bar').routes());
