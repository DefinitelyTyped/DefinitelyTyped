// Type definitions for slocket 1.0
// Project: https://github.com/isaacs/slocket#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />
import { EventEmitter } from 'events';

export = slocket;

declare const slocket: Slocket;

interface Slocket {
    (lockFile: string, cb?: (error: Error | null, lock: slocket.Lock) => void): slocket.Slocket;
    new (lockFile: string, cb?: (error: Error | null, lock: slocket.Lock) => void): slocket.Slocket;
}

declare namespace slocket {
    interface Slocket extends EventEmitter {
        then<TResult1 = Lock, TResult2 = never>(
            onfulfilled?: ((value: Lock) => TResult1 | PromiseLike<TResult1>) | null,
            onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): Promise<TResult1 | TResult2>;
        catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null): Promise<Lock | TResult>;
    }

    interface Lock {
        release(sync?: boolean): void;
    }
}
