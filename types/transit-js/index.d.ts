export as namespace transit;

export interface Decoder {
    decode(node: any, cache?: ReadCache): any;
}

export interface TransitMap<K = any, V = any> extends Map<K, V> {}

export interface TransitReader {
    read(payload: string): any;
}

export interface TransitType {
    toString(): string;
    equiv(other: any): boolean;
}

export type TransitTaggedValue = any;
export type TransitLink = any;

export interface ReadCache {
    write(obj: any, asMapKey?: any): any;
    read(key: string, asMapKey?: boolean): any;
    clear(): void;
}

export interface WriteCache {
    write(str: string, asMapKey?: boolean): any;
    clear(): any;
}

export type Encodings = "json" | "json-verbose";

export interface TransitBuilder<T = any> {
    init(): T;
    add(...args: any[]): T;
    finalize(val: T): T;
}

export interface MapBuilder<T = any> {
    init(hash: unknown): any;
    add(accumulator: T, key: any, val: any, hash: unknown): T;
    finalize(val: T, hash: unknown): T;
}

export interface ArrayBuilder<T = any> {
    init(hash: unknown): T;
    add(accumulator: T, val: any, hash: unknown): T;
    finalize(val: T): T;
    fromArray(arr: any[], hash: unknown): T;
}

export interface ReaderOptions {
    handlers?: Record<string, (val: any) => any>;
    arrayBuilder?: ArrayBuilder;
    mapBuilder?: MapBuilder;
}

export interface TransitWriter {
    write(payload: any): string;
}

/**
 * Create a transit reader instance.
 * @param type type of reader to construct.
 *     Default to "json". For verbose mode supply "json-verbose".
 * @param opts reader options. A JavaScript object to
 *     customize the writer Valid entries include "defaultHandler",
 *     and "handler". "defaultHandler" should be JavaScript function
 *     taking two arguments, the first is the tag, the second the
 *     value. "handlers" should be an object of tags to handle. The
 *     values are functions that will receive the value of matched
 *     tag. "preferBuffers" may be supplied to customize binary
 *     decoding. If available binary data will read as Node.js Buffers,
 *     If Buffer is not available or "prefersBuffers" is set to false
 *     data will be read as Uint8Array. If neither Buffer nor Uint8Array is
 *     available - defaults to tagged value that simply wraps the
 *     base64 encoded string.
 * @return A transit reader.
 * @example
 *     var r = transit.reader("json", {
 *         handlers: {
 *            "point": function(v) { return new Point(v[0], v[1]); }
 *         }
 *     });
 */
export function reader(type: Encodings, opts?: ReaderOptions): TransitReader;

/**
 * Create a transit writer instance.
 * @param type type of writer to construct.
 *     Defaults to "json". For verbose mode supply "json-verbose".
 * @param opts writer options. A JavaScript object to
 *     customize the writer. "handlers" options, a transit.map of
 *     JavaScript constructor and transit writer handler instance
 *     entries. "handlerForForeign" option, for dealing with values
 *     from other JavaScript contexts. This function will be passed
 *     the unmatchable value and the installed handlers. The function
 *     should return the correct handler. Note if this function is
 *     provided, special handling for Objects will also be
 *     auto-installed to catch plain Objects from the foreign context.
 * @return A transit writer.
 * @example
 *     var r = transit.writer("json", {
 *         handlers: transit.map([
 *            Point, PointHandler
 *         ])
 *     });
 */
export function writer(type: Encodings, opts?: WriterOptions): TransitWriter;

export interface WriterOptions {
    handlers?: TransitMap<string, WriteHandler>;
    /**
     * Multiple JS context handler
     */
    handlerForForeign?: (val: any, handlers: TransitMap) => WriteHandler;
}

export interface WriteHandler {
    tag: (val: any) => string;
    rep: (val: any) => any;
    stringRep: (val: any, h: WriteHandler) => string | null;
    getVerboseHandler?: (val: any) => WriteHandler;
}

/**
 * Create a transit writer handler.
 * @param obj An object containing 3 functions, tag, rep and stringRep.
 *    "tag" should return a string representing the tag to be written on the wire.
 *    "rep" should return the representation on the wire. "stringRep" is should return
 *    the string representation of the value. Optional "getVerboseHandler" should return a
 *    handler for writing verbose output.
 * @return A transit write handler.
 * @example
 *     var PointHandler = transit.makeWriteHandler({
 *          tag: function(p) { return "point"; },
 *          rep: function(p) { return [p.x, p.y]; },
 *          stringRep: function(p) { return null; }
 *     });
 */
export function makeWriteHandler(obj: WriteHandler): WriteHandler;

export function makeBuilder(obj: TransitBuilder): TransitBuilder;

/**
 * Create a transit date.
 * @param A number or string representing milliseconds since epoch.
 * @return A JavaScript Date.
 */
export function date(v: number | string): Date;

