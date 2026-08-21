export interface DeserializeOptions {
    /**
     * keep white space and comments. This is useful if
     * you want to edit an hjson file and save it while preserving comments (default false)
     */
    keepWsc?: boolean | undefined;
    /**
     * Turn off legacy support for omitting root braces (defaults true)
     */
    legacyRoot?: boolean | undefined;
}

export interface SerializeOptions {
    /**
     * keep white space. See parse.
     */
    keepWsc?: boolean | undefined;
    /**
     * makes braces appear on the same line as the key name. Default false.
     */
    bracesSameLine?: boolean | undefined;
    /**
     * show braces for the root object. Default true.
     */
    emitRootBraces?: boolean | undefined;
    /**
     * controls how strings are displayed. (setting separator implies "strings")
     * "min": no quotes whenever possible (default)
     * "keys": use quotes around keys
     * "strings": use quotes around string values
     * "all": use quotes around keys and string values
     */
    quotes?: "min" | "keys" | "strings" | "all" | undefined;
    /**
     * controls how multiline strings are displayed. (setting quotes implies "off")
     * "std": strings containing \n are shown in multiline format (default)
     * "no-tabs": like std but disallow tabs
     * "off": show in JSON format
     */
    multiline?: "std" | "no-tabs" | "off" | undefined;
    /**
     * output a comma separator between elements. Default false
     */
    separator?: boolean | undefined;
    /**
     * specifies the indentation of nested structures.
     * If it is a number, it will specify the number of spaces to indent at each level.
     * If it is a string (such as '\t' or ' '), it contains the characters used to indent at each level.
     */
    space?: number | string | undefined;
    /**
     * specifies the EOL sequence (default is set by Hjson.setEndOfLine())
     */
    eol?: string | undefined;
    /**
     * output ascii color codes
     */
    colors?: boolean | undefined;
}

/*~ If this module has methods, declare them as functions like so.
 */
export function parse(text: string, options?: DeserializeOptions): any;
export function stringify(value: any, options?: SerializeOptions): string;
