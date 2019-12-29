import df = require('deep-freeze');

class Foo {
    foo: string;
}
const foo = df(new Foo());
const items = df([{id: 0, name: 'first'}]);
const functionTest = df({id: 0, name: 'first', update: (blah: boolean) => blah});

functionTest.update(true);
