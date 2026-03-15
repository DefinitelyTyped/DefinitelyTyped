/// <reference types="node" />

import { EventEmitter } from "events";

interface WalkOptions {
    path?: string | undefined;
    [key: string]: any;
}

/**
 * Walk a package tree and find all bundled dependencies.
 */
declare function walk(options?: WalkOptions | string): Promise<string[]>;
declare function walk(
    options: WalkOptions | string,
    callback: (error: Error | null, result: string[]) => void,
): void;

declare namespace walk {
    class BundleWalker extends EventEmitter {
        constructor(options?: WalkOptions | string);
        result: string[];
        start(): this;
    }

    class BundleWalkerSync extends BundleWalker {
        constructor(options?: WalkOptions | string);
        result: string[];
        start(): this;
    }

    function sync(options?: WalkOptions | string): string[];
}

export = walk;
