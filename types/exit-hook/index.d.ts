// Type definitions for exit-hook 1.1
// Project: https://github.com/sindresorhus/exit-hook
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export = exitHook;

declare function exitHook(cb: () => void): void;