/**
 * Create an integer. If given a transit integer or a JavaScript
 *     number will simply return that value. Given a string will
 *     return a JavaScript number if the string represents an integer
 *     value in the 53bit range and a transit integer otherwise.
 * @param s A value representing an integer.
 * @return A JavaScript number or transit integer.
 */
export function integer(s: number | string): number;

/**
 * Test if an object is a transit integer. Will return true if argument
 * is a 64 bit integer or a JavaScript number that has an interpretation as
 * an integer value, i.e. parseFloat(n) === parseInt(n)
 * @param x Any JavaScript value.
 * @return true if the value is a transit integer, false otherwise.
 */
export function isInteger(x: any): boolean;

/**
 * Create transit UUID from a string
 * @param
 * @return A transit UUID.
 */
export function uuid(val: string): string;

/**
 * Test if an object is a transit UUID.
 * @param x Any JavaScript value.
 * @return true if the vlaue is a transit UUID instance, false otherwise.
 */
export function isUUID(val: any): boolean;

/**
 * Create a transit big integer.
 * @param s A string representing an arbitrary size integer value.
 * @return A transit big integer.
 */
export function bigInt(s: string): TransitTaggedValue;

/**
 * Test if an object is a transit big integer.
 * @param x Any JavaScript value.
 * @return true if x is a transit big integer, false otherwise.
 */
export function isBigInt(x: any): boolean;

/**
 * Create a transit big decimal.
 * @param s A string representing an arbitrary precisions decimal value.
 * @return A transit big decimal.
 */
export function bigDec(s: string): TransitTaggedValue;

/**
 * Test if an object is a transit big decimal.
 * @param x Any JavaScript value.
 * @return true if x is a transit big decimal, false otherwise.
 */
export function isBigDec(x: any): boolean;

/**
 * Create transit keyword.
 * @param name A string.
 * @return A transit keyword.
 * @example
 *     transit.keyword("foo");
 */
export function keyword(s: string): any;

/**
 * Test if an object is a transit keyword.
 * @param x Any JavaScript value.
 * @return true if x is a transit keyword, false otherwise.
 */
export function isKeyword(x: any): boolean;

/**
 * Create a transit symbol.
 * @param name A string.
 * @return A transit symbol instance.
 * @example
 *     transit.symbol("foo");
 */
export function symbol(s: string): any;

/**
 * Test if an object is a transit symbol
 * @param x Any JavaScript value.
 * @return true if x is a transit symbol, false otherwise.
 */
export function isSymbol(x: any): boolean;

/**
 * Create transit binary blob.
 * @param s A base64 encoded string.
 * @return A transit binary blob instance.
 */
export function binary(s: any): any;

/**
 * Test if an object is a transit binary blob.
 * @param x Any JavaScript value.
 */
export function isBinary(x: any): boolean;

/**
 * Create a transit URI.
 * @param A string representing a valid URI.
 * @return A transit URI.
 */
export function uri(s: string): any;

/**
 * Test if an object is a transit URI.
 * @param Any JavaScript value.
 * @return true if x is a transit symbol, false otherwise.
 */
export function isURI(x: any): boolean;

/**
 * Create a transit hash map. Transit maps satisfy the current version
 *     of the ECMAScript 6 Map specification.
 * @param xs A JavaScript array of alternating key value pairs.
 * @return A transit map.
 * @example
 *     transit.map([new Date(), "foo", [1,2], 3]);
 */
export function map(arr?: ArrayLike<any>): TransitMap;

/**
 * Test if an object is a transit map.
 * @param x Any JavaScript value.
 * @return true if x is a transit map, false otherwise.
 */
export function isMap(x: any): boolean;

export interface TransitSet<T = any> extends Set<T> {}

/**
 * Create a transit set. Transit sets satisfy the current version of the
 *     of the ECMAScript 6 Set specification.
 * @param xs A JavaScript array of values.
 * @return A transit set.
 * @example
 *     transit.set(["foo", [1,2], 3, {bar: "baz"}]);
 */
export function set(init?: ArrayLike<any>): TransitSet;

/**
 * Test if an object is a transit set.
 * @param x Any JavaScript value.
 * @return true if x is a transit set, false otherwise.
 */
export function isSet(x: any): x is TransitSet;

/**
 * Create a transit list.
 * @param A JavaScript array.
 * @return A transit list.
 */
export function list(x?: ArrayLike<any>): boolean;

/**
 * Test if an object is a transit list.
 * @param x Any JavaScript value.
 * @return true if x is a transit list, false otherwise.
 */
export function isList(x: any): boolean;

/**
 * Create a transit quoted value.
 * @param x Any JavaScript value.
 * @return A transit quoted value.
 */
export function quoted(x: string): TransitTaggedValue;

/**
 * Test if an object is a transit quoted value.
 * @param x Any JavaScript value.
 * @return true if x is a transit value, false otherwise.
 */
export function isQuoted(x: any): boolean;

/**
 * Create a transit tagged value.
 * @param tag A tag.
 * @param value A JavaScrpt array, object, or string.
 * @return A transit tagged value.
 * @example
 *     transit.tagged("point", new Point(1,2));
 */
