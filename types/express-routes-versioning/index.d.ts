import { Handler } from "express";

declare namespace routesVersioning {
    interface VersionOptions {
        [versionKey: string]: Handler;
    }

    type RoutesVersioningMiddleware = (args: VersionOptions, notFoundMiddleware?: Handler) => Handler;
}

declare function routesVersioning(): routesVersioning.RoutesVersioningMiddleware;

export = routesVersioning;
