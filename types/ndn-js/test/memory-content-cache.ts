import ndn = require("ndn-js");

const face = new ndn.Face();
let cache = new ndn.MemoryContentCache(face);
cache = new ndn.MemoryContentCache(face, 8000);

cache.add(new ndn.Data());
const n: number = cache.getMinimumCacheLifetime();
cache.registerPrefix(new ndn.Name("/A"),
    () => {},
    () => {},
    cache.getStorePendingInterest());
cache.setInterestFilter(new ndn.Name("/A"), cache.getStorePendingInterest());
cache.setMinimumCacheLifetime(5000);
cache.storePendingInterest(new ndn.Interest(), face);
