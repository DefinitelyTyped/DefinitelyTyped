// Type definitions for p-catch-if 1.0
// Project: https://github.com/sindresorhus/p-catch-if#readme
// Definitions by: Linus Unnebäck <https://github.com/LinusU>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace pCatchIf {
    type Predicate = ErrorConstructor | ReadonlyArray<ErrorConstructor> | boolean | ((err: Error) => boolean | PromiseLike<boolean>);
}

declare function pCatchIf<T>(predicate: pCatchIf.Predicate, fn: (err: Error) => T): (err: Error) => T;

export = pCatchIf;
