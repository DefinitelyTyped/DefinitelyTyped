
var should = chai.should();
var assert = chai.assert;
var expect = chai.expect;

import chai_string = require("chai-string");
chai.use(chai_string);

// Stub mocha functions
const {describe, it, before, after, beforeEach, afterEach} = null as any as {
    [s: string]: ((s: string, cb: (done: any) => void) => void) & ((cb: (done: any) => void) => void) & {only: any, skip: any};
};

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


  describe('#containIgnoreSpaces', function () {

    it('should return true', function () {
      var str1 = '1234abcdef56',
        str2 = '1234a\nb\tc\r d  ef56';
      str1.should.containIgnoreSpaces(str2);
    });

    it('should return true (2)', function () {
      var str1 = 'abcdef',
        str2 = 'a\nb\tc\r d  ef';
      str1.should.containIgnoreSpaces(str2);
    });

    it('should return false', function () {
      var str1 = 'abdef',
        str2 = 'a\nb\tc\r d  ef';
      str1.should.not.containIgnoreSpaces(str2);
    });
  });

  describe('#containIgnoreCase', function () {

    it('should return true', function () {
      var str1 = 'abcdef',
        str2 = 'cDe';
      str1.should.containIgnoreCase(str2);
    });

    it('should return true (2)', function () {
      'abcdef'.should.containIgnoreCase('cDe');
    });

    it('should return true (3)', function () {
      var str1 = 'abcdef',
        str2 = 'AbCdeF';
      str1.should.containIgnoreCase(str2);
    });

    it('should return false', function () {
      var str1 = 'abcdef',
        str2 = 'efg';
      str1.should.not.containIgnoreCase(str2);
    });

    it('should return false (3)', function () {
      var str1 = 'abcdef',
        str2 = 'zabcd';
      str1.should.not.containIgnoreCase(str2);
    });
  });

  describe('#indexOf', function () {

    it('should return true', function () {
      var str = 'abcabd',
        substr = 'ab',
        index = 0;
      str.indexOf(substr, index).should.be.true;
    });

    it('should return true (2)', function () {
      var str = 'abcabd',
        substr = 'ca',
        index = 2;
      str.indexOf(substr, index).should.be.true;
    });

    it('should return true (3)', function () {
      var str = 'ababab',
        substr = 'ba',
        index = 1;
      str.indexOf(substr, index).should.be.true;
    });

    it('should return false', function () {
      var str = 'abcaab',
        substr = 'da',
        index = 1;
      str.indexOf(substr, index).should.be.false;
    });
  });

  describe('tdd alias', function() {
    let str: string;
    let str2: string;

    beforeEach(function() {
      str = 'abcdef';
      str2 = 'a\nb\tc\r d  ef';
    });

    it('.startsWith', function() {
      assert.startsWith(str, 'abc');
    });

    it('.notStartsWith', function() {
      assert.notStartsWith(str, 'cba');
    });

    it('.endsWith', function() {
      assert.endsWith(str, 'def');
    });

    it('.notEndsWith', function() {
      assert.notEndsWith(str, 'fed');
    });

    it('.equalIgnoreCase', function() {
      assert.equalIgnoreCase(str, 'AbCdEf');
    });

    it('.notEqualIgnoreCase', function() {
      assert.notEqualIgnoreCase(str, 'abDDD');
    });

    it('.equalIgnoreSpaces', function() {
      assert.equalIgnoreSpaces(str, str2);
    });

    it('.notEqualIgnoreSpaces', function() {
      assert.notEqualIgnoreSpaces(str, str2 + 'g');
    });

    it('.containIgnoreSpaces', function () {
      assert.containIgnoreSpaces(str, str2);
    });

    it('.notContainIgnoreSpaces', function () {
      assert.notContainIgnoreSpaces(str, str2 + 'g');
    });

    it('.singleLine', function() {
      assert.singleLine(str);
    });

    it('.notSingleLine', function() {
      assert.notSingleLine("abc\ndef");
    });

    it('.reverseOf', function() {
      assert.reverseOf(str, 'fedcba');
    });

    it('.notReverseOf', function() {
      assert.notReverseOf(str, 'aaaaa');
    });

    it('.palindrome', function() {
      assert.palindrome('abcba');
      assert.palindrome('abccba');
      assert.palindrome('');
    });

    it('.notPalindrome', function() {
      assert.notPalindrome(str);
    });

    it('.entriesCount', function() {
      assert.entriesCount('abcabd', 'ab', 2);
      assert.entriesCount('ababd', 'ab', 2);
      assert.entriesCount('abab', 'ab', 2);
      assert.entriesCount('', 'ab', 0);
    });

    it('.indexOf', function () {
      assert.indexOf('abcabd', 'ab', 0);
      assert.indexOf('abcabd', 'ca', 2);
      assert.indexOf('ababab', 'ba', 1);
      assert.indexOf('ababab', 'ba', 1);
      'ababab'.indexOf('ba', 1).should.be.true;
    });

  });
});
