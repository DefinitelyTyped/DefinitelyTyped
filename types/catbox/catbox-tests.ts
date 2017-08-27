import Catbox = require("catbox");

const Memory: Catbox.EnginePrototypeOrObject = {
    start(callback: Catbox.CallBackNoResult) {},
    stop() {},
    get() {},
    set() {},
    drop() {},
    isReady(): boolean { return true; },
    validateSegmentName(segment: string): null { return null; },
};

const client = new Catbox.Client(Memory, { partition: 'cache' });

const cache = new Catbox.Policy({
    expiresIn: 5000,
}, client, 'cache');

cache.set('foo', 'bar', 5000, () => {});

cache.get('foo', () => {});

cache.drop('foo', () => {});

cache.isReady();

cache.stats();
