import * as CatbotRedis from 'catbox-redis';

const cache = new CatbotRedis({
    host: 'localhost',
    partition: 'test',
    port: 2018,
});

cache.get({
    segment: 'test',
    id: 'test',
});
