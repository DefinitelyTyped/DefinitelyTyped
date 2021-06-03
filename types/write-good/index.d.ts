// Type definitions for write-good 1.0
// Project: https://github.com/btford/write-good#readme
// Definitions by: Kyle Hensel <https://github.com/k-yle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace WriteGood {
    interface Problem {
        /** The position of the match in the input text */
        index: number;
        /** The length of the match */
        offset: number;
        /** An explaination of the problem */
        reason: string;
    }

    interface CustomChecks {
        [rule: string]: {
            fn: typeof WriteGood;
            explanation: string;
        };
    }

    interface DefaultChecks {
        /** Checks for passive voice. Enabled by default */
        passive?: boolean;
        /** Checks for lexical illusions – cases where a word is repeated. Enabled by default */
        illusion?: boolean;
        /** Checks for so at the beginning of the sentence. Enabled by default */
        so?: boolean;
        /** Checks for there is or there are at the beginning of the sentence. Enabled by default */
        thereIs?: boolean;
        /** Checks for "weasel words." Enabled by default */
        weasel?: boolean;
        /** Checks for adverbs that can weaken meaning: really, very, extremely, etc. Enabled by default */
        adverb?: boolean;
        /** Checks for wordy phrases and unnecessary words.. Enabled by default */
        tooWordy?: boolean;
        /** Checks for common cliches. Enabled by default */
        cliches?: boolean;

        /** Checks for {@link https://en.wikipedia.org/wiki/E-Prime|"to-be"} verbs. **Disabled** by default */
        eprime?: boolean;
    }

    interface Options extends DefaultChecks {
        /**
         * A list of strings to whitelist from suggestions. For example, normally "only"
         * would be picked up as a bad word, but you might want to exempt "read-only"
         */
        whitelist?: string[];

        /** Custom rules */
        checks?: CustomChecks;
    }
}

/**
 * Returns a list of violations in the supplied `text`.
 */
declare function WriteGood(text: string, options?: WriteGood.Options): WriteGood.Problem[];

export = WriteGood;
