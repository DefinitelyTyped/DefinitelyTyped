declare namespace Promise {
    interface PromisePolyfillConstructor extends PromiseConstructor {
        _immediateFn?: ((handler: (() => void) | string) => void) | undefined;
    }
}

declare const Promise: Promise.PromisePolyfillConstructor;

export = Promise;
