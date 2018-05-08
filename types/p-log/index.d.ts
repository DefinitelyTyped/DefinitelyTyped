// Type definitions for p-log 1.0
// Project: https://github.com/sindresorhus/p-log#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pLog;

declare const pLog: pLog;

interface pLog {
    (): <T>(value: T) => Promise<T>;
    catch(): (value: any) => Promise<never>;
}
