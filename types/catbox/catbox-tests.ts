import Catbox = require("catbox");

const Memory = (): void => {};

const client = new Catbox.Client(Memory as any, { partition: 'cache' });

const cache = new Catbox.Policy({
    expiresIn: 5000,
}, client, 'cache');

cache.set('foo', 'bar', 5000, () => {});

cache.get('foo', () => {});

cache.drop('foo', () => {});

cache.isReady();

cache.stats();
