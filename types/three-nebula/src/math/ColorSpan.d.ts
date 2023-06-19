import Span from './Span';

/**
 * Class for storing and interacting with an array of colours.
 *
 */
export default class ColorSpan extends Span {
    /**
     * Constructs a ColorSpan instance.
     *
     * @param {string|array<string>?} colors - A color or array of colors. If the
     * string 'random' is provided, a random color will be returned from getValue
     * @return void
     */
    constructor(colors?: string | string[]);
    /**
     * @desc The class type.
     * @type {string}
     */
    type: string;
    /**
     * @desc Determines if a random color should be returned from the getValue method.
     * @type {boolean}
     */
    shouldRandomize: boolean;
    /**
     * @desc An array of colors to select from
     * @type {array<string>}
     */
    colors: string[];
    /**
     * Gets a color from the color array
     * or a random color if this.shouldRandomize is true.
     *
     * @return {string} a hex color
     */
    getValue(INT?: number): number;
    getValue(): string;
}

/**
 * Attempts to create an ArraySpan from the colors provided.
 *
 * @param {mixed} colors - colors to try and create an ArraySpan from
 * @return {?ColorSpan}
 */
export const createColorSpan: (colors: string | string[]) => ColorSpan;
