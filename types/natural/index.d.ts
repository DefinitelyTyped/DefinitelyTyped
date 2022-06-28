// Type definitions for Natural 5.1
// Project: https://github.com/NaturalNode/natural
// Definitions by: Dylan R. E. Moonfire <https://github.com/dmoonfire>
//                 Emily Marigold Klassen <https://github.com/forivall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import events = require('events');

interface Tokenizer {
    tokenize(text: string): string[];
}
declare class WordTokenizer implements Tokenizer {
    tokenize(text: string): string[];
}
declare class TreebankWordTokenizer implements Tokenizer {
    tokenize(text: string): string[];
}
interface RegexTokenizerOptions {
    pattern?: RegExp | undefined;
    discardEmpty?: boolean | undefined;
}
declare class RegexpTokenizer implements Tokenizer {
    constructor(options: RegexTokenizerOptions);
    tokenize(text: string): string[];
}
declare class OrthographyTokenizer implements Tokenizer {
    constructor(options: RegexTokenizerOptions & { language: string });
    tokenize(text: string): string[];
}
declare class WordPunctTokenizer implements Tokenizer {
    tokenize(text: string): string[];
}
declare class SentenceTokenizer implements Tokenizer {
    tokenize(text: string): string[];
}
declare class CaseTokenizer implements Tokenizer {
    tokenize(text: string, preserveApostrophy?: boolean): string[];
}
declare class AggressiveTokenizer implements Tokenizer {
    tokenize(text: string): string[];
}
declare class AggressiveTokenizerEs implements Tokenizer {
    tokenize(text: string): string[];
}
declare class AggressiveTokenizerFa implements Tokenizer {
    tokenize(text: string): string[];
}
declare class AggressiveTokenizerFr implements Tokenizer {
    tokenize(text: string): string[];
}
declare class AggressiveTokenizerId implements Tokenizer {
    tokenize(text: string): string[];
}
declare class AggressiveTokenizerIt implements Tokenizer {
    tokenize(text: string): string[];
}
declare class AggressiveTokenizerNl implements Tokenizer {
    tokenize(text: string): string[];
}
declare class AggressiveTokenizerNo implements Tokenizer {
    tokenize(text: string): string[];
}
declare class AggressiveTokenizerPl implements Tokenizer {
    tokenize(text: string): string[];
}
declare class AggressiveTokenizerPt implements Tokenizer {
    tokenize(text: string): string[];
}
declare class AggressiveTokenizerRu implements Tokenizer {
    tokenize(text: string): string[];
}
declare class AggressiveTokenizerSv implements Tokenizer {
    tokenize(text: string): string[];
}
declare class AggressiveTokenizerVi implements Tokenizer {
    tokenize(text: string): string[];
}
declare class TokenizerJa implements Tokenizer {
    tokenize(text: string): string[];
}

declare function JaroWinklerDistance(s1: string, s2: string, dt?: number): number;
declare function LevenshteinDistance(source: string, target: string, options?: any): number;
export interface DamerauLevenshteinDistanceOptions {
    /** @default 1 */
    insertion_cost?: number | undefined;
    /** @default 1 */
    deletion_cost?: number | undefined;
    /** @default 1 */
    substitution_cost?: number | undefined;
    /** @default 1 */
    transposition_cost?: number | undefined;
    /** @default false */
    search?: boolean | undefined;
    /** @default false */
    restricted?: boolean | undefined;
}
interface SubstringDistanceResult {
    substring: string;
    distance: number;
}
/**
 * Returns the Damerau-Levenshtein distance between strings. Counts the distance
 * between two strings by returning the number of edit operations required to
 * convert `source` into `target`.
 *
 * Valid edit operations are:
 *  - transposition, insertion, deletion, and substitution
 */
