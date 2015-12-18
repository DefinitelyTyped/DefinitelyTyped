// Type definitions for prettyjson
// Project: https://github.com/rafeca/prettyjson
// Definitions by: Wael BEN ZID EL GUEBSI <https://github.com/benzid-wael/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare module "prettyjson" {

  /**
   * Defines prettyjson version
   */
  export var version: string;

  /**
   * Render pretty json.
   *
   * @param data {Object} Data to prettify.
   * @param options {IOptions} Hash with different options to configure the renderer.
   * @param indentation {number} Indentation size.
   *
   * @return {string} pretty serialized json data ready to display.
     */
  export function render(data: Object, options?: IOptions, indentation?: number): string;

  /**
   * Render pretty json from a string.
   *
   * @param data {string} Serialized JSON data to prettify.
   * @param options {IOptions} Hash with different options to configure the renderer.
   * @param indentation {number} Indentation size.
   *
   * @return {string} pretty serialized json data ready to display.
     */
  export function renderString(data: string, options?: IOptions, indentation?: number): string;

  export interface IOptions {

    /**
     * Define behavior for Array objects
     */
    emptyArrayMsg ?: string;  // default: (empty)
    inlineArrays ?: boolean;

    /**
     * Color definition
     */
    noColor ?: boolean;
    keysColor ?: string;
    dashColor ?: string;
    numberColor ?: string;
    stringColor ?: string;

    defaultIndentation ?: number;
  }
}
