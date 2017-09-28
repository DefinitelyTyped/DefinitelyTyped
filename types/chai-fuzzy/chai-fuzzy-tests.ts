
// tests taken from http://chaijs.com/plugins/chai-fuzzy

import chai = require('chai');
import chaiFuzzy = require('chai-fuzzy');

chai.use(chaiFuzzy);
var expect = chai.expect;
var assert = chai.assert;

/**
 * compare object attributes and values rather than checking to see if they're the same reference
 */
function like() {
	var subject = { a: 'a' };

	expect(subject).to.be.like({ a: 'a' });
	expect(subject).not.to.be.like({ x: 'x' });
	expect(subject).not.to.be.like({ a: 'a', b: 'b' });

	assert.like(subject, { a: 'a' });
	assert.notLike(subject, { x: 'x' });
	assert.notLike(subject, { a: 'a', b: 'b' });

	var subject2 = ['a'];

	expect(subject2).to.be.like(['a']);
	expect(subject2).not.to.be.like(['x']);
	expect(subject2).not.to.be.like(['a', 'b']);

	assert.like(subject2, ['a']);
	assert.notLike(subject2, ['x']);
	assert.notLike(subject2, ['a', 'b']);
}
