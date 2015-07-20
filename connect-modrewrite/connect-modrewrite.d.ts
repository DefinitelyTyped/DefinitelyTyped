
/// <reference path='../express/express.d.ts' />

declare module 'connect-modrewrite' {
    import express = require('express');
    function modrewrite(rewrites: string[]): express.RequestHandler;
    export = modrewrite;
}