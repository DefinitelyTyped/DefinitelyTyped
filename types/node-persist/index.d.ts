// Type definitions for node-persist
// Project: https://github.com/simonlast/node-persist
// Definitions by: Spencer Williams <http://spencerwi.com/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import * as Q from "q";

type milliseconds = number;
declare namespace NodePersist {
    export interface InitOptions {
        dir?: string;
        stringify?: (toSerialize: any) => string;
        parse?: (serialized: string) => any;
        encoding?: string;
        logging?: boolean | Function;
        continuous?: boolean;
        interval?: milliseconds | boolean;
        ttl?: milliseconds | boolean;
    }
    export function init(options?: InitOptions, callback?: Function): Q.Promise<any>;
    export function initSync(options?: InitOptions): void;
    export function getItem(key: string, callback?: (err: any, value: any) => any): Q.Promise<any>;
    export function getItemSync(key: string): any;
    export function setItem(key: string, value: any, callback?: (err: any) => any): Q.Promise<any>;
    export function setItemSync(key: string, value: any): void;
    export function removeItem(key: string, callback?: (err: any) => any): Q.Promise<any>;
    export function removeItemSync(key: string): void;
    export function clear(callback?: (err: any) => any): Q.Promise<any>;
    export function clearSync(): void;
    export function values(): Array<any>;
    export function valuesWithKeyMatch(match: string): Array<any>;
    export function keys(): Array<string>;
    export function length(): number;
    export function forEach(callback: (key: string, value: any) => void): void;

    export function persist(callback?: (err: any) => any): Q.Promise<any>;
    export function persistSync(): void;
    export function persistKey(key: string, callback?: (err: any) => any): Q.Promise<any>;
    export function persistKeySync(key: string): void;
}
export = NodePersist;
