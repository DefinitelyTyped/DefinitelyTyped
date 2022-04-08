import * as Koa from "koa";
import * as cache from 'koa-redis-cache';

const app = new Koa();

const routeOptions: cache.RouteOptions[] = [
    {
        route: '/api/test',
        expire: 60
    },
    {
        route: '/api/users'
    }
];

const redisOptions: cache.RedisOptions = {
    port: 6379,
    host: 'localhost'
};

const options: cache.CacheOptions = {
    prefix: (ctx: Koa.Context) => 'koa-redis-cache:',
    expire: 30 * 30,
    passParam: 'skip',
    maxLength: 1024,
    routes: routeOptions,
    exclude: ['/api/(.*)', '/view/:id'],
    onerror: (error: Error) => console.log(error),
    redis: redisOptions
};

app.use(cache(options));

app.listen(80);
