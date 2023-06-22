import * as database from "quick-store";

// valid database creations
database();                                // $ExpectType Database
database("./testdb.json");                 // $ExpectType Database
database("./testdb.json", { foo: "bar" }); // $ExpectType Database

// invalid database creations
// @ts-expect-error
database(123);
// @ts-expect-error
database("./testdb.json", 123);

const db = database();

// valid functions
db.put({ foo: "bar" });             // $ExpectType void
db.put({ foo: { foo: "bar" }});     // $ExpectType void
db.put({ foo: "bar" }, () => {});   // $ExpectType void

db.setItem("foo", "bar");           // $ExpectType void
db.setItem("foo", 123);             // $ExpectType void
db.setItem("foo", { foo: "bar" });  // $ExpectType void
db.setItem("foo", [ "bar" ]);       // $ExpectType void
db.setItem("foo", true);            // $ExpectType void
db.setItem("foo", null);            // $ExpectType void
db.setItem("foo", "bar", () => {}); // $ExpectType void

db.getItem("foo", data => {});      // $ExpectType void

db.removeItem("foo");               // $ExpectType void
db.removeItem("foo", () => {});     // $ExpectType void

db.clear();                         // $ExpectType void
db.clear(() => {});                 // $ExpectType void

db.get();                           // $ExpectedType dbContents
db.get(() => {});                   // $ExpectedType void

db.change("./testdb.json");         // $ExpectedType void

// invalid functions
// @ts-expect-error
db.put(123);
// @ts-expect-error
db.put({ foo: new Date() });
// @ts-expect-error
db.put({}, null);
// @ts-expect-error
db.put({}, (contents: Date) => {});
// @ts-expect-error
db.put();

// @ts-expect-error
db.setItem(123, "bar");
// @ts-expect-error
db.setItem("foo", new Date());
// @ts-expect-error
db.setItem("foo", { foo: new Date() });
// @ts-expect-error
db.setItem("foo", [ new Date() ]);
// @ts-expect-error
db.setItem("foo", "bar", null);
// @ts-expect-error
db.setItem("foo", "bar", (contents: string) => {});
// @ts-expect-error
db.setItem("foo");
// @ts-expect-error
db.setItem();

// @ts-expect-error
db.getItem(123);
// @ts-expect-error
db.getItem("foo", null);
// @ts-expect-error
db.getItem("foo", (contents: Date) => {});

// @ts-expect-error
db.removeItem(123);
// @ts-expect-error
db.removeItem("foo", null);
// @ts-expect-error
db.removeItem("foo", (contents: Date) => {});

// @ts-expect-error
db.clear(123);
// @ts-expect-error
db.clear((contents: Date) => {});

// @ts-expect-error
db.get((contents: Date) => {});

// @ts-expect-error
db.change(123);
