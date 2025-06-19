import dlv = require("dlv");

const obj = {
    undef: undefined,
    zero: 0,
    one: 1,
    n: null,
    f: false,
    a: {
        two: 2,
        b: {
            three: 3,
            c: {
                four: 4,
            },
        },
    },
    array: [
        ["a", "b"],
        ["c", "d"],
    ],
};

[obj, undefined].forEach((v) => {
    // Test without defaults
    dlv(v, "");
    dlv(v, "one");
    dlv(v, "one.two");
    dlv(v, "a");
    dlv(v, "a.two");
    dlv(v, "a.b");
    dlv(v, "a.b.three");
    dlv(v, "a.b.c");
    dlv(v, "a.b.c.four");
    dlv(v, "n");
    dlv(v, "n.badkey");
    dlv(v, "f");
    dlv(v, "f.badkey");
    dlv(v, ["array", 0, 1]);
    dlv(v, ["array", 1, 1]);

    // Test defaults
    dlv(v, "", "foo");
    dlv(v, "undef", "foo");
    dlv(v, "n", null);
    dlv(v, "n.badkey", "foo");
    dlv(v, "zero", 0);
    dlv(v, "a.badkey", "foo");
    dlv(v, "a.badkey.anotherbadkey", "foo");
    dlv(v, "f", false);
    dlv(v, "f.badkey", "foo");
});
