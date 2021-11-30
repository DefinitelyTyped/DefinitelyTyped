import * as database from "quick-store";

// valid database creations
database();                                // $ExpectType Database
database("./testdb.json");                 // $ExpectType Database
database("./testdb.json", { foo: "bar" }); // $ExpectType Database

// invalid database creations
database(123);                  // $ExpectError
database("./testdb.json", 123); // $ExpectError

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
db.put(123); // $ExpectError
db.put({ foo: new Date() }); // $ExpectError
db.put({}, null); // $ExpectError
db.put({}, (contents: Date) => {}); // $ExpectError
db.put(); // $ExpectError

db.setItem(123, "bar"); // $ExpectError
db.setItem("foo", new Date()); // $ExpectError
db.setItem("foo", { foo: new Date() }); // $ExpectError
db.setItem("foo", [ new Date() ]); // $ExpectError
db.setItem("foo", "bar", null); // $ExpectError
db.setItem("foo", "bar", (contents: string) => {}); // $ExpectError
db.setItem("foo"); // $ExpectError
db.setItem(); // $ExpectError

db.getItem(123); // $ExpectError
db.getItem("foo", null); // $ExpectError
db.getItem("foo", (contents: Date) => {}); // $ExpectError

db.removeItem(123); // $ExpectError
db.removeItem("foo", null); // $ExpectError
db.removeItem("foo", (contents: Date) => {}); // $ExpectError

db.clear(123); // $ExpectError
db.clear((contents: Date) => {}); // $ExpectError

db.get((contents: Date) => {}); // $ExpectError

db.change(123); // $ExpectError
