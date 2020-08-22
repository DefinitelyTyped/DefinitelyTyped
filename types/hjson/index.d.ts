// Type definitions for hjson 2.4
// Project: https://github.com/hjson/hjson-js, http://hjson.org
// Definitions by: Mark van Straten <https://github.com/crunchie84>
//                 Ashik Meerankutty <https://github.com/ashikmeerankutty>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface DeserializeOptions {
  /**
   * keep white space and comments. This is useful if
   * you want to edit an hjson file and save it while preserving comments (default false)
   */
  keepWsc?: boolean;
  /**
   * Turn off legacy support for omitting root braces (defaults true)
   */
  legacyRoot?: boolean;
}

export interface SerializeOptions {
  /**
   * keep white space. See parse.
   */
  keepWsc?: boolean;
  /**
   * makes braces appear on the same line as the key name. Default false.
   */
  bracesSameLine?: boolean;
  /**
   * show braces for the root object. Default true.
   */
  emitRootBraces?: boolean;
  /**
   * controls how strings are displayed. (setting separator implies "strings")
   * "min": no quotes whenever possible (default)
   * "keys": use quotes around keys
   * "strings": use quotes around string values
   * "all": use quotes around keys and string values
   */
  quotes?: 'min' | 'keys' | 'strings' | 'all';
  /**
   * controls how multiline strings are displayed. (setting quotes implies "off")
   * "std": strings containing \n are shown in multiline format (default)
   * "no-tabs": like std but disallow tabs
   * "off": show in JSON format
   */
  multiline?: 'std' | 'no-tabs' | 'off';
  /**
   * output a comma separator between elements. Default false
   */
  separator?: boolean;
  /**
   * specifies the indentation of nested structures.
   * If it is a number, it will specify the number of spaces to indent at each level.
   * If it is a string (such as '\t' or ' '), it contains the characters used to indent at each level.
   */
  space?: number | string;
  /**
   * specifies the EOL sequence (default is set by Hjson.setEndOfLine())
   */
  eol?: string;
  /**
   * output ascii color codes
   */
  colors?: boolean;
}

/*~ If this module has methods, declare them as functions like so.
 */
export function parse(text: string, options?: DeserializeOptions): any;
export function stringify(value: any, options?: SerializeOptions): string;
