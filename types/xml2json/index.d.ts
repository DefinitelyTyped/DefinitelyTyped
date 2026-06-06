/// <reference types="node" />

export function toJson(xml: string | Buffer, options?: { object?: false | undefined } & JsonOptions): string;
export function toJson(xml: string | Buffer, options?: { object: true } & JsonOptions): { [key: string]: unknown };

export function toXml(json: { [key: string]: unknown } | string | Buffer, options?: XmlOptions): string;

export interface XmlOptions {
    /**
     * Sanitizes the following characters present in element values (default false):
     * @example
     * var chars =  {
     * '<': '&lt;',
     * '>': '&gt;',
     * '(': '&#40;',
     * ')': '&#41;',
     * '#': '&#35;',
     * '&': '&amp;',
     * '"': '&quot;',
     * "'": '&apos;'
     * };
     * @example
     */
    sanitize?: boolean | undefined;
    /**
     * Ignores all null values.
     */
    ignoreNull?: boolean | undefined;
}

export interface JsonOptions {
    /**
     * Returns a Javascript object instead of a JSON string.
     */
    // object?: boolean; // This is now overloaded in the toJson method
    /**
     * Makes the JSON reversible to XML.
     * xml2json tranforms CDATA content to JSON, but it doesn't generate a reversible structure.
     */
    reversible?: boolean | undefined;
    /**
     * Makes type coercion.
     * i.e.: numbers and booleans present in attributes and element values are converted from string to its correspondent data types.
     * Coerce can be optionally defined as an object with specific methods of coercion based on attribute name or tag name, with fallback to default coercion.
     */
    coerce?: boolean | undefined;
    /**
     * Sanitizes the following characters present in element values (default true):
     * @example
     * var chars =  {
     * '<': '&lt;',
     * '>': '&gt;',
     * '(': '&#40;',
     * ')': '&#41;',
     * '#': '&#35;',
     * '&': '&amp;',
     * '"': '&quot;',
     * "'": '&apos;'
     * };
     * @example
     */
    sanitize?: boolean | undefined;
    /**
     * Removes leading and trailing whitespaces as well as line terminators in element values.
     * Defaults to true.
     */
    trim?: boolean | undefined;
    /**
     * XML child nodes are always treated as arrays.
     * You can specify a selective array of nodes for this to apply to instead of the whole document.
     */
    arrayNotation?: boolean | string[] | undefined;
    /**
     * Changes the default textNode property from $t to _t when option is set to true.
     * Alternatively a string can be specified which will override $t to what ever the string is.
     */
    alternateTextNode?: boolean | string | undefined;
}
