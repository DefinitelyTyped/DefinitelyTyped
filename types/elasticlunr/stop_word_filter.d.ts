export interface StopWordFilter {
    (token: string): string;
    stopWords: {
        [token: string]: boolean;
    };
}
/**
 * elasticlunr.stopWordFilter is an English language stop words filter, any words
 * contained in the stop word list will not be passed through the filter.
 *
 * This is intended to be used in the Pipeline. If the token does not pass the
 * filter then undefined will be returned.
 * Currently this StopwordFilter using dictionary to do O(1) time complexity stop word filtering.
 *
 * @module
 * @param {String} token The token to pass through the filter
 * @return {String}
 * @see elasticlunr.Pipeline
 */
export declare const stopWordFilter: StopWordFilter;
/**
 * Remove predefined stop words
 * if user want to use customized stop words, user could use this function to delete
 * all predefined stopwords.
 *
 * @return {null}
 */
export declare const clearStopWords: () => void;
/**
 * Add customized stop words
 * user could use this function to add customized stop words
 *
 * @params {Array} words customized stop words
 * @return {null}
 */
export declare const addStopWords: (words: string[]) => void;
/**
 * Reset to default stop words
 * user could use this function to restore default stop words
 *
 * @return {null}
 */
export declare const resetStopWords: () => void;
export declare const defaultStopWords: {
    "": boolean;
    "a": boolean;
    "able": boolean;
    "about": boolean;
    "across": boolean;
    "after": boolean;
    "all": boolean;
    "almost": boolean;
    "also": boolean;
    "am": boolean;
    "among": boolean;
    "an": boolean;
    "and": boolean;
    "any": boolean;
    "are": boolean;
    "as": boolean;
    "at": boolean;
    "be": boolean;
    "because": boolean;
    "been": boolean;
    "but": boolean;
    "by": boolean;
    "can": boolean;
    "cannot": boolean;
    "could": boolean;
    "dear": boolean;
    "did": boolean;
    "do": boolean;
    "does": boolean;
    "either": boolean;
    "else": boolean;
    "ever": boolean;
    "every": boolean;
    "for": boolean;
    "from": boolean;
    "get": boolean;
    "got": boolean;
    "had": boolean;
    "has": boolean;
    "have": boolean;
    "he": boolean;
    "her": boolean;
    "hers": boolean;
    "him": boolean;
    "his": boolean;
    "how": boolean;
    "however": boolean;
    "i": boolean;
    "if": boolean;
    "in": boolean;
    "into": boolean;
    "is": boolean;
    "it": boolean;
    "its": boolean;
    "just": boolean;
    "least": boolean;
    "let": boolean;
    "like": boolean;
    "likely": boolean;
    "may": boolean;
    "me": boolean;
    "might": boolean;
    "most": boolean;
    "must": boolean;
    "my": boolean;
    "neither": boolean;
    "no": boolean;
    "nor": boolean;
    "not": boolean;
    "of": boolean;
    "off": boolean;
    "often": boolean;
    "on": boolean;
    "only": boolean;
    "or": boolean;
    "other": boolean;
    "our": boolean;
    "own": boolean;
    "rather": boolean;
    "said": boolean;
    "say": boolean;
    "says": boolean;
    "she": boolean;
    "should": boolean;
    "since": boolean;
    "so": boolean;
    "some": boolean;
    "than": boolean;
    "that": boolean;
    "the": boolean;
    "their": boolean;
    "them": boolean;
    "then": boolean;
    "there": boolean;
    "these": boolean;
    "they": boolean;
    "this": boolean;
    "tis": boolean;
    "to": boolean;
    "too": boolean;
    "twas": boolean;
    "us": boolean;
    "wants": boolean;
    "was": boolean;
    "we": boolean;
    "were": boolean;
    "what": boolean;
    "when": boolean;
    "where": boolean;
    "which": boolean;
    "while": boolean;
    "who": boolean;
    "whom": boolean;
    "why": boolean;
    "will": boolean;
    "with": boolean;
    "would": boolean;
    "yet": boolean;
    "you": boolean;
    "your": boolean;
};
