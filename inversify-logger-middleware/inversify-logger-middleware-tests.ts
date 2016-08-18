/// <reference path="./inversify-logger-middleware.d.ts" />

declare var kernel: inversify.interfaces.Kernel;

import { makeLoggerMiddleware, textSerializer } from "inversify-logger-middleware";

interface ILoggerOutput<T> {
    entry: T;
}

let makeStringRenderer = function (loggerOutput: ILoggerOutput<string>) {
    return function (entry: inversifyLoggerMiddleware.ILogEntry) {
        loggerOutput.entry = textSerializer(entry);
    };
};

let makeObjRenderer = function (loggerOutput: ILoggerOutput<any>) {
    return function (entry: inversifyLoggerMiddleware.ILogEntry) {
        loggerOutput.entry = entry;
    };
};

let options: inversifyLoggerMiddleware.ILoggerSettings = {
    request: {
        bindings: {
            activated: true,
            cache: true,
            constraint: true,
            dynamicValue: true,
            factory: true,
            implementationType: true,
            onActivation: true,
            provider: true,
            scope: true,
            serviceIdentifier: true,
            type: true
        },
        serviceIdentifier: true,
        target: {
            metadata: true,
            name: true,
            serviceIdentifier: true
        }
    },
    time: true
};

let logger = makeLoggerMiddleware();
kernel.applyMiddleware(logger);

let loggerOutput1: ILoggerOutput<string> = { entry: null };
let stringRenderer1 = makeStringRenderer(loggerOutput1);
let logger1 = makeLoggerMiddleware(options, stringRenderer1);
kernel.applyMiddleware(logger1);

let loggerOutput2: ILoggerOutput<inversifyLoggerMiddleware.ILogEntry> = { entry: null };
let objRenderer2 = makeObjRenderer(loggerOutput2);
let logger2 = makeLoggerMiddleware(options, objRenderer2);
kernel.applyMiddleware(logger2);
