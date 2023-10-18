/// <reference types="node" />

import { IncomingMessage, ServerResponse } from "http";

export interface PermitOptions {
    scheme?: string | undefined;
    proxy?: string | undefined;
    realm?: string | undefined;
}

export interface BearerOptions extends PermitOptions {
    basic?: string | undefined;
    header?: string | undefined;
    query?: string | undefined;
}

export class Permit {
    constructor(options: PermitOptions);
    check(req: IncomingMessage): void;
    fail(res: ServerResponse): void;
}

export class Bearer extends Permit {
    constructor(options: BearerOptions);
    check(req: IncomingMessage): string;
}

export class Basic extends Permit {
    check(req: IncomingMessage): [string, string];
}
