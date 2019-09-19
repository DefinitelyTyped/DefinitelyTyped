// Type definitions for jsUri 1.3
// Project: https://github.com/derek-watson/jsUri
// Definitions by: Chris Charabaruk <https://github.com/coldacid>, Florian Wagner <https://github.com/flqw>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace jsuri {
  type Primitive = string | number | boolean;

  export class Uri {
    /**
     * Creates a new Uri object
     * @constructor
     * @param {string} str
     */
    constructor(str?: string);

    /**
     * Define getter/setter methods
     */
    protocol(val?: string): string;
    userInfo(val?: string): string;
    host(val?: string): string;
    port(val?: number): number;
    path(val?: string): string;
    anchor(val?: string): string;

    /**
     * if there is no protocol, the leading // can be enabled or disabled
     * @param  {Boolean}  val
     * @return {Boolean}
     */
    hasAuthorityPrefix(val?: boolean): boolean;

    isColonUri(val?: boolean): boolean;

    /**
     * Serializes the internal state of the query pairs
     * @param  {string} [val]   set a new query string
     * @return {string}         query string
     */
    query(val?: string): string;

    /**
     * returns the first query param value found for the key
     * @param  {string} key query key
     * @return {string}     first value found for key
     */
    getQueryParamValue(key: string): string;

    /**
     * returns an array of query param values for the key
     * @param  {string} key query key
     * @return {array}      array of values
     */
    getQueryParamValues(key: string): string[];

    /**
     * removes query parameters
     * @param  {string} key     remove values for key
     * @param  {val}    [val]   remove a specific value, otherwise removes all
     * @return {Uri}            returns self for fluent chaining
     */
    deleteQueryParam(key: string, val?: string): Uri;

    /**
     * adds a query parameter
     * @param  {string}  key        add values for key
     * @param  {string}  val        value to add
     * @param  {integer} [index]    specific index to add the value at
     * @return {Uri}                returns self for fluent chaining
     */
    addQueryParam(key: string, val: Primitive, index?: number): Uri;

    /**
     * test for the existence of a query parameter
     * @param  {string}  key        check values for key
     * @return {Boolean}            true if key exists, otherwise false
     */
    hasQueryParam(key: string): boolean;

    /**
     * replaces query param values
     * @param  {string} key         key to replace value for
     * @param  {string} newVal      new value
     * @param  {string} [oldVal]    replace only one specific value (otherwise replaces all)
     * @return {Uri}                returns self for fluent chaining
     */
    replaceQueryParam(key: string, newVal: Primitive, oldVal?: Primitive): Uri;

    /**
     * Define fluent setter methods (setProtocol, setHasAuthorityPrefix, etc)
     */
    setProtocol(val: string): Uri;
    setHasAuthorityPrefix(val: boolean): Uri;
    setIsColonUri(val: boolean): Uri;
    setUserInfo(val: string): Uri;
    setHost(val: string): Uri;
    setPort(val: number): Uri;
    setPath(val: string): Uri;
    setQuery(val: string): Uri;
    setAnchor(val: string): Uri;

    /**
     * Scheme name, colon and doubleslash, as required
     * @return {string} http:// or possibly just //
     */
    scheme(): string;

    /**
     * Same as Mozilla nsIURI.prePath
     * @return {string} scheme://user:password@host:port
     * @see  https://developer.mozilla.org/en/nsIURI
     */
    origin(): string;

    /**
     * Adds a trailing slash to the path
     */
    addTrailingSlash(): Uri;

    /**
     * Serializes the internal state of the Uri object
     * @return {string}
     */
    toString(): string;

    /**
     * Clone a Uri object
     * @return {Uri} duplicate copy of the Uri
     */
    clone(): Uri;
  }
}

declare type Uri = jsuri.Uri;

declare module 'jsuri' {
  export = jsuri.Uri;
}

declare module 'jsUri' {
  export = jsuri.Uri;
}
