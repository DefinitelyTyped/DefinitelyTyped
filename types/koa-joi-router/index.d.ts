/// <reference types="node" />

import { BusboyConfig } from "busboy";
import * as CoBody from "co-body";
import * as http from "http";
import * as Joi from "joi";
import * as Koa from "koa";
import * as KoaRouter from "koa-router";

declare module "koa" {
    interface Request {
        body?: any;
        params: { [key: string]: string };
    }
}

interface createRouter {
    (): createRouter.Router;
    Joi: typeof Joi;
}

declare namespace createRouter {
    type FullHandler = (ctx: Koa.Context, next: Koa.Next) => any;
    interface NestedHandler extends ReadonlyArray<Handler> {}
    type Handler = FullHandler | NestedHandler;

    type Method = (path: string | RegExp, handlerOrConfig: Handler | Config, ...handlers: Handler[]) => Router;

    type OutputValidation = { body: Joi.SchemaLike } | { headers: Joi.SchemaLike };

    interface Config {
        pre?: Handler | undefined;
        validate?:
            | {
                header?: Joi.SchemaLike | undefined;
                query?: Joi.SchemaLike | undefined;
                params?: Joi.SchemaLike | undefined;
                body?: Joi.SchemaLike | undefined;
                maxBody?: number | string | undefined;
                failure?: number | undefined;
                type?: "form" | "json" | "multipart" | undefined;
                formOptions?: CoBody.Options | undefined;
                jsonOptions?: CoBody.Options | undefined;
                multipartOptions?: BusboyConfig | undefined;
                output?: { [status: string]: OutputValidation } | undefined;
                continueOnError?: boolean | undefined;
                validateOptions?: Joi.ValidationOptions | undefined;
            }
            | undefined;
        meta?: any;
    }

    interface Spec extends Config {
        method: string | string[];
        path: string | RegExp;
        handler: Handler;
    }

    interface Router {
        routes: Spec[];
        route(spec: Spec | Spec[]): Router;
        router: KoaRouter;
        middleware(): Koa.Middleware;

        prefix: KoaRouter["prefix"];
        use: KoaRouter["use"];
        param: KoaRouter["param"];

        head: Method;
        options: Method;
        get: Method;
        post: Method;
        put: Method;
        patch: Method;
        delete: Method;
    }
}

declare var createRouter: createRouter;

export = createRouter;
