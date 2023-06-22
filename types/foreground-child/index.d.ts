// Type definitions for foreground-child 2.0
// Project: https://github.com/tapjs/foreground-child#readme
// Definitions by: Jake Bailey <https://github.com/jakebailey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.2

type CloseHandler = (done: () => void) => void | Promise<void>;

declare function foregroundChild(program: string | string[], cb?: CloseHandler): void;
declare function foregroundChild(program: string, args: string[], cb?: CloseHandler): void;
declare function foregroundChild(program: string, ...args: string[]): void;
declare function foregroundChild(program: string, ...args: [...args: string[], cb: CloseHandler]): void;

export = foregroundChild;
