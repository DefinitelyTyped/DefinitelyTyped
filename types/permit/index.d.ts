// Type definitions for permit 0.2
// Project: https://github.com/ianstormtaylor/permit#readme
// Definitions by: My Self <https://github.com/jannikkeye>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { IncomingMessage, ServerResponse } from "http";

export interface PermitOptions {
    scheme?: string;
    proxy?: string;
    realm?: string;
}

export interface BearerOptions extends PermitOptions {
    basic?: string;
    header?: string;
    query?: string;
}

export class Permit {
    constructor(options: PermitOptions);
    check(req: IncomingMessage): string;
    fail(res: ServerResponse): void;
}

export class Bearer extends Permit {
    constructor(options: BearerOptions);
}

export class Basic extends Permit {}
