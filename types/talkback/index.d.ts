// Type definitions for talkback 1.8.0
// Project: https://github.com/ijpiantanida/talkback
// Definitions by: Henry Smith <https://github.com/hensmith>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// https://github.com/ijpiantanida/talkback#talkbackopts
interface TalkbackOptions {
    host: string;
    port?: string;
    path?: string;
    https?: TalkbackHttpsOptions;
    record?: boolean;
    name?: string;
    ignoreHeaders?: string[];
    ignoreQueryParams?: string[];
    ignoreBody?: boolean;
    bodyMatcher?: TalkbackBodyMatcher;
    urlMatcher?: TalkbackUrlMatcher;
    responseDecorator?: TalkbackResponseDecorator;
    fallbackMode?: string;
    silent?: boolean;
    summary?: boolean;
    debug?: boolean;
}

// https://github.com/ijpiantanida/talkback#https-options
interface TalkbackHttpsOptions {
    enabled?: boolean;
    keyPath?: string;
    certPath?: string;
}

// https://github.com/ijpiantanida/talkback#custom-request-body-matcher
interface TalkbackBodyMatcher {
    (tape: object, req: object): boolean;
}

// https://github.com/ijpiantanida/talkback#custom-request-body-matcher
interface TalkbackUrlMatcher {
    (tape: object, req: object): boolean;
}

// https://github.com/ijpiantanida/talkback#custom-response-decorator
interface TalkbackResponseDecorator {
    (tape: object, req: object): boolean;
}

interface TalkbackInstance {
    start: TalkbackStart;
    close: TalkbackClose;
}

// https://github.com/ijpiantanida/talkback#startcallback
interface TalkbackStart {
    (callback: TalkbackStartCallback): void;
}

interface TalkbackStartCallback {
    (): void;
}

// https://github.com/ijpiantanida/talkback#close
interface TalkbackClose {
    (): void;
}

declare module "talkback" {
    function talkback(opts: TalkbackOptions): TalkbackInstance;
    export = talkback;
}
