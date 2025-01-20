/// <reference types="node" />

/**
 * Object for adjusting options on subset-font output.
 */
interface SubsetFontOptions {
    /**
     * The desired output format. Defaults to the format of the original font.
     */
    targetFormat?: "sfnt" | "woff" | "woff2" | "truetype";
    /**
     * An array of numbers specifying the extra name ids to preserve in the name table. See README for details.
     */
    preserveNameIds?: number[];
    /**
     * An object specifying a full or partial instancing of variation axes in the font.
     * Only works with variable fonts. See README's example for details.
     */
    variationAxes?: {
        [axeName: string]: number | { min: number; max: number; default?: number };
    };
    /**
     * Don't perform glyph closure for layout substitution (GSUB).
     * Equivalent to `hb-subset --no-layout-closure` and `pyftsubset --no-layout-closure`.
     */
    noLayoutClosure?: boolean;
}

/**
 * Create a subset font from an existing font in SFNT (TrueType/OpenType), WOFF, or WOFF2 format.
 *
 * @param buffer A buffer containing the original font to subset.
 * @param text A string of characters to subset the original font to.
 * @param options Additional options to configure the subsetter with.
 */
declare function subsetFont(buffer: Buffer, text: string, options?: SubsetFontOptions): Promise<Buffer>;

export = subsetFont;
