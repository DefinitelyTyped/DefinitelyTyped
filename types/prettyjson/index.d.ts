/**
 * Defines prettyjson version
 */
export declare var version: string;

/**
 * Render pretty json.
 *
 * @param data {any} Data to prettify.
 * @param options {IOptions} Hash with different options to configure the renderer.
 * @param indentation {number} Indentation size.
 *
 * @return {string} pretty serialized json data ready to display.
 */
export declare function render(data: any, options?: RendererOptions, indentation?: number): string;

/**
 * Render pretty json from a string.
 *
 * @param data {string} Serialized JSON data to prettify.
 * @param options {IOptions} Hash with different options to configure the renderer.
 * @param indentation {number} Indentation size.
 *
 * @return {string} pretty serialized json data ready to display.
 */
export declare function renderString(data: string, options?: RendererOptions, indentation?: number): string;

export interface RendererOptions {
    /**
     * Define behavior for Array objects
     */
    emptyArrayMsg?: string | undefined; // default: (empty)
    inlineArrays?: boolean | undefined;
    noAlign?: boolean | undefined;

    /**
     * Color definition
     */
    noColor?: boolean | undefined;
    keysColor?: string | undefined;
    dashColor?: string | undefined;
    numberColor?: string | undefined;
    stringColor?: string | undefined;

    defaultIndentation?: number | undefined;
}
