// Type definitions for inversify 1.0.0-alpha.4
// Project: https://github.com/inversify/inversify-express-utils
// Definitions by: inversify <https://github.com/inversify/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../inversify/inversify.d.ts" />
/// <reference path="../express/express.d.ts" />

declare module "inversify-express-utils" {

    import * as express from "express";
    import * as inversify from "inversify";

    interface IInversifyExpressServerConstructor {
        new(kernel: inversify.interfaces.Kernel): IInversifyExpressServer;
    }

    interface IInversifyExpressServer {
        setConfig(fn: IConfigFunction): IInversifyExpressServer;
        setErrorConfig(fn: IConfigFunction): IInversifyExpressServer;
        build(): express.Application;
    }

    interface IConfigFunction {
        (app: express.Application): void;
    }

    interface IHandlerDecoratorFactory {
        (path: string, ...middleware: express.RequestHandler[]): IHandlerDecorator;
    }

    interface IHandlerDecorator {
        (target: any, key: string, value: any): void;
    }

    export interface IController {}

    export var InversifyExpressServer: IInversifyExpressServerConstructor;

    export var Controller: (path: string, ...middleware: express.RequestHandler[]) => (target: any) => void;

    export var All: IHandlerDecoratorFactory;
    export var Get: IHandlerDecoratorFactory;
    export var Post: IHandlerDecoratorFactory;
    export var Put: IHandlerDecoratorFactory;
    export var Patch: IHandlerDecoratorFactory;
    export var Head: IHandlerDecoratorFactory;
    export var Delete: IHandlerDecoratorFactory;
    export var Method: (method: string, path: string, ...middleware: express.RequestHandler[]) => IHandlerDecorator;
}
