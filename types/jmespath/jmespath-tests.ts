import jmespath = require("jmespath");

const a = jmespath.search({foo: {bar: {baz: [0, 1, 2, 3, 4]}}}, "foo.bar.baz[2]");
const b = jmespath.search({foo: {bar: {baz: [0, 1, 2, 3, 4]}}}, "foo.bar");
const c = jmespath.search({foo: [{first: "a", last: "b"}, {first: "c", last: "d"}]}, "foo[*].first");
const d = jmespath.search({foo: [{age: 20}, {age: 25}, {age: 30}, {age: 35}, {age: 40}]}, "foo[?age > `30`]");
