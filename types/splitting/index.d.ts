export = Splitting;

export as namespace Splitting;

/**
 * @param options Configuration options
 * @returns A result object with data about the plugins that ran
 * @example
 * ```html
 * <!-- Initial DOM -->
 * <div data-splitting>ABC</div>
 * <script> Splitting(); </script>
 *
 * <!-- Output -->
 * <div data-splitting class="words chars splitting" style="--word-total:1; --char-total:3;">
 *   <span class="word" data-word="ABC" style="--word-index:0;">
 *     <span class="char" data-char="A" style="--char-index:0;">A</span>
 *     <span class="char" data-char="B" style="--char-index:1;">B</span>
 *     <span class="char" data-char="C" style="--char-index:2;">C</span>
 *   </span>
 * </div>
 * ```
 * @see {@link <https://splitting.js.org/guide.html#basic-usage>}
 */
declare function Splitting(options?: Splitting.Options): Splitting.Result;

declare namespace Splitting {
    /**
     * The same as the normal splitting function, but with a required `content` property.
     * Returns a string of rendered HTML instead of {@link Result}.
     * Intended for use in JS frameworks such as Vue
     * @param options Configuration options
     * @returns Rendered HTML string
     * @example
     * ```html
     * <div v-html="Splitting.html({ content: myContentString, by: 'chars' })"></div>
     * ```
     */
    function html(options: HTMLOptions): string;

    /**
     * Add a new plugin
     * @param plugin The plugin to add
     */
    function add(plugin: Plugin): void;

    interface Options {
        /**
         * The target element, either a string selector or element(s)
         * @default '[data-splitting]'
         */
        target?: string | Element | Element[] | NodeList | undefined;
        /**
         * The name of the plugin to use
         * @default 'chars'
         */
        by?: string | undefined;
        /**
         * An optional string to prefix the CSS variables with
         * @default null
         */
        key?: string | null | undefined;

        /** Any plugin-specific options */
        [key: string]: unknown;
    }

    interface HTMLOptions extends Options {
        /** An HTML string to use as the splitting target */
        content: string;
    }

    interface Plugin {
        /** The name of the plugin */
        by: string;
        /** The prefix to use on custom CSS properties */
        key: string;
        /** The plugins that must run before this one */
        depends: string[];
        /**
         * The function to call when the plugin is used.
         * Its return value is added to {@link Result} under a key
         * with the same name as the plugin
         */
        split(): any;
    }

    interface Result {
        /** Array of chars when using the `char` plugin */
        chars?: HTMLElement[] | undefined;
        /** Array of words when using the `words` or `lines` plugin */
        words?: HTMLElement[] | undefined;
        /** Array of elements by line when using the `lines` plugin */
        lines?: HTMLElement[][] | undefined;
        /** Array of elements when using the `items` plugin */
        items?: HTMLElement[] | undefined;
        /** Array of elements by row when using the `rows` or `grid` plugin */
        rows?: HTMLElement[][] | undefined;
        /** Array of elements by column when using the `cols` or `grid` plugin */
        cols?: HTMLElement[][] | undefined;
        /** Array of cells when using the `cells`, `cellRows`, or `cellCols` plugin */
        cells?: HTMLElement[] | undefined;
        /** Array of elements by row when using the `cells` or `cellRows` plugin */
        cellRows?: HTMLElement[][] | undefined;
        /** Array of elements by column when using the `cells` or `cellCols` plugin */
        cellCols?: HTMLElement[][] | undefined;

        /** Returns for any other plugins */
        [key: string]: unknown;
    }
}

// eslint-disable-next-line @definitelytyped/no-declare-current-package
declare module "splitting/dist/splitting.css";
// eslint-disable-next-line @definitelytyped/no-declare-current-package
declare module "splitting/dist/splitting-cells.css";
