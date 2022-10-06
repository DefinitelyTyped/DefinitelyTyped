// Type definitions for omp-node 1.0
// Project: https://github.com/YuCarl77/types-samp-node
// Definitions by: pkfln <https://github.com/pkfln>
//                 YuCarl77 <https://github.com/YuCarl77>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace samp {
    function addEventListener(eventName: string, func: (...args: any[]) => void): void;
    function removeEventListener(
        eventName: string,
        func?: (...args: any[]) => void | Array<(...args: any[]) => void>,
    ): void;
    function registerEvent(eventName: string, paramTypes: string): boolean;
    function fire(eventName: string, ...args: any[]): void;
    function callNative(nativeName: string, paramTypes: string, ...args: any[]): any;
    function callNativeFloat(nativeName: string, paramTypes: string, ...args: any[]): any;
    function callPublic(publicName: string, paramTypes: string, ...args: any[]): any;
    function callPublicFloat(publicName: string, paramTypes: string, ...args: any[]): any;
}
