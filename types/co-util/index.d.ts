// Type definitions for co-util 1.1.17
// Project: https://github.com/codeorg/co-util
// Definitions by: codeorg <https://github.com/codeorg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = co_util;

declare function co_util(...args: any[]): void;

declare namespace co_util {
    class Promise {
        constructor(executor: any);

        all(...args: any[]): any;

        any(): any;

        asCallback(nodeback: any, options: any): any;

        bind(thisArg: any): any;

        break(): any;

        call(methodName: any, ...args: any[]): any;

        cancel(): any;

        catch(fn: any, ...args: any[]): any;

        catchReturn(value: any, ...args: any[]): any;

        catchThrow(reason: any, ...args: any[]): any;

        caught(fn: any, ...args: any[]): any;

        delay(ms: any): any;

        disposer(fn: any): any;

        done(didFulfill: any, didReject: any): void;

        each(fn: any): any;

        error(fn: any): any;

        filter(fn: any, options: any): any;

        finally(handler: any): any;

        get(propertyName: any): any;

        isCancellable(): any;

        isCancelled(): any;

        isFulfilled(): any;

        isPending(): any;

        isRejected(): any;

        isResolved(): any;

        lastly(handler: any): any;

        map(fn: any, options: any): any;

        mapSeries(fn: any): any;

        nodeify(nodeback: any, options: any): any;

        props(): any;

        race(): any;

        reason(): any;

        reduce(fn: any, initialValue: any): any;

        reflect(): any;

        return(value: any): any;

        settle(): any;

        some(howMany: any): any;

        spread(fn: any): any;

        suppressUnhandledRejections(): void;

        tap(handler: any): any;

        tapCatch(handlerOrPredicate: any, ...args: any[]): any;

        then(didFulfill: any, didReject: any, ...args: any[]): any;

        thenReturn(value: any): any;

        thenThrow(reason: any): any;

        throw(reason: any): any;

        timeout(ms: any, message: any): any;

        toJSON(): any;

        toString(): any;

        value(): any;

        static Promise: any;

        static all(promises: any): any;

        static allSettled(promises: any): any;

        static any(promises: any): any;

        static attempt(fn: any, ...args: any[]): any;

        static bind(thisArg: any, value: any): any;

        static cast(obj: any): any;

        static config(opts: any): any;

        static coroutine(generatorFunction: any, options: any, ...args: any[]): any;

        static defer(): any;

        static delay(ms: any, value: any): any;

        static each(promises: any, fn: any): any;

        static filter(promises: any, fn: any, options: any): any;

        static fromCallback(fn: any, ...args: any[]): any;

        static fromNode(fn: any, ...args: any[]): any;

        static fulfilled(obj: any): any;

        static getNewLibraryCopy(...args: any[]): any;

        static hasLongStackTraces(): any;

        static is(val: any): any;

        static join(...args: any[]): any;

        static longStackTraces(): void;

        static map(promises: any, fn: any, options: any, _filter: any): any;

        static mapSeries(promises: any, fn: any): any;

        static method(fn: any, ...args: any[]): any;

        static noConflict(): any;

        static onPossiblyUnhandledRejection(fn: any): void;

        static onUnhandledRejectionHandled(fn: any): void;

        static pending(): any;

        static promisify(fn: any, options: any): any;

        static promisifyAll(target: any, options: any): any;

        static props(promises: any): any;

        static race(promises: any): any;

        static reduce(promises: any, fn: any, initialValue: any, _each: any): any;

        static reject(reason: any): any;

        static rejected(reason: any): any;

        static resolve(obj: any): any;

        static setScheduler(fn: any): any;

        static settle(promises: any): any;

        static some(promises: any, howMany: any): any;

        static spawn(generatorFunction: any): any;

        static using(...args: any[]): any;

        static version: string;

    }

    function Http(opts: any): any;

    function addDate(date: any, type: any, inc: any): any;

    function addDay(date: any, inc: any): any;

    function addHour(date: any, inc: any): any;

    function addMinute(date: any, inc: any): any;

    function addMonth(date: any, inc: any): any;

    function addSecond(date: any, inc: any): any;

