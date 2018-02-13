declare namespace adone {
    /**
     * various utility functions
     */
    namespace util {
        function arrify<T>(val: T[]): T[];
        function arrify<T>(val: T): [T];

        function slice<T>(args: T[], sliceStart?: number, sliceEnd?: number): T[];

        function spliceOne(list: any[], index: number): void;

        function normalizePath(str: string, stripTrailing?: boolean): string;

        function unixifyPath(filePath: string, unescape?: boolean): string;

        function functionName(fn: (...args: any[]) => any): string;

        namespace I {
            interface ParseMsResult {
                days: number;
                hours: number;
                minutes: number;
                seconds: number;
                milliseconds: number;
            }
        }
        function parseMs(ms: number): I.ParseMsResult;

        function pluralizeWord(str: string, plural?: string, count?: number): string;

        function randomChoice<T>(arrayLike: ArrayLike<T>, from?: number, to?: number): T;

        function shuffleArray<T>(array: T[]): T[];

        function enumerate<T>(iterable: Iterable<T>, start?: number): IterableIterator<[number, T]>;

        function zip<T1, T2>(a: Iterable<T1>, b: Iterable<T2>): IterableIterator<[T1, T2]>;
        function zip<T1, T2, T3>(a: Iterable<T1>, b: Iterable<T2>, c: Iterable<T3>): IterableIterator<[T1, T2, T3]>;
        function zip<T1, T2, T3, T4>(a: Iterable<T1>, b: Iterable<T2>, c: Iterable<T3>, d: Iterable<T4>): IterableIterator<[T1, T2, T3, T4]>;
        function zip(...iterables: Array<Iterable<any>>): IterableIterator<any[]>;

        namespace I {
            interface KeysOptions {
                onlyEnumerable?: boolean;
                followProto?: boolean;
                all?: boolean;
            }
        }
        function keys(object: object, options?: I.KeysOptions): string[];

        function values(object: object, options?: I.KeysOptions): any[];

        function entries(object: object, options?: I.KeysOptions): Array<[string, any]>;

        function toDotNotation(object: object): object;

        namespace I {
            interface FlattenOptions {
                depth?: number;
            }
        }
        function flatten(array: any[], options?: I.FlattenOptions): any[];

        function globParent(str: string): string;

        function toFastProperties(object: object): object;

        namespace I {
            interface SortKeysOptions {
                deep?: boolean;
                compare?(a: any, b: any): number;
            }
        }
        function sortKeys(object: object, options?: I.SortKeysOptions): object;

        namespace I {
            interface GlobizeOptions {
                exts?: string;
                recursively?: boolean;
            }
        }
        function globize(path: string, options?: I.GlobizeOptions): string;

        function unique<T>(array: T[], projection?: (a: T) => any): T[];

        function invertObject(source: object, options?: I.KeysOptions): object;

        namespace I {
            interface HumanizeTimeOptions {
                msDecimalDigits?: number;
                secDecimalDigits?: number;
                verbose?: boolean;
                compact?: boolean;
            }
        }
        function humanizeTime(ms: number, options?: I.HumanizeTimeOptions): string;
        function humanizeSize(num: number, space?: string): string;

        function parseSize(str: string | number): number | null;

        namespace I {
            interface CloneOptions {
                /**
                 * Clone recursively
                 *
                 * `true` by default
                 */
                deep?: boolean;

                /**
                 * Clone non-plain object, they will be plain objects
                 *
                 * `false` by default
                 */
                nonPlainObjects?: boolean;

                /**
                 * Clone only enumerable properties
                 *
                 * `true` by default
                 */
                onlyEnumerable?: boolean;
            }
        }

        class Cloner {
            /**
             * Clones the given object
             */
            clone(obj: any, options?: I.CloneOptions): any;

            /**
             * Returns a clone function that is binded to this cloner
             */
            binding(): (obj: any, options?: I.CloneOptions) => any;
        }

        function clone(object: any, options?: I.CloneOptions): any;

        function asyncIter<T>(array: T[], iter: (elem: T, index: number, cb: () => void) => any, cb: () => void): void;

        function asyncFor<T>(obj: { [key: string]: T }, iter: (key: string, value: T, index: number, length: number, next: () => void) => void, cb: () => void): void;

        namespace I {
            interface OnceOptions {
                silent: boolean;
            }
        }
        function once<T>(fn: (...args: any[]) => T, options?: I.OnceOptions): (...args: any[]) => T;

        namespace I {
            type WaterFallTask = (...args: any[]) => void;
        }
        function asyncWaterfall<T>(tasks: I.WaterFallTask[], callback?: (err?: Error | null, ...args: any[]) => void): void;

        function xrange(start?: number, stop?: number, step?: number): IterableIterator<number>;

        function range(start?: number, stop?: number, step?: number): number[];

        function reFindAll(regexp: RegExp, str: string): RegExpExecArray[];

        function assignDeep<T>(target: T, ...sources: object[]): T;

        namespace I {
            interface MatchPathOptions {
                index?: boolean;
                start?: number;
                end?: number;
                dot?: boolean;
            }
        }
        function matchPath(criteria: any, options?: I.MatchPathOptions): (value: any, options?: I.MatchPathOptions) => number | boolean;
        function matchPath(criteria: any, value: any, options?: I.MatchPathOptions): number | boolean;

        namespace I {
            class Sorter {
                edges: string[];

                add(item: string, deps: string | string[]): void;

                sort(): string[];

                clear(): void;
            }

            interface ToposortFunction {
                (edges: Array<[string, string]>): string[];
                array(nodes: string[], edges: Array<[string, string]>): string[];
                Sorter: typeof Sorter;
            }
        }
        const toposort: I.ToposortFunction;

        namespace I {
            interface JSEscOptions {
                escapeEverything?: boolean;
                minimal?: boolean;
                isScriptContext?: boolean;
                quotes?: string;
                wrap?: boolean;
                es6?: boolean;
                json?: boolean;
                compact?: boolean;
                lowercaseHex?: boolean;
                numbers?: string;
                indent?: string;
                indentLevel?: number;
                __inline1__?: boolean;
                __inline2__?: boolean;
            }
        }
        function jsesc(argument: any, options?: I.JSEscOptions): string;

        namespace memcpy {
            function utou(target: Buffer, targetOffset: number, source: Buffer, sourceStart: number, sourceEnd: number): number;
            function atoa(target: ArrayBuffer, targetOffset: number, source: ArrayBuffer, sourceStart: number, sourceEnd: number): number;
            function atou(target: Buffer, targetOffset: number, source: ArrayBuffer, sourceStart: number, sourceEnd: number): number;
            function utoa(target: ArrayBuffer, targetOffset: number, source: Buffer, sourceStart: number, sourceEnd: number): number;
            function copy(target: Buffer | ArrayBuffer, targetOffset: number, source: Buffer | ArrayBuffer, sourceStart: number, sourceEnd: number): number;
        }

        namespace uuid {
            namespace I {
                interface V1Options {
                    clockseq?: number;
                    msecs?: number;
                    nsecs?: number;
                }
            }
            function v1(options?: I.V1Options): string;
            function v1(options: I.V1Options, buf: any[], offset?: number): number[];

            function v3(name: string | number[], namespace: string | number[]): string;
            function v3(name: string | number[], namespace: string | number[], buf: any[], offset?: number): number[];

            function v4(options?: any): string;
            function v4(options: any, buf: any[], offset?: number): number[];

            function v5(name: string | number[], namespace: string | number[]): string;
            function v5(name: string | number[], namespace: string | number[], buf: any[], offset?: number): number[];
        }

        namespace I {
            interface Delegator {
                method(name: string): Delegator;
                access(name: string): Delegator;
                getter(name: string): Delegator;
                setter(name: string): Delegator;
            }
        }
        function delegate(object: object, property: string): I.Delegator;

        namespace iconv {
            // TODO: need to normalize source code
        }

        namespace sqlstring {
            function escapeId(val: string | string[], forbidQualified?: boolean): string;
            function dateToString(date: any, timeZone?: string): string;
            function escape(value: any, stringifyObjects?: boolean, timeZone?: string): string;
            function format(sql: string, values?: any, stringifyObjects?: boolean, timeZone?: string): string;
        }

        namespace I {
            interface EditorOptions {
                text?: string;
                editor?: string;
                path?: string;
                ext?: string;
            }
        }
        class Editor {
            static DEFAULT: string;

            constructor(options?: I.EditorOptions);

            spawn(): Promise<nodestd.child_process.ChildProcess>;

            run(): Promise<string>;

            cleanup(): Promise<void>;

            static edit(options?: I.EditorOptions): Promise<string>;
        }

        namespace I {
            interface BinarySearchFunction {
                <T>(aHaystack: T[], aNeedle: number, aLow?: number, aHigh?: number, aCompare?: (a: T, b: T) => number, aBias?: number): T;
                GREATEST_LOWER_BOUND: number;
                LEAST_UPPER_BOUND: number;
            }
        }
        const binarySearch: I.BinarySearchFunction;

        /**
         * buffer tools
         */
        namespace buffer {
            /**
             * Converts the given Buffer to ArrayBuffer
             */
            function toArrayBuffer(buf: Buffer): ArrayBuffer;

            /**
             * Returns a new buffer that represents a^b
             *
             * If the lengths are not equal, it assumes missing bytes as 0x00
             *
             * @param length length of the result buffer. max(a.length, b.length) by default
             */
            function xor(a: Buffer, b: Buffer, length?: number): Buffer;
        }

        function shebang(str: string): string | null;

        namespace I {
            interface ReInterval {
                reschedule(interval: number): void;

                clear(): void;

                destroy(): void;
            }
        }

        function reinterval(callback: (...args: any[]) => void, interval: number, args?: any[]): I.ReInterval;

        namespace throttle {
            namespace I {
                interface Options {
                    max?: number;
                    interval?: number;
                    ordered?: boolean;
                    waitForReturn?: boolean;
                    onDone?: () => void;
                    drop?: boolean;
                    dropLast?: boolean;
                }
            }
            function create<R>(fn: () => R, options?: I.Options): () => Promise<R>;
            function create<T1, R>(fn: (a: T1) => R, options?: I.Options): (a: T1) => Promise<R>;
            function create<T1, T2, R>(fn: (a: T1, b: T2) => R, options?: I.Options): (a: T1, b: T2) => Promise<R>;
            function create<T1, T2, T3, R>(fn: (a: T1, b: T2, c: T3) => R, options?: I.Options): (a: T1, b: T2, c: T3) => Promise<R>;
            function create<T1, T2, T3, T4, R>(fn: (a: T1, b: T2, c: T3, d: T4) => R, options?: I.Options): (a: T1, b: T2, c: T3, d: T4) => Promise<R>;
            function create<T1, T2, T3, T4, T5, R>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5) => R, options?: I.Options): (a: T1, b: T2, c: T3, d: T4, e: T5) => Promise<R>;
            function create<R>(fn: (...args: any[]) => R, options?: I.Options): (...args: any[]) => Promise<R>;

            class RateLimiter {
                constructor(tokensPerInterval?: number, interval?: number, fireImmediately?: boolean);

                removeTokens(count: number): Promise<number>;

                tryRemoveTokens(count: number): boolean;

                getTokensRemaining(): number;
            }

            const DROPPED: symbol;
        }

        namespace I.fakeClock {
            interface Timer {
                id: number;
                ref(): void;
                unref(): void;
            }
            interface Clock {
                setTimeout(func: (...args: any[]) => void, timeout: number, ...args: any[]): Timer;
                clearTimeout(timer: Timer): void;
                nextTick(func: (...args: any[]) => void, ...args: any[]): void;
                setInterval(func: (...args: any[]) => void, ...args: any[]): Timer;
                clearInterval(timer: Timer): void;
                setImmediate(func: (...args: any[]) => void, ...args: any[]): Timer;
                clearImmediate(timer: Timer): void;
                updateHrTime(newNow: number): void;
                tick(ms: number): number;
                next(): number;
                runAll(): number;
                runToLast(): number;
                setSystemTime(systemTime: number): void;
                hrtime(prev?: [number, number]): [number, number];
            }
            interface InstalledClock extends Clock {
                uninstall(): void;
            }
            interface InstallOptions {
                target?: object;
                now?: number;
                toFake?: string[];
                loopLimit?: number;
                shouldAdvanceTime?: boolean;
                advanceTimeDelta?: number;
            }

            interface Timers {
                setTimeout: typeof global.setTimeout;
                clearTimeout: typeof global.clearTimeout;
                setInterval: typeof global.setInterval;
                clearInterval: typeof global.clearInterval;
                setImmediate: typeof global.setImmediate;
                clearImmediate: typeof global.clearImmediate;
                Date: typeof global.Date;
                hrtime: typeof global.process.hrtime;
                nextTick: typeof global.process.nextTick;
            }

            interface FakeClock {
                timers: Timers;
                createClock(now?: number, loopLimit?: number): Clock;
                install(now?: number | Date | InstallOptions): InstalledClock;
            }
        }

        const fakeClock: I.fakeClock.FakeClock;

        namespace ltgt {
            namespace I {
                interface Range<T = any> {
                    lt?: T;
                    lte?: T;
                    gt?: T;
                    gte?: T;
                    min?: T;
                    max?: T;
                    start?: T;
                    end?: T;
                    reverse?: boolean;
                }
                type Comparator<T> = (a: T, b: T) => number;
            }
            function contains<T>(range: I.Range<T>, key: T, compare?: I.Comparator<T>): boolean;

            function filter<T>(range: I.Range<T>, compare?: I.Comparator<T>): (key: T) => boolean;

            function toLtgt<T, R>(
                range: I.Range<T>,
                _range: object,
                map?: (value: T, isUpperBound: boolean) => R,
                lowerBound?: T,
                upperBound?: T
            ): I.Range<R>;

            function endInclusive(range: I.Range): boolean;

            function startInclusive<T>(range: I.Range): boolean;

            function end<T>(range: I.Range<T>): T | undefined;

            function end<T, R>(range: I.Range<T>, defaultValue: R): T | R;

            function start<T>(range: I.Range<T>): T | undefined;

            function start<T, R>(range: I.Range<T>, defaultValue?: R): T | R;

            function upperBound<T>(range: I.Range<T>): T | undefined;

            function upperBound<T, R>(range: I.Range<T>, defaultValue: R): T | R;

            function upperBoundKey<T>(range: I.Range<T>): T | undefined;

            function upperBoundExclusive(range: I.Range): boolean;

            function lowerBoundExclusive(range: I.Range): boolean;

            function upperBoundInclusive(range: I.Range): boolean;

            function lowerBoundInclusive(range: I.Range): boolean;

            function lowerBound<T>(range: I.Range<T>): T | undefined;

            function lowerBound<T, R>(range: I.Range<T>, defaultValue: R): T | R;

            function lowerBoundKey<T>(range: I.Range<T>): T | undefined;
        }

        /**
         * Represents a log file rotator
         */
        class LogRotator {
            /**
             * @param target filepath
             */
            constructor(target: string, options?: {
                /**
                 * rotator reads file's stats with this delay
                 */
                checkInterval?: number | string,
                /**
                 * maximum size of the file that triggers rotation
                 */
                maxSize?: number | string,
                /**
                 * number of files at time
                 */
                maxFiles?: number,
                /**
                 * compress old log files with gz
                 */
                compress?: boolean
            });

            /**
             * Completes a rotate iteration
             */
            rotate(): Promise<void>;

            /**
             * Starts checking using the given interval, the first check is completed on the next tick
             */
            start(): void;

            /**
             * Stops checking
             */
            stop(): void;
        }

        namespace I {
            interface DebounceOptions {
                /**
                 * whether to invoke on the leading edge
                 */
                leading?: boolean;

                /**
                 * whether to invoke on the trailing edge, if both are true the trailing call is performed only if the function is invoked more that once during the interval
                 */
                trailing?: boolean;
            }
        }

        /**
         * Creates a function that delays invoking of the given function until after "timeout" ms
         * have elapsed since the last invoking
         */
        function debounce<R>(fn: () => R, timeout: number, options?: I.DebounceOptions): () => R;
        function debounce<T1, R>(fn: (a: T1) => R, timeout: number, options?: I.DebounceOptions): (a: T1) => R;
        function debounce<T1, T2, R>(fn: (a: T1, b: T2) => R, timeout: number, options?: I.DebounceOptions): (a: T1, b: T2) => R;
        function debounce<T1, T2, T3, R>(fn: (a: T1, b: T2, c: T3) => R, timeout: number, options?: I.DebounceOptions): (a: T1, b: T2, c: T3) => R;
        function debounce<T1, T2, T3, T4, R>(fn: (a: T1, b: T2, c: T3, d: T4) => R, timeout: number, options?: I.DebounceOptions): (a: T1, b: T2, c: T3, d: T4) => R;
        function debounce<T1, T2, T3, T4, T5, R>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5) => R, timeout: number, options?: I.DebounceOptions): (a: T1, b: T2, c: T3, d: T4, e: T5) => R;
        function debounce<R>(fn: (...args: any[]) => R, timeout: number, options?: I.DebounceOptions): (...args: any[]) => R;

        /**
         * Finds difference between the given arrays
         */
        function arrayDiff<T = any>(...arrays: T[][]): T[];

        namespace I {
            type FillRangeTransform = () => void;

            interface FillRangeOptions {
                /**
                 *  The increment to use for the range. Can be used with letters or numbers
                 */
                step?: number;

                /**
                 * By default, null is returned when an invalid range is passed.
                 * Enable this option to throw a RangeError on invalid ranges
                 *
                 * false by default
                 */
                strictRanges?: boolean;

                /**
                 * Cast all returned values to strings.
                 *
                 * By default, integers are returned as numbers.
                 */
                stringify?: boolean;

                /**
                 * Create a regex-compatible source string, instead of expanding values to an array.
                 *
                 * false by default
                 */
                toRegex?: boolean;

                /**
                 * Customize each value in the returned array (or string)
                 */
                transform?: FillRangeTransform;
            }
        }

        /**
         * Expands numbers and letters
         */
        function fillRange(from: number, to: number, options: I.FillRangeOptions & { toRegex: true }): string;
        function fillRange(from: number, to: number, options: I.FillRangeOptions & { stringify: true }): string[];
        function fillRange(from: number, to: number, options?: I.FillRangeOptions): number[];

        function fillRange(from: string, to: string, options: I.FillRangeOptions & { toRegex: true }): string;
        function fillRange(from: string, to: string, options?: I.FillRangeOptions): string[];

        function fillRange(from: string | number, to: string | number, options: I.FillRangeOptions & { toRegex: true }): string;
        function fillRange(from: string | number, to: string | number, options?: I.FillRangeOptions): Array<string | number>;

        namespace inflection {
            function singularizeWord(str: string, singular?: string): string;
            function pluralizeWord(str: string, plural?: string): string;
            function underscore(str: string, allUpperCase?: boolean): string;
        }

        function machineId(original?: boolean): Promise<string>;

        namespace I {
            interface MergeOptions {
                plainObjects?: boolean;
                allowPrototypes?: boolean;
            }
        }

        function merge(target: any, source: any, options?: I.MergeOptions): any;

        function omit(obj: any, props: ((v: string) => boolean) | string[] | string): object;

        function parseTime(val: number): number;
        function parseTime(val: any): number | null;

        function pick(obj: any, props: Iterable<any>): object;

        // pool: TODO

        namespace querystring {
            function escape(str: string): string;

            const formats: {
                RFC1738: "RFC1738"
                RFC3986: "RFC3986",
                default: string,
                formatters: {
                    RFC1738(val: string): string,
                    RFC3986(val: string): string
                }
            };

            namespace I {
                interface ParseOptions {
                    ignoreQueryPrefix?: boolean;
                    delimiter?: string;
                    depth?: number;
                    arrayLimit?: number;
                    parseArrays?: boolean;
                    decoder?: (str: string, defaultDecoder: (str: string) => string) => string;
                    allowDots?: boolean;
                    plainObjects?: boolean;
                    allowPrototypes?: boolean;
                    parameterLimit?: number;
                    strictNullHandling?: boolean;
                }

                interface StringifyOptions {
                    delimiter?: string;
                    strictNullHandling?: boolean;
                    skipNulls?: boolean;
                    encode?: boolean;
                    encoder?: (str: string) => any;
                    filter?: Array<string | number> | ((prefix: string, value: any) => any);
                    arrayFormat?: "indices" | "brackets" | "repeat";
                    indices?: boolean;
                    sort?: (a: any, b: any) => number;
                    serializeDate?: (d: Date) => string;
                    format?: "RFC1738" | "RFC3986";
                    encodeValuesOnly?: boolean;
                    addQueryPrefix?: boolean;
                    allowDots?: boolean;
                }
            }

            function parse(str: string, options?: I.ParseOptions): any;

            function stringify(obj: any, options?: I.StringifyOptions): string;

            function unescape(str: string): string;
        }

        namespace I {
            interface RegexNotOptions {
                contains?: boolean;
            }
        }

        function regexNot(pattern: string, options?: I.RegexNotOptions): RegExp;

        function repeat<T>(item: T, n: number): T[];

        // retry: TODO

        function signalNameToCode(signame: string): number;

        function splitBuffer(buf: string | Buffer, splitBuf: string | Buffer, includeDelim?: boolean): Buffer[];

        namespace I {
            type SplitStringSplitFunction = (token: {
                val: string;
                idx: number;
                arr: string[];
                str: string;
            }) => void;

            interface SplitStringOptions {
                braces?: object | boolean;
                keepEscaping?: boolean;
                keepQuotes?: boolean;
                keepDoubleQuotes?: boolean;
                keepSingleQuotes?: boolean;
                separator?: string;
                split?: SplitStringSplitFunction;
            }
        }

        function splitString(str: string): string[];
        function splitString(str: string, options: I.SplitStringOptions): string[];
        function splitString(str: string, splitter: I.SplitStringSplitFunction): string[];
        function splitString(str: string, options: I.SplitStringOptions, splitter: I.SplitStringSplitFunction): string[];

        // terraformer: TODO

        namespace I {
            interface ToRegexOptions {
                contains?: boolean;
                negate?: boolean;
                nocase?: boolean;
                flags?: string;
                cache?: boolean;
            }
        }

        function toRegex(patterns: string | string[], options?: I.ToRegexOptions): RegExp;

        namespace I {
            interface ToRegexRangeOptions {
                capture?: boolean;
                shorthand?: boolean;
                relaxZeros?: boolean;
            }
        }

        function toRegexRange(min: string | number, max: string | number, options?: I.ToRegexRangeOptions): RegExp;

        namespace xorDistance {
            function compare(a: Buffer, b: Buffer): boolean;

            function create(a: Buffer, b: Buffer): Buffer;

            function gt(a: Buffer, b: Buffer): boolean;

            function lt(a: Buffer, b: Buffer): boolean;

            function eq(a: Buffer, b: Buffer): boolean;
        }

        namespace I {
            interface BracesOptions {
                /**
                 * Generate an "expanded" brace pattern (this option is unncessary with the `.expand` method, which does the same thing).
                 *
                 * @default undefined
                 */
                expand?: boolean;

                /**
                 * Enabled by default.
                 *
                 * @default true
                 */
                optimize?: boolean;

                /**
                 * Duplicates are removed by default. To keep duplicates, pass `{nodupes: false}` on the options
                 *
                 * @default true
                 */
                nodupes?: boolean;

                /**
                 * When `braces.expand()` is used, or `options.expand` is true, brace patterns will automatically be [optimized](#optionsoptimize)
                 * when the difference between the range minimum and range maximum exceeds the `rangeLimit`.
                 * This is to prevent huge ranges from freezing your application.
                 *
                 * You can set this to any number, or change `options.rangeLimit` to `Inifinity` to disable this altogether.
                 *
                 * @default 250
                 */
                rangeLimit?: number;

                /**
                 * Customize range expansion.
                 *
                 * @default undefined
                 */
                transform?: (str: string) => string;

                /**
                 * In regular expressions, quanitifiers can be used to specify how many times a token can be repeated. For example, `a{1,3}` will match the letter `a` one to three times.
                 *
                 * Unfortunately, regex quantifiers happen to share the same syntax as [Bash lists](#lists)
                 *
                 * The `quantifiers` option tells braces to detect when [regex quantifiers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#quantifiers)
                 * are defined in the given pattern, and not to try to expand them as lists.
                 *
                 * @default undefined
                 */
                quantifiers?: boolean;

                /**
                 * Strip backslashes that were used for escaping from the result.
                 *
                 * @default undefined
                 */
                unescape?: boolean;
            }
            interface BracesFunction {
                (pattern: string, options?: BracesOptions): string[];
                expand(pattern: string, options?: BracesOptions): string[];
                MAX_LENGTH: number;
                clearCache(): void;
                resizeCache(newSize: number): void;
                getCache(): object; // TODO
                makeRe(pattern: string, options?: BracesOptions): RegExp;
            }
        }

        const braces: I.BracesFunction;

        namespace I {
            interface MatchOptions {
                /**
                 * Allow glob patterns without slashes to match a file path based on its basename. Same behavior as [minimatch](https://github.com/isaacs/minimatch) option `matchBase`.
                 *
                 * @default false
                 */
                basename?: boolean;

                /**
                 * Enabled by default, this option enforces bash-like behavior with stars immediately following a bracket expression.
                 * Bash bracket expressions are similar to regex character classes, but unlike regex, a star following a bracket expression **does not repeat the bracketed characters**.
                 * Instead, the star is treated the same as an other star.
                 *
                 * @default true
                 */
                bash?: boolean;

                /**
                 * Disable regex and function memoization.
                 *
                 * @default undefined
                 */
                cache?: boolean;

                /**
                 * Match dotfiles. Same behavior as [minimatch](https://github.com/isaacs/minimatch) option `dot`.
                 *
                 * @default false
                 */
                dot?: boolean;

                /**
                 * Similar to the `--failglob` behavior in Bash, throws an error when no matches are found.
                 *
                 * @default undefined
                 */
                failglob?: boolean;

                /**
                 * String or array of glob patterns to match files to ignore.
                 *
                 * @default undefined
                 */
                ignore?: string | string[];

                /**
                 * Alias for [options.basename](#options-basename).
                 */
                matchBase?: boolean;

                /**
                 * Disable expansion of brace patterns. Same behavior as [minimatch](https://github.com/isaacs/minimatch) option `nobrace`.
                 *
                 * @default undefined
                 */
                nobrace?: boolean;

                /**
                 * Use a case-insensitive regex for matching files. Same behavior as [minimatch](https://github.com/isaacs/minimatch).
                 *
                 * @default undefined
                 */
                nocase?: boolean;

                /**
                 * Remove duplicate elements from the result array.
                 *
                 * @default undefined
                 */
                nodupes?: boolean;

                /**
                 * Disable extglob support, so that extglobs are regarded as literal characters.
                 *
                 * @default undefined
                 */
                noext?: boolean;

                /**
                 * Disallow negation (`!`) patterns, and treat leading `!` as a literal character to match.
                 *
                 * @default undefined
                 */
                nonegate?: boolean;

                /**
                 * Disable matching with globstars (`**`).
                 *
                 * @default undefined
                 */
                noglobstar?: boolean;

                /**
                 * Alias for [options.nullglob](#options-nullglob).
                 */
                nonull?: boolean;

                /**
                 * If `true`, when no matches are found the actual (arrayified) glob pattern is returned instead of an empty array.
                 * Same behavior as [minimatch](https://github.com/isaacs/minimatch) option `nonull`.
                 *
                 * @default undefined
                 */
                nullglob?: boolean;

                /**
                 * Pass your own instance of [snapdragon](https://github.com/jonschlinkert/snapdragon), to customize parsers or compilers.
                 *
                 * @default undefined
                 */
                snapdragon?: object;

                /**
                 * Generate a source map by enabling the `sourcemap` option with the `.parse`, `.compile`, or `.create` methods.
                 *
                 * _(Note that sourcemaps are currently not enabled for brace patterns)_
                 */
                sourcemap?: boolean;

                /**
                 * Remove backslashes from returned matches.
                 *
                 * @default undefined
                 */
                unescape?: boolean;

                /**
                 * Convert path separators on returned files to posix/unix-style forward slashes.
                 *
                 * @default true
                 */
                unixify?: boolean;
            }

            interface MatchFunction {
                /**
                 * The main function takes a list of strings and one or more glob patterns to use for matching.
                 *
                 * @param list A list of strings to match
                 * @param patterns One or more glob patterns to use for matching.
                 * @param options See available options for changing how matches are performed
                 * @returns Returns an array of matches
                 */
                (list: string[], patterns: string | string[], options?: MatchOptions): string[];

                /**
                 * Similar to the main function, but `pattern` must be a string.
                 *
                 * @param list Array of strings to match
                 * @param pattern Glob pattern to use for matching.
                 * @param options See available options for changing how matches are performed
                 * @returns Returns an array of matches
                 */
                match(list: string[], pattern: string, options?: MatchOptions): string[];

                /**
                 * Returns true if the specified `string` matches the given glob `pattern`.
                 *
                 * @param string String to match
                 * @param pattern Glob pattern to use for matching.
                 * @param options See available options for changing how matches are performed
                 * @returns Returns true if the string matches the glob pattern.
                 */
                isMatch(string: string, pattern: string, options?: MatchOptions): boolean;

                /**
                 * Returns true if some of the strings in the given `list` match any of the given glob `patterns`.
                 *
                 * @param list The string or array of strings to test. Returns as soon as the first match is found.
                 * @param patterns One or more glob patterns to use for matching.
                 * @param options See available options for changing how matches are performed
                 * @returns Returns true if any patterns match `str`
                 */
                some(list: string | string[], patterns: string | string[], options?: MatchOptions): boolean;

                /**
                 * Returns true if every string in the given `list` matches any of the given glob `patterns`.
                 *
                 * @param list The string or array of strings to test.
                 * @param patterns One or more glob patterns to use for matching.
                 * @param options See available options for changing how matches are performed
                 * @returns Returns true if any patterns match `str`
                 */
                every(list: string | string[], patterns: string | string[], options?: MatchOptions): boolean;

                /**
                 * Returns true if **any** of the given glob `patterns` match the specified `string`.
                 *
                 * @param str The string to test.
                 * @param patterns One or more glob patterns to use for matching.
                 * @param options See available options for changing how matches are performed
                 * @returns Returns true if any patterns match `str`
                 */
                any(str: string | string[], patterns: string | string[], options?: MatchOptions): boolean;

                /**
                 * Returns true if **all** of the given `patterns` match the specified string.
                 *
                 * @param str The string to test.
                 * @param patterns One or more glob patterns to use for matching.
                 * @param options See available options for changing how matches are performed
                 * @returns Returns true if any patterns match `str`
                 */
                all(str: string | string[], patterns: string | string[], options?: MatchOptions): boolean;

                /**
                 * Returns a list of strings that _**do not match any**_ of the given `patterns`.
                 *
                 * @param list Array of strings to match.
                 * @param patterns One or more glob pattern to use for matching.
                 * @param options See available options for changing how matches are performed
                 * @returns Returns an array of strings that **do not match** the given patterns.
                 */
                not(list: string[], patterns: string | string[], options?: MatchOptions): string[];

                /**
                 * Returns true if the given `string` contains the given pattern. Similar to [.isMatch](#isMatch) but the pattern can match any part of the string.
                 *
                 * @param str The string to match.
                 * @param patterns Glob pattern to use for matching.
                 * @param options See available options for changing how matches are performed
                 * @returns Returns true if the patter matches any part of `str`.
                 */
                contains(str: string, patterns: string | string[], options?: MatchOptions): boolean;

                /**
                 * Filter the keys of the given object with the given `glob` pattern and `options`. Does not attempt to match nested keys.
                 * If you need this feature, use [glob-object](https://github.com/jonschlinkert/glob-object) instead.
                 *
                 * @param object The object with keys to filter.
                 * @param patterns One or more glob patterns to use for matching.
                 * @param options See available options for changing how matches are performed
                 * @returns Returns an object with only keys that match the given patterns.
                 */
                matchKeys<T>(object: T, patterns: string | string[], options?: MatchOptions): Partial<T>;

                /**
                 * Returns a memoized matcher function from the given glob `pattern` and `options`.
                 * The returned function takes a string to match as its only argument and returns true if the string is a match.
                 *
                 * @param pattern Glob pattern
                 * @param options See available options for changing how matches are performed.
                 * @returns Returns a matcher function.
                 */
                matcher(pattern: string | string[], options?: MatchOptions): (str: string) => boolean;

                /**
                 * Returns an array of matches captured by `pattern` in `string, or`null` if the pattern did not match.
                 *
                 * @param pattern Glob pattern to use for matching.
                 * @param string String to match
                 * @param options See available options for changing how matches are performed
                 * @returns Returns an array of captures if the string matches the glob pattern, otherwise `null`.
                 */
                capture(pattern: string, string: string, options?: MatchOptions): string[] | null;

                /**
                 * Create a regular expression from the given glob `pattern`.
                 *
                 * @param pattern A glob pattern to convert to regex.
                 * @param options See available options for changing how matches are performed.
                 * @returns Returns a regex created from the given pattern.
                 */
                makeRe(pattern: string, options?: MatchOptions): RegExp;

                /**
                 * Expand the given brace `pattern`.
                 *
                 * @param pattern String with brace pattern to expand.
                 * @param options Any options to change how expansion is performed. See the [braces](https://github.com/micromatch/braces) library for all available options.
                 */
                braces(pattern: string, options?: MatchOptions): string[];

                /**
                 * Parses the given glob `pattern` and returns an array of abstract syntax trees (ASTs), with the compiled `output` and optional source `map` on each AST.
                 *
                 * @param pattern Glob pattern to parse and compile.
                 * @param options Any options to change how parsing and compiling is performed.
                 * @returns Returns an object with the parsed AST, compiled string and optional source map.
                 */
                create(pattern: string, options?: MatchOptions): object;

                /**
                 * Parse the given `str` with the given `options`.
                 *
                 * @returns Returns an AST
                 */
                parse(str: string, options?: MatchOptions): object;

                /**
                 * Compile the given `ast` or string with the given `options`.
                 *
                 * @returns Returns an object that has an `output` property with the compiled string.
                 */
                compile(ast: object | string, options?: MatchOptions): object;

                MAX_LENGTH: number;

                clearCache(): void;

                resizeCache(newSize: number): void;

                getCache(): object; // TODO
            }
        }

        const match: I.MatchFunction;
    }
}
