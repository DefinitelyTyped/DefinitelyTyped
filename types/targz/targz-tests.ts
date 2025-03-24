import * as targz from "targz";

// $ExpectType void
targz.compress(
    {
        src: "srcPath",
        dest: "destPath",
    },
    (err) => {
        // $ExpectType Error | string | null | undefined
        err;
    },
);

// $ExpectType void
targz.compress(
    {
        src: "srcPath",
        dest: "destPath",
        tar: {},
        gz: {},
    },
    (err) => {
        // $ExpectType Error | string | null | undefined
        err;
    },
);

targz.compress(
    {
        src: "srcPath",
        dest: "destPath",
        tar: {
            entries: ["file.txt"],
            dereference: true,
            finalize: true,
            finish: () => {},
        },
        gz: {},
    },
    (err) => {
        // $ExpectType Error | string | null | undefined
        err;
    },
);

// $ExpectType void
targz.decompress(
    {
        src: "srcPath",
        dest: "destPath",
    },
    (err) => {
        // $ExpectType Error | string | null | undefined
        err;
    },
);

// $ExpectType void
targz.decompress(
    {
        src: "srcPath",
        dest: "destPath",
        tar: {},
        gz: {},
    },
    (err) => {
        // $ExpectType Error | string | null | undefined
        err;
    },
);

// $ExpectType void
targz.decompress(
    {
        src: "srcPath",
        dest: "destPath",
        tar: {
            ignore: () => true,
            filter: () => true,
            strip: 3,
        },
        gz: {},
    },
    (err) => {
        // $ExpectType Error | string | null | undefined
        err;
    },
);
