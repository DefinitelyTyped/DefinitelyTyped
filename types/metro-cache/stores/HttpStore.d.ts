export interface Options {
    endpoint: string;
    family?: 4 | 6;
    timeout?: number;
    key?: string | ReadonlyArray<string> | Buffer | ReadonlyArray<Buffer>;
    cert?: string | ReadonlyArray<string> | Buffer | ReadonlyArray<Buffer>;
    ca?: string | ReadonlyArray<string> | Buffer | ReadonlyArray<Buffer>;
}

export default class HttpStore<T> {
    constructor(options: Options);
    get(key: Buffer): Promise<T | null>;
    set(key: Buffer, value: T): Promise<void>;
    clear(): void;
}
