// Type definitions for post-robot 10.0
// Project: https://github.com/krakenjs/post-robot
// Definitions by: NinoScript <https://github.com/NinoScript>
//                 Cijin <https://github.com/Cijin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Typescript Version: 3.0

// Warning: This is not actually a Promise, but the interface is the same.
type ZalgoPromise<T> = Promise<T>;
// Refrenced from https://github.com/krakenjs/cross-domain-utils/src
interface CrossDomainWindowType {
    location: string;
    self: CrossDomainWindowType;
    closed: boolean;
    open: (url: string, windowName: string, windowFeatures?: string[]) => CrossDomainWindowType;
    close: () => void;
    focus: () => void;
    top: CrossDomainWindowType;
    frames: Readonly<[CrossDomainWindowType]>;
    opener?: CrossDomainWindowType;
    parent: CrossDomainWindowType;
    length: number;
    postMessage: (message: string, targetOrigin: string) => void;
}

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
declare function on(name: string, options: ServerOptionsType | HandlerType, handler?: HandlerType): CancelableType;

declare function once(
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
declare function send(
    win: CrossDomainWindowType,
    name: string,
    data?: object,
    options?: FireAndForgetRequestOptionsType & RegularRequestOptionsType,
): ZalgoPromise<ResponseMessageEvent>;
