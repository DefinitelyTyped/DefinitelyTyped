// Type definitions for connect-busboy 0.0
// Project: https://github.com/mscdex/connect-busboy
// Definitions by: Pinguet62 <https://github.com/pinguet62>
//                 Chris Gedrim <https://github.com/chrisgedrim>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as busboy from 'busboy';
import { RequestHandler } from 'express';

declare function connectBusboy(options?: connectBusboy.ConnectBusboyOptions): RequestHandler;

declare namespace connectBusboy {
    interface ConnectBusboyOptions extends busboy.BusboyConfig {
        immediate?: boolean;
    }
}

declare global {
    namespace Express {
        interface Request {
            busboy: busboy.Busboy;
        }
    }
}

export = connectBusboy;
