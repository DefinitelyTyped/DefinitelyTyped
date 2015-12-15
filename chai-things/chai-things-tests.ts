/// <reference path="chai-things.d.ts" />

import chai = require('chai');
import chaiThings = require('chai-things');

chai.use(chaiThings);

function test_somethingSyntax() {
    [].should.not.include.something();
    [].should.not.include.something.that.equals(1);

    var array = [{ a: 1 }, { b: 2 }];
    array.should.include.something();
    array.should.include.something.that.deep.equals({ b: 2 });
    array.should.include.something.that.not.deep.equals({ b: 2 });
    array.should.not.include.something.that.deep.equals({ c: 3 });
    array.should.include.something.that.not.deep.equals({ c: 3 });
    array.should.include.something.with.property('b', 2);
    array.should.not.include.something.with.property('b', 3);

    var array2 = [{ a: 'b' }, { a: 'b' }];
    array2.should.include.something.that.have.property("a");
    array2.should.include.something.that.have.property("a").not.equal("d");
}

function test_somethingVariantsSyntax() {
    [].should.not.include.any();
    [].should.not.include.any.that.deep.equal({ b: 2 });

    var array = [{ a: 1 }, { b: 2 }];
    array.should.include.a.thing();
    array.should.include.a.thing.that.deep.equals({ b: 2 });
    array.should.include.an.item();
    array.should.include.an.item.that.deep.equals({ b: 2 });
    array.should.include.one.that.deep.equals({ b: 2 });
    array.should.include.some();
    array.should.include.some.that.deep.equal({ b: 2 });
}

function test_allSyntax() {
    [].should.all.equal(1);
    [].should.all.not.equal(1);

    var array = [1, 1];
    array.should.all.equal(1);
    array.should.all.not.equal(2);
    array.should.not.all.equal(2);
    array.should.not.all.not.equal(1);

    var array2 = [1, 2];
    array2.should.not.all.equal(1);
    array2.should.not.all.equal(2);
    array2.should.not.all.not.equal(1);
    array2.should.not.all.not.equal(2);

    var array3 = [{ a: 'b' }, { a: 'c' }];
    array3.should.all.have.property("a");
    array3.should.all.have.property("a").not.equal("d");
}