    function addWeek(date: any, inc: any): any;

    function addYear(date: any, inc: any): any;

    function aesDecode(str: any, key: any): any;

    function aesEncode(str: any, key: any): any;

    function base64Decode(encodeStr: any, urlsafe: any, encoding: any): any;

    function base64Encode(str: any, urlsafe: any): any;

    function chunk(array: any, num: any): any;

    function clone(objects: any): any;

    function compact(arr: any): any;

    function concat(...args: any[]): any;

    function dayTime(date: any, inc: any): any;

    function decodeUrl(value: any): any;

    function drop(array: any, num: any): any;

    function dropRight(array: any, num: any): any;

    function encodeUrl(value: any): any;

    function extend(...args: any[]): any;

    function find(objects: any, cons: any): any;

    function findIndex(objects: any, obj: any): any;

    function findOne(objects: any, obj: any): any;

    function flatten(arr: any): any;

    function format(f: any, ...args: any[]): any;

    function formatDate(date: any, format: any): any;

    function formatIp(ip: any): any;

    function formatMoney(obj: any): any;

    function formatObj(obj: any): any;

    function fromNow(start: any): any;

    function getTimeByObjectId(objectId: any): any;

    function hash(method: any, input: any, format: any): any;

    function hmac(data: any, key: any, algorithm: any, encoding: any): any;

    function http(...args: any[]): any;

    function indexOf(arr: any, value: any): any;

    function is(value: any, other: any): any;

    function isDate(value: any): any;

    function isInt(value: any): any;

    function isJson(str: any): any;

    function isNullObj(obj: any): any;

    function isNumber(value: any): any;

    function isObject(value: any): any;

    function isPlainObject(value: any): any;

    function isStream(value: any): any;

    function isString(str: any): any;

    function kv(arr: any, key: any): any;

    function map(objects: any, fn: any): any;

    function max(arr: any, key: any): any;

    function md5(str: any, bit: any): any;

    function merge(...args: any[]): any;

    function min(arr: any, key: any): any;

    function notIn(...args: any[]): any;

    function querystring(obj: any): any;

    function random(start: any, end: any): any;

    function round(number: any, precision: any): any;

    function setDay(date: any, inc: any): any;

    function sha1(str: any, format: any): any;

    function sha256(str: any, format: any): any;

    function sign(obj: any, key: any): any;

    function sort(arr: any, keys: any): any;

    function sortObj(obj: any): any;

    function sortRandom(arr: any): any;

    function toArray(value: any, mod: any): any;

    function toBuffer(value: any, mod: any): any;

    function toDate(value: any): any;

    function toFixed(num: any, bit: any): any;

    function toInt(value: any): any;

    function toJson(value: any): any;

    function toNumber(value: any): any;

    function toStream(value: any): any;

    function toString(value: any, mod: any): any;

    function toText(html: any, length: any): any;

    function trim(str: any): any;

    function uniq(arr: any): any;

    function unzip(value: any): any;

    function use(fn: any): void;

    function uuid(): any;

    function values(objects: any, key: any): any;

    function xor(...args: any[]): any;

    namespace Promise {
        class AggregateError {
            constructor(message: any);

            // Native method; no parameter or return type inference available
            constructor$(p0: any): any;

            // Native method; no parameter or return type inference available
            every(p0: any): any;

            // Native method; no parameter or return type inference available
            filter(p0: any): any;

            // Native method; no parameter or return type inference available
            forEach(p0: any): any;

            // Native method; no parameter or return type inference available
            indexOf(p0: any): any;

            // Native method; no parameter or return type inference available
            join(p0: any): any;

            // Native method; no parameter or return type inference available
            lastIndexOf(p0: any): any;

            // Native method; no parameter or return type inference available
            map(p0: any): any;

            // Native method; no parameter or return type inference available
            pop(): any;

            // Native method; no parameter or return type inference available
            push(p0: any): any;

            // Native method; no parameter or return type inference available
            reduce(p0: any): any;

            // Native method; no parameter or return type inference available
            reduceRight(p0: any): any;

            // Native method; no parameter or return type inference available
            reverse(): any;

            // Native method; no parameter or return type inference available
            shift(): any;

