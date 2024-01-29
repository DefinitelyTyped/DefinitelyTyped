import nodeTargz = require("node-targz");

nodeTargz.compress(
    {
        source: "./foo/bar",
        destination: "./foo/output.tar.gz",
        level: 6,
        memLevel: 6,
    },
    err => {},
);

nodeTargz.decompress(
    {
        source: "my-tar.gz",
        destination: "./foo/unpacked",
    },
    err => {},
);

// Code from project README https://github.com/lafin/node-targz/tree/master
nodeTargz.compress(
    {
        source: "../example",
        destination: "../example.tar.gz",
        level: 6, // optional
        memLevel: 6, // optional
        options: {
            // options from https://github.com/mafintosh/tar-fs
            entries: ["test.txt"],
        },
    },
    () => {
        nodeTargz.decompress(
            {
                source: "../example.tar.gz",
                destination: "./unpack-example",
            },
            () => {
                console.log("done");
            },
        );
    },
);
