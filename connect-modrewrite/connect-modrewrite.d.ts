// Type definitions for connect-modrewrite
// Project: https://github.com/tinganho/connect-modrewrite
// Definitions by: Tingan Ho <https://github.com/tinganho/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module 'connect-modrewrite' {
    import express = require('express');
    function modrewrite(rewrites: string[]): express.RequestHandler;
    export = modrewrite;
}