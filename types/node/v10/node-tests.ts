import * as assert from 'assert';
import util = require('util');

/**
 * The `expectType` function from https://www.npmjs.com/package/tsd,
 * except instead of returning `void`, it returns `T`.
 */
export declare function expectType<T>(value: T): T;

assert(true, "it's working");

assert.ok(true, 'inner functions work as well');

assert.throws(() => {});
assert.throws(() => {}, /Regex test/);
assert.throws(
    () => {},
    () => {},
    'works wonderfully',
);

assert['fail'](true, true, 'works like a charm');

{
    const a = null as any;
    assert.ifError(a);
    a; // $ExpectType null
}

{
    const a = true as boolean;
    assert(a);
    a; // $ExpectType true
}

{
    const a = 13 as number | null | undefined;
    assert(a);
    a; // $ExpectType number
}

{
    const a = true as boolean;
    assert.ok(a);
    a; // $ExpectType true
}

{
    const a = 13 as number | null | undefined;
    assert.ok(a);
    a; // $ExpectType number
}

{
    const a = 'test' as any;
    assert.strictEqual(a, 'test');
    a; // $ExpectType string
}

{
    const a = { b: 2 } as any;
    assert.deepStrictEqual(a, { b: 2 });
    a; // $ExpectType { b: number; }
}

{
    const o = {
        [util.inspect.custom](): string { return "hi"; }
    };
}

{
    const a = 1;
    assert.deepStrictEqual(a, '1'); // $ExpectError
}
