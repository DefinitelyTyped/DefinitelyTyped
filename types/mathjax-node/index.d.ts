/**
 * Type definitions for
 * {@link https://github.com/mathjax/MathJax-node | mathjax-node}
 */

/**
 * Interface describing the input to the {@link typeset | `typeset`} method.
 */
export interface TypesetInput {
    /**
     * The math to be typeset.
     *
     * @defaultValue `''` (empty string)
     *
     * @example
     * An example of math provided in TeX or inline-TeX format:
     *
     * ```ts
     * 'E = mc^2'
     * ```
     *
     * An example of math provided in MathML format (after printing it to
     * the console for readability):
     *
     * ```html
     * <math xmlns="http://www.w3.org/1998/Math/MathML" display="block" alttext="x">
     *   <mi>x</mi>
     * </math>
     * ```
     */
    math: string;

    /**
     * Controls how the input passed to the {@link math | `math`} property
     * should be interpreted:
     *
     * - `'TeX'`: The input should be interpreted as display-mode TeX.
     * - `'inline-TeX'`: The input should be interpreted as inline TeX.
     * - `'MathML'`: The input should be interpreted as MathML.
     *
     * @defaultValue `'TeX'`
     */
    format: "TeX" | "inline-TeX" | "MathML";

    /**
     * The namespace to use for MathML.
     *
     * @defaultValue `'mml'`
     */
    xmlns?: string;

    /**
     * Controls whether a MathML output string should be generated. If
     * `true`, the {@link TypesetResult.mml | `mml`} property of the result
     * {@link TypesetResult | `TypesetResult`} will contain the output
     * MathML string.
     *
     * @defaultValue `false`
     */
    mml?: boolean;

    /**
     * Controls whether a MathML output JSDOM node should be generated. If
     * `true`, the {@link TypesetResult.mmlNode | `mmlNode`} property of the
     * output {@link TypesetResult | `TypesetResult`} will contain the
     * output MathML node.
     *
     * @defaultValue `false`
     */
    mmlNode?: boolean;

    /**
     * Controls whether an HTML output string should be generated. If
     * `true`, the {@link TypesetResult.html | `html`} property of the
     * output {@link TypesetResult | `TypesetResult`} will contain the
     * output HTML string.
     *
     * @defaultValue `false`
     */
    html?: boolean;

    /**
     * Controls whether an HTML output JSDOM node should be generated. If
     * `true`, the {@link TypesetResult.htmlNode | `htmlNode`} property of
     * the output {@link TypesetResult | `TypesetResult`} will contain the
     * output HTML node.
     *
     * @defaultValue `false`
     */
    htmlNode?: boolean;

    /**
     * Controls whether a CSS output string should be generated (intended to
     * be applied to the HTML output). If `true`, the
     * {@link TypesetResult.css | `css`} property of the output
     * {@link TypesetResult | `TypesetResult`} will contain the output CSS
     * string.
     *
     * @defaultValue `false`
     */
    css?: boolean;

    /**
     * Controls whether an SVG output string should be generated. If `true`,
     * the {@link TypesetResult.svg | `svg`} property of the output
     * {@link TypesetResult | `TypesetResult`} will contain the output SVG
     * string.
     *
     * @defaultValue `false`
     */
    svg?: boolean;

    /**
     * Controls whether an SVG output JSDOM node should be generated. If
     * `true`, the {@link TypesetResult.svgNode | `svgNode`} property of the
     * output {@link TypesetResult | `TypesetResult`} will contain the
     * output SVG node.
     *
     * @defaultValue `false`
     */
    svgNode?: boolean;

    /**
     * Add textual alternatives to the output.
     *
     * @remarks
     * In the case of `'TeX'` or `'inline-TeX'` input, the value of the
     * {@link TypesetResult.speakText | `speakText`} property of the output
     * {@link TypesetResult | `TypesetResult`} will always be equal to the
     * value of the {@link TypesetInput.math | `math`} property of the
     * {@link TypesetInput | `TypesetInput`}.
     *
     * @defaultValue `true`
     */
    speakText?: boolean;

    /**
     * Sets the size of an `ex` unit in pixels.
     *
     * @defaultValue `6`
     */
    ex?: number;

    /**
     * Width of container (in ex) for linebreaking and tags.
     *
     * @defaultValue `100`
     */
    width?: number;

    /**
     * Controls whether to use <defs> and <use> in SVG output.
     *
     * @defaultValue `true`
     */
    useFontCache?: boolean;

