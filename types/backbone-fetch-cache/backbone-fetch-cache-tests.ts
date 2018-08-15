import * as Backbone from "backbone";
import * as BackboneFetchCache from "backbone-fetch-cache";

// static methods / properties

const fc: BackboneFetchCache.Static = Backbone.fetchCache;

fc.enabled = true;
fc.localStorage = true;

const opts: BackboneFetchCache.GetCacheOptions = {url: "string url", data: {}};
const strKey: string = "string key";
const getCacheKeyOpts = {getCacheKey: () => "string key"};

let cache: BackboneFetchCache.Cache
cache = fc.getCache(strKey);
cache = fc.getCache(() => strKey);
cache = fc.getCache(getCacheKeyOpts);
cache = fc.getCache({url: strKey});
cache = fc.getCache({url: () => strKey});
cache = fc.getCache(strKey, opts);

const cacheExpires: number        = cache.expires;
const cacheLastSync: number       = cache.lastSync;
const cachePrefillExpires: number = cache.prefillExpires;
const cacheValue: any             = cache.value;

let key: string;
key = fc.getCacheKey(strKey);
key = fc.getCacheKey(strKey, opts);
key = fc.getCacheKey(getCacheKeyOpts);

let lastSync: number;
lastSync = fc.getLastSync(strKey, opts);
lastSync = fc.getLastSync(getCacheKeyOpts, opts);

fc.getLocalStorage();
const localStorageKey: string = fc.getLocalStorageKey();

fc.priorityFn = (a: BackboneFetchCache.Cache, b: BackboneFetchCache.Cache) => 12345;

fc.reset();

const setOpts: BackboneFetchCache.SetCacheOptions = {
    data:           {},
    url:            strKey,
    cache:          true,
    expires:        12345,
    prefill:        true,
    prefillExpires: 12345,
};
fc.setCache(strKey, setOpts, {});

fc.setLocalStorage();

// instance methods

const modelOpts: Backbone.ModelFetchWithCacheOptions = {
    cache: true,
    expires: new Date().getTime(),
    prefill: true,
    prefillExpires: new Date().getTime(),
    prefillSuccess: (self: any, attributes: any, opts: Backbone.ModelFetchWithCacheOptions) => { },
    context: {},
};

const hoge = <Backbone.ModelWithCache> new Backbone.Model;
hoge.fetch(modelOpts);

const collectionOpts: Backbone.CollectionFetchWithCacheOptions = {
    cache: true,
    context: {},
    expires: new Date().getTime(),
    prefill: true,
    prefillExpires: new Date().getTime(),
    prefillSuccess: (self: any) => { },
};

const fuga = <Backbone.CollectionWithCache> new Backbone.Collection;
fuga.fetch(collectionOpts);
