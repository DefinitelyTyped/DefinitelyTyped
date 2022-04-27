// Type definitions for resourcejs 1.9
// Project: https://github.com/travist/resourcejs
// Definitions by: Shaun Luttin <https://github.com/shaunluttin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

import express = require("express");
import mongoose = require("mongoose");

export = resourcejs;

declare function resourcejs(
    app: express.Application,
    route: string,
    modelName: string,
    model: mongoose.Model<mongoose.Document>): resourcejs.ResourceEndpoint;

declare namespace resourcejs {
    type HttpHandler = (req: Request, res: Response, next: express.NextFunction) => void;

    type MethodBuild<T> = (options?: T) => ResourceEndpoint;

    interface RestOptions extends HttpMethodOptions {
        beforePut?: HttpHandler | undefined;
        beforePatch?: HttpHandler | undefined;
        beforePost?: HttpHandler | undefined;
        beforeIndex?: HttpHandler | undefined;
        beforeGet?: HttpHandler | undefined;
        afterPut?: HttpHandler | undefined;
        afterPatch?: HttpHandler | undefined;
        afterPost?: HttpHandler | undefined;
        afterIndex?: HttpHandler | undefined;
        afterGet?: HttpHandler | undefined;
    }

    interface VirtualOptions extends HttpMethodOptions {
        path?: string | undefined;
    }

    interface HttpMethodOptions {
        before?: HttpHandler | undefined;
        after?: HttpHandler | undefined;
    }

    /**
     * We manually generated this interface by looking an resource like this:
     * const resource = Resource(app, route, name, model);
     * console.log(resource);
     */
    interface ResourceEndpoint {
        model: mongoose.Model<mongoose.Document>;
        modelName: string;
        name: string;
        route: string;
        methods: string[];
        __swagger: any;
        register: (
            app: express.Application,
            method: string,
            path: string,
            callback: (...args: any[]) => any,
            last: (...args: any[]) => any,
            options: object) => any;

        respond: HttpHandler;
        setResponse: HttpHandler;
        getMethodOptions: (method: string, options: object) => object;
        rest: MethodBuild<RestOptions>;
        getParamQuery: (req: Request, name: string) => any;
        getFindQuery: (req: Request) => object;
        index: MethodBuild<HttpMethodOptions>;
        get: MethodBuild<HttpMethodOptions>;
        virtual: MethodBuild<VirtualOptions>;
        post: MethodBuild<HttpMethodOptions>;
        put: MethodBuild<HttpMethodOptions>;
        patch: MethodBuild<HttpMethodOptions>;
        delete: MethodBuild<HttpMethodOptions>;
        swagger: MethodBuild<HttpMethodOptions>;
    }

    interface Request extends express.Request {
        skipResource: boolean;
        noResponse: boolean;
        query: any;
        countQuery: any;
        modelQuery: any;
        skipDelete: boolean;
    }

    interface Response extends express.Response {
        resource: Resource;
    }

    interface Resource {
        status: number;
        error: Error;
        item: any;
    }

    interface Error {
        message: string;
        path: string;
        name: string;
        errors: Error[];
    }
}
