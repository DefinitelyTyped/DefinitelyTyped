// Type definitions for connect-busboy 0.0
// Project: https://github.com/mscdex/connect-busboy
// Definitions by: Pinguet62 <https://github.com/pinguet62>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as busboy from 'busboy';
import { RequestHandler } from 'express';

declare function connectBusboy(options?: connectBusboy.ConnectBusboyOptions): RequestHandler;

declare namespace connectBusboy {
    interface ConnectBusboyOptions extends busboy.BusboyConfig {
        immediate?: boolean;
    }
}

export = connectBusboy;
