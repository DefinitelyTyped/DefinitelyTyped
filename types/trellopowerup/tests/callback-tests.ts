import * as Trello from "trellopowerup";

// CacheAction
const run: Trello.Callback.CacheAction = "run";
const retain: Trello.Callback.CacheAction = "retain";
const release: Trello.Callback.CacheAction = "release";
// @ts-expect-error - invalid cache action
const invalidAction: Trello.Callback.CacheAction = "delete";

// SerializeOutput
const serializeOutput: Trello.Callback.SerializeOutput = { _callback: "cb" };
// $ExpectType string
serializeOutput._callback;
// @ts-expect-error - missing _callback
const invalidSerializeOutput: Trello.Callback.SerializeOutput = {};

// SerializeResult
const serializeResult: Trello.Callback.SerializeResult = (value, key) => value;
const serializeResult2: Trello.Callback.SerializeResult = (value, key) => ({ _callback: "cb" });
// $ExpectType unknown
serializeResult("test");
// $ExpectType unknown
serializeResult2("test");

// CacheOptions
const cacheOptions: Trello.Callback.CacheOptions = {
    action: "run",
    options: {},
    callback: "cb",
};
// $ExpectType CacheAction
cacheOptions.action;
// $ExpectType unknown
cacheOptions.options;
// $ExpectType string
cacheOptions.callback;
// @ts-expect-error - missing action
const invalidCacheOptions: Trello.Callback.CacheOptions = { options: {}, callback: "cb" };
// @ts-expect-error - invalid action value
const invalidCacheOptions2: Trello.Callback.CacheOptions = { action: "delete", options: {}, callback: "cb" };

// Cache interface
const cache: Trello.Callback.Cache = {
    callback: (t, options, serializeResult) => Promise.resolve(),
    serialize: (fx) => ({ _callback: "cb" }),
    reset: () => {},
};
// $ExpectType (t: Plugin, options: CacheOptions, serializeResult: SerializeResult) => Promise<unknown>
cache.callback;
// $ExpectType (fx: (t: Plugin, args: unknown) => unknown) => SerializeOutput
cache.serialize;
// $ExpectType () => void
cache.reset;

// @ts-expect-error - missing serialize
const invalidCache: Trello.Callback.Cache = {
    callback: (t, options, serializeResult) => Promise.resolve(),
    reset: () => {},
};

const invalidCache2: Trello.Callback.Cache = {
    // @ts-expect-error - wrong callback return type
    callback: (t, options, serializeResult) => {},
    serialize: (fx) => ({ _callback: "cb" }),
    reset: () => {},
};
