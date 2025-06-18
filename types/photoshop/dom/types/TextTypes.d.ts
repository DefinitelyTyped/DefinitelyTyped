/**
 * These property values are used to apply justification to paragraph text.
 *
 * These justification features can be seen in the dialog
 * in the Paragraph panel's flyout menu item labeled "Justification...".
 * They are expressed with an object literal with the following properties (values are percentages):
 *
 * ```javascript
 * {
 *      // Minimum, Desired and Maximum percentage of normal word spacing
 *      wordSpacingMinimum:   number,
 *      wordSpacingDesired:   number,
 *      wordSpacingMaximum:   number,
 *      // Minimum, Desired and Maximum percentage of normal letter spacing
 *      letterSpacingMinimum: number,
 *      letterSpacingDesired: number,
 *      letterSpacingMaximum: number,
 *      // Minimum, Desired and Maximum percentage of normal glyph scaling
 *      glyphScalingMinimum:  number,
 *      glyphScalingDesired:  number,
 *      glyphScalingMaximum:  number
 *      // Percentage of type size to use for auto leading
 *      autoLeadingAmount:    number
 * }
 * ```
 *
 * Unless it's been set, the justificationFeatures value is `null`.
 * The setter allows you to set individual properties: the missing ones will be
 * either filled with the default values or left untouched.
 *
 * @optionobject
 * @targetfolder objects/options
 * @minVersion 24.1
 */
export interface JustificationProperties {
    /**
     * Auto leading amount
     * @default 120
     * @range 0..500
     * @minVersion 24.1
     */
    autoLeadingAmount?: number;
    /**
     * Minimum word spacing - Must be less than or equal to Maximum.
     * @default 80
     * @range 0..1000
     * @minVersion 24.1
     */
    wordSpacingMinimum?: number;
    /**
     * Desired word spacing - Must be between Minimum and Maximum or equal.
     * @default 100
     * @range 0..1000
     * @minVersion 24.1
     */
    wordSpacingDesired?: number;
    /**
     * Maximum word spacing - Must be greater than or equal to Minimum.
     * @default 133
     * @range 0..1000
     * @minVersion 24.1
     */
    wordSpacingMaximum?: number;
    /**
     * Minimum letter spacing - Must be less than or equal to Maximum.
     * @default 0
     * @range 0..500
     * @minVersion 24.1
     */
    letterSpacingMinimum?: number;
    /**
     * Desired letter spacing - Must be between Minimum and Maximum or equal.
     * @default 0
     * @range 0..500
     * @minVersion 24.1
     */
    letterSpacingDesired?: number;
    /**
     * Maximum letter spacing - Must be greater than or equal to Minimum.
     * @default 0
     * @range 0..500
     * @minVersion 24.1
     */
    letterSpacingMaximum?: number;
    /**
     * Minimum glyph scaling - Must be less than or equal to Maximum.
     * @default 100
     * @range 50..200
     * @minVersion 24.1
     */
    glyphScalingMinimum?: number;
    /**
     * Desired glyph scaling - Must be between Minimum and Maximum or equal
     * @default 100
     * @range 50..200
     * @minVersion 24.1
     */
    glyphScalingDesired?: number;
    /**
     * Maximum glyph scaling - Must be greater than or equal to Minimum.
     * @default 100
     * @range 50..200
     * @minVersion 24.1
     */
    glyphScalingMaximum?: number;
}
/**
 * These property values are used to apply hyphenation to paragraph text.
 *
 * These hyphenation features can be seen in the dialog
 * in the Paragraph panel's flyout menu item labeled "Hyphenation...".
 * They are expressed with an object literal with the following properties (values are in pixels):
 *
 * ```javascript
 * {
 *      // The minimum number of letters a word must have in order for hyphenation
 *      // in word wrap to be allowed. In the range [2, 25], default 5.
 *      wordsLongerThan: number,
 *      // The minimum number of letters after which hyphenation
 *      // in word wrap is allowed. In the range [1, 15], default 2.
 *      afterFirst: number,
 *      // The minimum number of letters before which hyphenation
 *      // in word wrap is allowed. In the range [1, 15], default 2.
 *      beforeLast: number,
 *      // The maximum number of consecutive lines that can end with a hyphenated word.
 *      // In the range [2, 25], default 2.
 *      limit: number,
 *      // The distance in pixels at the end of a line that will cause a word
 *      // to break in unjustified type. In the range of [0, 8640] pixels for a 72PPI document.
 *      // If the document resolution is different, the max. value is scaled accordingly.
 *      // Default: 36px (72PPI)
 *      zone: number,
 *     // True to allow hyphenation in word wrap of capitalized words. Default true.
 *      capitalWords: boolean
 * }
 * ```
 *
 * The hyphenationFeatures getter returns an object with all the features:
 *
 * ```javascript
 * const textItem = app.activeDocument.activeLayers[0].textItem;
 * textItem.paragraphStyle.hyphenationFeatures;
 * // {
 * //       wordsLongerThan: 5,
 * //       afterFirst: 2,
 * //       beforeLast: 2,
 * //       limit: 2,
 * //       zone: 36,
 * //       capitalWords: true
 * // }
 * ```
 *
 * In the object that is passed to the setter, all the properties are optional;
 * the ones that are not specified will be assigned the default values.
 *
 * ```javascript
 * textItem.paragraphStyle.hyphenationFeatures = { wordsLongerThan: 10, afterFirst: 3 };
 * // {
 * //       wordsLongerThan: 10,
 * //       afterFirst: 3,
 * //       beforeLast: 2,
 * //       limit: 2,
 * //       zone: 36,
 * //       capitalWords: true
 * // }
 * ```
 *
 * @optionobject
 * @targetfolder objects/options
 * @minVersion 24.1
 */
export interface HyphenationProperties {
    /**
     * The minimum number of letters a word must have in order for hyphenation
     * in word wrap to be allowed.
     * @range 2..25
     * @default 5
     * @minVersion 24.1
     */
    wordsLongerThan?: number;
    /**
     * The minimum number of letters after which hyphenation
     * in word wrap is allowed.
     * @range 1..15
     * @default 2
     * @minVersion 24.1
     */
    afterFirst?: number;
    /**
     * The minimum number of letters before which hyphenation
     * in word wrap is allowed.
     * @range 1..15
     * @default 2
     * @minVersion 24.1
     */
    beforeLast?: number;
    /**
     * The maximum number of consecutive lines that can end with a hyphenated word.
     * @range 2..25
     * @default 2
     * @minVersion 24.1
     */
    limit?: number;
    /**
     * The distance in pixels at the end of a line that will cause a word
     * to break in unjustified type.
     * @range 0..8640 for a 72PPI document
     * @default 36
     * @minVersion 24.1
     */
    zone?: number;
    /**
     * True to allow hyphenation in word wrap of capitalized words.
     * @default true
     * @minVersion 24.1
     */
    capitalWords?: boolean;
}
