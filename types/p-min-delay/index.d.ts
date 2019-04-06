// Type definitions for p-min-delay 2.0
// Project: https://github.com/sindresorhus/p-min-delay#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pMinDelay;

declare function pMinDelay<T>(
    input: PromiseLike<T>,
    minimumDelay: number,
    options?: pMinDelay.Options
): Promise<T>;

declare namespace pMinDelay {
    interface Options {
        delayRejection?: boolean;
    }
}
