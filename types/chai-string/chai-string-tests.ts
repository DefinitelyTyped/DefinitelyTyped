
/// <reference types="mocha" />
import { assert, expect, should as makeShould, use } from "chai";
import chai_string = require("chai-string");

var should =  makeShould();

use(chai_string);

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

  });
});
