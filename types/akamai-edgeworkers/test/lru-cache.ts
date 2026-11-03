import { GetOptions, LRUCache, Status } from "lru-cache";

// Create an LRU cache instance with a maximum of 10 items and a TTL of 5000ms
// with a fetch method that increments the call count and returns a formatted string.
let calls = 0;
const cache = new LRUCache<string, string, string>({
    max: 10,
    ttl: 5000,
    fetchMethod: async (key, staleValue, { options, context }) => {
        calls++;
        return `${key}|${options.ttl}|${options.allowStale}|${context}`;
    },
});

export async function onClientRequest(request: EW.IngressClientRequest) {
    // Fetch a value from the cache with the key '10', allowing stale values and providing context.
    const status: Status = {};
    const result = await cache.fetch("10", { allowStale: true, context: "10", status });

    // Set a value in the cache with the key 'a' and the value 'value'.
    cache.set("a", "value");

    // Purge stale items from the cache and store operation result.
    const purged = cache.purgeStale();

    // Respond to the client request with the cache fetch result, status information, call count, and purged count.
    request.respondWith(200, {}, `${status.key}|${result}|${status.op}|${status.fetch}|${calls}|${purged}`);
}

export function onClientResponse(request: EW.EgressClientRequest, response: EW.EgressClientResponse) {
    // Get a value from the cache with the key 'a', allowing stale values.
    const getOptions: GetOptions = { allowStale: true };
    const value = cache.get("a", getOptions);

    // If a value was retrieved from the cache, set it as a response header.
    if (value !== undefined) {
        response.setHeader("X-LRU-GET-VALUE", value);
    }
}
