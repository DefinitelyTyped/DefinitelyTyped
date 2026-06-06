import { FontOptions } from "svg2ttf";
import { SvgIcons2FontOptions } from "svgicons2svgfont";
import { Options as Ttf2WoffOptions } from "ttf2woff";

/**
 * You can easily create web-icon-font by creating svg as font.
 */
declare function Fontagon(options: Fontagon.Options): Promise<Fontagon.Options>;

declare namespace Fontagon {
    interface FormatOptions {
        svg?: SvgIcons2FontOptions;
        ttf?: FontOptions;
        // provided to match convention, package has no options
        woff2?: Record<string, unknown>;
        woff?: Ttf2WoffOptions;
        // provided to match convention, package has no options
        eot?: Record<string, unknown>;
    }
    interface Options {
        /**
         * List of SVG files.
         */
        files: string[];
        /**
         * Directory for generated font files.
         * Default: `dist/`
         */
        dist?: string | undefined;
        /**
         * Specify a font name and the default name for the font file.
         * @default `fontagon-icons`
         */
        fontName?: string | undefined;
        /**
         * stylesheet file generation type
         * @default `all`
         */
        style?: StyleSheetGenerationType | "all" | undefined;
        /**
         * Specify a custom style template.
         */
        styleTemplate?: Record<StyleSheetGenerationType, string> | undefined;
        /**
         * Additional options for CSS templates, that extends default options.
         */
        classOptions?: Record<string, unknown> | undefined;
        /**
         * Order of src values in font-face in CSS file.
         * @default ['eot', 'woff2', 'woff', 'ttf', 'svg']
         */
        order?: string[] | undefined;
        /**
         * Function that takes path of file and return name of icon.
         * @default basename of file
         */
        rename?: (path: string) => string | undefined;
        /**
         * Starting codepoint. Defaults to beginning of unicode private area.
         * @default 0xF101
         */
        startCodepoint?: number | undefined;
        /**
         * Specific codepoints for certain icons.
         * Icons without codepoints will have codepoints incremented from startCodepoint skipping duplicates.
         */
        codepoints?: Record<string, number> | undefined;
        /**
         * Specific per format arbitrary options to pass to the generator
         */
        formatOptions?: FormatOptions | undefined;
        /**
         * It is possible to not create files and get generated fonts in object to write them to files later.
         * @default true
         */
        writeFiles?: boolean | undefined;

        // undocumented
        html?: boolean | undefined;
        htmlTemplate?: string | undefined;
        logs?: boolean | undefined;
        normalize?: boolean | undefined;
        types?: string[] | undefined;
    }

    type StyleSheetGenerationType = "css" | "sass" | "less" | "stylus";
}
export = Fontagon;
