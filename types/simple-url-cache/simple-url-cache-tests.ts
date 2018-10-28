import simpleUrlCache = require("simple-url-cache");

const fileStorageConfig = {
    type: 'file',
    dir: './cache'
};

const redisStorageConfig = {
    type: 'redis',
    host: '127.00.1',
    port: 1234
}

const regexRules = {
    cacheMaxAge: [
        {
            regex: /.*/,
            maxAge: 3600
        }
    ],
    cacheAlways: [
        {
            regex: /always/
        }
    ],
    cacheNever: [
        {
            regex: /never/
        }
    ],
    default: 'never'
};

const cacheEngine1 = new simpleUrlCache.CacheEngine(fileStorageConfig, regexRules);

let url1 = cacheEngine1.url('/someUrl.html');

url1.cache('<b>some HTML');
url1.isCached();
url1.getUrl();
url1.removeUrl();
url1.destroy();

const cacheEngine2 = new simpleUrlCache.CacheEngine(redisStorageConfig, regexRules);

let url2 = cacheEngine2.url('/someUrl.html');
url2.cache('<b>some HTML');
url2.isCached();
url2.getUrl();
url2.removeUrl();
url2.destroy();



