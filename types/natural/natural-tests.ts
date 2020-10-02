import natural = require('natural');

// Tokenizers
var tokenizer = new natural.WordTokenizer();
console.log(tokenizer.tokenize('your dog has fleas.'));

tokenizer = new natural.TreebankWordTokenizer();
console.log(tokenizer.tokenize("my dog hasn't any fleas."));
// [ 'my', 'dog', 'has', 'n\'t', 'any', 'fleas', '.' ]

tokenizer = new natural.RegexpTokenizer({ pattern: /\-/ });
console.log(tokenizer.tokenize('flea-dog'));
// [ 'flea', 'dog' ]

tokenizer = new natural.WordPunctTokenizer();
console.log(tokenizer.tokenize("my dog hasn't any fleas."));
// [ 'my',  'dog',  'hasn',  '\'',  't',  'any',  'fleas',  '.' ]

// String Distance
console.log(natural.JaroWinklerDistance('dixon', 'dicksonx'));
console.log(natural.JaroWinklerDistance('not', 'same'));

console.log(natural.LevenshteinDistance('ones', 'onez'));
console.log(natural.LevenshteinDistance('one', 'one'));

console.log(
    natural.LevenshteinDistance('ones', 'onez', {
        insertion_cost: 1,
        deletion_cost: 1,
        substitution_cost: 1,
    }),
);
// $ExpectType SubstringDistanceResult
natural.DamerauLevenshteinDistance('ones', 'onez', { search: true });
// $ExpectType number
natural.DamerauLevenshteinDistance('ones', 'onez', { search: false });
// $ExpectType number
natural.DamerauLevenshteinDistance('ones', 'onez');
// $ExpectType number | SubstringDistanceResult
natural.DamerauLevenshteinDistance('ones', 'onez', { search: Math.random() > 0.5 });

console.log(natural.DiceCoefficient('thing', 'thing'));
console.log(natural.DiceCoefficient('not', 'same'));

// Stemmers
console.log(natural.PorterStemmer.stem('words')); // stem a single word
console.log(natural.PorterStemmerRu.stem('падший'));
console.log(natural.PorterStemmerEs.stem('jugaría'));
console.log(natural.PorterStemmerFa.stem('jugaría'));
console.log(natural.PorterStemmerFr.stem('jugaría'));
console.log(natural.PorterStemmerIt.stem('jugaría'));
console.log(natural.PorterStemmerNo.stem('jugaría'));
console.log(natural.PorterStemmerPt.stem('jugaría'));

// Classifiers
var classifier = new natural.BayesClassifier();

classifier.addDocument('i am long qqqq', 'buy');
classifier.addDocument("buy the q's", 'buy');
classifier.addDocument('short gold', 'sell');
classifier.addDocument('sell gold', 'sell');

classifier.train();
console.log(classifier.classify('i am short silver'));
console.log(classifier.classify('i am long copper'));
var classifications = classifier.getClassifications('i am long copper');
classifications.forEach(function (classification) {
    var label = classification.label;
    var value = classification.value;
    console.log('label: ' + label + ', value: ' + value);
});
classifier.addDocument(['sell', 'gold'], 'sell');
classifier.events.on('trainedWithDocument', function (obj: any) {
    console.log(obj);
});
classifier.save('classifier.json', function (err, classifier) {
    // the classifier is saved to the classifier.json file!
});
natural.BayesClassifier.load('classifier.json', null, function (err, classifier) {
    console.log(classifier.classify('long SUNW'));
    console.log(classifier.classify('short SUNW'));
});
var classifier = new natural.BayesClassifier();
classifier.addDocument(['sell', 'gold'], 'sell');
classifier.addDocument(['buy', 'silver'], 'buy');
var raw = JSON.stringify(classifier);
var restoredClassifier = natural.BayesClassifier.restore(JSON.parse(raw));
console.log(restoredClassifier.classify('i should sell that'));

// Sentiment Analysis
var Analyzer = natural.SentimentAnalyzer;
var stemmer = natural.PorterStemmer;
var analyzer = new Analyzer('English', stemmer, 'afinn');
console.log(analyzer.getSentiment(['I', 'like', 'cherries']));
// 0.6666666666666666

// Phonetics
var metaphone = natural.Metaphone,
    soundEx = natural.SoundEx;

var wordA = 'phonetics';
var wordB = 'fonetix';
if (metaphone.compare(wordA, wordB)) console.log('they sound alike!');
console.log(metaphone.process('phonetics'));
console.log(metaphone.process('phonetics', 3));
var dm = natural.DoubleMetaphone;

var encodings = dm.process('Matrix');
console.log(encodings[0]);
console.log(encodings[1]);
if (soundEx.compare(wordA, wordB)) console.log('they sound alike!');

// Inflectors
var nounInflector = new natural.NounInflector();
console.log(nounInflector.pluralize('radius'));
console.log(nounInflector.singularize('beers'));
var countInflector = natural.CountInflector;
console.log(countInflector.nth(1));
console.log(countInflector.nth(111));
var verbInflector = new natural.PresentVerbInflector();
console.log(verbInflector.singularize('become'));
console.log(verbInflector.pluralize('becomes'));
var NGrams = natural.NGrams;
console.log(NGrams.bigrams('some words here'));
console.log(NGrams.bigrams(['some', 'words', 'here']));
console.log(NGrams.trigrams('some other words here'));
console.log(NGrams.trigrams(['some', 'other', 'words', 'here']));
console.log(NGrams.ngrams('some other words here for you', 4));
console.log(NGrams.ngrams(['some', 'other', 'words', 'here', 'for', 'you'], 4));
console.log(NGrams.ngrams('some other words here for you', 4, '[start]', '[end]'));
console.log(NGrams.ngrams('some other words here for you', 4, null, '[end]'));
var NGramsZH = natural.NGramsZH;
console.log(NGramsZH.bigrams('中文测试'));
console.log(NGramsZH.bigrams(['中', '文', '测', '试']));
console.log(NGramsZH.trigrams('中文测试'));
console.log(NGramsZH.trigrams(['中', '文', '测', '试']));
console.log(NGramsZH.ngrams('一个中文测试', 4));
console.log(NGramsZH.ngrams(['一', '个', '中', '文', '测', '试'], 4));
var TfIdf = natural.TfIdf,
    tfidf = new TfIdf();

