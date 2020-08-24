// Type definitions for auto-sni 2.1
// Project: https://github.com/dylanpiercey/auto-sni
// Definitions by: Jan Wolf <https://github.com/janwo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Server } from "https";

declare namespace createServer {
    interface Options {
        email: string;
        agreeTos: boolean;
        domains: Array<string | string[]>;
        ports?: {
            http?: number,
            https?: number
        };
        debug?: boolean;
    }
}

declare function createServer(opts: createServer.Options, app?: any): Server;

export = createServer;
