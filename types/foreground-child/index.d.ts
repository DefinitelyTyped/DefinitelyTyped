type CloseHandler = (done: () => void) => void | Promise<void>;

declare function foregroundChild(program: string | string[], cb?: CloseHandler): void;
declare function foregroundChild(program: string, args: string[], cb?: CloseHandler): void;
declare function foregroundChild(program: string, ...args: string[]): void;
declare function foregroundChild(program: string, ...args: [...args: string[], cb: CloseHandler]): void;

export = foregroundChild;
