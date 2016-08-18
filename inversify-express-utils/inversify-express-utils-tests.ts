/// <reference path="./inversify-express-utils.d.ts" />

import { InversifyExpressServer, Controller, Get, All, Delete, Head, Put, Patch, Post, Method } from "inversify-express-utils";
import * as express from "express";
import { Kernel } from "inversify";

module server {
    let kernel = new Kernel();
    let server = new InversifyExpressServer(kernel);

    server
        .setConfig((app) => {
            app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
                console.log("hello world");
                next();
            });
        })
        .setErrorConfig((app) => {
            app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
                console.error(err.stack);
                res.status(500).send("Something broke!");
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

        @All("/")
        public testAll() { return "ALL"; }

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

        @Method("foo", "/")
        public testMethod() { return "METHOD:FOO"; }
    }

    function m1(req: express.Request, res: express.Response, next: express.NextFunction) { next(); }
    function m2(req: express.Request, res: express.Response, next: express.NextFunction) { next(); }
    function m3(req: express.Request, res: express.Response, next: express.NextFunction) { next(); }

    @Controller("/", m1, m2, m3)
    class TestMiddlewareController {

        @Get("/", m1, m2, m3)
        public testGet() { return "GET"; }

        @All("/", m1, m2, m3)
        public testAll() { return "ALL"; }

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

        @Method("foo", "/", m1, m2, m3)
        public testMethod() { return "METHOD:FOO"; }
    }
}
