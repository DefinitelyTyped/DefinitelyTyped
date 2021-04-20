// Type definitions for auto-sni 2.1
// Project: https://github.com/dylanpiercey/auto-sni
// Definitions by: Jan Wolf <https://github.com/janwo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Server } from "https";

declare namespace createServer {
    type DomainList = Array<string | string[]>;
    interface Options {
        email: string;
        agreeTos: boolean;
        domains: DomainList | (() => (DomainList | Promise<DomainList>));
        dir?: string;
        ports?: {
            http?: number,
            https?: number
        };
        debug?: boolean;
    }
}

declare function createServer(opts: createServer.Options, app?: any): Server;

export = createServer;
