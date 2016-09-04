/// <reference path="chai-string.d.ts" />
/// <reference path="../mocha/mocha.d.ts" />
/// <reference path="../node/node.d.ts" />

var should = chai.should();
var assert = chai.assert;
var expect = chai.expect;

var chai_string = require('chai-string');
chai.use(chai_string);

describe('chai-string', function() {

  describe('#startsWith', function() {

    it('check that', function() {
      var obj = { foo: 'hello world' };
      expect(obj).to.have.property('foo').that.startsWith('hello');
    });

  });

  describe('#startWith', function() {

    it('should return true', function() {
      var str = 'abcdef',
        prefix = 'abc';
      str.should.startWith(prefix);
    });

    it('should return false', function() {
      var str = 'abcdef',
        prefix = 'cba';
      str.should.not.startWith(prefix);
    });

  });

  describe('#endWith', function() {

    it('should return true', function() {
      var str = 'abcdef',
        suffix = 'def';
      str.should.endWith(suffix);
    });

    it('should return false', function() {
      var str = 'abcdef',
        suffix = 'fed';
      str.should.not.endWith(suffix);
    });

  });

  describe('tdd alias', function() {

    beforeEach(function() {
      this.str = 'abcdef';
      this.str2 = 'a\nb\tc\r d  ef';
    });

    it('.startsWith', function() {
      assert.startsWith(this.str, 'abc');
    });

    it('.notStartsWith', function() {
      assert.notStartsWith(this.str, 'cba');
    });

    it('.endsWith', function() {
      assert.endsWith(this.str, 'def');
    });

    it('.notEndsWith', function() {
      assert.notEndsWith(this.str, 'fed');
    });

    it('.equalIgnoreCase', function() {
      assert.equalIgnoreCase(this.str, 'AbCdEf');
    });

    it('.notEqualIgnoreCase', function() {
      assert.notEqualIgnoreCase(this.str, 'abDDD');
    });

    it('.equalIgnoreSpaces', function() {
      assert.equalIgnoreSpaces(this.str, this.str2);
    });

    it('.notEqualIgnoreSpaces', function() {
      assert.notEqualIgnoreSpaces(this.str, this.str2 + 'g');
    });

    it('.singleLine', function() {
      assert.singleLine(this.str);
    });

    it('.notSingleLine', function() {
      assert.notSingleLine("abc\ndef");
    });

    it('.reverseOf', function() {
      assert.reverseOf(this.str, 'fedcba');
    });

    it('.notReverseOf', function() {
      assert.notReverseOf(this.str, 'aaaaa');
    });

    it('.palindrome', function() {
      assert.palindrome('abcba');
      assert.palindrome('abccba');
      assert.palindrome('');
    });

    it('.notPalindrome', function() {
      assert.notPalindrome(this.str);
    });

    it('.entriesCount', function() {
      assert.entriesCount('abcabd', 'ab', 2);
      assert.entriesCount('ababd', 'ab', 2);
      assert.entriesCount('abab', 'ab', 2);
      assert.entriesCount('', 'ab', 0);
    });

  });
});