    /**
     * Controls whether to use common <defs> for all equations in SVG
     * output.
     *
     * @defaultValue `false`
     */
    useGlobalCache?: boolean;

    /**
     * Controls whether to perform automatic linebreaking.
     *
     * @defaultValue `false`
     */
    linebreaks?: boolean;

    /**
     * Controls whether the output of math typeset in the `'TeX'` format
     * should be automatically include equation numbers. Math typeset in the
     * `'inline-TeX'` or `'MathML'` formats is unaffected by this option.
     *
     * @defaultValue `'none'`
     */
    equationNumbers?: "none" | "AMS" | "all";

    /**
     * Controls the width (in pixels) of CJK characters.
     *
     * @defaultValue `13`
     */
    cjkCharWidth?: number;

    /**
     * An object to store information from multiple calls (e.g., `<defs>` if
     * `useGlobalCache` is set to `true`, or a counter for equation
     * numbering if `equationNumbers` is set to `'AMS'` or `'all'`).
     *
     * @defaultValue `{}`
     */
    state?: {
        /**
         * A collection of glyph data.
         */
        glyphs?: unknown;

        /**
         * A string containing SVG def elements.
         */
        defs?: string;

        AMS: {
            /**
             * The current starting equation number.
             */
            startNumber: number;

            /**
             * Set of labels.
             */
            labels: unknown;

            /**
             * IDs used in previous equations.
             */
            IDs: unknown;
        };
    };

    /**
     * Controls the timeout duration (in milliseconds) for the typesetting
     * process. Upon timeout, MathJax will be restarted.
     *
     * @defaultValue `10000` (10 seconds)
     */
    timeout?: number;
}

export interface TypesetResult {
    /**
     * An array of MathJax error messages if any errors occurred during
     * typesetting.
     */
    errors?: string[];

    /**
     * HTML output string.
     *
     * @example
     * Consider the following code snippet:
     *
     * ```ts
     * const mjAPI = await import('mathjax-node');
     * mjAPI.start();
     * mjAPI.typeset(
     *     {
     *         math: 'x',
     *         format: 'TeX',
     *         html: true,
     *     },
     *     (result) => {
     *         console.log(result.html);
     *     },
     * );
     * ```
     *
     * Compiling this snippet and then running the result with Node.js will
     * produce the following output (formatted for readability):
     *
     * ```html
     * <span class="mjx-chtml MJXc-display" style="text-align: center">
     *     <span class="mjx-math" aria-label="x">
     *         <span class="mjx-mrow" aria-hidden="true">
     *             <span class="mjx-mi">
     *                 <span
     *                     class="mjx-char MJXc-TeX-math-I"
     *                     style="padding-top: 0.225em; padding-bottom: 0.298em"
     *                 >
     *                     x
     *                 </span>
     *             </span>
     *         </span>
     *     </span>
     * </span>
     * ```
     */
    html?: string;

    /**
     * HTML output JSDOM node.
     *
     * @remarks
     * This property is only available if the optional
     * {@link TypesetInput.htmlNode | `htmlNode`} property of the
     * {@link TypesetInput | `TypesetInput`} object was set to `true`.
     *
     * @remarks
     * Invariant: Assuming both {@link TypesetInput.html | `html`} and
     * {@link TypesetInput.htmlNode | `htmlNode`} were set to `true`, then
     * we will always have
     *
     * ```ts
     * result.html === result.htmlNode.outerHTML
     * ```
     */
    htmlNode?: HTMLSpanElement;

    /**
     * CSS output string (intended to be applied to the HTML output).
     *
     * @remarks
     * Only available if the optional {@link TypesetInput.css | `css`}
     * property of the {@link TypesetInput | `TypesetInput`} object was set
     * to `true`.
     */
    css?: string;

    /**
     * "Speech text" output, used for `aria-label` or `alt` attributes.
     *
     * @remarks
     * This property is only available if the optional
     * {@link TypesetInput.speakText | `speakText`} property of the
     * {@link TypesetInput | `TypesetInput`} object was not set to `false`.
     *
     * @remarks
     * If defined, the value of this property will always be equal to the
     * value passed to the {@link TypesetInput.math | `math`} property of
     * the {@link TypesetInput | `TypesetInput`}.
     */
    speakText?: string;

