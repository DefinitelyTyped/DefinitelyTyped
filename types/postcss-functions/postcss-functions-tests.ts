import postcss from "postcss";
import postcssFunctions from "postcss-functions";

postcss([postcssFunctions]);
postcss([postcssFunctions()]);
postcss([
    postcssFunctions({
        functions: {
            someFunction() {},
        },
    }),
]);
postcss([
    postcssFunctions({
        functions: {
            someFunction(a: number) {
                return "foo";
            },
        },
    }),
]);
postcss([
    postcssFunctions({
        // @ts-expect-error Functions must be inside of `functions` object
        someFunction() {},
    }),
]);
postcss([
    postcssFunctions({
        // @ts-expect-error Functions must be inside of `functions` object
        someFunction(a: number) {
            return "foo";
        },
    }),
]);
postcss([
    postcssFunctions({
        functions: {
            // @ts-expect-error Not a function
            foo: "bar",
        },
    }),
]);
