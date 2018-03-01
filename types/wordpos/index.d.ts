// Type definitions for WordPOS 1.1
// Project: https://github.com/moos/wordpos
// Definitions by: guidojo <https://github.com/guidojo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/**
 * Original wordnet documentation available at: https://wordnet.princeton.edu/wordnet/documentation/
 */

// Retrieved from dataFile.js
// See: https://wordnet.princeton.edu/wordnet/man/lexnames.5WN.html
type LEX_NAMES =
    | "adj.all"
    | "adj.pert"
    | "adv.all"
    | "noun.Tops"
    | "noun.act"
    | "noun.animal"
    | "noun.artifact"
    | "noun.attribute"
    | "noun.body"
    | "noun.cognition"
    | "noun.communication"
    | "noun.event"
    | "noun.feeling"
    | "noun.food"
    | "noun.group"
    | "noun.location"
    | "noun.motive"
    | "noun.object"
    | "noun.person"
    | "noun.phenomenon"
    | "noun.plant"
    | "noun.possession"
    | "noun.process"
    | "noun.quantity"
    | "noun.relation"
    | "noun.shape"
    | "noun.state"
    | "noun.substance"
    | "noun.time"
    | "verb.body"
    | "verb.change"
    | "verb.cognition"
    | "verb.communication"
    | "verb.competition"
    | "verb.consumption"
    | "verb.contact"
    | "verb.creation"
    | "verb.emotion"
    | "verb.motion"
    | "verb.perception"
    | "verb.possession"
    | "verb.social"
    | "verb.stative"
    | "verb.weather"
    | "adj.ppl";

interface WordnetDatabase {
    version: string;
    path: string;
    files: string[];
}

interface Pointer {
    pointerSymbol: string;
    synsetOffset: number;
    pos: string;
    sourceTarget: number;
}

interface WordDef {
    synsetOffset: number;
    lexFilenum: number;
    lexName: LEX_NAMES;
    pos: string; // Lex name afkorting
    wCnt: number; // Number of synonyms, including self
    lemma: string; // ASCII text of word as found in the WordNet database index files (can be different than origin)
    synonyms: string[];
    lexId: number;
    ptrs: Pointer[];
    gloss: string;
    def: string;
    exp: string[];
}

interface WordPOSOptions {
    /**
     * path to WordNet data (override only if not using wordnet-db)
     */
    dictPath?: string;

    /**
     * enable profiling, time in msec returned as second argument in callback, default false
     */
    profile?: boolean;

    /**
     * if true (default), exclude standard stopwords.
     * if array, stopwords to exclude, eg, ['all','of','this',...]
     * if false, do not filter any stopwords.
     */
    stopwords?: boolean;
}

interface POSResult {
    /** Array of words that are nouns */
    nouns: string[];
    /** Array of words that are verbs */
    verbs: string[];
    /** Array of words that are adjectives */
    adjectives: string[];
    /** Array of words that are adverbs */
    adverbs: string[];
    /** Array of words that are not in dict or could not be categorized as a POS */
    rest: string[];
}

interface RandOptions {
    /** Get random words starting with this */
    startsWith?: string;
    /** Number of words to return (default = 1) */
    count?: number;
}

declare class WordPOS {
    constructor(options?: WordPOSOptions);
    defaults: {
        [x: string]: any;
        dictPath: string;
        profile: boolean;
        stopwords: boolean;
    };
    WNdb: WordnetDatabase;
    /**
     * https://github.com/moos/wordpos/blob/master/lib/natural/util/stopwords.js
     */
    stopwords: string[];

    /**
     * If you're only interested in a certain POS (say, adjectives), using the particular getX() is faster than getPOS() which looks up the word in all index files. stopwords are stripped out
     * from text before lookup.
     *
     * Note: a word may appear in multiple POS (eg, 'great' is both a noun and an adjective)
     *
     * @param text If text is an array, all words are looked-up -- no deduplication, stopword filtering or tokenization is applied.
     */
    getPOS(text: string, callback?: (result: POSResult) => void): Promise<POSResult>;
    getNouns(text: string, callback?: (result: string[]) => void): Promise<string[]>;
    getVerbs(text: string, callback?: (result: string[]) => void): Promise<string[]>;
    getAdjectives(text: string, callback?: (result: string[]) => void): Promise<string[]>;
    getAdverbs(text: string, callback?: (result: string[]) => void): Promise<string[]>;

    isNoun(word: string, callback?: (result: boolean, word: string) => void): Promise<boolean>;
    isVerb(word: string, callback?: (result: boolean, word: string) => void): Promise<boolean>;
    isAdjective(word: string, callback?: (result: boolean, word: string) => void): Promise<boolean>;
    isAdverb(word: string, callback?: (result: boolean, word: string) => void): Promise<boolean>;

