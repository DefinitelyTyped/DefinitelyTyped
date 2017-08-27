// Type definitions for gulp-pug 3.3
// Project: https://github.com/pugjs/gulp-pug#readme
// Definitions by: remisery <https://github.com/remisery>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import stream = require('stream');

import { Options } from 'pug';

declare function GulpPug(params?: GulpPug.Params): stream.Transform;

declare namespace GulpPug {
    interface Params extends Options {
        locals?: any;
        data?: any;
        client?: boolean;
        pug?: any;
        verbose?: boolean;
    }
}

export = GulpPug;
