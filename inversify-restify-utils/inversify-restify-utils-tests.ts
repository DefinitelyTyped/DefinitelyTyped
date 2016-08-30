/// <reference path="./inversify-restify-utils.d.ts" />

import {
    InversifyRestifyServer, Controller, Get, Options,
    Delete, Head, Put, Patch, Post, Method, TYPE
} from "inversify-restify-utils";

import * as restify from "restify";
import { Kernel } from "inversify";

let kernel = new Kernel();

module server {

    let server = new InversifyRestifyServer(kernel);

    server
        .setConfig((app: restify.Server) => {
            app.use((req: restify.Request, res: restify.Response, next: restify.Next) => {
                console.log("hello world");
                next();
            });
        })
        .build()
        .listen(3000, "localhost");
}

module decorators {

    @Controller("/")
    class TestController {

        @Get("/")
        public testGet() { return "GET"; }

        @Options("/")
        public testAll() { return "OPTIONS"; }

        @Delete("/")
        public testDelete() { return "DELETE"; }

        @Head("/")
        public testHead() { return "HEAD"; }

        @Put("/")
        public testPut() { return "PUT"; }

        @Patch("/")
        public testPatch() { return "PATCH"; }

        @Post("/")
        public testPost() { return "POST"; }

        @Method("opts", "/")
        public testMethod() { return "METHOD:OPTS"; }
    }

    kernel.bind<Controller>(TYPE.Controller).to(TestController);

    function m1(req: restify.Request, res: restify.Response, next: restify.Next) { next(); }
    function m2(req: restify.Request, res: restify.Response, next: restify.Next) { next(); }
    function m3(req: restify.Request, res: restify.Response, next: restify.Next) { next(); }

    @Controller("/", m1, m2, m3)
    class TestMiddlewareController {

        @Get("/", m1, m2, m3)
        public testGet() { return "GET"; }

        @Options("/", m1, m2, m3)
        public testAll() { return "OPTIONS"; }

        @Delete("/", m1, m2, m3)
        public testDelete() { return "DELETE"; }

        @Head("/", m1, m2, m3)
        public testHead() { return "HEAD"; }

        @Put("/", m1, m2, m3)
        public testPut() { return "PUT"; }

        @Patch("/", m1, m2, m3)
        public testPatch() { return "PATCH"; }

        @Post("/", m1, m2, m3)
        public testPost() { return "POST"; }

        @Method("opts", "/", m1, m2, m3)
        public testMethod() { return "METHOD:OPTS"; }
    }
}