            // Native method; no parameter or return type inference available
            slice(p0: any, p1: any): any;

            // Native method; no parameter or return type inference available
            some(p0: any): any;

            // Native method; no parameter or return type inference available
            sort(p0: any): any;

            toString(): any;

            // Native method; no parameter or return type inference available
            unshift(p0: any): any;

        }

        class CancellationError {
            constructor(message: any);

            // Native method; no parameter or return type inference available
            constructor$(p0: any): any;

        }

        class OperationalError {
            constructor(message: any);

            // Native method; no parameter or return type inference available
            constructor$(p0: any): any;

        }

        class PromiseInspection {
            constructor(promise: any);

            error(): any;

            isCancelled(): any;

            isFulfilled(): any;

            isPending(): any;

            isRejected(): any;

            isResolved(): any;

            reason(): any;

            value(): any;

        }

        class RangeError {
            constructor(p0: any);

            static captureStackTrace(p0: any, p1: any): any;

            static stackTraceLimit: number;

        }

        class RejectionError {
            constructor(message: any);

            // Native method; no parameter or return type inference available
            constructor$(p0: any): any;

        }

        class TimeoutError {
            constructor(message: any);

            // Native method; no parameter or return type inference available
            constructor$(p0: any): any;

        }

        class TypeError {
            constructor(p0: any);

            static captureStackTrace(p0: any, p1: any): any;

            static stackTraceLimit: number;

        }

        namespace coroutine {
            function addYieldHandler(fn: any): void;

        }

    }

    namespace excel {
        function readFile(file: any): any;

        function save(file: any, sheets: any): any;

    }

    namespace fs {
        function exist(file: any): any;

        function ll(dir: any, root: any): any;

        function mkdir(path: any, mode: any): any;

        function mv(src: any, dest: any): any;

        function readFile(path: any, options: any): any;

        function readGzip(path: any): any;

        function rmrf(path: any): any;

        function stat(path: any): any;

        function writeFile(file: any, data: any, options: any): any;

    }

    namespace http {
        const interceptors: {
            request: {
                eject: any;
                forEach: any;
                handlers: {
                    fulfilled: any;
                    rejected: any;
                    runWhen: any;
                    synchronous: boolean;
                }[];
                use: any;
            };
            response: {
                eject: any;
                forEach: any;
                handlers: {
                    fulfilled: any;
                    rejected: any;
                    runWhen: any;
                    synchronous: boolean;
                }[];
                use: any;
            };
        };

        function get(...args: any[]): any;

        function getUri(...args: any[]): any;

        function head(...args: any[]): any;

        function options(...args: any[]): any;

        function patch(...args: any[]): any;

        function post(...args: any[]): any;

        function put(...args: any[]): any;

        function request(...args: any[]): any;

        namespace defaults {
            const headers: {
                "Content-Type": string;
                common: {
                    Accept: string;
                };
                delete: {
                };
                get: {
                };
                head: {
                };
                patch: {
                    "Content-Type": string;
                };
                post: {
                    "Content-Type": string;
                };
                put: {
                    "Content-Type": string;
                };
            };

            const maxBodyLength: number;

            const maxContentLength: number;

            const timeout: number;

            const transformRequest: any[];

            const transformResponse: any[];

            const transitional: {
                clarifyTimeoutError: boolean;
                forcedJSONParsing: boolean;
                silentJSONParsing: boolean;
            };

            const xsrfCookieName: string;

            const xsrfHeaderName: string;

            function adapter(config: any): any;

            function validateStatus(status: any): any;

        }

    }

    namespace qs {
        function decode(qs: any, sep: any, eq: any, options: any): any;

        function encode(obj: any, sep: any, eq: any, options: any): any;

        function escape(str: any): any;

        function parse(qs: any, sep: any, eq: any, options: any): any;

        function stringify(obj: any, sep: any, eq: any, options: any): any;

        function unescape(s: any, decodeSpaces: any): any;

        function unescapeBuffer(s: any, decodeSpaces: any): any;

    }

    namespace zip {
        function unzip(src: any, dist: any): any;

        function zip(src: any, dist: any, opts: any): any;

    }

}

