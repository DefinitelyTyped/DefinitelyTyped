// Type definitions for compression
// Project: https://github.com/expressjs/compression
// Definitions by: Santi Albo <https://github.com/santialbo/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../express/express.d.ts" />


import express = require('express');

declare namespace e {
    interface CompressionOptions {
        threshold?: number;
        filter?: Function;
    }
}

declare function e(options?: e.CompressionOptions): express.RequestHandler;
export = e;
