// Type definitions for browser-util-inspect 0.2
// Project: https://github.com/deecewan/browser-util-inspect
// Definitions by: William So <https://github.com/polyipseity>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = inspect;

/**
 * Inspect a value as a string.
 *
 * @param obj a value to be inspected
 * @param opts an optional {@link inspect.Options} object
 */
declare function inspect(obj: unknown, opts?: inspect.Options): string;

/**
 * Objects and types used in {@link inspect}.
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
         * Whether to use `inspect` hooks on objects if available.
         *
         * The hook signature is `inspect(depth: number, options: Options) => unknown`.
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
               * Custom function to stylize the output.
               *
               * Mutually exclusive with {@link Options#colors}.
               *
               * @default stylizeWithColor
               */
              readonly stylize?: ((str: string, styleType: StyleType) => string) | undefined;
          }
    );
    /**
     * Union of output types for styling.
     */
    type StyleType = 'boolean' | 'date' | 'name' | 'null' | 'number' | 'regexp' | 'special' | 'string' | 'undefined';
    /**
     * Effect type. Two Select Graphic Rendition (SGR) codes are expected.
     * The first one applies the effect while the second one undoes the effect (without affecting other effects).
     *
     * @member applySgr the SGR code to apply the effect
     * @member undoSgr the SGR code to undo the effect (without affecting other effects)
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
     * An object mapping {@link StyleType}s to keys of {@link colors}.
     *
     * It is used when {@link Options#colors} is `true`.
     */
    let styles: { [_ in StyleType]?: keyof typeof colors | undefined };
}
