import * as Constants from "../Constants";
import { SolidColor } from "../objects/SolidColor";
/**
 * The Class that stores properties related to the Character panel in the Photoshop UI.
 * @minVersion 24.1
 */
export declare class CharacterStyle {
    /**
     * The text face of the character, using the PostScript name of the font.
     * See [[TextFont]] and use the `postScriptName` property.
     * @minVersion 24.1
     */
    get font(): string;
    set font(font: string);
    /**
     * The font size in pixels for a 72ppi document.
     * @range 0.01..1296
     * @minVersion 24.1
     */
    get size(): number;
    set size(size: number);
    /**
     * Character scaling (horizontal) in proportion to verticalScale,
     * as a percentage value.
     * @range 0..1000
     * @minVersion 24.1
     */
    get horizontalScale(): number;
    set horizontalScale(horizontalScale: number);
    /**
     * Character scaling (vertical) in proportion to horizontalScale,
     * as a percentage value.
     * @range 0..1000
     * @minVersion 24.1
     */
    get verticalScale(): number;
    set verticalScale(verticalScale: number);
    /**
     * True to use Faux Bold.
     * Setting this to true is equivalent to selecting text and
     * clicking Faux Bold in the Character panel.
     * @default false
     * @minVersion 24.1
     */
    get fauxBold(): boolean;
    set fauxBold(fauxBold: boolean);
    /**
     * True to use Faux Italic.
     * Setting this to true is equivalent to selecting text and
     * clicking Faux Italic in the Character panel.
     * @default false
     * @minVersion 24.1
     */
    get fauxItalic(): boolean;
    set fauxItalic(fauxItalic: boolean);
    /**
     * True to use a font's built-in leading information.
     * @minVersion 24.1
     */
    get useAutoLeading(): boolean;
    set useAutoLeading(useAutoLeading: boolean);
    /**
     * The leading amount in pixels for a 72ppi document.
     * @default null
     * @range 0..4999.99
     * @minVersion 24.1
     */
    get leading(): number;
    set leading(leading: number);
    /**
     * The amount of uniform spacing between multiple characters.
     * Tracking units are 1/1000 of an em space. The width of an em space is relative
     * to the current type size. In a 1-point font, 1 em equals 1 point; in a 10-point font,
     * 1 em equals 10 points. So for example, 100 tracking units in a 10-point font are equivalent to 1 point
     * @range -1000..1000
     * @minVersion 24.1
     */
    get tracking(): number;
    set tracking(tracking: number);
    /**
     * The value in pixels to use in the baseline offset of text for a 72ppi document.
     * @range -1296..1296
     * @minVersion 24.1
     */
    get baselineShift(): number;
    set baselineShift(baselineShift: number);
    /**
     * Adjust the horizontal diacritic position for Middle Eastern languages.
     * @range -1000..1000
     * @minVersion 24.1
     */
    get horizontalDiacriticPosition(): number;
    set horizontalDiacriticPosition(horizontalDiacriticPosition: number);
    /**
     * Adjust the vertical diacritic position for Middle Eastern languages.
     * @range -1000..1000
     * @minVersion 24.1
     */
    get verticalDiacriticPosition(): number;
    set verticalDiacriticPosition(verticalDiacriticPosition: number);
    /**
     * The auto kerning option to use.
     * @default METRICS
     * @minVersion 24.1
     */
    get autoKerning(): Constants.AutoKernType;
    set autoKerning(autoKerning: Constants.AutoKernType);
    /**
     * The text case.
     * @default NORMAL
     * @minVersion 24.1
     */
    get capitalization(): Constants.TextCase;
    set capitalization(capitalization: Constants.TextCase);
    /**
     * The text baseline.
     * @default NORMAL
     * @minVersion 24.1
     */
    get baseline(): Constants.Baseline;
    set baseline(baseline: Constants.Baseline);
    /**
     * Whether the text is strikethrough or not.
     * @default STRIKEOFF
     * @minVersion 24.1
     */
    get strikeThrough(): Constants.StrikeThrough;
    set strikeThrough(strikeThrough: Constants.StrikeThrough);
    /**
     * The underline style to use.
     * @default NONE
     * @minVersion 24.1
     */
    get underline(): Constants.Underline;
    set underline(underline: Constants.Underline);
    /**
     * Standard ligatures (default: true).
     * @default true
     * @minVersion 24.1
     */
    get ligatures(): boolean;
    set ligatures(ligatures: boolean);
    /**
     * Discretionary ligatures.
     * @default false
     * @minVersion 24.1
     */
    get alternateLigatures(): boolean;
    set alternateLigatures(alternateLigatures: boolean);
    /**
     * Fractions.
     * @default false
     * @minVersion 24.1
     */
    get fractions(): boolean;
    set fractions(fractions: boolean);
    /**
     * Ordinals.
     * @default false
     * @minVersion 24.1
     */
    get ordinals(): boolean;
    set ordinals(ordinals: boolean);
    /**
     * Swash.
     * @default false
     * @minVersion 24.1
     */
    get swash(): boolean;
    set swash(swash: boolean);
    /**
     * Titling alternates.
     * @default false
     * @minVersion 24.1
     */
    get titlingAlternates(): boolean;
    set titlingAlternates(titlingAlternates: boolean);
    /**
     * Stylistic Alternates
     * @default false
     * @minVersion 24.1
     */
    get stylisticAlternates(): boolean;
    set stylisticAlternates(stylisticAlternates: boolean);
    /**
     * Language used as a basis for hyphenation rules and spelling.
     * @minVersion 24.1
     */
    get language(): Constants.Language;
    set language(language: Constants.Language);
    /**
     * Character alignment.
     * When a line of text contains different sizes of characters,
     * you can specify how to align text to the largest characters in the line.
     * @default ROMAN
     * @minVersion 24.1
     */
    get characterAlignment(): Constants.CharacterAlignment;
    set characterAlignment(characterAlignment: Constants.CharacterAlignment);
    /**
     * True to disallow line breaks in this text.
     * @default false
     * @minVersion 24.1
     */
    get noBreak(): boolean;
    set noBreak(noBreak: boolean);
    /**
     * The text color as a [[SolidColor]] instance.
     * @minVersion 24.1
     */
    get color(): SolidColor;
    set color(color: SolidColor);
    /**
     * Toggles kashidas in Middle Eastern languages.
     * @default true
     * @minVersion 24.1
     */
    get kashidas(): boolean;
    set kashidas(kashidas: boolean);
    /**
     * The text direction (Middle Eastern features)
     * @default DEFAULT
     * @minVersion 24.1
     */
    get middleEasternTextDirection(): Constants.MiddleEasternTextDirection;
    set middleEasternTextDirection(middleEasternTextDirection: Constants.MiddleEasternTextDirection);
    /**
     * The text digits type to use (Middle Eastern features)
     * @default LTRARABIC
     * @minVersion 24.1
     */
    get middleEasternDigitsType(): Constants.MiddleEasternDigitsType;
    set middleEasternDigitsType(middleEasternDigitsType: Constants.MiddleEasternDigitsType);
    /**
     * Use fractional widths for the text.
     * @default false
     * @minVersion 24.1
     */
    get fractionalWidths(): boolean;
    set fractionalWidths(value: boolean);
    /**
     * The text anti-aliasing
     * @default SHARP
     * @minVersion 24.1
     */
    get antiAliasMethod(): Constants.AntiAlias;
    set antiAliasMethod(antiAliasMethod: Constants.AntiAlias);
    /**
     * Resets the text styles of the Character panel to their default values.
     * @async
     * @minVersion 24.1
     */
    reset(): Promise<void>;
}
