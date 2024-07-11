import readJSON = require("json-file-plus");

// test type exports
type Format = readJSON.Format;
type JSONData = readJSON.JSONData;
type JSONDataC = typeof readJSON.JSONData;
type JSONFile = readJSON.JSONFile;
type JSONFileC = typeof readJSON.JSONFile;

readJSON("test"); // $ExpectType Promise<JSONFile>
// $ExpectType Promise<JSONFile>
readJSON("test", (err, file) => {
    err; // $ExpectType Error | null
    file; // $ExpectType JSONFile
});

const jsonFile = readJSON.sync("test"); // $ExpectType JSONFile

jsonFile.format; // $ExpectType Format
jsonFile.format.indent; // $ExpectType number | "\t" | " "
jsonFile.format.trailing; // $ExpectType boolean
jsonFile.data; // $ExpectType unknown
jsonFile.filename; // $ExpectType string

jsonFile.get(); // $ExpectType Promise<unknown>
jsonFile.get("foo"); // $ExpectType Promise<unknown>
jsonFile.get(1); // $ExpectType Promise<unknown>
jsonFile.get(Symbol()); // $ExpectType Promise<unknown>
// $ExpectType Promise<unknown>
jsonFile.get("foo", (err, value) => {
    err; // $ExpectType Error | null
    value; // $ExpectType unknown
});
// $ExpectType Promise<unknown>
jsonFile.get((err, value) => {
    err; // $ExpectType Error | null
    value; // $ExpectType unknown
});

jsonFile.set({ foo: "bar" }); // $ExpectType void

jsonFile.remove("foo"); // $ExpectType Promise<void>
jsonFile.remove(Symbol()); // $ExpectType Promise<void>
// @ts-expect-error
jsonFile.remove(1);
// $ExpectType Promise<void>
jsonFile.remove("foo", err => {
    err; // $ExpectType Error | null
});

jsonFile.stringify(); // $ExpectType Buffer

jsonFile.save(); // $ExpectType Promise<void>
// $ExpectType Promise<void>
jsonFile.save(err => {
    err; // $ExpectType Error | null
});

jsonFile.saveSync(); // $ExpectType void

new readJSON.JSONData("foo");

const jsonData: readJSON.JSONData = new readJSON.JSONFile("/foo.json", "foo");
