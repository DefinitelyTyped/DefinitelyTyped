import hooker = require("hooker");

function tests() {
    hooker.hook(Math, "max", function(
        ...args // $ExpectType number[]
    ) {});
    hooker.unhook(Math, "max");

    hooker.hook(Math, "max", function() {
        if (arguments.length === 0) {
            return hooker.override(9000);
        }
    });
    // @ts-expect-error
    hooker.hook(Math, "max", function() {
        if (arguments.length === 0) {
            return hooker.override("not a number");
        }
    });

    hooker.hook(Math, "max", {
        once: true,
        pre: function() {},
    });

    hooker.hook(Math, "max", {
        pre: function(...args) {
            return hooker.filter(this, args.map(num => num * 2));
        },
    });

    // @ts-expect-error
    hooker.hook(Math, "max", {
        pre: function(...args) {
            return hooker.filter(this, args.map(num => num.toString()));
        },
    });

    hooker.hook(Math, "max", {
        post: function(result) {
            return hooker.override(result * 1000);
        },
    });

    hooker.orig(Math, "max"); // $ExpectType (...values: number[]) => number

    hooker.hook(Math, Object.getOwnPropertyNames(Math), {
        passName: true,
        pre: function(name) {},
        post: function(result, name) {},
    });

    hooker.hook(Number, "parseInt", function(
        string, // $ExpectType string
        radix, // $ExpectType number | undefined
    ) {});

    hooker.hook(Number, "parseInt", {
        pre(
            string, // $ExpectType string
            radix, // $ExpectType number | undefined
        ) {},
        post(
            result, // $ExpectType number
            string, // $ExpectType string
            radix, // $ExpectType number | undefined
        ) {},
    });

    hooker.hook(Number, "parseInt", {
        pre(string, radix) {
            return hooker.preempt(0);
        },
    });

    // @ts-expect-error
    hooker.hook(Number, "parseInt", {
        pre(string, radix) {
            return hooker.preempt("not a number");
        },
    });

    hooker.hook(Number, "parseInt", {
        pre(string, radix) {
            return hooker.filter(this, [string, radix] as [string, number | undefined]);
        },
    });
    // @ts-expect-error
    hooker.hook(Number, "parseInt", {
        pre(string, radix) {
            return hooker.filter(this, [0, "not a number"]);
        },
    });

    hooker.orig(Number, "parseInt"); // $ExpectType (string: string, radix?: number | undefined) => number
}
