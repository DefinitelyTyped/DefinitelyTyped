import Base = require("base");

// Constructor
const app = new Base();
const appWithCache = new Base({ foo: "bar" });
const appWithOptions = new Base({}, { option1: true });

// is
app.is("collection"); // $ExpectType Base

// isRegistered
const registered: boolean = app.isRegistered("my-plugin");
app.isRegistered("my-plugin", true);

// use with single plugin
app.use((instance, base, env) => {
    instance.set("key", "val");
});

// use with plugin array
app.use([
    (instance, base, env) => {},
    (instance, base, env) => {},
]);

// define
app.define("render", (str: string) => str);
app.define({ render: (str: string) => str });

// base getter
const root: Base = app.base;

// cache-base inherited methods
app.set("name", "base");
app.set({ name: "base" });
const val: any = app.get("name");
app.prime("name", "default");
app.default("name", "fallback");
app.union("arr", ["a", "b"]);
const hasKey: boolean = app.has("name");
const hasOwnKey: boolean = app.hasOwn("name");
app.del("name");
app.del(["name", "other"]);
app.clear();
app.visit("set", { a: "b", c: "d" });

// readonly properties
const keys: string[] = app.keys;
const size: number = app.size;

// options
app.options.foo = "bar";

// cache
app.cache.anything = true;

// registered
app.registered["my-plugin"] = true;

// events
app.on("plugin", (name: string) => {});
app.emit("plugin", "my-plugin");

// Static use
Base.use((instance, base, env) => {});

// Static namespace
const Custom = Base.namespace("custom");
const custom = new Custom();
