// Type definitions for express-busboy 6.0
// Project: https://github.com/yahoo/express-busboy
// Definitions by: Pinguet62 <https://github.com/pinguet62>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as connectBusboy from 'connect-busboy';
import * as express from 'express';

export interface ExpressBusboyOptions extends connectBusboy.ConnectBusboyOptions {
    upload?: number;
    path?: string;
    allowedPath?: string | RegExp | ((url: string) => boolean);
    restrictMultiple?: boolean;
    mimeTypeLimit?: string | string[];
}

export function extend(app: express.Application, options?: ExpressBusboyOptions): express.Application;
