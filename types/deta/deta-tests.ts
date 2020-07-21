import { Deta } from 'deta';

const deta = Deta('abcdef');
const db = deta.Base('name');

async function test() {
    await db.put({ foo: 'bar', baz: [ 123, 'uwu' ], lol: { key: 'value' } });
    await db.put(12345, 'key');
    await db.putMany([
        { foo: 'bar' },
        { foo2: 123 }
    ]);

    await db.insert({ foo: 12345 }, 'requiredKey');
    await db.get('key');

    const items = await db.fetch({
        key: 'value',
        otherKey: { nestedKey: 12345 }
    });
    for await (const subGroup of items) {
        for (const item of subGroup) {}
    }

    await db.update({
        key1: 123,
        key2: db.util.append('abc'),
        key3: db.util.prepend('abc'),
        key4: db.util.increment(),
        key5: db.util.increment(-1),
        key6: db.util.trim()
    }, 'key');
}

test();
