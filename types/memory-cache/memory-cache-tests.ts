import memoryCache = require('memory-cache');

var key: any;
var value: string;
var bool: boolean;
var num: number;
var returnedValue: string;

returnedValue = memoryCache.put(key, value);
returnedValue = memoryCache.put(key, value, num);
returnedValue = memoryCache.put(key, value, num, (key) => {

});
returnedValue = memoryCache.put(key, value, num, (key, value) => {

});

value = memoryCache.get(key);
memoryCache.del(key);
memoryCache.clear();

num = memoryCache.size();
num = memoryCache.memsize();

memoryCache.debug(bool);
num = memoryCache.hits();
num = memoryCache.misses();

var customCache = new memoryCache.Cache<string, boolean>();

var customKey: string;
var customValue: boolean;
var customKeys: string[];

customValue = customCache.put(customKey, customValue);
customCache.get(customKey);
customCache.del(customKey);
customKeys = customCache.keys();
