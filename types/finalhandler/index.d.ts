// Type definitions for finalhandler 1.1
// Project: https://github.com/pillarjs/finalhandler
// Definitions by: Ilya Mochalov <https://github.com/chrootsu>
//                 Mark Veronda <https://github.com/hbomark>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { IncomingMessage, ServerResponse } from 'http';

declare function finalhandler(req: IncomingMessage, res: ServerResponse,
                              options?: finalhandler.Options): (err: any) => void;

declare namespace finalhandler {
    interface Options {
        env?: string | undefined;
        onerror?: ((err: any, req: IncomingMessage, res: ServerResponse) => void) | undefined;
    }
}

export = finalhandler;
