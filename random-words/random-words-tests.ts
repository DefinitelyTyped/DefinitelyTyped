

/// <reference path="random-words.d.ts">


var assert = require('assert');




var randomWords = require('../index.js');







describe('random-words', function () {


   it('should return one word when called with no arguments', function () {


       var word = randomWords();


       assert.ok(typeof(word) === 'string', 'word is a string');


       assert.ok(word.length, 'word is not empty');


       assert.ok(word.indexOf(' ') === -1, 'word does not contain spaces');


   });


   it('should return 5 words when called with the number 5', function () {


       var words = randomWords(5);


       assert.ok(words.length === 5, 'contains 5 elements');


   });


   it('should return between 5 and 10 words when called with min: 5 and max: 10', function () {


       var words = randomWords({min: 5, max: 10});


       assert.ok((words.length >= 5) && (words.length <= 10));


   });


   it('returns result of variable length when called with min: 5 and max: 10', function () {


       var lengths = {};


       for (var i = 0; (i < 100); i++) {


           var words = randomWords({min: 5, max: 10});


           lengths[words.length] = true;


       }


       assert.ok(Object.keys(lengths).length > 1, 'result varies in length');


   });


   it('should return 5 space separated words when join is used with exactly: 5', function () {


       var phrase = randomWords({exactly: 5, join: ' '});


       assert.ok((typeof(phrase) === 'string'), 'result is a string');


       assert.ok(phrase.match(/\S/), 'result contains text, not just spaces');


       phrase = phrase.replace(/[\S]/g, '');


       assert.ok(phrase.length === 4, 'result contains 4 spaces joining the 5 words');


   });


   it('should return 5 concatenated words when join is used with an empty string and exactly: 5', function () {


       var phrase = randomWords({exactly: 5, join: ''});


       assert.ok((typeof(phrase) === 'string'), 'result is a string');


       assert.ok(phrase.match(/\w/), 'result contains text, no spaces');


   });


   it('should return 5 words when called with exactly: 5 and join: false', function () {


       var words = randomWords({exactly: 5, join: false});


       assert.ok(words.length === 5, 'contains 5 elements');


   });


   it('should return 5 words when called with exactly: 5 and join: null', function () {


       var words = randomWords({exactly: 5, join: null});


       assert.ok(words.length === 5, 'contains 5 elements');


   });


   it('should only return words within the maxLength', function () {


       var maxWordSize = 4


       var words = randomWords({exactly: 10000, maxLength: maxWordSize});


       words.forEach(word => {


           assert.ok(word.length <= maxWordSize && word.length > 0, 'result is smaller than max size: ' + maxWordSize)


       });


   });


   it('should return 5 space separated words for each string if wordsPerString is set to 5 and exactly > 1', function () {


       var words = randomWords({exactly: 10, wordsPerString: 5});


       words.forEach(string => {


          var stringSplitted = string.split(' ');


           assert.ok(stringSplitted.length === 5, 'the i-th string contains 5 words');


       });


   });


   it('should reuturn 5 words separated by a separator for each string if wordsPerString > 1, separator is defined as a string and exactly > 1', function () {


       const separator = '-';


       var words = randomWords({exactly: 10, wordsPerString: 5, separator});


       words.forEach(string => {


         var  stringSplitted = string.split(separator);


           assert.ok(typeof(separator) === 'string', 'separator is a string');


           assert.ok(stringSplitted.length === 5, 'the i-th string contains 5 words');


       });


   });


   it('should return styled strings if formatter is defined as a function that returns a string', function () {


       var formatter = (word) => word.toUpperCase();


       assert.ok(typeof(formatter) === 'function', 'formatter is a function');


       assert.ok(typeof(formatter('test')) === 'string', 'formatter returns a string');


       var words = randomWords({exactly: 10, formatter});


       words.forEach(word => {


           assert.ok(word === word.toUpperCase(), 'word is formatted')


       });


   });


});

