// to shut off automatic exports
export {};
// Warning: This is not actually a Promise, but the interface is the same.
type ZalgoPromise<T> = Promise<T>;
// For the purposes of using the library on it's own Window is CrossDomain enough
type CrossDomainWindowType = Window | null;
type DomainMatcher = string | RegExp | string[];
type HandlerType = (event: {
    source: CrossDomainWindowType;
    origin: string;
    data: any;
}) => ZalgoPromise<any>;
type ErrorHandlerType = (err: any) => void;

interface ServerOptionsType {
    handler?: HandlerType | undefined;
    errorHandler?: ErrorHandlerType | undefined;
    window?: CrossDomainWindowType | undefined;
    name?: string | undefined;
    domain?: DomainMatcher | undefined;
    once?: boolean | undefined;
    errorOnClose?: boolean | undefined;
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
    domain?: DomainMatcher | undefined;
    fireAndForget?: false | undefined;
    timeout?: number | undefined;
}

interface ResponseMessageEvent {
    source: CrossDomainWindowType;
    origin: string;
    data: object;
}

interface FireAndForgetRequestOptionsType {
    domain?: DomainMatcher | undefined;
    fireAndForget?: true | undefined;
    timeout?: number | undefined;
}

// based on https://github.com/post-robot/src/public/send.js
export function send(
    win: CrossDomainWindowType,
    name: string,
    data?: object,
    options?: FireAndForgetRequestOptionsType & RegularRequestOptionsType,
): ZalgoPromise<ResponseMessageEvent>;
