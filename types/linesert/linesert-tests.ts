import * as linesert from "linesert";

// file.txt
// => 1.
// => 3.

linesert("file.txt").beforeLine(2).insert("2.", (err, result) => {
    // => 1.
    // => 2.
    // => 3.
});

linesert("file.txt").beforeLine(3).insert("4.", (err, result) => {
    // => 1.
    // => 2.
    // => 3.
    // => 4.
});