    /**
     * MathML output string.
     *
     * @remarks
     * This property is only available if the optional
     * {@link TypesetInput.mml | `mml`} property of the
     * {@link TypesetInput | `TypesetInput`} object was set to `true`.
     *
     * @example
     * Consider the following code snippet:
     *
     * ```ts
     * const mjAPI = await import('mathjax-node');
     * mjAPI.start();
     * mjAPI.typeset(
     *     { math: 'x', format: 'TeX', mml: true },
     *     (result) => { console.log(result.mml); }
     * );
     * ```
     *
     * Compiling this snippet and then running the result with Node.js will
     * produce the following output:
     *
     * ```html
     * <math xmlns="http://www.w3.org/1998/Math/MathML" display="block" alttext="x">
     *   <mi>x</mi>
     * </math>
     * ```
     */
    mml?: string;

    /**
     * MathML output JSDOM node.
     *
     * @remarks
     * This property is only available if the optional
     * {@link TypesetInput.mmlNode | `mmlNode`} of the
     * {@link TypesetInput | `TypesetInput`} object was set to `true`.
     *
     * @remarks
     * Invariant: Assuming both {@link TypesetInput.mml | `mml`} and
     * {@link TypesetInput.mmlNode | `mmlNode`} were set to `true`, then we
     * will always have
     *
     * ```ts
     * result.mml === result.mmlNode.outerHTML
     * ```
     */
    mmlNode?: HTMLSpanElement;

    /**
     * SVG output string.
     *
     * @remarks
     * This property is only available if the optional
     * {@link TypesetInput.svg | `svg`} property of the
     * {@link TypesetInput | `TypesetInput`} object was set to `true`.
     *
     * @example
     * Consider the following code snippet:
     *
     * ```ts
     * const mjAPI = await import('mathjax-node');
     * mjAPI.start();
     * mjAPI.typeset(
     *     { math: 'x', format: 'TeX', svg: true },
     *     (result) => { console.log(result.mml); }
     * );
     * ```
     *
     * Compiling this snippet and then running the result with Node.js will
     * produce the following output (formatted for readability):
     *
     * ```html
     * <svg xmlns:xlink="http://www.w3.org/1999/xlink" width="1.33ex" height="1.676ex" style="vertical-align: -0.338ex;" viewBox="0 -576.1 572.5 721.6" role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" aria-labelledby="MathJax-SVG-1-Title">
     * <title id="MathJax-SVG-1-Title">x</title>
     * <defs aria-hidden="true">
     * <path stroke-width="1" id="E1-MJMATHI-78" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path>
     * </defs>
     * <g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)" aria-hidden="true">
     *  <use xlink:href="#E1-MJMATHI-78" x="0" y="0"></use>
     * </g>
     * </svg>
     * ```
     */
    svg?: string;

    /**
     * The content of the SVG output's `width` attribute.
     *
     * @remarks
     * This property is only available if the optional
     * {@link TypesetInput.svg | `svg`} property or the optional
     * {@link TypesetInput.svgNode | `svgNode`} of the
     * {@link TypesetInput | `TypesetInput`} object was set to `true`.
     *
     * @example
     * Consider the following code snippet:
     *
     * ```ts
     * const mjAPI = await import('mathjax-node');
     * mjAPI.start();
     * mjAPI.typeset(
     *     { math: 'x', format: 'TeX', svg: true },
     *     (result) => { console.log(result.width); }
     * );
     * ```
     *
     * Compiling this snippet and then running the result with Node.js will
     * produce the following output:
     *
     * ```plain
     * 1.33ex
     * ```
     */
    width?: `${number}ex`;

    /**
     * The content of the SVG output's `height` attribute.
     *
     * @remarks
     * This property is only available if the optional
     * {@link TypesetInput.svg | `svg`} property or the optional
     * {@link TypesetInput.svgNode | `svgNode`} of the
     * {@link TypesetInput | `TypesetInput`} object was set to `true`.
     *
     * @example
     * Consider the following code snippet:
     *
     * ```ts
     * const mjAPI = await import('mathjax-node');
     * mjAPI.start();
     * mjAPI.typeset(
     *     { math: 'x', format: 'TeX', svg: true },
     *     (result) => { console.log(result.height); }
     * );
     * ```
     *
     * Compiling this snippet and then running the result with Node.js will
     * produce the following output:
     *
     * ```plain
     * 1.676ex
     * ```
     */
    height?: `${number}ex`;

