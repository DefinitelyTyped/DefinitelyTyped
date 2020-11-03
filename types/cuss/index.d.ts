// Type definitions for cuss 1.20
// Project: https://github.com/words/cuss#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/** how likely it is to be used as either profanity or clean text */
type SurenessRating = 0 | 1 | 2;

type Cuss = object & {
    /**
     * Map of profanities to sureness rating
     */
    [phrase: string]: SurenessRating;
};

/**
 * `cuss` is a dictionary of phrases to ratings (Object.<number>), where each key can be considered a profanity,
 * and each rating is a number between 0 and 2 (both including),
 * representing the certainty the key is used as a profanity depending on context.
 */
declare const cuss: Cuss;

export = cuss;
