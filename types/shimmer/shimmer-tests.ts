import * as shimmer from "shimmer";

const fish = {
    name: "shimmer",
    age: 1,
    getMotto: () => "safer monkeypatching for Node.js",
};

const turtle = {
    name: "node",
    age: 9,
};

shimmer.wrap(fish, "name", (originalName) => {
    return originalName + originalName;
});

shimmer.massWrap([fish, turtle], ["age"], (originalAge) => {
    return Math.pow(originalAge, 2);
});

shimmer.unwrap(fish, "name");

shimmer.massUnwrap([fish, turtle], ["age"]);

// The following may look weird and unrelated to the package but shimmer had a global type definition that broke the following code:
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/69966
function randomFunction() {}
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function randomFunctionThatTakesFunction(f: Required<Function>) {
    return f;
}
randomFunctionThatTakesFunction(randomFunction);
