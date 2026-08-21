import * as flatCache from "flat-cache";

flatCache.load(""); // $ExpectType Cache
flatCache.load("", ""); // $ExpectType Cache

flatCache.create(""); // $ExpectType Cache
flatCache.create("", ""); // $ExpectType Cache

flatCache.createFromFile(""); // $ExpectType Cache

flatCache.clearCacheById(""); // $ExpectType boolean
flatCache.clearCacheById("", ""); // $ExpectType boolean

flatCache.clearAll(); // $ExpectType boolean
flatCache.clearAll(""); // $ExpectType boolean

const cache = flatCache.load(""); // $ExpectType Cache

cache.load(""); // $ExpectType void
cache.load("", ""); // $ExpectType void

cache.loadFile(""); // $ExpectType void

cache.all(); // $ExpectType { [key: string]: any; }

cache.keys(); // $ExpectType string[]

cache.setKey("", ""); // $ExpectType void

cache.removeKey(""); // $ExpectType void

cache.getKey(""); // $ExpectType any

cache.save(); // $ExpectType void
cache.save(true); // $ExpectType void

cache.removeCacheFile(); // $ExpectType boolean

cache.destroy(); // $ExpectType void
