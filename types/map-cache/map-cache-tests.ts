import MapCache = require("map-cache");

const cache = new MapCache();

// Set and chain
cache.set("key", "value").set("key2", 42);

// Get
const val = cache.get("key");

// Has
const exists: boolean = cache.has("key");

// Del
const deleted: boolean = cache.del("key");

// Access internal cache
const internal = cache.cache;
