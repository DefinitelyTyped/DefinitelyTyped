import Cache = require('stale-lru-cache');

const cache = new Cache<string, string>({
    maxSize: 100,
    maxAge: 600,
    staleWhileRevalidate: 86400,
    revalidate: (key, callback) => {
        callback(null, 'Value of ' + key);
    }
});

const success: boolean = cache.set('key', 'value'); // true
const value: string = cache.get('key') || 'backup'; // 'value'
const deleteSuccess: boolean = cache.delete('key');
const has: boolean = cache.has('key');
const isStale: boolean = cache.isStale('key');
const keys: string[] = cache.keys();
cache.reset();

cache.set('foo', 'bar');

// Get response from cache
const revalidate = (url: string, callback: (error: any, value?: string, options?: string) => any) => {
    request(url, (error, response, html) => {
        if (error) return callback(error);
        callback(null, html, response.headers['cache-control']);
    });
};

declare const request: (url: string, cb: (error: any, response: any, html: string) => any) => any;
cache.wrap('http://www.google.com', revalidate, (error, html) => {
    // Do something with cached response
});

cache.set('key', 'value'); // true

cache.set('key', 'value', { maxAge: 600, staleWhileRevalidate: 86400 }); // true
cache.set('key', 'value', { maxAge: 0 }); // false

cache.set('key', 'value', 'max-age=600, stale-while-revalidate=86400'); // true
cache.set('key', 'value', 'no-cache, no-store, must-revalidate'); // false

const size: number = cache.size();
const values: string[] = cache.values();
