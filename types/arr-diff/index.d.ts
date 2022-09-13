// Type definitions for arr-diff 4.0
// Project: https://github.com/jonschlinkert/arr-diff
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = arrDiff;

declare function arrDiff<T>(first: readonly T[], ...args: Array<readonly any[]>): T[];
