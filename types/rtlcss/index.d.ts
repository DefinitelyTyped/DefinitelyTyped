// Type definitions for rtlcss 2.4
// Project: http://rtlcss.com
// Definitions by:  Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

export interface MapOptions {
    scope: string;
    ignoreCase: boolean;
    greedy?: boolean;
}

export interface StringMap {
    name: string;
    priority: number;
    exclusive?: boolean;
    search: string|string[];
    replace: string|string[];
    options: MapOptions;
}

export interface ConfigOptions {
    /**
     * Applies to CSS rules containing no directional properties,
     * it will update the selector by applying String Map.
     */
    autoRename: boolean;
    /**
     * Ensures autoRename is applied only if pair exists.
     */
    autoRenameStrict: boolean;
    /**
     * An object map of disabled plugins directives,
     * where keys are plugin names and value are object
     * hash of disabled directives. e.g. {'rtlcss':{'config':true}}.
     */
    blacklist: object;
    /**
     * Removes directives comments from output CSS.
     */
    clean: boolean;
    /**
     * Fallback value for String Map options.
     */
    greedy: boolean;
    /**
     * Applies String Map to URLs. You can also target specific node types using an object literal.
     * e.g. {'atrule': true, 'decl': false}.
     */
    processUrls: boolean|object;
    /**
     * The default array of String Map.
     */
    stringMap: StringMap[];
    /**
     * When enabled, flips background-position expressed in length units using calc.
     */
    useCalc: boolean;
}

export interface HookOptions {
    /**
     * The function to be called before processing the CSS.
     */
    pre: () => void;
    /**
     * The function to be called after processing the CSS.
     */
    post: () => void;
}

/**
 * Creates a new RTLCSS instance, process the input and return its result.
 */
export function process(css: string, options?: object, plugins?: object|string[], hooks?: HookOptions): string;

/**
 * Creates a new instance of RTLCSS using the passed configuration object.
 */
export function configure(config: ConfigOptions): object;
