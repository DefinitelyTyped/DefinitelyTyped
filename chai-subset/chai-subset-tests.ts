/// <reference path="chai-subset.d.ts" />

import chai = require('chai');
import chaiSubset = require('chai-subset');

chai.use(chaiSubset);
var expect = chai.expect;
var assert = chai.assert;

function test_containSubset() {
    var obj: Object = {
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
}

function test_notContainSubset() {
    var obj: Object = {
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
    var list: Array<Object> = [{a: 'a', b: 'b'}, {v: 'f', d: {z: 'g'}} ];

    expect(list).to.containSubset([{a:'a',  b: 'b'}]);
    list.should.containSubset([{a:'a',  b: 'b'}]);
}

function test_arrayNotContainSubset() {
    var list: Array<Object> = [{a: 'a', b: 'b'}, {v: 'f', d: {z: 'g'}} ];

    expect(list).not.to.containSubset([{a:'a', b: 'bd'}]);
    list.should.not.containSubset([{a:'a', b: 'bd'}]);
}
