export interface Options {
    prompt?: string | undefined;
}

export interface Callback {
    (error: Error | null, password: string): void;
}

export function getPass(cb: Callback): void;
export function getPass(options: Options, cb: Callback): void;
