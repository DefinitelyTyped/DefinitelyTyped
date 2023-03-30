import type { Options } from './HttpStore';

export default class HttpGetStore<T> {
    constructor(options: Options);
    get(key: Buffer): Promise<T | null>;
    set(key: Buffer, value: T): Promise<void>;
    clear(): void;
}
