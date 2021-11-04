import get = require("get-value");
const obj = { a: { b: { c: { d: "foo" } } } };

get(obj);
get(obj, "a");
get(obj, "a.b");
get(obj, "a.b.c");
get(obj, "a.b.c.d");
get(obj, ['a']);
get(obj, ['a', 'b', 'c']);
get(obj, ['a', 'b', 'c', 'd']);

{
    const isEnumerable = Object.prototype.propertyIsEnumerable;
    const options: get.Options = {
        isValid: (key, obj) => isEnumerable.call(obj, key) || typeof obj[key] === "string",
    };

    const obj = {};
    Object.defineProperty(obj, 'foo', { value: 'bar', enumerable: false });

    get(obj, 'foo', options);
    get({}, 'hasOwnProperty', options);
    get({}, 'constructor', options);
}
