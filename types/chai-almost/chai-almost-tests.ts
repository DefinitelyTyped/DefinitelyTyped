import { expect, use } from 'chai';
import chaiAlmost = require('chai-almost');

// Normally, call use(chaiAlmost(...)) only once, this is just to check that TypeScript correctly handles both.
use(chaiAlmost(0.01)); // custom tolerance 0.01
use(chaiAlmost()); // default tolerance 1e-6 (= 0.000001)

expect(1.0000001).to.almost.equal(1);
expect(1.0000001).to.be.almost(1);
expect(1.0000001).almost.equals(1);

expect(1.0001).to.not.almost.equal(1);
expect(1.0001).to.not.be.almost(1);
expect(1.0001).not.almost.equals(1);

// Note the "not" in the following.
// Use deep equality checks to compare values inside of arrays and objects.
expect([1]).to.not.be.almost([1]);

const arrA = [1, [{ num: 2, name: "Douglas" }, 3]];
const arrB = [1.0000001, [{ num: 1.9999999, name: "Douglas" }, 2.9999996]];

expect(arrA).to.deep.almost.equal(arrB);
expect(arrA).to.be.deep.almost(arrB);
expect(arrA).deep.almost.equals(arrB);
expect(arrA).to.almost.eql(arrB);
expect(arrA).to.be.almost.eql(arrB);
expect(arrA).almost.eqls(arrB);

expect(1.001).to.be.almost(1, 0.01);
expect(1.001).to.not.be.almost(1, 0.0001);
expect([42]).to.be.deep.almost([42.3145], 0.5);
