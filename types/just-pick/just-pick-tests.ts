import pick = require("just-pick");

const a = "a";
const b = "b";
const c = "c";
const obj = { a, b };

pick(obj, []); // $ExpectType Pick<{ a: string; b: string; }, never>
pick(obj, [a]); // $ExpectType Pick<{ a: string; b: string; }, "a">
pick(obj, [a, a]); // $ExpectType Pick<{ a: string; b: string; }, "a">
pick(obj, [a, b]); // $ExpectType Pick<{ a: string; b: string; }, "a" | "b">
pick(obj, [a, b, c]); // $ExpectError

pick(obj, a); // $ExpectType Pick<{ a: string; b: string; }, "a">
pick(obj, a, a); // $ExpectType Pick<{ a: string; b: string; }, "a">
pick(obj, a, b); // $ExpectType Pick<{ a: string; b: string; }, "a" | "b">
pick(obj, a, b, c); // $ExpectError

pick(); // $ExpectError
pick(obj); // $ExpectError
pick(obj, 0); // $ExpectError
pick(obj, false); // $ExpectError
pick(obj, null); // $ExpectError
pick(obj, undefined); // $ExpectError
pick(obj, {}); // $ExpectError
pick(obj, () => {}); // $ExpectError
