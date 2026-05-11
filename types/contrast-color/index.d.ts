/**
 * A hex color code
 * @example "#ff0000"
 * @example "#f00"
 */
type HexColor = string;

/**
 * A named color
 * @example "red"
 */
type NamedColor = string;

type Color = HexColor | NamedColor;

interface ContrastColorConfig {
    /**
     * The background color to determine a foreground color for
     * @default "#FFFFFF"
     */
    bgColor?: Color;
    /**
     * The color to be returned if `bgColor` is determined to be _light_
     * @default "#000000"
     */
    fgDarkColor?: Color;
    /**
     * The color to be returned if `bgColor` is determined to be _dark_
     * @default "#FFFFFF"
     */
    fgLightColor?: Color;
    /**
     * The color to be returned if `bgColor` is determined to be _invalid_
     * @default "#000000"
     */
    defaultColor?: Color;
    /**
     * Number (0-255) used to adjust variance
     * @default 128
     */
    threshold?: number;
    /**
     * Object to override or add named colours
     * @example { blue: "#0074D9" }
     * @default {}
     */
    customNamedColors?: {
        [colorName: string]: Color;
    };
}

declare class ContrastColor {
    constructor(defaults?: ContrastColorConfig);

    contrastColor(config?: ContrastColorConfig): Color;
}

declare namespace ContrastColor {
    function contrastColor(config?: ContrastColorConfig): Color;
}

export = ContrastColor;
