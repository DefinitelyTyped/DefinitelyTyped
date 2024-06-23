import fileExists = require("file-exists");

// $ExpectType void
fileExists("/index.html", (err, exists) => {
    err; // $ExpectType Error | null
    exists; // $ExpectType boolean
});

// $ExpectType void
fileExists("/index.html", { root: "" }, (err, exists) => {
    err; // $ExpectType Error | null
    exists; // $ExpectType boolean
});

// $ExpectType void
fileExists(Buffer.from("/tmp"), { root: "" }, (err, exists) => {
    err; // $ExpectType Error | null
    exists; // $ExpectType boolean
});

// $ExpectType void
fileExists(Buffer.from("/tmp"), { anotherKey: "this is fine" }, (err, exists) => {
    err; // $ExpectType Error | null
    exists; // $ExpectType boolean
});

// $ExpectType void
fileExists(new URL("file:///etc/fstab"), { anotherKey: "this is fine" }, (err, exists) => {
    err; // $ExpectType Error | null
    exists; // $ExpectType boolean
});

// $ExpectType void
fileExists("tmp", { root: "/" }, (err, exists) => {
    err; // $ExpectType Error | null
    exists; // $ExpectType boolean
});

fileExists("/index.html"); // $ExpectType Promise<boolean>
fileExists("/index.html", { root: "" }); // $ExpectType Promise<boolean>

fileExists(Buffer.from("/index.html")); // $ExpectType Promise<boolean>
fileExists(new URL("file:///etc/fstab")); // $ExpectType Promise<boolean>

fileExists(Buffer.from("/index.html"), { root: "" }); // $ExpectType Promise<boolean>
fileExists(Buffer.from("/index.html"), {}); // $ExpectType Promise<boolean>
fileExists(new URL("file:///etc/fstab"), { otherKey: "", thisIsFine: "/" }); // $ExpectType Promise<boolean>
fileExists("index.html", { root: "/" }); // $ExpectType Promise<boolean>
fileExists("index.html", { root: "/", otherKeys: "get-ignored" }); // $ExpectType Promise<boolean>
fileExists("index.html", { root: "/", otherKeys: ["are", "ignored"] }); // $ExpectType Promise<boolean>

// $ExpectType Promise<boolean>
fileExists("index.html", {
    root: "/",
    otherKeys: ["are", "ignored"],
    thereCanBe: ["more", null, "than", undefined, "one"],
});

// $ExpectType boolean
fileExists.sync("/index.html");

// $ExpectType boolean
fileExists.sync("/index.html", { root: "" });