export function DamerauLevenshteinDistance(
    source: string,
    target: string,
    options: DamerauLevenshteinDistanceOptions & { search: true },
): SubstringDistanceResult;
export function DamerauLevenshteinDistance(
    source: string,
    target: string,
    options?: DamerauLevenshteinDistanceOptions & { search?: false | undefined },
): number;
export function DamerauLevenshteinDistance(
    source: string,
    target: string,
    options: DamerauLevenshteinDistanceOptions & { search: boolean },
): number | SubstringDistanceResult;
declare function DiceCoefficient(str1: string, str2: string): number;

interface Stemmer {
    stem(token: string): string;
    tokenizeAndStem(text: string): string[];
    attach(): void;
}

declare var CarryStemmerFr: Stemmer;
declare var LancasterStemmer: Stemmer;
declare var PorterStemmer: Stemmer;
declare var PorterStemmerEs: Stemmer;
declare var PorterStemmerFa: Stemmer;
declare var PorterStemmerFr: Stemmer;
declare var PorterStemmerIt: Stemmer;
declare var PorterStemmerNl: Stemmer;
declare var PorterStemmerNo: Stemmer;
declare var PorterStemmerPt: Stemmer;
declare var PorterStemmerRu: Stemmer;
declare var PorterStemmerSv: Stemmer;
declare var StemmerId: Stemmer;
declare var StemmerJa: Stemmer;

interface BayesClassifierClassification {
    label: string;
    value: number;
}
interface BayesClassifierCallback {
    (err: any, classifier: any): void;
}
declare class BayesClassifier {
    constructor(stem?: Stemmer);
    events: events.EventEmitter;
    addDocument(text: string, stem: string): void;
    addDocument(text: string[], stem: string): void;
    train(): void;
    classify(observation: string): string;
    getClassifications(observation: string): BayesClassifierClassification[];
    save(filename: string, callback: BayesClassifierCallback): void;
    static load(filename: string, stemmer: Stemmer, callback: BayesClassifierCallback): void;
    static restore(classifier: any, stemmer?: Stemmer): BayesClassifier;
}

interface LogisticRegressionClassifierClassification {
    label: string;
    value: number;
}
interface LogisticRegressionClassifierCallback {
    (err: any, classifier: any): void;
}
declare class LogisticRegressionClassifier {
    events: events.EventEmitter;
    addDocument(text: string, stem: string): void;
    addDocument(text: string[], stem: string): void;
    train(): void;
    classify(observation: string): string;
    getClassifications(observation: string): LogisticRegressionClassifierClassification[];
    save(filename: string, callback: LogisticRegressionClassifierCallback): void;
    static load(filename: string, stemmer: Stemmer, callback: LogisticRegressionClassifierCallback): void;
    static restore(classifier: any, stemmer?: Stemmer): LogisticRegressionClassifier;
}

declare class SentimentAnalyzer {
    constructor(language: string, stemmer: Stemmer, vocabulary: string);
    getSentiment(words: string[]): number;
}

interface Phonetic {
    compare(stringA: string, stringB: string): boolean;
    process(token: string, maxLength?: number): string;
}
declare var Metaphone: {
    compare(stringA: string, stringB: string): boolean;
    process(token: string, maxLength?: number): string;
};
declare var SoundEx: {
    compare(stringA: string, stringB: string): boolean;
    process(token: string, maxLength?: number): string;
};
declare var DoubleMetaphone: {
    compare(stringA: string, stringB: string): boolean;
    process(token: string, maxLength?: number): string[];
};

declare class NounInflector {
    pluralize(token: string): string;
    singularize(token: string): string;
}
declare var CountInflector: {
    nth(i: number): string;
};
declare class PresentVerbInflector {
    pluralize(token: string): string;
    singularize(token: string): string;
}
declare var NGrams: {
    bigrams(sequence: string, startSymbol?: string, endSymbol?: string): string[][];
    bigrams(sequence: string[], startSymbol?: string, endSymbol?: string): string[][];
    trigrams(sequence: string, startSymbol?: string, endSymbol?: string): string[][];
    trigrams(sequence: string[], startSymbol?: string, endSymbol?: string): string[][];
    ngrams(sequence: string, n: number, startSymbol?: string, endSymbol?: string): string[][];
    ngrams(sequence: string[], n: number, startSymbol?: string, endSymbol?: string): string[][];
};
declare var NGramsZH: {
    bigrams(sequence: string, startSymbol?: string, endSymbol?: string): string[][];
    bigrams(sequence: string[], startSymbol?: string, endSymbol?: string): string[][];
    trigrams(sequence: string, startSymbol?: string, endSymbol?: string): string[][];
    trigrams(sequence: string[], startSymbol?: string, endSymbol?: string): string[][];
    ngrams(sequence: string, n: number, startSymbol?: string, endSymbol?: string): string[][];
    ngrams(sequence: string[], n: number, startSymbol?: string, endSymbol?: string): string[][];
};

