// Type definitions for express-partials
// Project: https://github.com/publicclass/express-partials
// Definitions by: jt000 <https://github.com/jt000>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module "express-partials" {
    import express = require('express');

    function expressPartials(options?: any): express.RequestHandler;

    export = expressPartials;
}