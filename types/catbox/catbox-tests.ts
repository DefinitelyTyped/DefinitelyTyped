import { CacheItem, Client, Policy, EnginePrototypeOrObject } from "catbox";

const Memory: EnginePrototypeOrObject = {
    async start(): Promise<void> {},
    stop(): void {},
    async get(): Promise<null | CacheItem> {},
    async set(): Promise<void> {},
    async drop(): Promise<void> {},
    isReady(): boolean { return true; },
    validateSegmentName(segment: string): null { return null; },
};

const client = new Client(Memory, { partition: 'cache' });

const cache = new Policy({
    expiresIn: 5000,
}, client, 'cache');

cache.set('foo', 'bar', 5000).then(() => {});

cache.get('foo').then(() => {});

cache.drop('foo').then(() => {});

cache.isReady();

cache.stats();