interface TfIdfCallback {
    (i: number, measure: number): void;
}
interface TfIdfTerm {
    term: string;
    tfidf: number;
}
declare class TfIdf {
    constructor(deserialized?: any);
    addDocument(document: string, key?: string, restoreCache?: boolean): void;
    addDocument(document: string[], key?: string, restoreCache?: boolean): void;
    addFileSync(path: string, encoding?: string, key?: string, restoreCache?: boolean): void;
    tfidf(terms: string, d: number): void;
    tfidfs(terms: string, callback: TfIdfCallback): void;
    tfidfs(terms: string[], callback: TfIdfCallback): void;
    listTerms(d: number): TfIdfTerm[];
}

declare class Trie {
    constructor(caseSensitive?: boolean);
    addString(text: string): boolean;
    addStrings(strings: string[]): void;
    contains(token: string): boolean;
    findPrefix(text: string): string[];
    findMatchesOnPath(text: string): string[];
    keysWithPrefix(text: string): string[];
}

declare class EdgeWeightedDigraph {
    add(start: number, end: number, weight: number): void;
    v(): number;
    e(): number;
}
declare class ShortestPathTree {
    constructor(diagraph: EdgeWeightedDigraph, startVertex: number);
    getDistTo(vertex: number): number;
    hasDistTo(vertex: number): boolean;
    pathTo(vertex: number): number[];
}
declare class LongestPathTree {
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
interface WordNetLookupCallback {
    (results: WordNetLookupResults[]): void;
}
interface WordNetGetCallback {
    (results: WordNetLookupResults): void;
}
declare class WordNet {
    constructor(filename?: string);
    lookup(word: string, callback: WordNetLookupCallback): void;
    get(synsetOffset: number, pos: string, callback: WordNetGetCallback): void;
}

declare class Spellcheck {
    constructor(wordlist: string[]);
    isCorrect(word: string): boolean;
    getCorrections(word: string, maxDistance?: number): string[];
}

declare class Predicate {
    constructor(name: string, parameter1: string, parameter2?: string);
    name: string;
    parameter1: string;
    parameter2?: string | undefined;
    function?: ((tagged_sentence: string[][], i: number, parameter: string) => boolean) | undefined;
    evaluate(tagged_sentence: string[][], position: number): boolean;
}

declare class TransformationRule {
    constructor(c1: string, c2: string, predicate: string, parameter1: string, parameter2?: string);
    literal: string[];
    predicate: Predicate;
    old_category: string;
    new_category: string;
    apply(tagged_sentence: string[][], position: number): void;
}

declare class RuleSet {
    constructor(filename: string);
    rules: TransformationRule[];
}

declare class Lexicon {
    constructor(filename: string, defaultCategory: string);
    defaultCategory: string;
    parseLexicon(data: string): void;
    tagWord(word: string): string[];
}

interface TaggedWord {
    token: string;
    tag: string;
}

declare class Sentence {
    constructor(data?: string[]);
    taggedWords: TaggedWord[];
    addTaggedWord(token: string, tag: string): void;
    clone(): Sentence;
}

declare class BrillPOSTagger {
    constructor(lexicon: Lexicon, ruleSet: RuleSet);
    lexicon: Lexicon;
    ruleSet: RuleSet;
    tag(sentence: string[]): Sentence;
}
