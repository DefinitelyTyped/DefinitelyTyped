
import memoryCache = require('memory-cache');

var key: any;
var value: any;
var bool: boolean;
var num: number;

memoryCache.put(key, value);
memoryCache.put(key, value, num);
memoryCache.put(key, value, num, (key) => {

});
value = memoryCache.get(key);
memoryCache.del(key);
memoryCache.clear();

num = memoryCache.size();
num = memoryCache.memsize();

memoryCache.debug(bool);
num = memoryCache.hits();
num = memoryCache.misses();
