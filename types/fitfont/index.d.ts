// Type definitions for fitfont 1.3
// Project: https://github.com/gregoiresage/fitfont
// Definitions by: Jérémy Jeanson <https://github.com/JeremyJeanson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Horizontal alignment
 */
export type HorizontalAlign = "start" | "middle" | "end";

/**
 * Vertical alignment
 */
export type VerticalAlign = "top" | "middle" | "bottom" | "baseline";

/**
 * Option to initialize a fitfont class
 */
export interface Options {
    /**
     * Id fo the symbol or the Element to use
     */
    id: string | object;
    /**
     * name of the generated font folder
     */
    font: string;
    /**
     * Horizontal alignment
     */
    halign?: HorizontalAlign;
    /**
     * Vertical alignment
     */
    valign?: VerticalAlign;
    /**
     * Letter spacing
     */
    letterspacing?: number;
}

/**
 * Fitfont class to use cutom fonts
 */
export class FitFont {
    constructor(options: Options);

    /**
     * Force the redraw
     */
    redraw(): void;

    /**
     * Text to show
     */
    text: string;

    /**
     * Horizontal alignment
     */
    halign: HorizontalAlign;

    /**
     * Vertical alignment
     */
    valign: VerticalAlign;

    /**
     * Letter spacing
     */
    letterspacing: number;

    /**
     * With (read only)
     */
    readonly width: number;
}
