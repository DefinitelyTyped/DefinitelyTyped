import { Plugin, Processor } from "postcss";

declare namespace bemLinter {
    let postcss: true;

    /**
     * Preset patterns available for use. Definitions available for
     * {@link https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md suit}
     * and {@link https://en.bem.info/methodology/naming-convention/ bem}
     * @see {@link <https://github.com/postcss/postcss-bem-linter/#preset-patterns>}
     */
    type Patterns = "suit" | "bem";

    type ComponentSelector = string | ((/** The defined component's name */ componentName: string) => RegExp);

    /**
     * Describes a custom pattern to be used
     * @see {@link <https://github.com/postcss/postcss-bem-linter/#custom-patterns>}
     */
    interface CustomPattern {
        /**
         * Valid component names, either as a regular expression
         * or a string passed to the RegExp constructor
         * @default /^[-_a-zA-Z0-9]+$/
         */
        componentName?: RegExp | string | undefined;
        /**
         * Describes all valid selector sequences for the stylesheet,
         * either by passing a string where `{componentName}` will be replaced with the component's name,
         * or by providing a function which gets the component name and returns a regular expression.
         *
         * An object with the properties `initial` and `combined` can also be used,
         * where `initial` describes valid initial selector sequences (those occurring at the beginning of a selector, before any combinators)
         * and `combined` describes valid selector sequences allowed *after* combinators.
         *
         * If you do not specify a combined pattern, it is assumed that combined sequences
         * must match the same pattern as initial sequences.
         * In weak mode, any combined sequences are accepted, even if you have a combined pattern.
         * @see {@link ComponentSelector}
         * @see {@link <https://github.com/postcss/postcss-bem-linter/#componentselectors>}
         * @example
         * { componentSelectors: "^\\.ns-{componentName}(?:-[a-zA-Z]+)?$" }
         * @example
         * { componentSelectors: componentName => new RegExp("^\\.ns-" + componentName + "(?:-[a-zA-Z]+)?$"); }
         * @example
         * {
         *     componentSelectors: {
         *         initial: "^\\.ns-{componentName}(?:-[a-zA-Z]+)?$",
         *         combined: "^\\.ns-{componentName}(?:-[a-zA-Z]+)?$",
         *     },
         * }
         */
        componentSelectors?:
            | ComponentSelector
            | { initial: ComponentSelector; combined: ComponentSelector }
            | undefined;
        /**
         * Describes valid utility selector sequences.
         * This will be used if the stylesheet defines a group of utilities
         */
        utilitySelectors?: string | RegExp | undefined;
        /**
         * Describes selector sequences to ignore.
         * You can use this to systematically ignore selectors matching certain patterns,
         * instead of having to add a `postcss-bem-linter: ignore` comment above each one.
         * Can be one or a list of either regular expressions, or strings passed to the RegExp constructor
         */
        ignoreSelectors?: string | readonly string[] | RegExp | readonly RegExp[] | undefined;
        /**
         * Custom properties to ignore.
         * Can be one or a list of either regular expressions, or strings passed to the RegExp constructor
         */
        ignoreCustomProperties?: string | readonly string[] | RegExp | readonly RegExp[] | undefined;
    }

    /** Options for pattern presets */
    interface PresetPatternOptions {
        /** See the documentation for the chosen preset for more detailed information */
        namespace?: string | undefined;
    }

    /** An object describing a pattern */
    interface PresetPatternObject extends Partial<CustomPattern> {
        /**
         * The preset to use
         * @see {@link Patterns}
         */
        preset: Patterns;
        /** Options for the chosen preset */
        presetOptions?: PresetPatternOptions;
    }
}

/**
 * @param pattern The name of the pattern preset to use
 * @param patternOptions Options for the chosen preset
 */
declare function bemLinter(
    pattern?: bemLinter.Patterns,
    patternOptions?: bemLinter.PresetPatternOptions,
): Plugin | Processor;
/**
 * @param pattern The pattern to use, either based on a preset or defined from scratch
 */
declare function bemLinter(pattern: bemLinter.PresetPatternObject | bemLinter.CustomPattern): Plugin | Processor;

export = bemLinter;