    /**
     * Get complete definition object for word. The lookupX() variants can be faster if you already know the POS of the word. Signature of the callback is callback(result, word) where result is
     * an array of lookup object(s).
     */
    lookup(word: string, callback?: (result: WordDef[], word: string) => void): Promise<WordDef[]>;
    /**
     * Get complete definition object for word.
     */
    lookupNoun(word: string, callback?: (result: WordDef[], word: string) => void): Promise<WordDef[]>;
    /**
     * Get complete definition object for word.
     */
    lookupVerb(word: string, callback?: (result: WordDef[], word: string) => void): Promise<WordDef[]>;
    /**
     * Get complete definition object for word.
     */
    lookupAdjective(word: string, callback?: (result: WordDef[], word: string) => void): Promise<WordDef[]>;
    /**
     * Get complete definition object for word.
     */
    lookupAdverb(word: string, callback?: (result: WordDef[], word: string) => void): Promise<WordDef[]>;

    /**
     * Lookup a record directly from the synsetOffset for a given POS. Unlike other methods, callback (if provided) receives (err, result) arguments.
     */
    seek(offset: number, pos: string, callback?: (err: Error | null, result: WordDef) => void): Promise<WordDef[]>;

    /**
     * Get random word(s).
     *
     * Note on performance: random lookups could involve heavy disk reads. It is better to use the count option to get words in batches. This may benefit from the cached reads of similarly keyed
     * entries as well as shared open/close of the index files.
     */
    rand(callback: (words: string[]) => void): Promise<string[]>;
    /**
     * Get random word(s).
     *
     * Note on performance: random lookups could involve heavy disk reads. It is better to use the count option to get words in batches. This may benefit from the cached reads of similarly keyed
     * entries as well as shared open/close of the index files.
     */
    rand(options: RandOptions, callback?: (words: string[], startsWith: string) => void): Promise<string[]>;

    /**
     * Get random noun(s).
     *
     * Note on performance: random lookups could involve heavy disk reads. It is better to use the count option to get words in batches. This may benefit from the cached reads of similarly keyed
     * entries as well as shared open/close of the index files.
     */
    randNoun(callback: (words: string[]) => void): Promise<string[]>;
    /**
     * Get random noun(s).
     *
     * Note on performance: random lookups could involve heavy disk reads. It is better to use the count option to get words in batches. This may benefit from the cached reads of similarly keyed
     * entries as well as shared open/close of the index files.
     */
    randNoun(options: RandOptions, callback?: (words: string[], startsWith: string) => void): Promise<string[]>;

    /**
     * Get random verb(s).
     *
     * Note on performance: random lookups could involve heavy disk reads. It is better to use the count option to get words in batches. This may benefit from the cached reads of similarly keyed
     * entries as well as shared open/close of the index files.
     */
    randVerb(callback: (words: string[]) => void): Promise<string[]>;
    /**
     * Get random verb(s).
     *
     * Note on performance: random lookups could involve heavy disk reads. It is better to use the count option to get words in batches. This may benefit from the cached reads of similarly keyed
     * entries as well as shared open/close of the index files.
     */
    randVerb(options: RandOptions, callback?: (words: string[], startsWith: string) => void): Promise<string[]>;

    /**
     * Get random adjective(s).
     *
     * Note on performance: random lookups could involve heavy disk reads. It is better to use the count option to get words in batches. This may benefit from the cached reads of similarly keyed
     * entries as well as shared open/close of the index files.
     */
    randAdjective(callback: (words: string[]) => void): Promise<string[]>;
    /**
     * Get random adjective(s).
     *
     * Note on performance: random lookups could involve heavy disk reads. It is better to use the count option to get words in batches. This may benefit from the cached reads of similarly keyed
     * entries as well as shared open/close of the index files.
     */
    randAdjective(
        options: RandOptions,
        callback?: (words: string[], startsWith: string) => void
    ): Promise<string[]>;

    /**
     * Get random adverb(s).
     *
     * Note on performance: random lookups could involve heavy disk reads. It is better to use the count option to get words in batches. This may benefit from the cached reads of similarly keyed
     * entries as well as shared open/close of the index files.
     */
    randAdverb(callback: (words: string[]) => void): Promise<string[]>;
    /**
     * Get random adverb(s).
     *
     * Note on performance: random lookups could involve heavy disk reads. It is better to use the count option to get words in batches. This may benefit from the cached reads of similarly keyed
     * entries as well as shared open/close of the index files.
     */
    randAdverb(options: RandOptions, callback?: (words: string[], startsWith: string) => void): Promise<string[]>;

    /**
     * Get deduped, less stopwords
     *
     * @param text string of words to parse.  If array is given, it is left in tact.
     */
    parse(text: string | string[]): string[];
}

export = WordPOS;