    /**
     * The content of the SVG output's `style` attribute.
     *
     * @remarks
     * This property is only available if the optional
     * {@link TypesetInput.svg | `svg`} property or the optional
     * {@link TypesetInput.svgNode | `svgNode`} of the
     * {@link TypesetInput | `TypesetInput`} object was set to `true`.
     *
     * @remarks
     * Invariant: Assuming {@link TypesetInput.svgNode | `svgNode`} was set
     * to `true`, then we will always have
     *
     * ```ts
     * result.style === result.svgNode.style.cssText
     * ```
     *
     * @example
     * Consider the following code snippet:
     *
     * ```ts
     * const mjAPI = await import('mathjax-node');
     * mjAPI.start();
     * mjAPI.typeset(
     *     { math: 'x', format: 'TeX', svg: true },
     *     (result) => { console.log(result.style); }
     * );
     * ```
     *
     * Compiling this snippet and then running the result with Node.js will
     * produce the following output:
     *
     * ```css
     * vertical-align: -0.338ex;
     * ```
     */
    style?: string;

    /**
     * SVG output JSDOM node.
     *
     * @remarks
     * This property is only available if the optional
     * {@link TypesetInput.svgNode | `svgNode`} of the
     * {@link TypesetInput | `TypesetInput`} object was set to `true`.
     *
     * @remarks
     * Invariant: Assuming both {@link TypesetInput.svg | `svg`} and
     * {@link TypesetInput.svgNode | `svgNode`} were set to `true`, then we
     * will always have
     *
     * ```ts
     * result.svg === result.svgNode.outerHTML
     * ```
     */
    svgNode?: SVGSVGElement;
}

/**
 * Configuration options for `mathjax-node`.
 */
/**
 * Configuration options for `mathjax-node`.
 */
export interface MathjaxNodeConfig {
    /**
     * Determines whether Message.Set() calls are logged.
     *
     * @defaultValue `false`
     */
    displayMessages?: boolean;

    /**
     * Determines whether error messages are shown on the console.
     *
     * @defaultValue `true`
     */
    displayErrors?: boolean;

    /**
     * Determines whether "unknown characters" (i.e., no glyph in the
     * configured fonts) are saved in the error array.
     *
     * @defaultValue `false`
     */
    undefinedCharError?: boolean;

    /**
     * A convenience option to add MathJax extensions.
     *
     * @defaultValue `''`
     */
    extensions?: string[];

    /**
     * For webfont URLs in the CSS output (which is intended to be applied
     * to the HTML output).
     *
     * @defaultValue
     * `'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/fonts/HTML-CSS'`
     */
    fontURL?: string;

    /**
     * Configures custom path variables (e.g., for third party extensions,
     * cf. test/config-third-party-extensions.js).
     *
     * @defaultValue `{}`
     */
    paths?: {
        [key: string]: string;
    };

    /**
     * MathJax configuration options.
     *
     * @defaultValue `{}`
     *
     * @see https://docs.mathjax.org
     */
    MathJax?: Record<string, unknown>;
}

/**
 * Typeset math using MathJax.
 */
export function typeset(
    /**
     * The input to the typesetting operation.
     *
     * @example
     * {
     *     math: 'E = mc^2',
     *     format: 'TeX',
     *     html: true
     * }
     */
    input: TypesetInput,
): Promise<TypesetResult>;

/**
 * Typeset math using MathJax.
 */
export function typeset(
    /**
     * The input to the typesetting operation.
     *
     * @example
     * {
     *     math: 'E = mc^2',
     *     format: 'TeX',
     *     html: true
     * }
     */
    input: TypesetInput,
    /**
     * Callback function to be executed after the typesetting operation is
     * complete.
     *
     * @param result The result of the typesetting operation.
     * @param input The input that was passed to the typesetting operation.
     */
    callback: (
        /**
         * The result of the typesetting operation.
         */
        result: TypesetResult,
        /**
         * The input that was passed to the typesetting operation.
         */
        input: TypesetInput,
    ) => void,
): void;

/**
 * This function starts (and restarts) `mathjax-node`. This allows
 * reconfiguration.
 *
 * @remarks This is done automatically when {@link typeset | `typeset`} is
 * first called.
 */
export function start(): void;

/**
 * This function is used to set global configuration options.
 *
 * @remarks
 * Changes to these options require a restart of the API using the
 * {@link start | `start`} method.
 */
export function config(options: MathjaxNodeConfig): void;
