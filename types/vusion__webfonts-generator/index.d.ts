/// <reference types="node" />

import * as Handlebars from "handlebars";

declare function WebfontsGenerator<T extends WebfontsGenerator.GeneratedFontTypes = "woff2" | "woff" | "eot">(
    options: WebfontsGenerator.WebfontsGeneratorOptions<T>,
    done: (
        err: Error | undefined,
        res: Pick<WebfontsGenerator.WebfontsGeneratorResult<T>, T | "generateCss" | "generateHtml">,
    ) => void,
): void;

declare namespace WebfontsGenerator {
    type GeneratedFontTypes = "eot" | "svg" | "ttf" | "woff" | "woff2";

    type CSSTemplateContext = WebfontsGeneratorOptions<any>["templateOptions"] & {
        fontName: string;
        src: string;
        codepoints: { [name: string]: string };
    };

    type HTMLTemplateContext = WebfontsGeneratorOptions<any>["templateOptions"] & {
        names?: string[];
        fontName: string;
        styles: string;
        codepoints: WebfontsGeneratorOptions<any>["codepoints"];
    };

    interface TemplateOptions {
        /**
         * CSS class prefix for each of the generated icons.
         * @default 'icon-'
         */
        classPrefix?: string;
        /**
         * CSS base selector to which the font will be applied.
         * @default '.icon'
         */
        baseSelector?: string;
        /**
         * CSS base class to which the font will be applied.
         * @deprecated Option is deprecated. Use @see {@link baseSelector} instead.
         */
        baseClass?: string;
    }

    interface WebfontsGeneratorOptions<T extends GeneratedFontTypes> {
        /** List of SVG files. */
        files: string[];
        /** Directory for generated font files. */
        dest: string;
        /**
         * Name of font and base name of font files.
         * @default 'iconfont'
         */
        fontName?: string;
        /**
         * Whether to generate CSS file.
         * @default true
         */
        css?: boolean;
        /**
         * Path for generated CSS file.
         * @default path.join(options.dest, options.fontName + '.css')
         */
        cssDest?: string;
        /**
         * Path of custom CSS template. Generator uses handlebars templates.
         * Template receives options from options.templateOptions along with the following options:
         * - fontName
         * - src `string` – Value of the `src` property for `@font-face`.
         * - codepoints `object` – Codepoints of icons in hex format.
         *
         * Paths of default templates are stored in the `webfontsGenerator.templates` object.
         * - `webfontsGenerator.templates.css` – Default CSS template path. It generates classes with names based on values from `options.templateOptions`.
         * - `webfontsGenerator.templates.scss` – Default SCSS template path. It generates mixin `webfont-icon` to add icon styles. It is safe to use multiple generated files with mixins together.
         */
        cssTemplate?: string;
        /** Add parameters or helper to your template. */
        cssContext?(
            context: CSSTemplateContext,
            options: WebfontsGeneratorOptions<T>,
            handlebars: typeof Handlebars,
        ): void;
        /**
         * Fonts path used in CSS file.
         * @default options.destCss
         */
        cssFontsUrl?: string;
        /**
         * Fonts path used in CSS file.
         * @deprecated Option is deprecated. Use @see {@link cssFontsUrl} instead.
         */
        cssFontsPath?: string;
        /**
         * Whether to generate HTML preview.
         * @default false
         */
        html?: boolean;
        /**
         * Path for generated HTML file.
         * @default path.join(options.dest, options.fontName + '.html')
         */
        htmlDest?: string;
        /**
         * HTML template path. Generator uses handlebars templates.
         *
         * Template receives options from `options.templateOptions` along with the following options:
         * - fontName
         * - styles `string` – Styles generated with default CSS template. (`cssFontsPath` is changed to relative path from `htmlDest` to `dest`)
         * - names `string[]` – Names of icons.
         */
        htmlTemplate?: string;
        /** Add parameters or helper to your template. */
        htmlContext?(
            context: HTMLTemplateContext,
            options: WebfontsGeneratorOptions<T>,
            handlebars: typeof Handlebars,
        ): void;
        /** Additional options for CSS & HTML templates, that extends default options. */
        templateOptions?: TemplateOptions;
        /**
         * Font file types to generate. Possible values: `svg`, `ttf`, `woff`, `woff2`, `eot`.
         * @default ['woff2', 'woff', 'eot']
         */
        types: T[];
        /**
         * Order of `src` values in `font-face` in CSS file.
         * @default ['eot', 'woff2', 'woff', 'ttf', 'svg']
         */
        order: T[];
        /** Function that takes path of file and return name of icon. */
        rename?(name: string): string;
        /**
         * Starting codepoint. Defaults to beginning of unicode private area.
         * @default 0xF101
         */
        startCodepoint?: number;
        /** Specific codepoints for certain icons. Icons without codepoints will have codepoints incremented from startCodepoint skipping duplicates. */
        codepoints?: { [key: string]: number };
        /**
         * Enable or disable ligature function.
         * @default true
         */
        ligature?: boolean;
        /**
         * Normalize icons by scaling them to the height of the highest icon.
         * @default false
         */
        normalize?: boolean;
        /** The outputted font height (defaults to the height of the highest input icon). */
        fontHeight?: number;
        /**
         * Setup SVG path rounding.
         * @default 10e12
         */
        round?: number;
        /**
         * The font descent. It is useful to fix the font baseline yourself.
         * @default 0
         */
        descent?: number;
        /**
         * Creates a monospace font of the width of the largest input icon.
         * @default false
         */
        fixedWidth?: boolean;
        /** Calculate the bounds of a glyph and center it horizontally. */
        centerHorizontally?: boolean;
        /**
         * Specific per format arbitrary options to pass to the generator
         *
         * format and matching generator:
         * - svg - [svgicons2svgfont](https://github.com/nfroidure/svgicons2svgfont).
         * - ttf - [svg2ttf](https://github.com/fontello/svg2ttf).
         * - woff2 - [ttf2woff2](https://github.com/nfroidure/ttf2woff2).
         * - woff - [ttf2woff](https://github.com/fontello/ttf2woff).
         * - eot - [ttf2eot](https://github.com/fontello/ttf2eot).
         */
        formatOptions?: { [format in T]?: unknown };
        /**
         * It is possible to not create files and get generated fonts in object to write them to files later.
         *
         * Also results object will have function generateCss([urls]) where urls is an object with future fonts urls.
         * @default true
         */
        writeFiles?: boolean;
    }

    interface WebfontsGeneratorResult<T extends GeneratedFontTypes = GeneratedFontTypes> {
        svg: string;
        ttf: Buffer;
        eot: Buffer;
        woff: Buffer;
        woff2: Buffer;
        generateHtml(urls?: Record<T, string>): string;
        generateCss(urls?: Record<T, string>): string;
    }

    interface Templates {
        /**
         * Default CSS template path.
         * Generates classes with names based on values from `options.templateOptions`.
         */
        css: string;
        /**
         * Default CSS template path.
         * Generates mixin webfont-icon to add icon styles. It is safe to use multiple generated files with mixins together.
         */
        scss: string;
        /**
         * Default HTML template path.
         * Generates a HTML file with a preview of all icons in the font.
         */
        html: string;
    }
    /** Paths of default templates. */
    const templates: Templates;
}

export = WebfontsGenerator;
