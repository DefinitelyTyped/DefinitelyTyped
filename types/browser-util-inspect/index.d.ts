// Type definitions for browser-util-inspect 0.2
// Project: https://github.com/deecewan/browser-util-inspect
// Definitions by: William So <https://github.com/polyipseity>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = inspect;

/**
 * Inspect a value as a string.
 *
 * Circular references are replaced by `[Circular]`.
 *
 * @param value a value to be inspected
 * @param options an optional {@link inspect.Options} object
 * @returns a string representation of {@link value}
 * @external https://nodejs.org/api/util.html#utilinspectobject-options The documentation for the Node.js function this is based on.
 */
declare function inspect(value: unknown, options?: inspect.Options): string;

/**
 * Objects and types used for {@link inspect}.
 */
declare namespace inspect {
    /**
     * Type of options passed into {@link inspect}.
     */
    type Options = {
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
    } & (
        | {
              /**
               * Whether to use colors. The colors are from {@link colors} and {@link styles}.
               *
               * Mutually exclusive with {@link Options#stylize}.
               *
               * @default false
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
               * @default stylizeWithColor
               * @external https://github.com/deecewan/browser-util-inspect/blob/master/index.js The source code for `stylizeWithColor`.
               */
              readonly stylize?: Stylizer | undefined;
          }
    );
    /**
     * Union of output types for styling.
     *
     * @member 'boolean' a boolean
     * @member 'date' a {@link Date}
     * @member 'name' the name of a property
     * @member 'null' `null`
     * @member 'number' a number
     * @member 'regexp' a {@link RegExp}
     * @member 'special' a {@link Function}, unexpanded object, getter, setter, or circular reference
     * @member 'string' a string
     * @member 'undefined' `undefined`
     */
    type OutputType = 'boolean' | 'date' | 'name' | 'null' | 'number' | 'regexp' | 'special' | 'string' | 'undefined';
    /**
     * Type of custom function for styling the output.
     *
     * @param str the string representation of the value
     * @param type the type of the value
     * @returns a stylized string representation of the value
     */
    type Stylizer = (str: string, type: OutputType) => string;
    /**
     * Expected type of custom inspect functions of objects.
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
     * @member applySgr the SGR code to apply the effect
     * @member undoSgr the SGR code to undo the effect (without affecting other effects)
     * @external https://en.wikipedia.org/wiki/ANSI_escape_code#SGR Select Graphic Rendition (SGR) codes
     */
    type Effect = [applySgr: number, undoSgr: number];
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
     */
    let colors: Effects;
    /**
     * An object mapping {@link OutputType}s to keys of {@link colors}.
     *
     * It is used when {@link Options#colors} is `true`.
     */
    let styles: { [_ in OutputType]?: keyof typeof colors | undefined };
}
