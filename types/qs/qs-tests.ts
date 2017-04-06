import qs = require('qs');
import * as assert from "power-assert";

qs.stringify({ a: 'b' });
qs.stringify({ a: 'b', c: 'd' }, { delimiter: '&' });

qs.parse('a=b');
qs.parse('a=b&c=d', { delimiter: '&' });

() => {
    var obj = qs.parse('a=c');
    assert.deepEqual(obj, { a: 'c' });

    var str = qs.stringify(obj);
    assert.equal(str, 'a=c');
}

() => {
    var plainObject = qs.parse('a[hasOwnProperty]=b', { plainObjects: true });
    assert.deepEqual(plainObject, { a: { hasOwnProperty: 'b' } });
}

() => {
    var protoObject = qs.parse('a[hasOwnProperty]=b', { allowPrototypes: true });
    assert.deepEqual(protoObject, { a: { hasOwnProperty: 'b' } });
}

() => {
    assert.deepEqual(qs.parse('a%5Bb%5D=c'), {
        a: { b: 'c' }
    });
}

() => {
    assert.deepEqual(qs.parse('foo[bar][baz]=foobarbaz'), {
        foo: {
            bar: {
                baz: 'foobarbaz'
            }
        }
    });
}

() => {
    var expected = {
        a: {
            b: {
                c: {
                    d: {
                        e: {
                            f: {
                                '[g][h][i]': 'j'
                            }
                        }
                    }
                }
            }
        }
    };
    var string = 'a[b][c][d][e][f][g][h][i]=j';
    assert.deepEqual(qs.parse(string), expected);
}

() => {
    var deep = qs.parse('a[b][c][d][e][f][g][h][i]=j', { depth: 1 });
    assert.deepEqual(deep, { a: { b: { '[c][d][e][f][g][h][i]': 'j' } } });
}

() => {
    var limited = qs.parse('a=b&c=d', { parameterLimit: 1 });
    assert.deepEqual(limited, { a: 'b' });
}

() => {
    var delimited = qs.parse('a=b;c=d', { delimiter: ';' });
    assert.deepEqual(delimited, { a: 'b', c: 'd' });
}

() => {
    var regexed = qs.parse('a=b;c=d,e=f', { delimiter: /[;,]/ });
    assert.deepEqual(regexed, { a: 'b', c: 'd', e: 'f' });
}

() => {
    var withDots = qs.parse('a.b=c', { allowDots: true });
    assert.deepEqual(withDots, { a: { b: 'c' } });
}

() => {
  var withArray = qs.parse('a[]=b&a[]=c');
  assert.deepEqual(withArray, { a: ['b', 'c'] });
}

() => {
    var withIndexes = qs.parse('a[1]=c&a[0]=b');
    assert.deepEqual(withIndexes, { a: ['b', 'c'] });
}

() => {
    var noSparse = qs.parse('a[1]=b&a[15]=c');
    assert.deepEqual(noSparse, { a: ['b', 'c'] });
}

() => {
    var withEmptyString = qs.parse('a[]=&a[]=b');
    assert.deepEqual(withEmptyString, { a: ['', 'b'] });

    var withIndexedEmptyString = qs.parse('a[0]=b&a[1]=&a[2]=c');
    assert.deepEqual(withIndexedEmptyString, { a: ['b', '', 'c'] });
}

() => {
    var withMaxIndex = qs.parse('a[100]=b');
    assert.deepEqual(withMaxIndex, { a: { '100': 'b' } });
}

() => {
    var withArrayLimit = qs.parse('a[1]=b', { arrayLimit: 0 });
    assert.deepEqual(withArrayLimit, { a: { '1': 'b' } });
}

() => {
    var noParsingArrays = qs.parse('a[]=b', { parseArrays: false });
    assert.deepEqual(noParsingArrays, { a: { '0': 'b' } });
}

() => {
    var mixedNotation = qs.parse('a[0]=b&a[b]=c');
    assert.deepEqual(mixedNotation, { a: { '0': 'b', b: 'c' } });
}

