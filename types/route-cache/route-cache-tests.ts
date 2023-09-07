import routeCache = require('route-cache');
import IoRedisStore = require('route-cache/ioRedisStore');
import LruStore = require('route-cache/lruStore');
import * as express from 'express';
import Redis from 'ioredis';

const redis = new Redis();
const ioRedisStore: IoRedisStore = new IoRedisStore(redis);
const lruStore: LruStore = new LruStore({ max: 100, length: (value: any, key: string) => 1, maxAge: 1000 });

const configRedisStore: routeCache.ConfigOptions = { max: 100, cacheStore: ioRedisStore };
const configLruStore: routeCache.ConfigOptions = { max: 100, cacheStore: lruStore };

const cacheKeyFunc: routeCache.CacheKeyFunc = (req: express.Request, res: express.Response) => 'foo';
const cacheKeyFuncNull: routeCache.CacheKeyFunc = (req: express.Request, res: express.Response) => null;

routeCache.config({ max: 100, cacheStore: ioRedisStore }); // $ExpectType typeof import("/home/study/workspace/DefinitelyTyped/types/route-cache/index")
routeCache.config({ max: 100, cacheStore: lruStore }); // $ExpectType typeof import("/home/study/workspace/DefinitelyTyped/types/route-cache/index")

routeCache.config(configRedisStore); // $ExpectType typeof import("/home/study/workspace/DefinitelyTyped/types/route-cache/index")
routeCache.config(configLruStore); // $ExpectType typeof import("/home/study/workspace/DefinitelyTyped/types/route-cache/index")

routeCache.config({ max: 100 }).cacheSeconds(10, 'foo'); // $ExpectType RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>
routeCache.cacheSeconds(10, cacheKeyFunc); // $ExpectType RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>
routeCache.cacheSeconds(10, cacheKeyFuncNull); // $ExpectType RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>
routeCache.cacheSeconds(10, 'foo'); // $ExpectType RequestHandler<ParamsDictionary, any, any, ParsedQs, Record<string, any>>

routeCache.removeCache('foo'); // $ExpectType void

routeCache.cacheStore; // $ExpectType Store

const app = express();
app.use(routeCache.cacheSeconds(10, 'foo')); // $ExpectType Express
