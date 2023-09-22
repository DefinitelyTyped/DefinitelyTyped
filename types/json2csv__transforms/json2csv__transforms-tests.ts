import { flatten, unwind } from "json2csv__transforms";
import * as utils from "json2csv__transforms/src/utils";

flatten()({ foo: "bar" }); // $ExpectType any
flatten({})({ foo: "bar" }); // $ExpectType any
// $ExpectType any
flatten({
    objects: true,
    arrays: true,
    separator: "-",
})({ foo: "bar" });

unwind()({ foo: "bar" }); // $ExpectType any
unwind({})({ foo: "bar" }); // $ExpectType any
// $ExpectType any
unwind({
    paths: "foo",
    blankOut: true,
})({ foo: "bar" });
// $ExpectType any
unwind({
    paths: ["foo"],
    blankOut: true,
})({ foo: "bar" });

utils.setProp({}, "foo", "bar"); // $ExpectType any
utils.unsetProp({ foo: "bar" }, "foo"); // $ExpectType any
utils.flattenReducer([1], [2]); // $ExpectType number[]
