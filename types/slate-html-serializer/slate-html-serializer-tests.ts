import Html, { Rule } from "slate-html-serializer";

const myRule: Rule = {
    deserialize: (el: Element, next) => {},
    serialize: (obj, children) => null
};
const serializer = new Html({
    rules: [myRule]
});
