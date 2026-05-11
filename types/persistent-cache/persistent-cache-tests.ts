import cache = require("persistent-cache");

// Types
type Err = NodeJS.ErrnoException | null;

// Initialization
const cats = cache();

// Put
cats.put("Cindy", { color: "red" }, (err: Err) => console.log(err || "done!"));
cats.putSync("babies", ["Ron", "Emily"]);

// Get
cats.get("babies", (err: Err, babies: any) => {
    // check err for errors
    if (err) return;
    console.log(babies); // ['Ron', 'Emily']
});
console.log(cats.getSync("Cindy")); // { color: 'red' }

// Keys
cats.keys((err: Err, keys: string[]) => {
    // Handle errors
    if (err) return;
    console.log(keys); // ['Cindy', 'babies']
});
console.log(cats.keysSync()); // ['Cindy', 'babies']
// $ExpectType string[]
cats.keysSync();

// Delete
cats.delete("babies", (err: Err) => {
    // Handle errors
    if (err) return;
    console.log("babies removed from cache");
});

// Unlink
cats.unlink((err: Err) => console.log(err || "done!"));

// @ts-expect-error
cats.put("no-callback-error", { data: "test" });
// @ts-expect-error
cats.get("no-callback-error");
// @ts-expect-error
cats.keys("no-callback-error");
// @ts-expect-error
cats.delete("no-callback-error");

// @ts-expect-error
cats.put(2241, { data: "non-string-name-error" }, console.log);
// @ts-expect-error
cats.put(undefined, { data: "non-string-name-error" }, console.log);
// @ts-expect-error
cats.get(2241, console.log);
// @ts-expect-error
cats.get(undefined, console.log);
// @ts-expect-error
cats.keys(2241, console.log);
// @ts-expect-error
cats.keys(undefined, console.log);
// @ts-expect-error
cats.delete(2241, console.log);
// @ts-expect-error
cats.delete(undefined, console.log);
// @ts-expect-error
cats.putSync(2241, { data: "non-string-name-error" }, console.log);
// @ts-expect-error
cats.putSync(undefined, { data: "non-string-name-error" }, console.log);
// @ts-expect-error
cats.getSync(2241, console.log);
// @ts-expect-error
cats.getSync(undefined, console.log);
// @ts-expect-error
cats.keysSync(2241, console.log);
// @ts-expect-error
cats.keysSync(undefined, console.log);
// @ts-expect-error
cats.deleteSync(2241, console.log);
// @ts-expect-error
cats.deleteSync(undefined, console.log);
