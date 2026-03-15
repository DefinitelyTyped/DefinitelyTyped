import CacheBase = require("cache-base");

// Create instance
const cache = new CacheBase();

// With initial cache object
const cache2 = new CacheBase("prop", { a: 1 });

// Set and get
cache.set("key", "value");
const val = cache.get("key");

// Prime (set only if not existing)
cache.prime("key2", "default");

// Union
cache.union("tags", ["a", "b"]);

// Has
const exists: boolean = cache.has("key");
const ownsKey: boolean = cache.hasOwn("key");

// Delete
cache.del("key");
cache.del(["key", "key2"]);

// Clear
cache.clear();

// Properties
const keys: string[] = cache.keys;
const size: number = cache.size;

// Event emitter
cache.on("set", (key: string, val: any) => {});
