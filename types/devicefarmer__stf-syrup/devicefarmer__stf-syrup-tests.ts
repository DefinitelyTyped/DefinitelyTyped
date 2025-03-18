import Syrup from "@devicefarmer/stf-syrup";
import Bluebird from "bluebird";

const moduleA = Syrup.serial().define((options) => {
    if (Math.random()) {
        return "a";
    } else {
        return 0;
     }
})

const moduleB = Syrup.serial().define((options) => {
    return "b";
})

const moduleC = Syrup.serial()
    .dependency(moduleA)
    .dependency(moduleB)
    .define((options, a, b) => {
        // $ExpectType "a" | 0
        const resa = a;

        // $ExpectType string
        const resb = b;
})

// @ts-expect-error
Syrup.serial().define((options, a) => {

})

// @ts-expect-error
Syrup().dependency()


// This will throw a runtime error but should compile
Syrup().consume({})

// $ExpectType Bluebird<number>
const e = Syrup().define(() => 0).consume({"a": 3})
