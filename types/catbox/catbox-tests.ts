import { Client, Policy, EnginePrototypeOrObject, DecoratedResult, CachedObject } from "catbox";

const Memory: EnginePrototypeOrObject = {
    async start(): Promise<void> {},
    stop(): void {},
    async get(): Promise<null | CachedObject<string>> {
        return {
            item: 'asd',
            stored: 12,
            ttl: 123,
        };
    },
    async set(): Promise<void> {},
    async drop(): Promise<void> {},
    isReady(): boolean { return true; },
    validateSegmentName(segment: string): null { return null; },
};

const client = new Client<string>(Memory, { partition: 'cache' });

const cache = new Policy({
    expiresIn: 5000,
}, client, 'cache');

cache.set('foo', 'bar', 5000).then(() => {});

cache.get('foo').then(() => {});

cache.drop('foo').then(() => {});

cache.isReady();

cache.stats();

const decoratedCache = new Policy({
    getDecoratedValue: true,
}, client, 'cache2');

decoratedCache.get('test').then((a: DecoratedResult<string>) => {
    const res: string = a.value;
});
