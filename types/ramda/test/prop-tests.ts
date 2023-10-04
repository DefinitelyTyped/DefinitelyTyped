import * as R from "ramda";

(() => {
    const x = R.prop("x");
});

(() => {
    R.prop("x", { x: 100 }); // $ExpectType number
    const obj = {
        str: "string",
        num: 5,
    };

    R.prop("str", obj); // $ExpectType string
    R.prop("num", obj); // $ExpectType number

    R.prop(R.__, obj)("str"); // $ExpectType string

    R.prop("str")(obj); // $ExpectType string
    R.prop("num")(obj); // $ExpectType number
});

(() => {
    const favorite = R.prop("favoriteLibrary");
});

(() => { // get defined prop from obj
    const obj = { x: 100 };
    R.prop("x")(obj); // $ExpectType number
    R.prop("x", obj); // $ExpectType number
    R.prop(R.__, obj)("x"); // $ExpectType number
});

(() => { // get defined typed prop from obj
    const obj: { x: 100 } = { x: 100 };
    R.prop("x")(obj); // $ExpectType 100
    R.prop("x", obj); // $ExpectType 100
    R.prop(R.__, obj)("x"); // $ExpectType 100
});

(() => { // get undefined prop from obj
    const obj = { y: 100 };
    // @ts-expect-error
    R.prop("x")(obj);
    // @ts-expect-error
    R.prop("x", obj);
    // @ts-expect-error
    R.prop(R.__, obj)("x");
});

(() => { // get prop from undefined
    // @ts-expect-error
    R.prop("x")(undefined);
    // @ts-expect-error
    R.prop("x", undefined);
    // @ts-expect-error
    R.prop(R.__, undefined)("x");
});

(() => { // get first element from array
    const array = [100, 200];
    // @ts-expect-error - new def only has partial support
    R.prop(0)(array);
    R.prop(0, array); // $ExpectType number
    R.prop(R.__, array)(0); // $ExpectType number
});

(() => { // get first element from tuple
    const tuple = [100, 200] as const;
    R.prop(0)(tuple); // $ExpectType 100
    R.prop(0, tuple); // $ExpectType 100
    R.prop(R.__, tuple)(0); // $ExpectType 100
});

(() => { // get overflow element from tuple
    const tuple = [100, 200] as const;
    // @ts-expect-error - new def only has partial support
    R.prop(2)(tuple);
    R.prop(2, tuple); // $ExpectType undefined
    R.prop(R.__, tuple)(2); // $ExpectType undefined
});

(() => { // get variadic element from tuple
    const tuple = [100, "200"] as [number, ...string[]];
    // @ts-expect-error - new def only has partial support
    R.prop(2)(tuple);
    R.prop(2, tuple); // $ExpectType string
    R.prop(R.__, tuple)(2); // $ExpectType string
});

(() => { // community failed tests
    const objArray = [{ foo: "bar" }];
    objArray.map(R.prop("foo")); // $ExpectType string[]
    R.map(R.prop("foo"), objArray); // $ExpectType string[]
    Promise.resolve({ foo: "bar" }).then(R.prop("foo")); // $ExpectType Promise<string>
});
