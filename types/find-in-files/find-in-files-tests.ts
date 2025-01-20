import { find, findSync } from "find-in-files";

(async () => {
    // $ExpectType FindResult
    await find(/foo/, "foo", /foo/);
    // $ExpectType FindResult
    await find(/foo/, "foo");
    // $ExpectType FindResult
    await find("foo", "foo");
    // $ExpectType FindResult
    findSync("foo", "foo");
    // $ExpectType FindResult
    await find(/version/, "./node_modules/find-in-files");
    // $ExpectType FindResult
    await find("version", "./node_modules/find-in-files");
    // $ExpectType FindResult
    await find(
        {
            term: "version",
            flags: "gi",
        },
        "./node_modules/find-in-files",
    );
    // $ExpectType FindResult
    findSync(/version/, "./node_modules/find-in-files");
    // $ExpectType FindResult
    findSync("version", "./node_modules/find-in-files");
    // $ExpectType FindResult
    findSync(
        {
            term: "version",
            flags: "gi",
        },
        "./node_modules/find-in-files",
    );
})();
