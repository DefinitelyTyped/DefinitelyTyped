import * as cache from "global-cache";

// test type exports
type Primitive = cache.Primitive;

cache.get("key"); // $ExpectType unknown
// @ts-expect-error
cache.get({});
cache.has("key"); // $ExpectType boolean
cache.set("key", {}); // $ExpectType boolean
cache.delete("key"); // $ExpectType boolean
cache.clear(); // $ExpectType void
cache.setIfMissingThenGet("key", () => "foo"); // $ExpectType string
