import * as CatbotRedis from 'catbox-redis';

const cache = new CatbotRedis<string>({
    host: 'localhost',
    partition: 'test',
    port: 2018,
});

cache.get({
    segment: 'test',
    id: 'test',
});

cache.set({
    segment: 'test',
    id: 'test',
}, 'test', 123);
