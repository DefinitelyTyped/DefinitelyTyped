// Type definitions for x-ray 2.3
// Project: https://github.com/lapwinglabs/x-ray#readme
// Definitions by: Matt Traynham <https://github.com/mtraynham>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import Bluebird = require('bluebird');
import XRayCrawler = require('x-ray-crawler');

export = XRay;

declare function XRay(options?: XRay.Options): XRay.Instance;

declare namespace XRay {
    type Filter = (value: any, ...args: string[]) => any;
    interface Options {
        filters: {[key: string]: Filter};
    }
    type Callback = (err: Error, data: any) => void;

    // circularly references itself
    // https://stackoverflow.com/a/41826582
    type ScalarSelector =
        string |
        InstanceInvocation |
        {[key: string]: Selector};
    interface SelectorArray extends Array<ScalarSelector | SelectorArray> {
        [index: number]: ScalarSelector | SelectorArray;
    }
    type Selector = ScalarSelector | SelectorArray;

    interface Instance extends XRayCrawler.Instance {
        (
            source: string,
            selector: Selector
        ): InstanceInvocation;
        (
            source: string,
            context: string,
            selector: Selector
        ): InstanceInvocation;
        (
            context: string,
            selector: Selector
        ): InstanceInvocation;
        (
            selector: Selector
        ): InstanceInvocation;
    }

    interface InstanceInvocation {
        (callback: Callback): void;
        (source: string, callback: Callback): void;
        abort(): this;
        paginate(selector: Selector): this;
        limit(n: number): this;
        stream(): NodeJS.ReadStream;
        then<U>(fn?: (value: any) => U | PromiseLike<U>): Bluebird<U>;
        write(path?: string): (err: NodeJS.ErrnoException) => void;
    }
}