export function tagged(tag: string, val: any): TransitTaggedValue;

/**
 * Test if an object is a transit tagged value.
 * @param x Any JavaScript value.
 * @return true if x is a transit value, false otherwise.
 */
export function isTaggedValue(val: any): val is TransitTaggedValue;

/**
 * Create a transit link.
 * @param A transit map which must contain at a
 *     minimum the following keys: href, rel. It may optionally include
 *     name, render, and prompt. href must be a transit.uri, all other
 *     values are strings, and render must be either "image" or "link".
 * @return A transit link.
 */
export function link(m: TransitMap): TransitLink;

/**
 * Test if an object is a transit link.
 * @param x Any JavaScript object.
 * @return true if x is a transit link, false otherwise.
 */
export function isLink(x: any): x is TransitLink;

/**
 * Compute the hashCode for any JavaScript object that has been
 *    extend to transit's equality and hashing protocol. JavaScript
 *    primitives and transit value are already extended to this protocol.
 *    Custom types may be extended to the protocol via transit.extenToEQ.
 * @param x Any JavaScript object that has been extended to
 *    transit's equality and hashing protocol.
 * @return Returns JavaScript number - semantically a 32bit integer.
 */
export function hash(x: any): number;

/**
 * Compute the hashCode for JavaScript map-like types - either a JavaScript
 *    object or a JavaScript object that implements ES6 Map forEach.
 * @param x A plain JavaScript Object or Object that implements
 *    ES6 Map forEach.
 * @return Returns JavaScript number - semantically a 32bit integer.
 */
export function hashMapLike(x: any): number;

/**
 * Compute the hashCode for JavaScript array-like types - either a JavaScript
 *    array or a JavaScript object that implements Array forEach.
 * @param x A JavaScript Array or Object that implements
 *    Array forEach.
 * @return Returns JavaScript number - semantically a 32bit integer.
 */
export function hashMapLike(x: any): boolean;

/**
 * Test whether two JavaScript objects represent equal values. The
 *    objects to be tested should be extended to transit's equality
 *    and hashing protocol. JavaScript natives and transit value have
 *    already been extended to the protocol, including objects and
 *    arrays.  Also transit maps and JavaScript objects may be
 *    compared for equality. Custom types may be extended via
 *    transit.extendToEQ.
 * @param x A JavaScript object
 * @param y A JavaScript object
 * @return true if the x and y are equal, false otherwise.
 */
export function equals(a: any, b: any): boolean;

/**
 * Extend an object to hashing and equality required by
 *     transit maps and sets. Only required for custom
 *     types, JavaScript primitive types and transit
 *     types are handled.
 * @param x A JavaScript object, will be mutated.
 * @return x
 * @example
 *     transit.extendToEq(Point.prototype, {
 *         hashCode: function() {
 *             var bits = (this.x | 0) ^ ((this.y | 0) * 31);
 *             return bits ^ (bits >>> 32);
 *         },
 *         equals: function(other) {
 *             return this.x == other.x && this.y == other.y;
 *         }
 *     });
 */
export function extendToEQ<T extends object>(
    proto: T,
    params: {
        hashCode(this: T): number;
        equals(this: T, val: any): boolean;
    },
): T;

/**
 * Convert a transit map instance into a JavaScript Object.
 * Throws if the map has keys which have no string representation.
 * @param m a transit map
 * @return a JavaScript Object
 */
export function mapToObject(m: TransitMap): object;

/**
 * Convert a POJO into a transit map.
 * @param a JavaScript Object
 * @return a transit map
 */
export function objectToMap(obj: object): TransitMap;

/**
 * Construct a Transit JSON decoder.
 * @param options to the decoder. Can include map of
 *     handlers.
 * @return a Transit JSON decoder
 * @example
 *     var decoder = transit.decoder();
 *     var x = decoder.decode(json, transit.readCache());
 */
export function decoder(options?: Record<string, WriteHandler>): Decoder;

/**
 * Construct a Transit read cache
 * @return a Transit read cache
 */
export function readCache(): ReadCache;

/**
 * Construct a Transit write cache
 * @return a Transit write cache
 */
export function writeCache(): WriteCache;

/**
 * Returns true if map-like obj parameter has only stringable keys -
 * strings, symbols or keywords. If false, obj is a cmap value.
 * @param em
 * @param obj
 */
export function stringableKeys(em: any, obj: any): boolean;

export function UUIDfromString(s: string): any;

/**
 * Creates a random UUID
 */
export function randomUUID(s: string): any;

/**
 * Compute the hashCode for JavaScript array-like types - either a JavaScript
 *    array or a JavaScript object that implements Array forEach.
 * @param obj
 *    A JavaScript Array or Object that implements Array forEach.
 * @return Returns JavaScript number - semantically a 32bit integer.
 */
export function hashArrayLike(obj: ArrayLike<any>): number;
