import Span from "./Span";

/**
 * Class for storing and interacting with an array of colours.
 */
export default class ColorSpan extends Span {
    /**
     * Constructs a ColorSpan instance.
     */
    constructor(colors?: string | string[]);
    /**
     * @description The class type.
     */
    type: string;
    /**
     * @description Determines if a random color should be returned from the getValue method.
     */
    shouldRandomize: boolean;
    /**
     * @description An array of colors to select from
     */
    colors: string[];
    /**
     * Gets a color from the color array
     * or a random color if this.shouldRandomize is true.
     */
    getValue(INT?: number): number;
    getValue(): string;
}

/**
 * Attempts to create an ArraySpan from the colors provided.
 */
export function createColorSpan(colors: string | string[]): ColorSpan;
