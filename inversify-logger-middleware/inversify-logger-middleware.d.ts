// Type definitions for inversify 1.0.0-beta.6
// Project: https://github.com/inversify/inversify-logger-middleware
// Definitions by: inversify <https://github.com/inversify/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../inversify/inversify.d.ts"/>

declare namespace inversifyLoggerMiddleware {

    export interface ILoggerSettings {
        request?: IRequestLoggerSettings;
        time?: boolean;
    }

    export interface IRequestLoggerSettings {
        serviceIdentifier?: boolean;
        bindings?: IBindingLoggerSettings;
        target?: ITargetLoggerSettings;
    }

    export interface IBindingLoggerSettings {
        activated?: boolean;
        serviceIdentifier?: boolean;
        implementationType?: boolean;
        factory?: boolean;
        provider?: boolean;
        constraint?: boolean;
        onActivation?: boolean;
        cache?: boolean;
        dynamicValue?: boolean;
        scope?: boolean;
        type?: boolean;
    }

    export interface ITargetLoggerSettings {
        serviceIdentifier?: boolean;
        name?: boolean;
        metadata?: boolean;
    }

    export interface ILogEntry {
        error: boolean;
        exception: any;
        multiInject: boolean;
        results: any[];
        rootRequest: inversify.interfaces.Request;
        serviceIdentifier: any;
        target: any;
        time: string;
    }

    export function makeLoggerMiddleware(settings?: ILoggerSettings, renderer?: (out: ILogEntry) => void): inversify.interfaces.Middleware;
    export function textSerializer(entry: ILogEntry): string;

}

declare module "inversify-logger-middleware" {
  export = inversifyLoggerMiddleware;
}
