// Type definitions for post-robot 10.0
// Project: https://github.com/krakenjs/post-robot
// Definitions by: NinoScript <https://github.com/NinoScript>
//                 Cijin <https://github.com/Cijin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Typescript Version: 3.0

// to shut off automatic exports
export {};
// Warning: This is not actually a Promise, but the interface is the same.
type ZalgoPromise<T> = Promise<T>;
// For the purposes of using the library on it's own Window is CrossDomain enough
type CrossDomainWindowType = Window | null;
type DomainMatcher = string | RegExp | string[];
type HandlerType = (source: CrossDomainWindowType, origin: string, data: object) => void | ZalgoPromise<any>;
type ErrorHandlerType = (err: any) => void;

interface ServerOptionsType {
    handler?: HandlerType;
    errorHandler?: ErrorHandlerType;
    window?: CrossDomainWindowType;
    name?: string;
    domain?: DomainMatcher;
    once?: boolean;
    errorOnClose?: boolean;
}

interface CancelableType {
    cancel: () => void;
}

// based on https://github.com/post-robot/src/public/on.js
export function on(name: string, options: ServerOptionsType | HandlerType, handler?: HandlerType): CancelableType;

export function once(
    name: string,
    options?: ServerOptionsType | HandlerType,
    handler?: HandlerType,
): ZalgoPromise<{ source: any; origin: string; data: object }>;

interface RegularRequestOptionsType {
    domain?: DomainMatcher;
    fireAndForget?: false;
    timout?: number;
}

interface ResponseMessageEvent {
    source: CrossDomainWindowType;
    origin: string;
    data: object;
}

interface FireAndForgetRequestOptionsType {
    domain?: DomainMatcher;
    fireAndForget?: true;
    timout?: number;
}

// based on https://github.com/post-robot/src/public/send.js
export function send(
    win: CrossDomainWindowType,
    name: string,
    data?: object,
    options?: FireAndForgetRequestOptionsType & RegularRequestOptionsType,
): ZalgoPromise<ResponseMessageEvent>;
