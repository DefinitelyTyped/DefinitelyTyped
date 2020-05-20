// Type definitions for expirymanager 0.9
// Project: https://github.com/SocketCluster/expirymanager
// Definitions by: Daniel Rose <https://github.com/DanielRose>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
