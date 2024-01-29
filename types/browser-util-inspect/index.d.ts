export = inspect;

/**
 * Inspect a value as a string.
 *
 * Circular references are replaced by `[Circular]`.
 *
 * @param value a value to be inspected
 * @param options an optional {@link inspect.Options} object
 * @returns a string representation of {@link value}
 * @see https://nodejs.org/api/util.html#utilinspectobject-options the documentation for the Node.js function this is based on
 */
declare function inspect(value: unknown, options?: inspect.Options): string;
/**
 * See {@link inspect}.
 *
 * @variation 2
 * @param value a value to be inspected
 * @param showHidden see {@link inspect.Options#showHidden}
 * @param depth see {@link inspect.Options#depth}
 * @param colors see {@link inspect.Options#colors}
 * @returns a string representation of {@link value}
 */
declare function inspect(value: unknown, showHidden?: boolean, depth?: number, colors?: boolean): string;

/**
 * Objects and types used for {@link inspect}.
 *
 * @variation 0
 */
declare namespace inspect {
    /**
     * Type of options passed into {@link inspect}.
     */
    type Options =
        & {
            /**
             * Whether to show non-enumerable properties.
             *
             * @default false
             */
            readonly showHidden?: boolean | undefined;
            /**
             * Depth to expand nested objects up to.
             *
             * @default 2
             */
            readonly depth?: number | undefined;
            /**
             * Whether to use custom inspect functions of objects if available.
             *
             * The custom inspect function type is {@link CustomInspect}.
             *
             * @default true
             */
            readonly customInspect?: boolean | undefined;
        }
        & (
            | {
                /**
                 * Whether to use colors. The colors are from {@link colors} and {@link styles}.
                 * If `true`, it is effectively the same as passing `stylizeWithColor` to {@link Options#stylize}.
                 *
                 * Mutually exclusive with {@link Options#stylize}.
                 *
                 * @default false
                 * @see https://github.com/deecewan/browser-util-inspect/blob/master/index.js the source code for `stylizeWithColor`
                 */
                readonly colors?: boolean | undefined;
                readonly stylize?: undefined;
            }
            | {
                readonly colors?: undefined;
                /**
                 * Custom function for styling the output.
                 *
                 * Mutually exclusive with {@link Options#colors}.
                 *
                 * @default undefined
                 */
                readonly stylize?: Stylizer | undefined;
            }
        );
    /**
     * Union of output types for styling.
     */
    type OutputType =
        /**
         * A boolean.
         */
        | "boolean"
        /**
         * A {@link Date}.
         */
        | "date"
        /**
         * A property name.
         */
        | "name"
        /**
         * `null`.
         */
        | "null"
        /**
         * A number.
         */
        | "number"
        /**
         * A {@link RegExp}.
         */
        | "regexp"
        /**
         * A {@link Function}, unexpanded object, getter, setter, or circular reference.
         */
        | "special"
        /**
         * A string.
         */
        | "string"
        /**
         * `undefined`.
         */
        | "undefined";
    /**
     * Type of custom function for styling the output.
     *
     * @param str the string representation of the value
     * @param type the type of the value
     * @returns a stylized string representation of the value
     */
    type Stylizer = (str: string, type: OutputType) => string;
    /**
     * Expected type of custom inspect functions of objects. It must be named `inspect`.
     *
     * @param this the object
     * @param depth the current remaining depth to expand nested objects up to
     * @param options the {@link Options} passed into {@link inspect}
     * @returns a custom string or object representation of `this`
     */
    type CustomInspect = (this: unknown, depth: number, options: Options) => unknown;

    /**
     * Effect type. Two Select Graphic Rendition (SGR) codes are expected.
     * The first one applies the effect while the second one undoes the effect (without affecting other effects).
     *
     * @see https://en.wikipedia.org/wiki/ANSI_escape_code#SGR Select Graphic Rendition (SGR) codes
     */
    type Effect = [
        /**
         * The SGR code to apply the effect.
         */
        applySgr: number,
        /**
         * The SGR code to undo the effect (without affecting other effects).
         */
        undoSgr: number,
    ];
    /**
     * Type containing {@link Effect}s.
     *
     * It can be extended using interface augmentation.
     */
    interface Effects {
        /**
         * Bold effect.
         *
         * @default [1,22]
         */
        bold: Effect;
        /**
         * Italic effect.
         *
         * @default [3,23]
         */
        italic: Effect;
        /**
         * Underline effect.
         *
         * @default [4,24]
         */
        underline: Effect;
        /**
         * Color inversion effect.
         *
         * @default [7,27]
         */
        inverse: Effect;
        /**
         * White color effect.
         *
         * @default [37,39]
         */
        white: Effect;
        /**
         * Grey color effect.
         *
         * @default [90,39]
         */
        grey: Effect;
        /**
         * Black color effect.
         *
         * @default [30,39]
         */
        black: Effect;
        /**
         * Blue color effect.
         *
         * @default [34,39]
         */
        blue: Effect;
        /**
         * Cyan color effect.
         *
         * @default [36,39]
         */
        cyan: Effect;
        /**
         * Green color effect.
         *
         * @default [32,39]
         */
        green: Effect;
        /**
         * Magenta color effect.
         *
         * @default [35,39]
         */
        magenta: Effect;
        /**
         * Red color effect.
         *
         * @default [31,39]
         */
        red: Effect;
        /**
         * Yellow color effect.
         *
         * @default [33,39]
         */
        yellow: Effect;
    }
    /**
     * An object containing {@link Effect}s.
     *
     * It is used when {@link Options#colors} is `true`.
     *
     * @default Effects
     */
    let colors: Effects;
    /**
     * An object mapping {@link OutputType}s to keys of {@link colors}.
     *
     * It is used when {@link Options#colors} is `true`.
     *
     * @default {boolean:'yellow',date:'magenta',null:'bold',number:'yellow',regexp:'red',special:'cyan',string:'green',undefined:'grey',}
     */
    let styles: { [_ in OutputType]?: keyof typeof colors | undefined };
}
