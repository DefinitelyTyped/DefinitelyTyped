// Type definitions for zen-push 0.1
// Project: https://github.com/zenparsing/zen-push
// Definitions by: daprahamian <https://github.com/daprahamian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Observable from 'zen-observable';

declare class PushStream<T> {
    readonly observable: Observable<T>;
    readonly observed: number;
    next(x: T): void;
    error(e: Error): void;
    complete(x?: any): void;
}

export default PushStream;
