import { Response } from "node-fetch";
import defaultFetch, { fetchBuilder, FileSystemCache, MemoryCache } from "node-fetch-cache";

function test_defaultFetch() {
    // $ExpectType Promise<NFCResponse>
    defaultFetch("https://example.com").then(res => {
        // $ExpectType Promise<void>
        res.ejectFromCache();
        return res;
    });
}

async function test_fetchBuilder() {
    // $ExpectType FetchCache
    fetchBuilder.withCache(new MemoryCache({ ttl: 1000 }));
    // $ExpectType FetchCache
    fetchBuilder.withCache(new FileSystemCache({ ttl: 1000, cacheDirectory: "/tmp" }));
    // @ts-expect-error
    fetchBuilder.withCache({});
}

async function test_MemoryCache() {
    const memoryCache = new MemoryCache({ ttl: 1000 });
    // $ExpectType Promise<any>
    memoryCache.get("key");
    // $ExpectType Promise<void>
    memoryCache.remove("key");
    // $ExpectType Promise<any>
    memoryCache.set("key", new Response().body, {});
}

async function test_FileSystemCache() {
    const fileSystemCache = new FileSystemCache({ ttl: 1000, cacheDirectory: "/tmp" });
    // $ExpectType Promise<any>
    fileSystemCache.get("key");
    // $ExpectType Promise<void>
    fileSystemCache.remove("key");
    // $ExpectType Promise<any>
    fileSystemCache.set("key", new Response().body, {});
}
