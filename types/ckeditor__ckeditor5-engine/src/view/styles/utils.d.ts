/**
 * Checks if string contains [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color) CSS value.
 *
 *        isColor( '#f00' );                        // true
 *        isColor( '#AA00BB33' );                    // true
 *        isColor( 'rgb(0, 0, 250)' );            // true
 *        isColor( 'hsla(240, 100%, 50%, .7)' );    // true
 *        isColor( 'deepskyblue' );                // true
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

export function getBoxSidesValues(
    value: string,
): {
    top: string | undefined;
    bottom: string | undefined;
    left: string | undefined;
    right: string | undefined;
};

/**
 * Default reducer for CSS properties that concerns edges of a box
 * [shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) notations:
 *
 *        stylesProcessor.setReducer( 'padding', getBoxSidesValueReducer( 'padding' ) );
 */
export function getBoxSidesValueReducer(
    styleShorthand: string,
): (value: {
    top: string | undefined;
    bottom: string | undefined;
    left: string | undefined;
    right: string | undefined;
}) => Array<[string, string]>;
