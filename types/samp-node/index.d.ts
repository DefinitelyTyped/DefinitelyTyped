// Type definitions for samp-node 1.0
// Project: https://github.com/YuCarl77/types-samp-node
// Definitions by: pkfln <https://github.com/pkfln>
//                 YuCarl77 <https://github.com/YuCarl77>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace samp {
    export function addEventListener(eventName: string, func: (...args: Array<any>) => void): void;
    export function removeEventListener(eventName: string): void;
    export function removeEventListener(eventName: string, func: (...args: Array<any>) => void): void;
    export function removeEventListener(eventName: string, funcs: Array<(...args: Array<any>) => void>): void;
    export function registerEvent(eventName: string, paramTypes: string): boolean;
    export function fire(eventName: string, ...args: Array<any>): void;
    export function callNative(nativeName: string, paramTypes: string, ...args: Array<any>): any;
    export function callNativeFloat(nativeName: string, paramTypes: string, ...args: Array<any>): any;
    export function callPublic(publicName: string, paramTypes: string, ...args: Array<any>): any;
    export function callPublicFloat(publicName: string, paramTypes: string, ...args: Array<any>): any;
}
