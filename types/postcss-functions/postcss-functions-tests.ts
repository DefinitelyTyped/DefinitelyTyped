import postcss from "postcss";
import postcssFunctions from "postcss-functions";

postcss([postcssFunctions]);
postcss([postcssFunctions()]);
postcss([
    postcssFunctions({
        someFunction() {},
    }),
]);
postcss([
    postcssFunctions({
        someFunction(a: number) {
            return "foo";
        },
    }),
]);
postcss([
    postcssFunctions({
        // @ts-expect-error Not a function
        foo: "bar",
    }),
]);
