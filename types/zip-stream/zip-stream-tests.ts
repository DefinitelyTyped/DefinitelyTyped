import ZipStream from "zip-stream";

new ZipStream();
new ZipStream({});
new ZipStream({
    namePrependSlash: true,
    comment: "Foobar",
    forceLocalTime: true,
    forceZip64: true,
    store: true,
    level: 123,
});
// Testing Zlib options
new ZipStream({ zlib: { flush: 123 } });
// Testing transform options
new ZipStream({ defaultEncoding: "utf-8" });

const archive = new ZipStream();
archive.entry("abc");
archive.entry("abc", {});
archive.entry("abc", {
    type: "directory",
    name: "foo/",
    namePrependSlash: false,
    linkname: "foobar",
    date: "2024-10-21",
    mode: 123,
    store: true,
    comment: "Foobar",
});
archive.entry("abc", { date: new Date() });
archive.entry("abc", {}, (err, entry) => {
    if (err) throw err;
    entry!; // $ExpectType ZipArchiveEntry
});

archive.finalize();

// Examples below adapted from README
// See https://github.com/archiverjs/node-zip-stream?tab=readme-ov-file#usage

archive.on("error", err => {
    throw err;
});

archive.entry("string contents", { name: "string.txt" }, (err, entry) => {
    if (err) throw err;
    archive.entry(null, { name: "directory/" }, (err, entry) => {
        if (err) throw err;
        archive.finish();
    });
});
