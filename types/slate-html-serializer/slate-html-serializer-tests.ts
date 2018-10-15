import Html, { Rule } from "slate-html-serializer";

const myRule: Rule = {
    deserialize: (el, next) => {},
    serialize: () => null
};

const serializer = new Html({
    rules: [myRule]
});
