import { evaluate } from "./index";

const tree = {
    type: "BinaryExpression",
    operator: "==",
    left: {
        type: "Identifier",
        name: "a",
    },
    right: {
        type: "Literal",
        value: 3,
        raw: "3",
    },
};

const context = { a: 3 };
const options = {};

(async () => {
    await evaluate(tree, context, options); // $ExpectType boolean
})();

evaluate.sync(tree, context, options); // $ExpectType boolean
