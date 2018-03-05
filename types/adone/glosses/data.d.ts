declare namespace adone {
    /**
     * Various data [de]serializers
     */
    namespace data {
        /**
         * JSON encoder
         */
        namespace json {
            namespace I {
                type Replacer = ((key: string, value: any) => any) | string[];
                interface CompareValue  {
                    key: string;
                    value: any;
                }
                type CompareFunction  = (a: CompareValue, b: CompareValue) => number;
            }

            /**
             * Actually, the same as JSON.stringify, but returns a buffer
             */
            function encode(obj: any, options?: {
                /**
                 * A String or Number object that's used to insert white space into the output JSON string for readability purposes
                 */
                space?: string,

                /**
                 * A function that alters the behavior of the stringification process,
                 * or an array of String and Number objects that serve as a whitelist
                 * for selecting/filtering the properties of the value object to be included in the JSON string
                 */
                replacer?: I.Replacer,

                /**
                 * Wheter to append a newline
                 */
                newline?: boolean
            }): Buffer;

            /**
             * Decodes JSON string or buffer
             */
            function decode(buf: string | Buffer): any;

            /**
             * Deterministic version of JSON.stringify() so you can get a consistent hash from stringified results
             */
            function encodeStable(obj: any, options?: {
                /**
                 * Indent spaces for pretty-printing
                 */
                space?: string,

                /**
                 * Whether to allow circular JSON structure
                 */
                cycles?: boolean,

                /**
                 * A function that alters the behavior of the stringification process,
                 * or an array of String and Number objects that serve as a whitelist
                 * for selecting/filtering the properties of the value object to be included in the JSON string
                 */
                replacer?: I.Replacer,

                /**
                 * Custom comparison function for object keys
                 */
                cmp?: I.CompareFunction
            }): string;

            function encodeSafe(obj: any): string;

            function decodeSafe(str: string): any;
        }

        /**
         * MessagePack encoder
         */
        namespace mpak {
            /**
             * Encodes the given object
             */
            function encode(obj: any): Buffer;

            /**
             * Decoder the given buffer
             */
            function decode(buf: collection.I.ByteArray.Wrappable): any;

            function tryDecode(buf: collection.ByteArray): any;

            namespace I {
                type Type = string | number; // ?
                type DecodeFunction = (buf: collection.ByteArray) => any;
                type EncodeFunction = (x: any) => collection.ByteArray;
                type EncodeCheckFunction = (x: any) => boolean;

                interface DecodingType {
                    /**
                     * Value type
                     */
                    type: Type;

                    /**
                     * Decode function
                     */
                    decode: DecodeFunction;
                }

                interface EncodingType {
                    /**
                     * Value type
                     */
                    type: Type;

                    /**
                     * Encode function
                     */
                    encode: EncodeFunction;

                    /**
                     * Check function
                     */
                    check: EncodeCheckFunction;
                }
            }

            /**
             * Represents a MessagePack encoder
             */
            class Encoder {
                constructor(encodingTypes: I.EncodingType[]);

                /**
                 * Encodes the given value
                 */
                encode<T extends collection.ByteArray = collection.ByteArray>(x: any, buf?: T): T;
            }

            /**
             * Represents a MessagePack decoder
             */
            class Decoder {
                constructor(decodingTypes: I.DecodingType[]);

                /**
                 * Decodes the given buffer
                 */
                decode(buf: collection.I.ByteArray.Wrappable): any;

                /**
                 * Decodes the given ByteArray buffer, but does not throw IncompleteBufferError if the size is invalid
                 */
                tryDecode(buf: collection.ByteArray): any;
            }

            /**
             * Represents a MessagePack serializer
             */
            class Serializer {
                constructor(initialCapacity?: number);

                /**
                 * Encoder instance
                 */
                readonly encoder: Encoder;

                /**
                 * Decoder instance
                 */
                readonly decoder: Decoder;

                /**
                 * Registers an encoder for the given type
                 *
                 * @param type type identifier
                 * @param check type predicate
                 * @param encode type encoder
                 */
                registerEncoder(type: I.Type, check: I.EncodeCheckFunction, encode: I.EncodeFunction): this;

                /**
                 * Registers a decoder for the given type
                 *
                 * @param type type identifier
                 * @param decode type decoder
                 */
                registerDecoder(type: I.Type, decode: I.DecodeFunction): this;

                /**
                 * Registers encoder/decoder functions for the given type and constructor
                 *
                 * @param type type identifier
                 * @param constructor type constructor, used in the predicate function (instanceof)
                 * @param encode type encoder
                 * @param decode type decoder
                 */
                register<T>(
                    type: I.Type,
                    constructor: { new (...args: any[]): T },
                    encode: (x: T, buf: collection.ByteArray) => void,
                    decode: (buf: collection.ByteArray) => T
                ): this;

                /**
                 * Encodes the given value
                 */
                encode<T extends collection.ByteArray = collection.ByteArray>(x: any, buf?: T): T;

                /**
                 * Decodes the given buffer
                 */
                decode(buf: collection.I.ByteArray.Wrappable, needFlip?: boolean): any;
            }

            /**
             * An instance of default adone serializer with registered encoders/decoders for standard js/adone types like
             * x.Exception, Error, Date, Map, Set, math.Long
             */
            const serializer: Serializer;

            function registerCommonTypesFor(s: Serializer): void;
        }

        /**
         * JSON5 encoder
         */
        namespace json5 {
            /**
             * Encodes the given value
             */
            function encode(obj: any, options?: {
                /**
                 * Indent spaces for pretty-printing
                 */
                space?: string,

                /**
                 * A function that alters the behavior of the stringification process,
                 * or an array of String and Number objects that serve as a whitelist
                 * for selecting/filtering the properties of the value object to be included in the JSON string
                 */
                replacer?: ((key: string, value: any) => any) | string[]
            }): Buffer;

            /**
             * Decodes the given string/buffer
             */
            function decode(buf: string | Buffer, reviver?: (holder: object, key: string, value: any) => any): any;
        }

        /**
         * Base64 encoder
         */
        namespace base64 {
            namespace I {
                interface DecodeOptions {
                    buffer?: boolean;
                    encoding?: string;
                }

                interface EncodeOptions {
                    buffer?: boolean;
                }
            }

            /**
             * Encodes a string/Buffer to base64
             */
            function encode(str: string | Buffer, options: I.EncodeOptions & { buffer: false }): string;
            function encode(str: string | Buffer, options?: I.EncodeOptions): Buffer;

            /**
             * Decodes base64 string/buffer into a buffer
             */
            function decode(str: string | Buffer, options: I.DecodeOptions & { buffer: true }): Buffer;

            /**
             * Decodes base64 string/buffer into a string
             */
            function decode(str: string | Buffer, options?: I.DecodeOptions): string;

            function encodeVLQ(value: number): string;

            function decodeVLQ(value: string, index: number | undefined, rest: true): { value: number, index: number };
            function decodeVLQ(value: string, index?: number, rest?: boolean): number;

            /**
             * Maps a character to a base64 number
             */
            function decodeCharCode(c: string): number;

            /**
             * Maps a number to a base64 character
             */
            function decodeNumber(n: number): string;
        }

        /**
         * YAML encoder
         */
        namespace yaml {
            /**
             * YAML loaders
             */
            namespace loader {
                namespace I {
                    interface Options {
                        /**
                         * String to be used as a file path in error/warning messages. Default: null
                         */
                        filename?: string;

                        /**
                         * Specifies a schema to use
                         */
                        schema?: schema.Schema;

                        /**
                         * Function to call on warning messages.
                         * Loader will throw on warnings if this function is not provided
                         */
                        onWarning?(warning: any): void;

                        /**
                         * Compatibility with JSON.parse behaviour.
                         * If true, then duplicate keys in a mapping will override values rather than throwing an error
                         */
                        json?: boolean;
                    }
                }

                /**
                 * Same as safeLoadAll() but uses DEFAULT_FULL by default
                 */
                function loadAll(input: string | Buffer, iterator: (doc: any) => void, options?: I.Options): void;
                function loadAll(input: string | Buffer, iterator?: undefined, options?: I.Options): any[];

                /**
                 * The same as safeLoad() but uses DEFAULT_FULL_SCHEMA by default - adds some JavaScript-specific types: !!js/function, !!js/regexp and !!js/undefined.
                 * For untrusted sources, you must additionally validate object structure to avoid injections
                 */
                function load(input: string | Buffer, options?: I.Options): any;

                /**
                 * Parses string as single YAML document. Returns a JavaScript object or throws YAMLException on error.
                 * By default, does not support regexps, functions and undefined.
                 * This method is safe for untrusted data
                 */
                function safeLoadAll(input: string | Buffer, iterator: (doc: any) => void, options?: I.Options): void;
                function safeLoadAll(input: string | Buffer, iterator?: undefined, options?: I.Options): any[];

                /**
                 * Same as safeLoad(), but understands multi-document sources.
                 * Applies iterator to each document if specified, or returns array of documents
                 */
                function safeLoad(input: string | Buffer, options?: I.Options): any;
            }

            /**
             * YAML dumpers
             */
            namespace dumper {
                namespace I {
                    interface Options {
                        /**
                         * indentation width to use (in spaces). Default: 2
                         */
                        indent?: number;

                        /**
                         * Do not throw on invalid types (like function in the safe schema) and skip pairs and single values with such types.
                         * Default: false
                         */
                        skipInvalid?: boolean;

                        /**
                         * Specifies level of nesting, when to switch from block to flow style for collections.
                         * -1 means block style everwhere. Default: -1
                         */
                        flowLevel?: number;

                        /**
                         * "tag" => "style" map. Each tag may have own set of styles
                         */
                        styles?: object;

                        /**
                         * Specifies a schema to use
                         */
                        schema?: schema.Schema;

                        /**
                         * If true, sort keys when dumping YAML. If a function, use the function to sort the keys. Default: false
                         */
                        sortKeys?: boolean;

                        /**
                         * Set max line width. Default: 80
                         */
                        lineWidth?: number;

                        /**
                         * If true, don't convert duplicate objects into references. Default: false
                         */
                        noRefs?: boolean;

                        /**
                         * If true don't try to be compatible with older yaml versions.
                         * Currently: don't quote "yes", "no" and so on, as required for YAML 1.1.
                         * Default: false
                         */
                        noCompatMode?: boolean;

                        /**
                         * If true flow sequences will be condensed, omitting the space between a, b. Eg. '[a,b]'
                         */
                        condenseFlow?: boolean;
                    }
                }

                /**
                 * Same as safeDump() but without limits (uses DEFAULT_FULL by default)
                 */
                function dump(input: any, options?: I.Options): string;

                /**
                 * Serializes object as a YAML document.
                 * Uses DEFAULT_SAFE, so it will throw an exception if you try to dump regexps or functions
                 */
                function safeDump(input: any, options?: I.Options): string;
            }

            /**
             * YAML types for custom schemas
             */
            namespace type {
                namespace I {
                    type Kind = "scalar" | "sequence" | "mapping";

                    interface TypeOptions<T> {
                        kind: Kind;
                        resolve?(data: string): boolean;
                        construct?(data: string): T;
                        instanceOf?: object;
                        predicate?(obj: any): boolean;
                        represent?: ((obj: any, style: string) => string) | { [key: string]: (obj: any, style: string) => string };
                        defaultStyle?: string;
                        styleAliases?: object;
                    }
                }

                class Type<T = any> {
                    tag: string;
                    resolve(data: string): boolean;
                    construct(data: string): T;
                    instanceOf?: object;
                    predicate?(obj: any): boolean;
                    represent?: (obj: any, style: string) => string | { [key: string]: (obj: any, style: string) => string };
                    defaultStyle?: string;
                    styleAliases?: object;

                    constructor(tag: string, options: I.TypeOptions<T>);
                }

                namespace I {
                    interface Scalar<T = any> extends Type<T> {
                        kind: "scalar";
                    }

                    interface Mapping extends Type<object> {
                        kind: "mapping";
                    }

                    interface Sequence<T = any> extends Type<T[]> {
                        kind: "sequence";
                    }
                }

                const Binary: I.Scalar<Buffer>;

                const Bool: I.Scalar<boolean>;

                const Float: I.Scalar<number>;

                const Int: I.Scalar<number>;

                const Map: I.Mapping;

                const Merge: I.Scalar;

                const Null: I.Scalar<null>;

                const Omap: I.Sequence<object>;

                const Pairs: I.Sequence<[string, any]>;

                const Seq: I.Sequence;

                const Set: I.Mapping;

                const Str: I.Scalar<string>;

                const Timestamp: I.Scalar<Date>;

                namespace js {
                    const Function: I.Scalar<(...args: any[]) => void>;

                    const RegExp: I.Scalar<RegExp>;

                    const Undefined: I.Scalar<undefined>;
                }
            }

            /**
             * YAML schemas
             */
            namespace schema {
                class Schema {
                    include: Schema[];
                    implicit: type.Type[];
                    explicit: type.Type[];
                    compiledImplicit: type.Type[];
                    compiledExplicit: type.Type[];
                    compiledTypeMap: {
                        scalar: { [key: string]: type.Type },
                        sequence: { [key: string]: type.Type },
                        mapping: { [key: string]: type.Type },
                        fallback: { [key: string]: type.Type }
                    };

                    constructor(_?: { include?: Schema[], implicit?: type.Type[], explicit?: type.Type[] });
                }

                function create(schemas: Schema | Schema[], types: type.Type | type.Type[]): Schema;

                /**
                 * same as JSON
                 */
                const CORE: Schema;

                /**
                 * all supported YAML types
                 */
                const DEFAULT_FULL: Schema;

                /**
                 * all supported YAML types, without unsafe ones: !!js/undefined, !!js/regexp and !!js/function
                 */
                const DEFAULT_SAFE: Schema;

                /**
                 * only strings, arrays and plain objects
                 */
                const FAILSAFE: Schema;

                /**
                 * all JSON-supported types
                 */
                const JSON: Schema;
            }

            /**
             * Represetns a mark that is used in exceptions to define the error's location
             */
            class Mark {
                name: string;
                buffer: string;
                position: number;
                line: number;
                column: number;

                constructor(name: string, buffer: string, position: number, line: number, column: number);

                getSnippet(indent?: number, maxLength?: number): string;

                toString(compact?: boolean): string;
            }

            /**
             * Represents a YAML exception
             */
            class Exception extends adone.error.Exception {
                reason: string;
                mark: Mark;

                constructor(reason: string, mark: Mark);
            }

            /**
             * Encodes the given object using DEFAULT_SAFE scheme by default
             */
            function encode(obj: any, options?: dumper.I.Options): Buffer;

            /**
             * Decodes the given string/buffer using DEFAULT_SAFE scheme by default
             */
            function decode(buf: string | Buffer, options?: loader.I.Options): any;

            /**
             * The same as safeLoad() but uses DEFAULT_FULL_SCHEMA by default - adds some JavaScript-specific types: !!js/function, !!js/regexp and !!js/undefined.
             * For untrusted sources, you must additionally validate object structure to avoid injections
             */
            const load: typeof loader.load;

            /**
             * Same as safeLoadAll() but uses DEFAULT_FULL by default
             */
            const loadAll: typeof loader.loadAll;

            /**
             * Parses string as single YAML document. Returns a JavaScript object or throws YAMLException on error.
             * By default, does not support regexps, functions and undefined.
             * This method is safe for untrusted data
             */
            const safeLoad: typeof loader.safeLoad;

            /**
             * Same as safeLoad(), but understands multi-document sources.
             * Applies iterator to each document if specified, or returns array of documents
             */
            const safeLoadAll: typeof loader.safeLoadAll;

            /**
             * Same as safeDump() but without limits (uses DEFAULT_FULL by default)
             */
            const dump: typeof dumper.dump;

            /**
             * Serializes object as a YAML document.
             * Uses DEFAULT_SAFE, so it will throw an exception if you try to dump regexps or functions
             */
            const safeDump: typeof dumper.safeDump;
        }

        /**
         * BSON encoder
         */
        namespace bson {
            namespace I {
                interface Type {
                    _bsontype: string;
                }
            }

            /**
             * Represents a BSON Binary type
             */
            class Binary implements I.Type {
                _bsontype: "binary";

                constructor(buffer: number | Buffer, subType?: number);

                /**
                 * Updates this binary with `byte`
                 */
                put(byte: number): void;

                /**
                 * Writes a buffer or string to the binary
                 */
                write(string: string | Buffer, offset?: number): void;

                /**
                 * Reads length bytes starting at position
                 */
                read(position: number, length?: number): void;

                /**
                 * Returns the value of this binary as a string or buffer
                 */
                value(asRaw: true): Buffer;
                value(): string;

                /**
                 * Returns the length of the binary
                 */
                length(): number;

                toJSON(): string;

                toString(): string;

                static BUFFER_SIZE: number;
                static SUBTYPE_DEFAULT: number;
                static SUBTYPE_FUNCTION: number;
                static SUBTYPE_BYTE_ARRAY: number;
                static SUBTYPE_UUID_OLD: number;
                static SUBTYPE_UUID: number;
                static SUBTYPE_MD5: number;
                static SUBTYPE_USER_DEFINED: number;
            }

            /**
             * Represents BSON Code type
             */
            class Code implements I.Type {
                _bsontype: "Code";

                /**
                 * @param code a string or function
                 * @param scope an optional scope for the function
                 */
                constructor(code: string | ((...args: any[]) => void), scope?: object);

                toJSON(): { scope: object, code: string };
            }

            /**
             * Represents BSON DBRef type
             */
            class DBRef implements I.Type {
                _bsontype: "DBRef";

                /**
                 * @param namespace the collection name
                 * @param oid the reference ObjectID
                 * @param db optional db name, if omitted the reference is local to the current db
                 */
                constructor(namespace: string, oid: ObjectId, db?: string);

                toJSON(): { $ref: string, $id: ObjectId, $db: string };
            }

            /**
             * Represents BSON Decimal128 type
             */
            class Decimal128 implements I.Type {
                _bsontype: "Decimal128";

                /**
                 * @param bytes a buffer containing the raw Decimal128 bytes
                 */
                constructor(bytes: Buffer);

                toString(): string;

                toJSON(): { $numberDecimal: string };

                /**
                 * Create a Decimal128 instance from a string representation
                 *
                 * @param string a numeric string representation
                 */
                static fromString(string: string): Decimal128;
            }

            /**
             * Represents BSON Double type
             */
            class Double implements I.Type {
                _bsontype: "Double";

                constructor(value: number);

                valueOf(): number;

                toJSON(): number;
            }

            /**
             * /**
             * Represents BSON Int32 type
             */
            class Int32 implements I.Type {
                _bsontype: "Int32";

                constructor(value: number);

                valueOf(): number;

                toJSON(): number;
            }

            /**
             * Represents BSON Long type
             */
            class Long extends math.Long implements I.Type {
                _bsontype: "Long";

                static MIN_VALUE: Long;
                static MAX_VALUE: Long;
                static MAX_UNSIGNED_VALUE: Long;
                static ZERO: Long;
                static UZERO: Long;
                static ONCE: Long;
                static ONE: Long;
                static UONE: Long;
                static NEG_ONE: Long;
            }

            /**
             * Represents BSON MaxKey type
             */
            class MaxKey implements I.Type {
                _bsontype: "MaxKey";
            }

            /**
             * Represents BSON MinKey type
             */
            class MinKey implements I.Type {
                _bsontype: "MinKey";
            }

            /**
             * Represents BSON ObjectId type
             */
            class ObjectId implements I.Type {
                _bsontype: "ObjectId";

                generationTime: number;

                constructor(id?: string | Buffer | ObjectId | { toHexString(): string, id: string | Buffer | ObjectId });

                /**
                 * Return the ObjectId id as a 24 byte hex string representation
                 */
                toHexString(): string;

                /**
                 * Returns the next ObjectId index
                 */
                getInc(): number;

                /**
                 * Generate a 12 byte id buffer used in ObjectId's
                 */
                generate(time?: number): Buffer;

                toString(format?: string): string;

                toJSON(): string;

                /**
                 * Compares the equality of this ObjectID with otherID
                 */
                equals(other: string | Buffer | ObjectId | { toHexString(): string }): boolean;

                /**
                 * Returns the generation date (accurate up to the second) that this ID was generated
                 */
                getTimestamp(): Date;

                /**
                 * Creates an ObjectId
                 */
                static createPk(): ObjectId;

                /**
                 * Creates an ObjectId from a second based number, with the rest of the ObjectId zeroed out. Used for comparisons or sorting the ObjectId
                 */
                static createFromTime(time: number): ObjectId;

                /**
                 * Creates an ObjectID from a hex string representation of an ObjectId
                 */
                static createFromHexString(string: string): ObjectId;

                /**
                 * Checks if a value is a valid bson ObjectId
                 */
                static isValid(id: any): boolean;

                static index: number;
            }

            /**
             * Represents BSON RegExp type
             */
            class BSONRegExp implements I.Type {
                _bsontype: "BSONRegExp";

                constructor(pattern: string, options?: string);
            }

            /**
             * Represents BSON Symbol type
             */
            class Symbol implements I.Type {
                _bsontype: "Symbol";

                constructor(value: string);

                valueOf(): string;

                toString(): string;

                inspect(): string;

                toJSON(): string;
            }

            /**
             * This type is for INTERNAL use in MongoDB only and should not be used in applications
             */
            class Timestamp extends math.Long implements I.Type {
                _bsontype: "Timestamp";

                static MIN_VALUE: Timestamp;
                static MAX_VALUE: Timestamp;
                static MAX_UNSIGNED_VALUE: Timestamp;
                static ZERO: Timestamp;
                static UZERO: Timestamp;
                static ONCE: Timestamp;
                static ONE: Timestamp;
                static UONE: Timestamp;
                static NEG_ONE: Timestamp;
            }

            namespace I {
                interface SerializeOptions {
                    /**
                     * Whether to check if keys are valid. Default: false
                     */
                    checkKeys?: boolean;

                    /**
                     * Whether to serialize javascript functions. Default: false
                     */
                    serializeFunctions?: boolean;

                    /**
                     * Whether to ignore undefined values. Default: true
                     */
                    ignoreUndefined?: boolean;
                }

                interface DeserializeOptions {
                    /**
                     * Evaluate functions in the BSON document scoped to the object deserialized.
                     * Default: false
                     */
                    evalFunctions?: boolean;

                    /**
                     * Cache evaluated functions for reuse.
                     * Default: false
                     */
                    cacheFunctions?: boolean;

                    /**
                     * Use a crc32 code for caching, otherwise use the string of the function.
                     * Default: false
                     */
                    cacheFunctonsCrc32?: boolean;

                    /**
                     * When deserializing a Long will fit it into a Number if it's smaller than 53 bits.
                     * Default: true
                     */
                    promoteLongs?: boolean;

                    /**
                     * When deserializing a Binary will return it as a node.js Buffer instance.
                     * Default: false
                     */
                    promoteBuffers?: boolean;

                    /**
                     * When deserializing will promote BSON values to their Node.js closest equivalent types.
                     * Default: false
                     */
                    promoteValues?: boolean;

                    /**
                     * Allow to specify if there what fields we wish to return as unserialized raw buffer.
                     */
                    fieldsAsRaw?: string[];

                    /**
                     * Return BSON regular expressions as BSONRegExp instances.
                     * Default: false
                     */
                    bsonRegExp?: boolean;
                }
            }

            /**
             * Represents a BSON serializer
             */
            class BSON {
                constructor(types?: Array<{ new (...args: any[]): I.Type }>);

                /**
                 * Serializes a js object into a buffer
                 */
                serialize(object: object, options?: I.SerializeOptions): Buffer;

                /**
                 * Takes an object, a target buffer instance and an optional options object and returns the end serialization index
                 * in the final buffer
                 */
                serializeWithBufferAndIndex(object: object, buffer: Buffer, options?: I.SerializeOptions & {
                    /**
                     * The index in the buffer where we wish to start serializing into
                     */
                    index?: number
                }): number;

                /**
                 * Calculates the size BSON object for the given object
                 */
                calculateObjectSize(object: object, options?: {
                    /**
                     * Whether to serialize javascript functions. Default: false
                     */
                    serializeFunctions?: boolean,

                    /**
                     * Whether to ignore undefined values. Default: true
                     */
                    ignoreUndefined?: boolean
                }): number;

                /**
                 * Deserializes the given buffer into an object
                 */
                deserialize(buf: Buffer, options?: I.DeserializeOptions): any;

                /**
                 * Takes a node.js Buffer, startIndex and allow more control over deserialization of a Buffer containing concatenated BSON documents
                 */
                deserializeStream(buf: Buffer, startIndex: number, numberOfDocuments: number, documents: any[], docStartIndex: number, options?: I.DeserializeOptions): number;
            }

            namespace c {
                const BSON_INT32_MIN: number;
                const BSON_INT32_MAX: number;
                const BSON_INT64_MAX: number;
                const BSON_INT64_MIN: number;
                const JS_INT_MAX: number;
                const JS_INT_MIN: number;
            }

            /**
             * BSON serializator instance
             */
            const serializer: BSON;

            /**
             * Encodes the given object
             */
            function encode(obj: object, options?: I.SerializeOptions): Buffer;

            /**
             * Decodes the given buffer with enabled buffers and values promoting
             */
            function decode(buf: Buffer, options?: I.DeserializeOptions): any;
        }

        namespace protobuf {
            namespace schema {
                namespace I {
                    interface Field {
                        name: string | null;
                        type: string | null;
                        tag: number;
                        map: {
                            from: string;
                            to: string;
                        } | null;
                        oneof: string | null;
                        required: boolean;
                        repeated: boolean;
                        options: object;
                    }

                    interface Enum {
                        name: string;
                        values: object;
                        options: object;
                    }

                    interface Extend {
                        name: string;
                        message: Message;
                    }

                    interface Message {
                        name: string;
                        enums: Enum[];
                        extends: Extend[];
                        messages: Message[];
                        fields: Field[];
                        extensions: {
                            from: number,
                            to: number
                        } | null;
                    }

                    interface RPCMethod {
                        name: string;
                        input_type: string | null;
                        output_type: string | null;
                        client_streaming: boolean;
                        server_streaming: boolean;
                        options: object;
                    }

                    interface Service {
                        name: string;
                        methods: RPCMethod[];
                        options: object;
                    }

                    interface Schema {
                        syntax: any; // ??
                        package: string | null;
                        imports: string[];
                        enums: Enum[];
                        messages: Message[];
                        options: object;
                        extends: Extend[];
                        services?: Service[];
                    }
                }

                function parse(buf: Buffer | string): I.Schema;

                function stringify(schema: object): string;
            }

            function create(proto: Buffer | string | object, opts?: object): object;
        }

        namespace base32 {
            function charmap<T = object>(alphabet: string, mappings?: T): T;

            namespace I {
                interface Spec {
                    alphabet: string;
                    charmap: {
                        [c: string]: number;
                    };
                }
            }

            const rfc4648: I.Spec;

            const crockford: I.Spec;

            const base32hex: I.Spec;

            namespace I {
                interface DecoderOptions {
                    type: "rfc4648" | "crockford" | "base32hex";
                    charmap?: object;
                }

                interface EncoderOptions {
                    type: "rfc4648" | "crockford" | "base32hex";
                    alphabet?: string;
                }
            }

            class Decoder {
                constructor(options?: I.DecoderOptions);

                write(str: string): this;

                finalize(str?: string): Buffer;
            }

            class Encoder {
                constructor(options?: I.EncoderOptions);

                write(buf: Buffer): this;

                finalize(buf?: Buffer): string;
            }

            function encode(buf: Buffer, options?: I.EncoderOptions): string;

            function decode(str: string, options?: I.DecoderOptions): Buffer;
        }

        namespace I {
            interface BaseX {
                encode(buf: Buffer): string;

                decode(str: string): Buffer;

                decodeUnsafe(str: string): Buffer;
            }
        }

        function basex(alphabet: string): I.BaseX;

        const base58: I.BaseX;

        namespace base64url {
            function unescape(str: string): string;

            function escape(str: string): string;

            namespace I {
                interface EncodeOptions {
                    encoding?: string;
                }

                interface DecodeOptions {
                    encoding?: string;
                    buffer?: boolean;
                }
            }

            function encode(str: Buffer | string, options?: I.EncodeOptions): string;

            function decode(str: string, options: I.DecodeOptions & { buffer: true }): Buffer;
            function decode(str: string, options?: I.DecodeOptions): string;
        }

        namespace varint {
            function encode<T = any>(num: number, out?: T[], offset?: number): T[];

            function decode(buf: Buffer, offset?: number): number;

            function encodingLength(value: number): number;
        }

        namespace varintSigned {
            function encode<T = any>(num: number, out?: T[], offset?: number): T[];

            function decode(buf: Buffer, offset?: number): number;

            function encodingLength(value: number): number;
        }
    }
}
