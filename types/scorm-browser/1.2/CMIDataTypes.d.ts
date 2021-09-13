/**
 * A single character, 0 to 9, a to z.
 */
export type Char =
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | 'a'
    | 'b'
    | 'c'
    | 'd'
    | 'e'
    | 'f'
    | 'g'
    | 'h'
    | 'i'
    | 'j'
    | 'k'
    | 'l'
    | 'm'
    | 'n'
    | 'o'
    | 'p'
    | 'q'
    | 'r'
    | 's'
    | 't'
    | 'u'
    | 'v'
    | 'w'
    | 'x'
    | 'y'
    | 'z';

/**
 * An empty string ("").
 */
export type CMIBlank = '';

/**
 * A vocabulary of two words ("true" or "false").
 */
export type CMIBoolean = 'true' | 'false';

/**
 * A number that may have a decimal point. If not preceded by a minus sign, the number is presumed to be positive. Examples are "2", "2.2" and "-2.2".
 */
export type CMIDecimal = `${string}`;

/**
 * Feedback is one of the following single characters: "0", "1", "t" or "f".
 */
export type CMIFeedbackTrueFalse = '0' | '1' | 't' | 'f';

/**
 * Feedback is one or more single characters separated by a comma. Legal characters are "0" to "9" and "a" to "z". If all the characters must be chosen to assume the feedback is correct, then the
 * comma-separated list must be surrounded by curly brackets: {}
 */
export type CMIFeedbackChoice = `{${string}}` | string;

/**
 * Any alpha-numeric string up to 255 characters in length. After the first letter spaces are significant.
 */
export type CMIFeedbackFillIn = string;

/**
 * A number that may have a decimal point. If not preceded by a minus sign, the number is presumed to be positive. Examples are "2", "2.2" and "-2.2".
 */
export type CMIFeedbackNumeric = CMIDecimal;

/**
 * Single character. Legal characters are 0 to 9 and a to z.
 */
export type CMIFeedbackLikert = Char;

/**
 * One or more pairs of identifiers. Each identifier is a single letter or number (0 to 9 and a to z). The identifiers in a pair are separated by a period. Commas separate the pairs. If all pairs
 * must be matched correctly to consider the interaction correct, then the comma separated list of pairs are surrounded by curly brackets: {}
 */
export type CMIFeedbackMatching = `{${string}}` | string;

/**
 * This is a very flexible format. Essentially an alphanumeric string of 255 characters or less.
 */
export type CMIFeedbackPerformance = string;

/**
 * A series of single characters separated by commas. Legal characters are 0 to 9 and a to z. The order of the characters determines the correctness of the feedback.
 */
export type CMIFeedbackSequencing = string;

/**
 * A structured description of a student response in an interaction. The structure and contents of the feedback depends upon the type of interaction.
 */
export type CMIFeedback =
    | CMIFeedbackTrueFalse
    | CMIFeedbackChoice
    | CMIFeedbackFillIn
    | CMIFeedbackNumeric
    | CMIFeedbackLikert
    | CMIFeedbackMatching
    | CMIFeedbackPerformance;

/**
 * An alphanumeric group of characters with no white space or unprintable characters in it. Maximum of 255 characters.
 */
export type CMIIdentifier = string;

/**
 * An integer number from 0 to 65536.
 */
export type CMIInteger = string;

/**
 * A signed integer number from -32768 to +32768.
 */
export type CMISInteger = string;

/**
 * A set of ASCII characters with a maximum length of 255 characters.
 */
export type CMIString255 = string;

/**
 * A set of ASCII characters with a maximum length of 4096 characters.
 */
export type CMIString4096 = string;

/**
 * A chronological point in a 24 hour clock. Identified in hours, minutes and seconds in the format: HH:MM:SS.SS.
 *
 * Hours and minutes shall contain exactly 2 digits. Seconds shall contain 2 digits, with an optional decimal point and 1 or 2 additional digits (i.e. 34.45).
 */
export type CMITime = `${string}:${string}:${string}`;

/**
 * A length of time in hours, minutes and seconds shown in the following numerical format: HHHH:MM:SS.SS.
 *
 * Hours have a minimum of 2 digits and a maximum of 4 digits. Minutes shall consist of exactly 2 digits. Seconds shall contain 2 digits, with an optional decimal point and 1 or 2 additional digits
 * (i.e. 34.45).
 */
export type CMITimeSpan = `${string}:${string}:${string}`;
