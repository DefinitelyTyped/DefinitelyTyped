import Syrup from "@devicefarmer/stf-syrup";
import Promise from "bluebird";

const moduleA = Syrup.serial().define((options) => {
    if (Math.random()) {
        return "a";
    } else {
        return 0;
    }
});

const moduleB = Syrup.serial().define((options) => {
    return "b";
});

const moduleC = Syrup.serial()
    .dependency(moduleA)
    .dependency(moduleB)
    .define((options, a, b) => {
        // $ExpectType "a" | 0
        const resa = a;

        // $ExpectType string
        const resb = b;
    });

// @ts-expect-error
Syrup.serial().define((options, a) => {
});

// @ts-expect-error
Syrup().dependency();

// This will throw a runtime error but should compile
Syrup().consume({});

// $ExpectType Promise<number>
const e = Syrup().define(() => 0).consume({ "a": 3 });

// $ExpectType Promise<number>
const e2 = Syrup().define((options: { a: number }) => options.a).consume({ "a": 3, "unused": 5 });

const e3 = Syrup()
    .define((options: { a: number; b: number }) => options.a + options.b)
    .consume({ "a": 3, "unused": 5 }); // this is wrong because we are not passing option b, but the way the library is used this should typecheck.
