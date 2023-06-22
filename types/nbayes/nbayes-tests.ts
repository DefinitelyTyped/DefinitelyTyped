import nbayes = require('nbayes');

// test type exports
type Cls = nbayes.Classifier;
type Doc = nbayes.Document;

nbayes.stringToDoc('amazing, awesome movie!! Yeah!! Oh boy.'); // $ExpectType Document

const c = nbayes(); // $ExpectType Classifier
c.learn('happy', nbayes.stringToDoc('amazing, awesome movie!! Yeah!! Oh boy.')); // $ExpectType Classifier
c.classify(nbayes.stringToDoc('awesome, cool, amazing!! Yay.')); // $ExpectType string
c.probabilities(nbayes.stringToDoc('awesome, cool, amazing!! Yay.')); // $ExpectType { [key: string]: number; }
c.prior('happy'); // $ExpectType number
c.likelihood('happy', nbayes.stringToDoc('awesome, cool, amazing!! Yay.')); // $ExpectType number

const doc = nbayes.createDoc(); // $ExpectType Document
doc.set('foo', 2); // $ExpectType Document
doc.add('bar'); // $ExpectType Document
doc.increase('bar', 2); // $ExpectType Document
doc.has('FOO'); // $ExpectType boolean
doc.get('foo'); // $ExpectType number
doc.sum(); // $ExpectType number
doc.words(); // $ExpectType string[]
doc.addBagOfWords(doc); // $ExpectType Document
doc.addWords(['foo']); // $ExpectType Document
doc.addWords(new Set(['foo'])); // $ExpectType Document
