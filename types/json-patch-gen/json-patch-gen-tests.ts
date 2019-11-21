import diff = require("json-patch-gen");

const assertEqual = (a: object, b: object) => JSON.stringify(a) === JSON.stringify(b);
const assertLength = (a: any[], b: number) => a.length === b;

assertLength(diff({a: "a"}, {a: "a", b: "b"}), 1);
assertEqual(diff({a: "a"}, {a: "a", b: "b"})[0], {
  op: "add",
  path: "/b",
  value: "b"
});

assertLength(diff({a: "a", b: "b"}, {a: "a"}), 1);
assertEqual(diff({a: "a", b: "b"}, {a: "a"})[0], {
  op: "remove",
  path: "/b"
});

assertLength(diff({a: "a"}, {a: "b"}), 1);
assertEqual(diff({a: "a"}, {a: "b"})[0], {
  op: "replace",
  path: "/a",
  value: "b"
});
