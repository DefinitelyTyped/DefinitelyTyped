// Type definitions for p-reflect 1.0
// Project: https://github.com/sindresorhus/p-reflect#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pReflect;

declare function pReflect<T>(promise: PromiseLike<T>): Promise<pReflect.PromiseResult<T>>;

declare namespace pReflect {
    type PromiseResult<T> = PromiseFulfilledResult<T> | PromiseRejectedResult;

    interface PromiseFulfilledResult<T> {
        isFulfilled: true;
        isRejected: false;
        value: T;
    }

    interface PromiseRejectedResult {
        isFulfilled: false;
        isRejected: true;
        reason: any;
    }
}
