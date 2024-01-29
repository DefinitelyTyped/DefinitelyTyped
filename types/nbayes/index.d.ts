export = nbayes;

/**
 * Creates a classifier, which can `learn` and then `classify` documents into classes.
 *
 * @example
 * import nbayes = require('nbayes');
 *
 * const c = nbayes();
 * c.learn('happy',   nbayes.stringToDoc('amazing, awesome movie!! Yeah!! Oh boy.'));
 * c.learn('happy',   nbayes.stringToDoc('Sweet, this is incredibly amazing, perfect, great!!'));
 * c.learn('angry',   nbayes.stringToDoc('terrible, shitty thing. Damn. This Sucks!!'));
 * c.learn('neutral', nbayes.stringToDoc('I dont really know what to make of this.'));
 *
 * c.classify(nbayes.stringToDoc('awesome, cool, amazing!! Yay.'));
 * // -> 'happy'
 * c.probabilities(nbayes.stringToDoc('awesome, cool, amazing!! Yay.'));
 * // -> { happy: 0.000001…,
 * //      angry: 2.384…e-7,
 * //      neutral: 1.665…e-7 }
 */
declare function nbayes(): nbayes.Classifier;

declare namespace nbayes {
    /**
     * Creates a representation of a document, which can be used to track words and their frequencies.
     *
     * @example
     * import nbayes = require('nbayes');
     *
     * const doc = nbayes.createDoc();
     * doc.set('foo', 2);
     * doc.add('bar');
     * doc.increase('bar', 2);
     *
     * doc.has('FOO'); // -> false
     * doc.get('foo'); // -> 2
     * doc.get('bar'); // -> 3
     * doc.sum(); // -> 5
     * doc.words(); // -> ['foo', 'bar']
     */
    function createDoc(): Document;
    /**
     * Returns a `Document` from the string. Special characters will be ignored. Everything will be lowercase.
     *
     * *Note: It is probably a better idea to use a proper tokenizer/stemmer and to
     * [remove stopwords](https://github.com/fergiemcdowall/stopword) to support non-Latin languages and to
     * get more accurate results.*
     *
     * @example
     * import nbayes = require('nbayes');
     *
     * nbayes.stringToDoc('awesome, amazing!! Yay.').words();
     * // -> ['awesome', 'amazing', 'yay']
     */
    function stringToDoc(str: string): Document;

    interface Classifier {
        /**
         * Tags words of `doc` as being of `docClass`.
         */
        learn(docClass: string, doc: Document): this;
        /**
         * For each stored class, returns the probability of `doc`, given the class.
         */
        probabilities(doc: Document): { [key: string]: number };
        /**
         * For `doc`, returns the class with the highest probability.
         */
        classify(doc: Document): string;
        /**
         * Computes the probability of `class` out of all classes.
         */
        prior(docClass: string): number;
        /**
         * Computes the probability of `doc`, given `class`.
         */
        likelihood(docClass: string, doc: Document): number;
    }

    interface Document {
        /**
         * @return If `word` has been `add`ed before.
         */
        has(word: string): boolean;
        /**
         * @return The count of `word`.
         */
        get(word: string): number;
        /**
         * Sets the `count` of `word`.
         */
        set(word: string, count: number): this;
        /**
         * Shorthand for `increase(word, 1)`.
         */
        add(word: string): this;
        /**
         * Adds `delta` to the count of `word`.
         */
        increase(
            word: string,
            /** @default 1 */
            delta?: number,
        ): this;
        /**
         * @return The sum of all `word` counts.
         */
        sum(): number;
        /**
         * @return The *distinct* `word`s.
         */
        words(): string[];
        /**
         * Adds all `word` counts from another document.
         */
        addBagOfWords(doc: Document): this;
        /**
         * Adds `1` for every word from `words`.
         */
        addWords(words: Iterable<string>): this;
    }
}
