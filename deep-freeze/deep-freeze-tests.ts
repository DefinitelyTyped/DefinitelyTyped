/// <reference path="deep-freeze.d.ts" />

import df = require('deep-freeze');

class Foo {
	foo: string;
}
var foo:Foo = df(new Foo());
