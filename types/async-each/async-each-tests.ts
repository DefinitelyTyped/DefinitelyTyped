import each = require("async-each");

// Basic usage with callback
// $ExpectType void
each(
    [1, 2, 3],
    (item, cb) => {
        cb(null, item * 2);
    },
    (err, results) => {},
);

// Without callback
// $ExpectType void
each(
    ["a", "b", "c"],
    (item, cb) => {
        cb(null, item.toUpperCase());
    },
);

// With error handling
// $ExpectType void
each(
    [1, 2, 3],
    (item, cb) => {
        if (item === 2) {
            cb(new Error("failed"));
        } else {
            cb(null, String(item));
        }
    },
    (err, results) => {},
);

// @ts-expect-error - first argument must be an array
each("not an array", (item: string, cb: any) => {}, () => {});
