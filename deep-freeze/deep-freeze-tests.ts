/// <reference path="deep-freeze.d.ts" />

import { default as deepFreeze } from "deep-freeze";

class Foo {
	foo: string;
}
var foo:Foo = deepFreeze(new Foo());
