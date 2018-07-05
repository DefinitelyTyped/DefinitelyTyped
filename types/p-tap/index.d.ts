// Type definitions for p-tap 1.0
// Project: https://github.com/sindresorhus/p-tap#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pTap;

declare const pTap: pTap;

interface pTap {
    <T>(fn: (value: T) => any): (value: T) => Promise<T>;
    catch(fn: (value: any) => any): (value: any) => Promise<never>;
}
