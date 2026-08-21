import { Font } from "opentype.js";

export = TextToSVG;

declare class TextToSVG {
    /**
     * Create an instance of the SVG generator, using an already parsed font file.
     *
     * You can also use {@see TextToSVG.loadSync} to create an instance with a font
     * file path or from the default font.
     *
     * @param font parsed font file
     */
    constructor(font: Font);

    /**
     * Synchronously load a font from the filesystem and create a TextToSVG instance.
     * For supported file types see the "opentype.js" documentation.
     * If no path is provided, the default font will be used.
     *
     * @param file path to font file
     */
    static loadSync(file?: string | null): TextToSVG;

    /**
     * Asynchronously load a font from an URL and create a TextToSVG instance.
     * For supported file types see the "opentype.js" documentation.
     *
     * @param url of font to load
     * @param callback called, when instance has been created
     */
    static load(url: string, callback: TextToSVG.LoadCallback): void;

    /**
     * Measure the width of the specified text.
     *
     * @param text to measure
     * @param options font options
     * @returns width of the text
     */
    getWidth(text: string, options?: TextToSVG.FontOptions | null): number;

    /**
     * Measure the height of the font.
     *
     * @param fontSize to measure with
     * @returns height of the font
     */
    getHeight(fontSize: number): number;

    /**
     * Measure the text metrics.
     *
     * @param text to measure
     * @param options font options
     */
    getMetrics(text: string, options?: TextToSVG.FontOptions | null): TextToSVG.Metrics;

    /**
     * Generate SVG as a string with text converted to paths.
     *
     * @param text to measure
     * @param options font options and attributes
     * @returns SVG string
     */
    getSVG(text: string, options?: TextToSVG.GenerationOptions | null): string;

    /**
     * Generate SVG `<path>` from text.
     *
     * @param text to measure
     * @param options font options and attributes
     * @returns SVG path element string
     */
    getPath(text: string, options?: TextToSVG.GenerationOptions | null): string;

    /**
     * Generate SVG `<path>` `d` value.
     *
     * @param text to measure
     * @param options font options and attributes
     * @returns SVG path d attribute value
     */
    getD(text: string, options?: TextToSVG.GenerationOptions | null): string;
}

declare namespace TextToSVG {
    /**
     * Text anchor.
     * If horizontal component is omitted, it defaults to left.
     * If vertical component is omitted, it defaults to baseline.
     */
    type Anchor =
        | "left baseline"
        | "left top"
        | "left bottom"
        | "left middle"
        | "center baseline"
        | "center top"
        | "center bottom"
        | "center middle"
        | "right baseline"
        | "right top"
        | "right bottom"
        | "right middle"
        | "baseline"
        | "top"
        | "bottom"
        | "middle"
        | "left"
        | "center"
        | "right";

    interface Metrics {
        x: number;
        y: number;
        baseline: number;
        width: number;
        height: number;
        ascender: number;
        descender: number;
    }

    interface FontOptions {
        /**
         * Horizontal position of the beginning of the text.
         * @default 0
         */
        x?: number | null | undefined;

        /**
         * Vertical position of the baseline of the text.
         * @default 0
         */
        y?: number | null | undefined;

        /**
         * Size of the text.
         * @default 72
         */
        fontSize?: number | null | undefined;

        /**
         * If true takes kerning information into account.
         * @default true
         */
        kerning?: boolean | null | undefined;

        /**
         * Letter-spacing value in em.
         */
        letterSpacing?: number | null | undefined;

        /**
         * Tracking value in (em / 1000).
         */
        tracking?: number | null | undefined;

        /**
         * @default "left baseline"
         */
        anchor?: Anchor | null | undefined;
    }

    interface GenerationOptions extends FontOptions {
        /**
         * Key-value pairs of attributes for `<path>` element.
         */
        attributes?: { [key: string]: string } | null | undefined;
    }

    type LoadCallback = (error: Error | null, textToSVG: TextToSVG | null) => void;
}
