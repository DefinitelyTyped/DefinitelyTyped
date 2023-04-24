import * as Constants from "../Constants";
import { JustificationProperties, HyphenationProperties } from "../types/TextTypes";
/**
 * The Class that stores properties related to the Paragraph panel in the Photoshop UI.
 * @minVersion 24.1
 */
export declare class ParagraphStyle {
    /**
     * The paragraph justification.
     * @default Justification.LEFT
     * @minVersion 24.1
     */
    get justification(): Constants.Justification;
    set justification(justification: Constants.Justification);
    /**
     * The justification features as they're displayed in the dialog
     * found in the Paragraph's flyout menu "Justification...".
     * They're expressed with an option object with the following properties (all percentage numbers):
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
     * @minVersion 24.1
     */
    get justificationFeatures(): JustificationProperties;
    set justificationFeatures(features: JustificationProperties);
    /**
     * The amount of space in pixels to indent text from the left for a 72ppi document.
     * @range -1296..1296
     * @minVersion 24.1
     */
    get leftIndent(): number;
    set leftIndent(leftIndent: number);
    /**
     * The amount of space in pixels to indent text from the right for a 72ppi document.
     * @range -1296..1296
     * @minVersion 24.1
     */
    get rightIndent(): number;
    set rightIndent(rightIndent: number);
    /**
     * The amount of space in pixels to indent the first line of paragraphs for a 72ppi document.
     * @range -1296..1296
     * @minVersion 24.1
     */
    get firstLineIndent(): number;
    set firstLineIndent(firstLineIndent: number);
    /**
     * The amount of space in pixels to use before each paragraph for a 72ppi document.
     * @range -1296..1296
     * @minVersion 24.1
     */
    get spaceBefore(): number;
    set spaceBefore(spaceBefore: number);
    /**
     * The width of kashida (tatweel) character
     * @default KashidaWidthType.MEDIUM
     * @minVersion 24.1
     */
    get kashidaWidth(): Constants.KashidaWidthType;
    set kashidaWidth(kashidaWidth: Constants.KashidaWidthType);
    /**
     * Line breaking rules in Japanese text (Kinsoku Shori)
     * @default Kinsoku.NONE
     * @minVersion 24.1
     */
    get kinsoku(): Constants.Kinsoku;
    set kinsoku(kinsoku: Constants.Kinsoku);
    /**
     * Spacing between punctuation, symbols, numbers, and other character classes
     * in Japanese text.
     * @default Mojikumi.NONE
     * @minVersion 24.1
     */
    get mojikumi(): Constants.Mojikumi;
    set mojikumi(mojikumi: Constants.Mojikumi);
    /**
     * The amount of space in pixels to use after each paragraph for a 72ppi document.
     * @range -1296..1296
     * @minVersion 24.1
     */
    get spaceAfter(): number;
    set spaceAfter(spaceAfter: number);
    /**
     * True to use hyphenation in word wrap.
     * Use hyphenationFeatures for maximum control.
     * @default false
     * @minVersion 24.1
     */
    get hyphenation(): boolean;
    set hyphenation(hyphenation: boolean);
    /**
     * The hyphenation features as they're displayed in the dialog
     * found in the Paragraph's flyout menu "Hyphenation...".
     * They're expressed with an option object with the following properties (numbers are in pixels):
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
     * @minVersion 24.1
     */
    get hyphenationFeatures(): HyphenationProperties;
    set hyphenationFeatures(features: HyphenationProperties);
    /**
     * The paragraph layout mode.
     * @default ParagraphLayout.WORLD
     * @minVersion 24.1
     */
    get layoutMode(): Constants.ParagraphLayout;
    set layoutMode(paragraphLayout: Constants.ParagraphLayout);
    /**
     * The paragraph UI features to display.
     * @default TypeInterfaceFeatures.DEFAULT
     * @minVersion 24.1
     */
    get features(): Constants.TypeInterfaceFeatures;
    set features(features: Constants.TypeInterfaceFeatures);
    /**
     * Resets the paragraph style to its default values.
     * @async
     * @minVersion 24.1
     */
    reset(): Promise<void>;
}
