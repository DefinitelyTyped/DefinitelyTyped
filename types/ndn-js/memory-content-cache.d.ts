import { Data } from "./data";
import { Face, ForwardingFlags, InterestFilter, OnInterestCallback } from "./face";
import { Interest } from "./interest";
import { Name } from "./name";

export class MemoryContentCache {
    constructor(face: Face, cleanupIntervalMilliseconds?: number);

    add(data: Data): void;
    getMinimumCacheLifetime(): number;
    getStorePendingInterest(): OnInterestCallback;
    registerPrefix(name: Name, onRegisterFailed: (prefix: Name) => any,
                   onRegisterSuccess?: (prefix: Name, registeredPrefixId: number) => any,
                   onDataNotFound?: OnInterestCallback, flags?: ForwardingFlags): void;
    setInterestFilter(filter: InterestFilter|Name, onDataNotFound?: OnInterestCallback): void;
    setMinimumCacheLifetime(minimumCacheLifetime: number): void;
    storePendingInterest(interest: Interest, face: Face): void;
    unregisterAll(): void;
}
