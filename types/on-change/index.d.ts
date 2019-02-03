// Type definitions for on-change 0.1
// Project: https://github.com/sindresorhus/on-change#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export = onChange;

declare function onChange<T extends object>(object: T, onChange: () => void): T;
