/**
 * Test suite created by JDB <https://github.com/legodude17>
 *
 * Created by using code samples from https://www.npmjs.com/package/proggy.
 */

import proggy = require("proggy");

/**
 * createTracker
 */
// $ExpectType Tracker
const tracker = proggy.createTracker("doing something");
proggy.createTracker("stuff", "item", 5);
// @ts-expect-error
proggy.createTracker();
// @ts-expect-error
proggy.createTracker(100);
// @ts-expect-error
proggy.createTracker("stuff", "item", "item2");

/**
 * new Tracker
 */
new proggy.Tracker("doing something else");
new proggy.Tracker("stuff", "item", 5);
// @ts-expect-error
new proggy.Tracker();
// @ts-expect-error
new proggy.Tracker(100);
// @ts-expect-error
new proggy.Tracker("stuff", "item", "item2");

/**
 * Methods
 */
tracker.update(1);
tracker.update(2, 10);
tracker.update(3, { open: "path/to/file" });
tracker.update(4, 5, { file: "path/to/file" });
// @ts-expect-error
tracker.update();
// @ts-expect-error
tracker.update({});
// @ts-expect-error
tracker.update(1, 1, 1);
// @ts-expect-error
tracker.update(1, 1, {}, 1);
tracker.finish();
tracker.finish({ files: ["path1", "path2"] });
// @ts-expect-error
tracker.finish(3);
// @ts-expect-error
tracker.finish({}, 3);

/**
 * Properties
 */
// $ExpectType string
const name = tracker.name;
tracker.name = "hi";
// $ExpectType string
const key = tracker.key;
tracker.key = "type1";
// $ExpectType boolean
const done = tracker.done;
tracker.done = true;
// $ExpectType number
const total = tracker.total;
tracker.total = 100;

/**
 * createClient
 */
// $ExpectType Client
const client = proggy.createClient();
proggy.createClient({});
proggy.createClient({
    normalize: true,
    stopOnDone: true,
});
/**
 * new Client
 */
new proggy.Client();
new proggy.Client({});
proggy.createClient({
    normalize: true,
    stopOnDone: true,
});

/**
 * Events
 */
// @ts-expect-error
client.on();
// @ts-expect-error
client.on("bar");
// @ts-expect-error
client.on("hello", () => {});
client.on("bar", (key, data) => {
    // $ExpectType string
    const name = data.name;
    console.assert(key === data.key);
    // $ExpectType number
    const value = data.value;
    // $ExpectType number
    const total = data.total;
    // $ExpectType number
    const actualValue = data.actualValue;
    // $ExpectType number
    const actualTotal = data.actualTotal;
    // $ExpectType boolean
    const done = data.done;
    data["file"];
});
const listener = (key: string, data: proggy.ClientData) => {
    client.off("barDone", listener);
    client.off("done", listener);
};
client.on("barDone", listener);
client.on("done", listener);

/**
 * Methods
 */
client.start();
// @ts-expect-error
client.start("hi");
client.stop();
// @ts-expect-error
client.stop("hi");
/**
 * Properties
 */
// $ExpectType boolean
const normalize = client.normalize;
client.normalize = false;
// $ExpectType number
const size = client.size;
// @ts-expect-error
client.size = 5;
// $ExpectType boolean
const listening = client.listening;
// @ts-expect-error
client.listening = true;
