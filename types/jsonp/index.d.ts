// Type definitions for jsonp 0.2
// Project: https://github.com/LearnBoost/jsonp
// Definitions by: Savva Surenkov <https://github.com/surenkov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = jsonp;

declare function jsonp(url: string, options?: Options, cb?: RequestCallback): CancelFn;
declare function jsonp(url: string, callback?: RequestCallback): CancelFn;

type CancelFn = () => void;
type RequestCallback = (error: Error | null, data: any) => void;

interface Options {
    param?: string;
    prefix?: string;
    name?: string;
    timeout?: number;
}
