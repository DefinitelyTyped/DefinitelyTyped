import stringify = require("json-stringify-nice");

const obj = {
    z: 1,
    y: "z",
    obj: { a: {}, b: "x" },
    a: { b: 1, a: { nested: true } },
    yy: "a",
};

function replacer(key: string, val: any) {
    return key === "a"
        ? {
              hello: "📞 yes",
              "this is": "🐕",
              ...val,
          }
        : val;
}

stringify(obj); // $ExpectType string
stringify(obj, ["z", "yy", "obj"]); // $ExpectType string
stringify(obj, replacer, "📞🐶"); // $ExpectType string
