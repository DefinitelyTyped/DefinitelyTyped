// Type definitions for classificator 0.3
// Project: https://github.com/Wozacosta/classificator
// Definitions by: Nixinova <https://github.com/Nixinova>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Classificator;

declare function Classificator(options?: Classificator.Options): Classificator.NaiveBayes;

declare namespace Classificator {
    interface ClassificationResults {
        likelihoods: Array<{
            category: string,
            logLikelihood: number,
            logProba: number,
            proba: number,
        }>;
        predictedCategory: string;
    }

    interface Options {
        /**
         * Given an input string, tokenize it into an array of word tokens.
         *
         * By default, removes punctuation and splits on spaces.
         */
        tokenizer?: (text: string) => string[];

        /**
         * Alpha parameter of the additive smoothing operation.
         *
         * Defaults to `1`.
         */
        alpha?: number;

        /**
         * Defines how the prior probablity is calculated.
         *
         * If set to false, the classifier will use an uniform prior rather than a learnt one.
         *
         * Defaults to `true`.
         */
        fitPrior?: boolean;
    }

    /**
     * Naive-Bayes Classifier
     *
     * This is a naive-bayes classifier that uses Laplace Smoothing.
     *
     * Takes an (optional) options object containing:
     * - `tokenizer` => custom tokenization function
     */
    interface NaiveBayes {
        /**
         * Properly remove a category, unlearning all strings that were associated with it.
         */
        removeCategory(category: string): NaiveBayes;

        /**
         * Train the naive Bayes classifier by telling it what `category` the `text` to add corresponds to.
         */
        learn(text: string, category: string): NaiveBayes;

        /**
         * Untrain the naive Bayes classifier by telling it what `category` the `text` to remove corresponds to.
         */
        unlearn(text: string, category: string): NaiveBayes;

        /**
         * Determine what category `text` belongs to.
         * @return predicted category and likelihoods stats.
         */
        categorize(text: string): ClassificationResults;

        /**
         * Calculate the probability that the `token` belongs to a `category`
         * @return probability (0..1)
         */
        tokenProbability(token: string, category: string): number;

        /**
         * Build a frequency hashmap where:
         * - the keys are the entries in `tokens`
         * - the values are the frequency of each entry in `tokens`
         */
        frequencyTable(tokens: Readonly<string[]>): Record<string, number>;

        /**
         * Dump the classifier's state as a JSON string.
         * @return Representation of the classifier.
         */
        toJson(): string;
    }

    /**
     * Initializes a NaiveBayes instance from a JSON state representation.
     *
     * Use this with NaiveBayes::toJson().
     */
    function fromJson(jsonStrOrObject: string | { [key: string]: any }): NaiveBayes;

	/**
	 * Used to serialize a classifier's state.
	 */
	const STATE_KEYS: readonly [
		'categories',
		'docCount',
		'totalDocuments',
		'vocabulary',
		'vocabularySize',
		'wordCount',
		'wordFrequencyCount',
		'options',
	];
}
