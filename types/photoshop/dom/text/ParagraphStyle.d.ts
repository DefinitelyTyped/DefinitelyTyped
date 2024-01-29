import * as Constants from "../Constants";
import { HyphenationProperties, JustificationProperties } from "../types/TextTypes";
/**
 * The Class that stores properties related to the Paragraph panel in the Photoshop UI.
 * @minVersion 24.1
 */
export declare class ParagraphStyle {
    /**
     * The paragraph justification.
     * @default [LEFT](Constants.Justification)
     * @minVersion 24.1
     */
    get justification(): Constants.Justification;
    set justification(justification: Constants.Justification);
    /**
     * The property values used to calculate justification.
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
     * @default [MEDIUM](Constants.KashidaWidthType)
     * @minVersion 24.1
     */
    get kashidaWidth(): Constants.KashidaWidthType;
    set kashidaWidth(kashidaWidth: Constants.KashidaWidthType);
    /**
     * Line breaking rules in Japanese text (Kinsoku Shori)
     * @default [NONE](Constants.Kinsoku)
     * @minVersion 24.1
     */
    get kinsoku(): Constants.Kinsoku;
    set kinsoku(kinsoku: Constants.Kinsoku);
    /**
     * Spacing between punctuation, symbols, numbers, and other character classes
     * in Japanese text.
     * @default [NONE](Constants.Mojikumi)
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
     * The property values used to calculate hyphenation.
     *
     * @minVersion 24.1
     */
    get hyphenationFeatures(): HyphenationProperties;
    set hyphenationFeatures(features: HyphenationProperties);
    /**
     * The paragraph layout mode.
     * @default [WORLD](Constants.ParagraphLayout)
     * @minVersion 24.1
     */
    get layoutMode(): Constants.ParagraphLayout;
    set layoutMode(paragraphLayout: Constants.ParagraphLayout);
    /**
     * The paragraph UI features to display.
     * @default [DEFAULT](Constants.TypeInterfaceFeatures)
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
