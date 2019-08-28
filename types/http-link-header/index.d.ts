// Type definitions for http-link-header 1.0.2
// Project: https://github.com/jhermsmeier/node-http-link-header
// Definitions by: Christian Rackerseder <https://github.com/screendriver>
//                 Noah Loomans <https://github.com/nloomans>
//                 Harris Lummis <https://github.com/lummish>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export = Link;

declare class Link {
    /**
     * Creates a new Link by parsing a link header beginning at the provided
     * offset
     * @param value The header to parse
     * @param offset The offset to start at. Defaults to 0.
     * @return A new Link
     */
    static parse(value: string, offset?: number): Link;
    /**
     * Link
     * @param value Link header to parse
     */
    constructor(value?: string);
    refs: Link.Reference[];
    has(attribute: string, value: string): boolean;
    /**
     * Get refs where the given attribute has a given value
     * @param attribute Attribute name
     * @param value Value to match
     * @return An array of references
     */
    get(attribute: string, value: string): Link.Reference[];
    /**
     * Get refs with given relation type
     * @param value The rel value
     * @return An array of references
     */
    rel(value: string): Link.Reference[];
    set(ref: Link.Reference): Link;
    /**
     * Parse a link header beginning at the provided offset
     * @param value The header to parse
     * @param offset The offset to start at. Defaults to 0.
     * @return The calling instance
     */
    parse(value: string, offset?: number): Link;
}

declare namespace Link {
  interface Reference {
      uri: string;
      rel: string;
      [index: string]: string;
  }
}
