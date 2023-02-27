export interface Options {
    root: string;
}

export default class FileStore<T> {
    constructor(options: Options);
    get(key: Buffer): Promise<T | null>;
    set(key: Buffer, value: T): Promise<void>;
    clear(): void;
}
