import * as R from "ramda";

(() => {
    const obj = {
        foo: "bar",
        baz: 123,
        3: "asdf",
    };

    const func1: (obj: Record<"foo", "bar">) => boolean = R.propEq("bar", "foo");

    const func2: (obj: Record<"baz", number>) => boolean = R.propEq(5, "baz");

    const func3: (obj: Record<number, string>) => boolean = R.propEq("qwerty", 5);

    const func4: {
        <V>(val: V, obj: Record<"foo", V>): boolean;
        <V>(val: V): (obj: Record<"foo", V>) => boolean;
    } = R.propEq("foo");
});

interface Obj {
    a: number;
    b: number;
}

(() => {
    const xs: Obj = { a: 1, b: 0 };
    R.propEq(1, "a", xs); // => true
    R.propEq(4, "a", xs); // => false
});

(() => {
    interface A {
        foo: string | null;
    }

    const obj: A = {
        foo: "bar",
    };
    const value = "";

    // @ts-expect-error
    R.propEq(value, "foo")(obj);

    // @ts-expect-error
    R.propEq(value, "bar")(obj);
});
