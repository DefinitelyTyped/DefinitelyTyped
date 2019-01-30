import { EventEmitter } from 'events';

export interface ICacheOptions {
    timeout?: number;
    doesNotRenewTimeout?: boolean;
    timeoutDisabled?: boolean;
}

export default class Cache extends EventEmitter {
    public keys: string[];
    public length: number;

    constructor(options?: number | ICacheOptions);

    public set(key: string, value: any, timeout?: number): void;
    public get(key: string): any;
    public remove(key: string): void;
    public clean(): void;
}
