// Type definitions for immediate 3.2
// Project: https://github.com/calvinmetcalf/immediate#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

export as namespace immediate;
export = immediate;

declare function immediate<TArgs extends any[]>(
    task: (...args: TArgs) => void,
    ...args: TArgs
): void;
