// Type definitions for connect-busboy 1.0
// Project: https://github.com/mscdex/connect-busboy
// Definitions by: Pinguet62 <https://github.com/pinguet62>
//                 Chris Gedrim <https://github.com/chrisgedrim>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { BusboyConfig, Busboy } from 'busboy';
import { RequestHandler } from 'express';
import * as http from 'http';

declare function connectBusboy(options?: connectBusboy.ConnectBusboyOptions): RequestHandler;

declare namespace connectBusboy {
    interface ConnectBusboyOptions extends BusboyConfig {
        immediate?: boolean | undefined;
    }
}

declare global {
    namespace Express {
        interface Request {
            busboy: Busboy;
        }
    }
}

export = connectBusboy;
