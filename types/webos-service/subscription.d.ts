/// <reference types="node" />

import { EventEmitter } from "events";

export class Subscription extends EventEmitter {
    readonly args: Record<string, any>;

    readonly handle: any;

    readonly request: any;

    readonly uri: string;

    constructor(handle: any, uri: string, args: Record<string, any>);

    cancel(): void;
}
