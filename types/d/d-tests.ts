import d = require('d');
import autoBind = require('d/auto-bind');
import lazy = require('d/lazy');

class Account {}
Object.defineProperties(Account.prototype, {
    deposit: d(() => {}),
    withdraw: d(() => {}),
    balance: d.gs(() => {}),
});

d('foo'); // $ExpectType PropertyDescriptor
d('foo', { enumerable: true }); // $ExpectType PropertyDescriptor
d('c', 'foo'); // $ExpectType PropertyDescriptor
d('c', 'foo', { enumerable: true }); // $ExpectType PropertyDescriptor

d('c', 'foo'); // $ExpectType PropertyDescriptor
d('e', 'foo'); // $ExpectType PropertyDescriptor
d('w', 'foo'); // $ExpectType PropertyDescriptor
d('ce', 'foo'); // $ExpectType PropertyDescriptor
d('cw', 'foo'); // $ExpectType PropertyDescriptor
d('ew', 'foo'); // $ExpectType PropertyDescriptor
d('cew', 'foo'); // $ExpectType PropertyDescriptor
d('foo', 'foo'); // $ExpectError

d.gs('c', { enumerable: true }); // $ExpectType PropertyDescriptor
d.gs('c', () => ({}), { enumerable: true }); // $ExpectType PropertyDescriptor
d.gs(() => ({})); // $ExpectType PropertyDescriptor
d.gs(null, () => ({})); // $ExpectType PropertyDescriptor
d.gs(undefined, () => ({})); // $ExpectType PropertyDescriptor
d.gs('c', () => ({})); // $ExpectType PropertyDescriptor
d.gs('c', null, () => ({})); // $ExpectType PropertyDescriptor
d.gs('c', undefined, () => ({})); // $ExpectType PropertyDescriptor
d.gs('c', null, () => ({}), { enumerable: true }); // $ExpectType PropertyDescriptor
d.gs('c', undefined, () => ({}), { enumerable: true }); // $ExpectType PropertyDescriptor

d.gs('c', () => ({})); // $ExpectType PropertyDescriptor
d.gs('e', () => ({})); // $ExpectType PropertyDescriptor
d.gs('ce', () => ({})); // $ExpectType PropertyDescriptor
d.gs('cew', () => ({})); // $ExpectError

class Foo {
    _count: number;
}

Object.defineProperties(
    Foo.prototype,
    autoBind({
        increment: d(function(this: any) {
            ++this._count;
        }),
    })
);
autoBind(
    {
        increment: d(function(this: any) {
            ++this._count;
        }),
    },
    { overwriteDefinition: true }
);
autoBind(
    {
        increment: d(function(this: any) {
            ++this._count;
        }),
    },
    {
        resolveContext(ctx: any) {
            return ctx;
        },
    }
);

Object.defineProperties(
    Foo.prototype,
    lazy({
        items: d(() => {
            return [];
        }),
    })
);

const foo = new Foo();
(foo as any).items.push(1, 2); // foo.items array created and defined directly on foo
