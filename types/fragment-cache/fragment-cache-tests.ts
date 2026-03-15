import FragmentCache = require("fragment-cache");

// Create instance
const cache = new FragmentCache();

// Create with initial caches
const cache2 = new FragmentCache({ myCache: {} });

// Set and get values
cache.set("files", "index.js", { content: "hello" });
const val = cache.get("files", "index.js");

// Get entire cache
const filesCache = cache.get("files");

// Check existence
const exists: boolean = cache.has("files", "index.js");
const cacheExists: boolean = cache.has("files");

// Get or create a cache
const namedCache = cache.cache("templates");

// Access caches property
const allCaches = cache.caches;
