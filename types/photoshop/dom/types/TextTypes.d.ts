/**
 * The justification features as they're displayed in the dialog
 * found in the Paragraph's flyout menu "Justification...".
 * All numbers are percentages.
 *
 * Unless it's been set, a justificationFeatures value is `null`.
 * The setter allows you to set individual properties: the missing ones will be
 * either filled with the default values or left untouched.
 *
 * Properties' ranges are as follows:
 * WordSpacing:
 * 0 <= Minimum <= Maximum
 * Minimum <= Desired <= Maximum
 * Minimum <= Maximum <= 1000
 * LetterSpacing:
 * -100 <= Minimum <= Maximum
 * Minimum <= Desired <= Maximum
 * Minimum <= Maximum <= 500
 * GlyphScaling:
 * 50 <= Minimum <= Maximum
 * Minimum <= Desired <= Maximum
 * Minimum <= Maximum <= 200
 * AutoLeading:
 * 0 <= AutoLeading <= 500
 *
 * @optionobject
 * @minVersion 24.1
 */
export interface JustificationProperties {
    /**
     * Auto leading amount
     * @default 120
     * @minVersion 24.1
     */
    autoLeadingAmount?: number;
    /**
     * Minimum word spacing
     * @default 80
     * @minVersion 24.1
     */
    wordSpacingMinimum?: number;
    /**
     * Desired word spacing
     * @default 100
     * @minVersion 24.1
     */
    wordSpacingDesired?: number;
    /**
     * Maximum word spacing
     * @default 133
     * @minVersion 24.1
     */
    wordSpacingMaximum?: number;
    /**
     * Minimum letter spacing
     * @default 0
     * @minVersion 24.1
     */
    letterSpacingMinimum?: number;
    /**
     * Desired letter spacing
     * @default 0
     * @minVersion 24.1
     */
    letterSpacingDesired?: number;
    /**
     * Maximum letter spacing
     * @default 0
     * @minVersion 24.1
     */
    letterSpacingMaximum?: number;
    /**
     * Minimum glyph scaling
     * @default 100
     * @minVersion 24.1
     */
    glyphScalingMinimum?: number;
    /**
     * Desired glyph scaling
     * @default 100
     * @minVersion 24.1
     */
    glyphScalingDesired?: number;
    /**
     * Maximum glyph scaling
     * @default 100
     * @minVersion 24.1
     */
    glyphScalingMaximum?: number;
}
/**
 * The hyphenation features as they're displayed in the dialog
 * found in the Paragraph's flyout menu "Hyphenation...".
 * All numbers are pixels.
 *
 * @optionobject
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
