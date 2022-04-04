import { BoxSides } from '../stylesmap';

/**
 * Checks if string contains [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color) CSS value.
 *
 *    isColor( '#f00' );            // true
 *    isColor( '#AA00BB33' );          // true
 *    isColor( 'rgb(0, 0, 250)' );      // true
 *    isColor( 'hsla(240, 100%, 50%, .7)' );  // true
 *    isColor( 'deepskyblue' );        // true
 *
 * **Note**: It does not support CSS Level 4 whitespace syntax, system colors and radius values for HSL colors.
 */
export function isColor(string: string): boolean;

/**
 * Checks if string contains [line style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style) CSS value.
 */
export function isLineStyle(string: string): boolean;

/**
 * Checks if string contains [length](https://developer.mozilla.org/en-US/docs/Web/CSS/length) CSS value.
 */
export function isLength(string: string): boolean;

/**
 * Checks if string contains [percentage](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage) CSS value.
 */
export function isPercentage(string: string): boolean;

/**
 * Checks if string contains [background repeat](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat) CSS value.
 */
export function isRepeat(string: string): boolean;

/**
 * Checks if string contains [background position](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position) CSS value.
 */
export function isPosition(string: string): boolean;

/**
 * Checks if string contains [background attachment](https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment) CSS value.
 */
export function isAttachment(string: string): boolean;

/**
 * Checks if string contains [URL](https://developer.mozilla.org/en-US/docs/Web/CSS/url) CSS value.
 */
export function isURL(string: string): boolean;

export function getBoxSidesValues(value?: string): BoxSides;

/**
 * Default reducer for CSS properties that concerns edges of a box
 * [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) notations:
 *
 *    stylesProcessor.setReducer( 'padding', getBoxSidesValueReducer( 'padding' ) );
 */
export function getBoxSidesValueReducer(
    styleShorthand: string,
): (notation: Record<string, string | undefined>) => Array<[string, string]>;

/**
 * Returns a [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) notation
 * of a CSS property value.
 *
 *    getBoxSidesShorthandValue( { top: '1px', right: '1px', bottom: '2px', left: '1px' } );
 *    // will return '1px 1px 2px'
 */
export function getBoxSidesShorthandValue(styleShorthand: NonNullable<BoxSides>): string;

/**
 * Creates a normalizer for a [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) 1-to-4 value.
 *
 *    stylesProcessor.setNormalizer( 'margin', getPositionShorthandNormalizer( 'margin' ) );
 */
export function getPositionShorthandNormalizer(shorthand: string): (value: string) => { path: string; value: BoxSides };

/**
 * Parses parts of a 1-to-4 value notation - handles some CSS values with spaces (like RGB()).
 *
 *    getShorthandValues( 'red blue RGB(0, 0, 0)');
 *    // will return [ 'red', 'blue', 'RGB(0, 0, 0)' ]
 */
export function getShorthandValues(string: string): string[];
