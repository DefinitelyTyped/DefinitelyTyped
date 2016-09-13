// Type definitions for Natural 0.2.1
// Project: https://github.com/NaturalNode/natural
// Definitions by: Dylan R. E. Moonfire <https://github.com/dmoonfire/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

declare module "natural" {
  import events = require("events");

  interface Tokenizer {
    tokenize(text: string): string[];
  }
  class WordTokenizer implements Tokenizer {
    tokenize(text: string): string[];
  }
  class AggressiveTokenizer implements Tokenizer {
    tokenize(text: string): string[];
  }
  class TreebankWordTokenizer implements Tokenizer {
    tokenize(text: string): string[];
  }
  interface RegexTokenizerOptions {
    pattern: RegExp;
    discardEmpty?: boolean;
  }
  class RegexpTokenizer implements Tokenizer {
    constructor(options: RegexTokenizerOptions);
    tokenize(text: string): string[];
  }
  class WordPunctTokenizer implements Tokenizer {
    tokenize(text: string): string[];
  }

  function JaroWinklerDistance(s1: string, s2: string, dt?: number): number;
  function LevenshteinDistance(source: string, target: string, options?: any): number;
  function DiceCoefficient(str1: string, str2: string): number;

  interface Stemmer {
    stem(token: string): string;
  }
  var PorterStemmer: {
    stem(token: string): string;
  }
  var PorterStemmerRu: {
    stem(token: string): string;
  }
  var PorterStemmerEs: {
    stem(token: string): string;
  }
  var PorterStemmerFa: {
    stem(token: string): string;
  }
  var PorterStemmerFr: {
    stem(token: string): string;
  }
  var PorterStemmerIt: {
    stem(token: string): string;
  }
  var PorterStemmerNo: {
    stem(token: string): string;
  }
  var PorterStemmerPt: {
    stem(token: string): string;
  }
  var LancasterStemmer: {
    stem(token: string): string;
  }

  interface BayesClassifierCallback { (err: any, classifier: any): void }
  class BayesClassifier {
    events: events.EventEmitter;
    addDocument(text: string, stem: string): void;
    addDocument(text: string[], stem: string): void;
    train(): void;
    classify(observation: string): string;
    getClassifications(observation: string): string[];
    save(filename: string, callback: BayesClassifierCallback): void;
    static load(filename: string, stemmer: Stemmer, callback: BayesClassifierCallback): void;
    static restore(classifier: any, stemmer?: Stemmer): BayesClassifier;
  }

  interface LogisticRegressionClassifierCallback { (err: any, classifier: any): void }
  class LogisticRegressionClassifier {
    events: events.EventEmitter;
    addDocument(text: string, stem: string): void;
    addDocument(text: string[], stem: string): void;
    train(): void;
    classify(observation: string): string;
    getClassifications(observation: string): string[];
    save(filename: string, callback: LogisticRegressionClassifierCallback): void;
    static load(filename: string, stemmer: Stemmer, callback: LogisticRegressionClassifierCallback): void;
    static restore(classifier: any, stemmer?: Stemmer): LogisticRegressionClassifier;
  }


  interface Phonetic {
    compare(stringA: string, stringB: string): boolean;
    process(token: string, maxLength?: number): string;
  }
  var Metaphone: {
    compare(stringA: string, stringB: string): boolean;
    process(token: string, maxLength?: number): string;
  };
  var SoundEx: {
    compare(stringA: string, stringB: string): boolean;
    process(token: string, maxLength?: number): string;
  };
  var DoubleMetaphone: {
    compare(stringA: string, stringB: string): boolean;
    process(token: string, maxLength?: number): string[];
  };

  class NounInflector {
    pluralize(token: string): string;
    singularize(token: string): string;
  }
  var CountInflector: {
    nth(i: number): string;
  }
  class PresentVerbInflector {
    pluralize(token: string): string;
    singularize(token: string): string;
  }
  var NGrams: {
    bigrams(sequence: string, startSymbol?: string, endSymbol?: string): string[][];
    bigrams(sequence: string[], startSymbol?: string, endSymbol?: string): string[][];
    trigrams(sequence: string, startSymbol?: string, endSymbol?: string): string[][];
    trigrams(sequence: string[], startSymbol?: string, endSymbol?: string): string[][];
    ngrams(sequence: string, n: number, startSymbol?: string, endSymbol?: string): string[][];
    ngrams(sequence: string[], n: number, startSymbol?: string, endSymbol?: string): string[][];
  }
  var NGramsZH: {
    bigrams(sequence: string, startSymbol?: string, endSymbol?: string): string[][];
    bigrams(sequence: string[], startSymbol?: string, endSymbol?: string): string[][];
    trigrams(sequence: string, startSymbol?: string, endSymbol?: string): string[][];
    trigrams(sequence: string[], startSymbol?: string, endSymbol?: string): string[][];
    ngrams(sequence: string, n: number, startSymbol?: string, endSymbol?: string): string[][];
    ngrams(sequence: string[], n: number, startSymbol?: string, endSymbol?: string): string[][];
  }

  interface TfIdfCallback { (i: number, measure: number): void }
  interface TfIdfTerm {
    term: string;
    tfidf: number;
  }
  class TfIdf {
    constructor(deserialized?: any);
    addDocument(document: string, key?: string, restoreCache?: boolean): void;
    addDocument(document: string[], key?: string, restoreCache?: boolean): void;
    addFileSync(path: string, encoding?: string, key?: string, restoreCache?: boolean): void;
    tfidf(terms: string, d: number): void;
    tfidfs(terms: string, callback: TfIdfCallback): void;
    tfidfs(terms: string[], callback: TfIdfCallback): void;
    listTerms(d: number): TfIdfTerm[];
  }

  class Trie {
    constructor(caseSensitive?: boolean);
    addString(text: string): boolean;
    addStrings(strings: string[]): void;
    contains(token: string): boolean;
    findPrefix(text: string): string[];
    findMatchesOnPath(text: string): string[];
    keysWithPrefix(text: string): string[];
  }

  class EdgeWeightedDigraph {
    add(start: number, end: number, weight: number): void;
    v(): number;
    e(): number;
  }
  class ShortestPathTree {
    constructor(diagraph: EdgeWeightedDigraph, startVertex: number);
    getDistTo(vertex: number): number;
    hasDistTo(vertex: number): boolean;
    pathTo(vertex: number): number[];
  }
  class LongestPathTree {
    constructor(diagraph: EdgeWeightedDigraph, startVertex: number);
    getDistTo(vertex: number): number;
    hasDistTo(vertex: number): boolean;
    pathTo(vertex: number): number[];
  }

  interface WordNetLookupResults {
    synsetOffset: number;
    pos: string;
    lemma: string;
    synonyms: string[];
    gloss: string;
  }
  interface WordNetLookupCallback { (results: WordNetLookupResults[]): void }
  interface WordNetGetCallback { (results: WordNetLookupResults): void }
  class WordNet {
    constructor(filename?: string);
    lookup(word: string, callback: WordNetLookupCallback): void;
    get(synsetOffset: number, pos: string, callback: WordNetGetCallback): void;
  }

  class Spellcheck {
    constructor(wordlist: string[]);
    isCorrect(word: string): boolean;
    getCorrections(word: string, maxDistance?: number): string[];
  }
}
