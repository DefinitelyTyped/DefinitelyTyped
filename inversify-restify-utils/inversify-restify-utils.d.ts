// Type definitions for inversify-restify-utils 1.0.0
// Project: https://github.com/inversify/inversify-restify-utils
// Definitions by: inversify <https://github.com/inversify/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../inversify/inversify.d.ts" />
/// <reference path="../restify/restify.d.ts" />

declare module "inversify-restify-utils" {

    import * as restify from "restify";
    import * as inversify from "inversify";

    export namespace interfaces {

        export interface InversifyRestifyServerConstructor {
            new(kernel: inversify.interfaces.Kernel): InversifyRestifyServer;
        }

        export interface InversifyRestifyServer {
            setConfig(fn: ConfigFunction): InversifyRestifyServer;
            build(): restify.Server;
        }

        export interface ConfigFunction {
            (app: restify.Server): void;
        }

        export interface HandlerDecoratorFactory {
            (path: string, ...middleware: restify.RequestHandler[]): HandlerDecorator;
        }

        export interface HandlerDecorator {
            (target: any, key: string, value: any): void;
        }

    }

    export interface Controller {}

    interface ServiceIdentifiers {
        Controller: Symbol;
    }

    export var InversifyRestifyServer: interfaces.InversifyRestifyServerConstructor;

    export var Controller: (path: string, ...middleware: restify.RequestHandler[]) => (target: any) => void;

    export var Options: interfaces.HandlerDecoratorFactory;
    export var Get: interfaces.HandlerDecoratorFactory;
    export var Post: interfaces.HandlerDecoratorFactory;
    export var Put: interfaces.HandlerDecoratorFactory;
    export var Patch: interfaces.HandlerDecoratorFactory;
    export var Head: interfaces.HandlerDecoratorFactory;
    export var Delete: interfaces.HandlerDecoratorFactory;
    export var Method: (method: string, path: string, ...middleware: restify.RequestHandler[]) => interfaces.HandlerDecorator;
    export var TYPE: ServiceIdentifiers;

}