tfidf.addDocument('this document is about node.');
tfidf.addDocument('this document is about ruby.');
tfidf.addDocument('this document is about ruby and node.');
tfidf.addDocument('this document is about node. it has node examples');

console.log('node --------------------------------');
tfidf.tfidfs('node', function (i, measure) {
    console.log('document #' + i + ' is ' + measure);
});

console.log('ruby --------------------------------');
tfidf.tfidfs('ruby', function (i, measure) {
    console.log('document #' + i + ' is ' + measure);
});
console.log(tfidf.tfidf('node', 0));
console.log(tfidf.tfidf('node', 1));
var tfidf = new TfIdf();
tfidf.addFileSync('data_files/one.txt');
tfidf.addFileSync('data_files/two.txt');
tfidf.addDocument('this document is about node.');
tfidf.addDocument('this document is about ruby.');
tfidf.addDocument('this document is about ruby and node.');

tfidf.tfidfs('node ruby', function (i, measure) {
    console.log('document #' + i + ' is ' + measure);
});
tfidf.addDocument(['document', 'about', 'node']);
tfidf.addDocument(['document', 'about', 'ruby']);
tfidf.addDocument(['document', 'about', 'ruby', 'node']);
tfidf.addDocument(['document', 'about', 'node', 'node', 'examples']);

tfidf.tfidfs(['node', 'ruby'], function (i, measure) {
    console.log('document #' + i + ' is ' + measure);
});
tfidf.listTerms(0 /*document index*/).forEach(function (item) {
    console.log(item.term + ': ' + item.tfidf);
});
var tfidf = new TfIdf();
tfidf.addDocument('document one', 'un');
tfidf.addDocument('document Two', 'deux');
var s = JSON.stringify(tfidf);
// save "s" to disk, database or otherwise

// assuming you pulled "s" back out of storage.
var tfidf = new TfIdf(JSON.parse(s));

// Tries
var Trie = natural.Trie;

var trie = new Trie();

// Add one string at a time
trie.addString('test');

// Or add many strings
trie.addStrings(['string1', 'string2', 'string3']);
console.log(trie.contains('test')); // true
console.log(trie.contains('asdf')); // false
console.log(trie.findPrefix('tester')); // ['test', 'er']
console.log(trie.findPrefix('string4')); // [null, '4']
console.log(trie.findPrefix('string3')); // ['string3', '']
trie.addString('tes');
trie.addString('est');
console.log(trie.findMatchesOnPath('tester')); // ['tes', 'test'];
console.log(trie.keysWithPrefix('string')); // ["string1", "string2", "string3"]
trie.contains('TEST'); // false

var ciTrie = new Trie(false);
ciTrie.addString('test');
ciTrie.contains('TEsT'); // true

// Digraph

var EdgeWeightedDigraph = natural.EdgeWeightedDigraph;
var digraph = new EdgeWeightedDigraph();
digraph.add(5, 4, 0.35);
digraph.add(5, 1, 0.32);
digraph.add(1, 3, 0.29);
digraph.add(6, 2, 0.4);
digraph.add(3, 6, 0.52);
digraph.add(6, 4, 0.93);
console.log(digraph.v());
console.log(digraph.e());

// ShortestPathTree

var ShortestPathTree = natural.ShortestPathTree;
var spt = new ShortestPathTree(digraph, 5);
console.log(spt.getDistTo(4));
console.log(spt.hasDistTo(4));
console.log(spt.hasDistTo(5));
console.log(spt.pathTo(4));

var ShortestPathTree = natural.ShortestPathTree;
var spt = new ShortestPathTree(digraph, 5);
console.log(spt.getDistTo(4));
console.log(spt.hasDistTo(4));
console.log(spt.hasDistTo(5));
console.log(spt.pathTo(4));

// WordNet

var wordnet = new natural.WordNet();

wordnet.lookup('node', function (results) {
    results.forEach(function (result) {
        console.log('------------------------------------');
        console.log(result.synsetOffset);
        console.log(result.pos);
        console.log(result.lemma);
        console.log(result.synonyms);
        console.log(result.pos);
        console.log(result.gloss);
    });
});
var wordnet = new natural.WordNet();

wordnet.get(4424418, 'n', function (result) {
    console.log('------------------------------------');
    console.log(result.lemma);
    console.log(result.pos);
    console.log(result.gloss);
    console.log(result.synonyms);
});
var wordnet = new natural.WordNet('/my/wordnet/dict');

// Spellcheck

var corpus = ['something', 'soothing'];
var spellcheck = new natural.Spellcheck(corpus);
spellcheck.isCorrect('cat'); // false
spellcheck.getCorrections('soemthing', 1); // ['something']
spellcheck.getCorrections('soemthing', 2); // ['something', 'soothing']

// POS Tagger

var rulesFilename = 'fileName';
var lexiconFilename = 'fileName';
var defaultCategory = 'N';

var lexicon = new natural.Lexicon(lexiconFilename, defaultCategory);
var rules = new natural.RuleSet(rulesFilename);
var tagger = new natural.BrillPOSTagger(lexicon, rules);

var sentence = ['I', 'see', 'the', 'man', 'with', 'the', 'telescope'];
tagger.tag(sentence);
