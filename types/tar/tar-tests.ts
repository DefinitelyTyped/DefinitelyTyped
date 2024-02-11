/**
 * Test suite created by Maxime LUCE <https://github.com/SomaticIT>
 *
 * Created by using code samples from https://github.com/npm/node-tar.
 */

import tar = require("tar");
import fs = require("fs");
import path = require("path");

/**
 * Quick Extract
 */
fs.createReadStream("path/to/file.tar").pipe(tar.Extract("path/to/extract"));

/**
 * Use with events
 */
const readStream = fs.createReadStream("/path/to/file.tar");
const extract = tar.Extract("/path/to/target");

readStream.pipe(extract);

extract.on("entry", (entry: any) => undefined);

{
    const options: tar.PackOptions = {
        cwd: __dirname,
        portable: true,
        // gzip: true,
        gzip: { flush: 1 },
        prefix: "package/",
        filter: (path, stat): boolean => {
            // $ExpectType string
            path;
            // $ExpectType Stats
            stat;

            return true;
        },
        onwarn: (c, m, p) => {
            // $ExpectType string
            c;
            // $ExpectType string
            m;
            // $ExpectType Buffer
            p;
        },
        strict: false,
        preservePaths: true,
        noDirRecurse: true,
        follow: true,
    };

    // @ts-expect-error
    options.mtime = 1704391217691;

    options.mtime = undefined;
    options.mtime; // $ExpectType undefined

    options.mtime = new Date();
    options.mtime; // $ExpectType Date

    // $ExpectType Pack
    const pack = new tar.Pack(options)
        .add("dir")
        .end()
        .end("")
        .end("one-byte.txt")
        .on("data", () => {})
        .on("data", c => {
            // $ExpectType Buffer
            c;
        })
        .on("end", () => {
            new tar.Pack.Sync({
                ...options,
                linkCache: pack.linkCache,
                readdirCache: pack.readdirCache,
                statCache: pack.statCache,
            })
                .add("dir")
                .end()
                .read();
        });

    // $ExpectType boolean
    new tar.Pack(options).write("path");

    // $ExpectType typeof PackSync
    tar.Pack.Sync;
}

/**
 * Examples from tar docs:
 */

tar.c(
    {
        gzip: true,
        file: "my-tarball.tgz",
    },
    ["some", "files", "and", "folders"],
).then(() => undefined);

tar.c(
    {
        gzip: true,
    },
    ["some", "files", "and", "folders"],
).pipe(fs.createWriteStream("my-tarball.tgz"));

tar.c(
    {
        prefix: "some-prefix",
    },
    ["some", "files", "and", "folders"],
).pipe(fs.createWriteStream("my-tarball.tgz"));

tar.x(
    {
        file: "my-tarball.tgz",
        noChmod: true,
    },
).then(() => undefined);

fs.createReadStream("my-tarball.tgz").pipe(
    tar.x({
        strip: 1,
        C: "some-dir", // alias for cwd:'some-dir', also ok
    }),
);

tar.t({
    file: "my-tarball.tgz",
    onentry: (entry) => console.log(entry.path, "was", entry.size),
});

fs.createReadStream("my-tarball.tgz")
    .pipe(tar.t())
    .on("entry", entry => console.log(entry.size));

fs.createReadStream("my-tarball.tgz")
    .pipe(new tar.Parse())
    .on("entry", entry => entry.on("data", data => console.log(data)));

tar.list({
    file: "my-tarball.tgz",
    onentry: (entry) => entry.path.slice(1),
    filter: (path, stat): boolean => {
        // $ExpectType string
        path;
        // $ExpectType FileStat
        stat;

        return true;
    },
}).then(() => console.log("after listing"));
