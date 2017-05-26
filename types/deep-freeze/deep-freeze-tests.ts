import df = require('deep-freeze');

class Foo {
    foo: string;
}
const foo = df(new Foo());
const items = df([{id: 0, name: 'first'}]);
