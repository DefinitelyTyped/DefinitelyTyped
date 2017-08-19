import chai = require('chai');
import chaiSubset = require('chai-subset');

chai.use(chaiSubset);
const { assert, expect } = chai;

function test_containSubset() {
    const obj = {
        a: 'b',
        c: 'd',
        e: {
            foo: 'bar',
            baz: {
                qux: 'quux'
            }
        }
    };

    expect(obj).to.containSubset({
        a: 'b',
        e: {
            baz: {
                qux: 'quux'
            }
        }
    });

    obj.should.containSubset({ a: 'b' });

    assert.containSubset(obj, { a: 'b' });
}

function test_notContainSubset() {
    const obj = {
        a: 'b',
        c: 'd',
        e: {
            foo: 'bar',
            baz: {
                qux: 'quux'
            }
        }
    };

    expect(obj).to.not.containSubset({ g: 'whatever' });
    obj.should.not.containSubset({ g: 'whatever' });
}

function test_arrayContainSubset() {
    const list = [{a: 'a', b: 'b'}, {v: 'f', d: {z: 'g'}} ];

    expect(list).to.containSubset([{a: 'a',  b: 'b'}]);
    list.should.containSubset([{a: 'a',  b: 'b'}]);
    assert.containSubset(list, [{a: 'a',  b: 'b'}]);
}

function test_arrayNotContainSubset() {
    const list = [{a: 'a', b: 'b'}, {v: 'f', d: {z: 'g'}} ];

    expect(list).not.to.containSubset([{a: 'a', b: 'bd'}]);
    list.should.not.containSubset([{a: 'a', b: 'bd'}]);
}
