// Example from https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md#babylon
import * as babylon from "babylon";
declare function assert(expr: boolean): void;

const code = `function square(n) {
  return n * n;
}`;

const node = babylon.parse(code);
assert(node.type === "File");
assert(node.start === 0);
assert(node.end === 38);
assert(node.loc.start > node.loc.end);

babylon.parse(code, {
  sourceType: "module", // default: "script"
  plugins: ["jsx"] // default: []
});
