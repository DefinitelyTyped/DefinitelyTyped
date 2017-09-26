declare namespace adone {
    /**
     * predicates
     */
    namespace is {
        /**
         * Checks whether the given object is `null`
         */
        function _null(obj: any): boolean;
        export { _null as null };

        /**
         * Checks whether the given object is `undefined`
         */
        export function undefined(obj: any): boolean;

        /**
         * Checks whether the given object is nither `undefined` nor `null`
         */
        export function exist(obj: any): boolean;

        /**
         * Checks whether the given object is either `undefined` or `null`
         */
        export function nil(obj: any): boolean;

        /**
         * Checks whether the given object is a number
         */
        export function number(obj: any): boolean;

        /**
         * Checks whether the given object is a finite number or a string represents a finite number
         */
        export function numeral(obj: any): boolean;

        /**
         * Checks whether the given object is either +Infinity or -Inginity
         */
        export function infinite(obj: any): boolean;

        /**
         * Checks whether the given object is an odd number
         */
        export function odd(obj: any): boolean;

        /**
         * Checks whether the given object is an even number
         */
        export function even(obj: any): boolean;

        /**
         * Checks whether the given object is a float
         */
        export function float(obj: any): boolean;

        /**
         * Checks whether the given object is -0
         */
        export function negativeZero(obj: any): boolean;

        /**
         * Checks whether the given object is a string
         */
        export function string(obj: any): boolean;

        /**
         * Checks whether the given object is an empty string
         */
        export function emptyString(obj: any): boolean;

        /**
         * Checks whether the first string is a substring of the second string from the given offset
         */
        export function substring(substring: string, string: string, offset?: number): boolean;

        /**
         * Checks whether `string` starts from `prefix`
         */
        export function prefix(prefix: string, string: string): boolean;

        /**
         * Checks whether `strin` ends with `prefix`
         */
        export function suffix(suffix: string, string: string): boolean;

        /**
         * Checks whether the given object is a boolean
         */
        export function boolean(obj: any): boolean;

        /**
         * Checks whether the given object is a string with ".json" extension or an object
         */
        export function json(obj: any): boolean;

        /**
         * Checks whether the given object is not a primitive, i.e. neither `undefined` nor `null` nor number nor string nor boolean nor symbol)
         */
        export function object(obj: any): boolean;

        /**
         * Checks whether the given object is a plain object, i.e. created by Object
         */
        export function plainObject(obj: any): boolean;

        /**
         * Checks whether the given object is an adone namespace
         */
        export function namespace(obj: any): boolean;

        /**
         * Checks whether the given object is a class
         */
        function _class(obj: any): boolean;
        export { _class as class };

        /**
         * Checks whether the given object is empty, i.e. it is an object(not a primitive), and Object.keys returns an empty array
         */
        export function emptyObject(obj: any): boolean;

        /**
         * Checks whether the given object has the given owned property
         */
        export function propertyOwned(obj: any, field: string): boolean;

        /**
         * Checks whether the given object has the given property
         */
        export function propertyDefined(obj: any, field: string): boolean;

        /**
         * Checks whether the given object conforms to `schema`.
         */
        export function conforms(obj: object, schema: object, strict?: boolean): boolean;

        /**
         * Checks whether the given object is like an array, i.e. it is not a primitive, not a function and has length
         */
        export function arrayLikeObject(obj: any): boolean;

        /**
         * Checks whether the given array has the given value
         */
        export function inArray<T>(value: T, array: any[], offset?: number, comparator?: (a: T, b: T) => boolean): boolean;

        /**
         * Checks whether the given objects has same type
         */
        export function sameType(value: any, other: any): boolean;

        /**
         * Checks whether the given object is a primitive, i.e. it is either `undefined` or `null` or number or boolean or string or symbol
         */
        export function primitive(obj: any): boolean;

        /**
         * Checks whether the given arrays are equal
         */
        export function equalArrays(left: any[], right: any[]): boolean;

        /**
         * Checks whether the given objects are deep equal
         */
        export function deepEqual(left: any, right: any): boolean;

        export function shallowEqual(left: any, right: any): boolean;

        /**
         * Checks whether the given object is a stream, i.e. an object and has a pipe method
         */
        export function stream(obj: any): boolean;

        /**
         * Checks whether the given object is a writable stream, i.e. a stream that has _writableState
         */
        export function writableStream(obj: any): boolean;

        /**
         * Checks whether the given object is a readable stream, i.e. a stream that has _readableState
         */
        export function readableStream(obj: any): boolean;

        /**
         * Checks whether the given object is a duplex stream, i.e. a readable and writable stream
         */
        export function duplexStream(obj: any): boolean;

        /**
         * Checks whether the given object is a transform stream, i.e. a stream that has _transformState
         */
        export function transformStream(obj: any): boolean;

        /**
         * Checks whether the given buffer is in utf8
         */
        export function utf8(obj: Buffer): boolean;

        /**
         * Checks whether the given path is an absolute win32 path
         */
        export function win32PathAbsolute(path: string): boolean;

        /**
         * Checks whether the given path is an absolute posix path
         */
        export function posixPathAbsolute(path: string): boolean;

        /**
         * Checks whether the given path is an absolute path
         */
        export function pathAbsolute(path: string): boolean;

        /**
         * Checks whether the given string is a glob
         */
        export function glob(str: string): boolean;

        /**
         * Checks whether the given path is not a dot-file path (.secret)
         */
        export function dotfile(str: string): boolean;

        /**
         * Checks whether the given object is a function
         */
        function _function(obj: any): boolean;
        export { _function as function };

        /**
         * Checks whether the given object is an async function
         */
        export function asyncFunction(obj: any): boolean;

        /**
         * Checks whether the given object is a promise
         */
        export function promise(obj: any): boolean;

        /**
         * Checks whether the given string is a valid date-string
         */
        export function validDate(str: string): boolean;

        /**
         * Checks whether the given object is a buffer
         */
        export function buffer(obj: any): boolean;

        /**
         * Checks whether the given object is a callback function, i.e. it has a common function name
         */
        export function callback(obj: any): boolean;

        /**
         * Checks whether the given object is a generator function
         */
        export function generator(obj: any): boolean;

        /**
         * Checks whether the given object is NaN
         */
        export function nan(obj: any): boolean;

        /**
         * Checks whether the given object is a finite number
         */
        export function finite(obj: any): boolean;

        /**
         * Checks whether the given object is an integer
         */
        export function integer(obj: any): boolean;

        /**
         * Checks whether the given object is a safe integer
         */
        export function safeInteger(obj: any): boolean;

        /**
         * Checks whether the given object is an array
         */
        export function array(obj: any): boolean;

        /**
         * Checks whether the given object is a Uint8 array
         */
        export function uint8Array(obj: any): boolean;

        /**
         * Checks whether the given object is an adone configuration
         */
        export function configuration(obj: any): boolean;

        /**
         * Checks whether the given object is an instance of adone.math.Long
         */
        export function long(obj: any): boolean;

        /**
         * Checks whether the given object is an instance of adone.math.BigNumber
         */
        export function bigNumber(obj: any): boolean;

        /**
         * Checks whether the given object is an instance of adone.collection.ByteArray
         */
        export function byteArray(obj: any): boolean;

        /**
         * Checks whether the given object is an instance of adone.datetime
         */
        export function datetime(obj: any): boolean;

        export function transform(obj: any): boolean;

        /**
         * Checks whether the given object is an adone subsystem
         */
        export function subsystem(obj: any): boolean;

        /**
         * Checks whether the given object is an adone application
         */
        export function application(obj: any): boolean;

        /**
         * Checks whether the given object is an adone logger
         */
        export function logger(obj: any): boolean;

        /**
         * Checks whether the given object is a core stream
         */
        export function coreStream(obj: any): boolean;

        /**
         * Checks whether the given object is a fast local map stream
         */
        export function fastLocalMapStream(obj: any): boolean;

        /**
         * Checks whether the given object is a fast local stream
         */
        export function fastLocalStream(obj: any): boolean;

        /**
         * Checks whether the given object is a fast stream
         */
        export function fastStream(obj: any): boolean;

        /**
         * Checks whether the given object is a genesis netron
         */
        export function genesisNetron(obj: any): boolean;

        /**
         * Checks whether the given object is a genesis peer
         */
        export function genesisPeer(obj: any): boolean;

        /**
         * Checks whether the given object is a netron adapter
         */
        export function netronAdapter(obj: any): boolean;

        /**
         * Checks whether the given object is a netron instance
         */
        export function netron(obj: any): boolean;

        /**
         * Checks whether the given object is a netron peer instance
         */
        export function netronPeer(obj: any): boolean;

        /**
         * Checks whether the given object is a netron definition
         */
        export function netronDefinition(obj: any): boolean;

        /**
         * Checks whether the given object represents netron definitions
         */
        export function netronDefinitions(obj: any): boolean;

        /**
         * Checks whether the given object is a netron reference
         */
        export function netronReference(obj: any): boolean;

        /**
         * Checks whether the given object is a netron interface
         */
        export function netronInterface(obj: any): boolean;

        /**
         * Checks whether the given object is a netron context
         */
        export function netronContext(obj: any): boolean;

        /**
         * Checks whether the given netron interface has `name` method
         */
        export function netronIMethod(netronInterface: object, name: string): boolean;

        /**
         * Checks whether the given netron interface has `name` property
         */
        export function netronIProperty(netronInterface: any, name: string): boolean;

        /**
         * Checks whether the given object is a netron stub
         */
        export function netronStub(obj: any): boolean;

        /**
         * Checks whether the given object is a netron remote stub
         */
        export function netronRemoteStub(obj: any): boolean;

        /**
         * Checks whether the given object is a netron stream
         */
        export function netronStream(obj: any): boolean;

        /**
         * Checks whether the given object is iterable, has defined Symbol.iterator property
         */
        export function iterable(obj: any): boolean;

        /**
         * true if the OS is Windows
         */
        export const windows: boolean;

        /**
         * true if the OS is Linux
         */
        export const linux: boolean;

        /**
         * true is the OS is FreeBSD
         */
        export const freebsd: boolean;

        /**
         * true is the os is macOS
         */
        export const darwin: boolean;

        /**
         * true is the os is SunOS
         */
        export const sunos: boolean;

        /**
         * Checks whether the given string is uppercased
         */
        export function uppercase(str: string): boolean;

        /**
         * Checks whether the given string is lowercased
         */
        export function lowercase(str: string): boolean;

        /**
         * Checks whether the given string includes only digits
         */
        export function digits(str: string): boolean;

        /**
         * Checks whether the given string is a valid js identifier
         */
        export function identifier(str: string): boolean;

        /**
         * Checks whether the given string is a binary extension (7z, zip, mp3, etc)
         */
        export function binaryExtension(str: string): boolean;

        /**
         * Checks whether the given string is a path to a binary file
         */
        export function binaryPath(str: string): boolean;

        /**
         * Checks whether the given string is an IPv4 address
         */
        export function ip4(str: string): boolean;

        /**
         * Checks whether the given string is an IPv6 address
         */
        export function ip6(str: string): boolean;

        /**
         * Checks whether the given object is an array buffer
         */
        export function arrayBuffer(obj: any): boolean;

        /**
         * Checks whether the given object is an array buffer view
         */
        export function arrayBufferView(obj: any): boolean;

        /**
         * Checks whether the given object is a date
         */
        export function date(obj: any): boolean;

        /**
         * Checks whether the given object is an error, instance of Error
         */
        export function error(obj: any): boolean;

        /**
         * Checks whether the given object is a map
         */
        export function map(obj: any): boolean;

        /**
         * Checks whether the given object is a regexp
         */
        export function regexp(obj: any): boolean;

        /**
         * Checks whether the given object is a set
         */
        export function set(obj: any): boolean;

        /**
         * Checks whether the given object is a symbol
         */
        export function symbol(obj: any): boolean;

        /**
         * Checks whether the given buffer a valid UTF-8 encoded text
         */
        export function validUTF8(obj: Buffer): boolean;

        /**
         * Checks whether the given object is a vault valuable
         */
        export function vaultValuable(obj: any): boolean;

        /**
         * Checks whether the given object is an adone task
         */
        export function task(obj: any): boolean;
    }
}
