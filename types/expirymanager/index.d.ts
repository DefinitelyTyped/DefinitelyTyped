export type Key = any;
export type Keys = Key[];

export class ExpiryManager {
    constructor();

    now(): number;

    expire(keys: Keys, seconds: number): void;
    unexpire(keys: Keys): void;

    getExpiry(key: Key): number;

    getKeysByExpiry(expiry: number): Keys;

    getExpiredKeys(time?: number): Keys;
    extractExpiredKeys(time?: number): Keys;

    clear(): void;
}
