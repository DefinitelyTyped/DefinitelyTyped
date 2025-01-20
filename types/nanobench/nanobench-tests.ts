import nanobench = require("nanobench");

nanobench("works", (b) => {
    b.start();

    b.log("foo bar");

    b.elapsed(); // $ExpectType number

    b.error(new Error("something went wrong"));

    b.end(); // $ExpectType number
});

nanobench("async test", async (b) => {
    b.start();
    b.end();
});

nanobench.skip("skipped", (b) => {
    b.start();
    b.end();
});

nanobench.only("exclusive", (b) => {
    b.start();
    b.end();
});
