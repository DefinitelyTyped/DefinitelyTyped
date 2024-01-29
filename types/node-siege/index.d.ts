/// <reference types="node" />

import { EventEmitter } from "events";

declare class Siege extends EventEmitter {
    args(args: string): Siege;
    run(): Siege;
    validateArgs(): void;
    error(err: any): void;

    readonly running: boolean;
}

declare function siege(): Siege;

export = siege;
