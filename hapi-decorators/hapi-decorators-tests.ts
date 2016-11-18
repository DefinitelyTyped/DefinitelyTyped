/// <reference path="../hapi/hapi.d.ts" />
/// <reference path="hapi-decorators.d.ts" />

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
