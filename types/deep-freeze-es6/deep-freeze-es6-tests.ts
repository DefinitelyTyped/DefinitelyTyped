import * as deepFreeze from "deep-freeze-es6";

class Foo {
    foo: string;
}
const foo: Foo = deepFreeze(new Foo());
const foo2: Foo = deepFreeze({foo: "bar"});
const obj: object = deepFreeze({count: 2});
const items: Array<{id: number, name: string}> = deepFreeze([{id: 0, name: "first"}]);
const map: Map<string, number> = deepFreeze(new Map());
const set: Set<string> = deepFreeze(new Set());
