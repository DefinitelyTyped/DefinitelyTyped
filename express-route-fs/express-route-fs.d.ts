// Type definitions for express-route-fs v0.1.0
// Project: https://github.com/kripod/express-route-fs
// Definitions by: Kristóf Poduszló <https://github.com/kripod>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "express-route-fs" {
    /**
     Sets up file system-based routing in Express.
     @param {Object} app Express application object.
     @param {Object[]} [options] Options for setting up routes.
     */
    function routeFs(app: any, options?: any): void;
    export = routeFs;
}