() => {
    var arraysOfObjects = qs.parse('a[][b]=c');
    assert.deepEqual(arraysOfObjects, { a: [{ b: 'c' }] });
}

() => {
    assert.equal(qs.stringify({ a: 'b' }), 'a=b');
    assert.equal(qs.stringify({ a: { b: 'c' } }), 'a%5Bb%5D=c');
}

() => {
    var unencoded = qs.stringify({ a: { b: 'c' } }, { encode: false });
    assert.equal(unencoded, 'a[b]=c');
}

() => {
    var encoded = qs.stringify({ a: { b: 'c' } }, {
        encoder: function (str) {
            // Passed in values `a`, `b`, `c`
            return // Return encoded string
        }
    })
}

() => {
    var decoded = qs.parse('x=z', {
        decoder: function (str) {
            // Passed in values `x`, `z`
            return // Return decoded string
        }
    })
}

() => {
    qs.stringify({ a: ['b', 'c', 'd'] });
    // 'a[0]=b&a[1]=c&a[2]=d'
}

() => {
    qs.stringify({ a: ['b', 'c', 'd'] }, { indices: false });
    // 'a=b&a=c&a=d'
}

() => {
    qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'indices' })
    // 'a[0]=b&a[1]=c'
    qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'brackets' })
    // 'a[]=b&a[]=c'
    qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'repeat' })
    // 'a=b&a=c'
}

() => {
    assert.equal(qs.stringify({ a: '' }), 'a=');
}

() => {
    assert.equal(qs.stringify({ a: null, b: undefined }), 'a=');
}

() => {
    assert.equal(qs.stringify({ a: 'b', c: 'd' }, { delimiter: ';' }), 'a=b;c=d');
}

() => {
    qs.stringify({ a: 'b', c: 'd', e: { f: new Date(123), g: [2] } }, { filter: function (prefix, value) {
        if (prefix == 'b') {
            // Return an `undefined` value to omit a property.
            return;
        }
        if (prefix == 'e[f]') {
            return value.getTime();
        }
        if (prefix == 'e[g][0]') {
            return value * 2;
        }
        return value;
    } });
    // 'a=b&c=d&e[f]=123&e[g][0]=4'
    qs.stringify({ a: 'b', c: 'd', e: 'f' }, { filter: ['a', 'e'] });
    // 'a=b&e=f'
    qs.stringify({ a: ['b', 'c', 'd'], e: 'f' }, { filter: ['a', 0, 2] });
}

() => {
    var withNull = qs.stringify({ a: null, b: '' });
    assert.equal(withNull, 'a=&b=');
}

() => {
    var equalsInsensitive = qs.parse('a&b=');
    assert.deepEqual(equalsInsensitive, { a: '', b: '' });
}

() => {
    var strictNull = qs.stringify({ a: null, b: '' }, { strictNullHandling: true });
    assert.equal(strictNull, 'a&b=');
}

() => {
    var parsedStrictNull = qs.parse('a&b=', { strictNullHandling: true });
    assert.deepEqual(parsedStrictNull, { a: null, b: '' });
}

() => {
    var nullsSkipped = qs.stringify({ a: 'b', c: null }, { skipNulls: true });
    assert.equal(nullsSkipped, 'a=b');
}

() => {
    var encoder = () => {};
    var shiftJISEncoded = qs.stringify({ a: 'こんにちは！' }, { encoder: encoder });
    assert.equal(shiftJISEncoded, 'a=%82%B1%82%F1%82%C9%82%BF%82%CD%81I');
}

() => {
    var decoder = () => {};
    var obj = qs.parse('a=%82%B1%82%F1%82%C9%82%BF%82%CD%81I', { decoder: decoder });
    assert.deepEqual(obj, { a: 'こんにちは！' });
}

() => {
    var sorted = qs.stringify({ a: 1, c: 3, b: 2 }, { sort: (a, b) => a.localeCompare(b) })
    assert.equal(sorted, 'a=1&b=2&c=3')
}
