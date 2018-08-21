import { parse, parseExpression } from "@babel/parser";

declare function assert(expr: boolean): void;

const code = `function square(n) {
  return n * n;
}`;

const node = parse(code);
assert(node.type === "File");
assert(node.start === 0);
assert(node.end === 38);
assert(!!node.loc && node.loc.start > node.loc.end);

parse(code, {
  sourceType: "module", // default: "script"
  plugins: ["jsx"] // default: []
});
