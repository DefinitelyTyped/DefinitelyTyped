import wrappy = require("wrappy");

// $ExpectType (cb: () => void) => () => void
const wrapper = wrappy((cb: () => void): () => void => {
    return () => {
        cb();
    };
});

// $ExpectType () => void
const wrapped = wrapper(() => {});

wrapped();

// Two-argument form: wrappy(fn, cb)
// $ExpectType () => string
const result = wrappy(
    (cb: () => string): () => string => {
        return () => "wrapped: " + cb();
    },
    () => "test",
);

result();

// @ts-expect-error - first argument must be a function
wrappy("not a function");
