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

        function mapArguments(argmap: (...args: any[]) => any): (...args: any[]) => any;
        function mapArguments(argmap: number): <T>(...args: T[]) => T[];
        function mapArguments(...args: any[]): <T>(x: T) => T;

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

        function functionParams(func: (...args: any[]) => any): string[];

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

        namespace I {
            interface ByResult<S, T, R> {
                (a: S, b: S): R;
                compare(a: T, b: T): R;
                by(a: S): T;
            }
        }
        function by<S, T, R>(by: (a: S) => T, compare?: (a: T, b: T) => R): I.ByResult<S, T, R>;

        function toFastProperties(object: object): object;

        function stripBom(x: string): string;

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
                deep?: boolean;
            }
        }
        function clone(object: object, options?: I.CloneOptions): object;

        function toUTF8Array(str: string): number[];

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
            interface MatchOptions {
                index?: boolean;
                start?: number;
                end?: number;
                dot?: boolean;
            }
        }
        function match(criteria: any, options?: I.MatchOptions): (value: any, options?: I.MatchOptions) => number | boolean;
        function match(criteria: any, value: any, options?: I.MatchOptions): number | boolean;

        namespace I {
            interface ToposortFunction {
                <T>(edges: Array<[T, T]>): T[];
                array<T>(nodes: T[], edges: Array<[T, T]>): T[];
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

        namespace I {
            type PossibleTypes = "object" | "class" | "null" | "global" | "Array" | "RegExp" | "Date"
                | "Promise" | "Set" | "Map" | "WeakSet" | "DataView" | "Map Iterator" | "Set Iterator"
                | "Array Iterator" | "String Iterator" | "Object" | "function" | "boolean" | "number"
                | "undefined" | "string" | "symbol";
        }

        function typeOf(obj: any): I.PossibleTypes;
        function typeOf(obj: any): string;

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

            function v4(options?: any): string;
            function v4(options: any, buf: any[], offset?: number): number[];

            function v3(name: string | number[], namespace: string | number[]): string;
            function v3(name: string | number[], namespace: string | number[], buf: any[], offset?: number): number[];

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

        namespace I {
            interface GlobExpOptions {
                nocomment?: boolean;
                nonegate?: boolean;
                nobrace?: boolean;
                noglobstar?: boolean;
                nocase?: boolean;
                dot?: boolean;
                noext?: boolean;
                matchBase?: boolean;
                flipNegate?: boolean;
            }
        }

        class GlobExp {
            constructor(pattern: string, options?: I.GlobExpOptions);

            hasMagic(): boolean;

            static hasMagic(pattern: string, options?: I.GlobExpOptions): boolean;

            expandBraces(): string[];

            static expandBraces(pattern: string, options?: I.GlobExpOptions): string[];

            makeRe(): RegExp;

            static makeRe(pattern: string, options?: I.GlobExpOptions): RegExp;

            static test(p: string, pattern: string, options?: I.GlobExpOptions): boolean;

            test(p: string): boolean;
        }

        namespace iconv {
            // TODO: need to normalize source code
        }

        namespace sqlstring {
            function escapeId(val: string | string[], forbidQualified?: boolean): string;
            function dateToString(date: any, timeZone?: string): string;
            function arrayToList(array: any[]): string;
            function bufferToString(buffer: Buffer): string;
            function objectToValues(object: object, timeZone?: string): string;
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

        namespace buffer {
            function concat(list: Buffer[], totalLength: number): Buffer;
            function mask(buffer: Buffer, mask: Buffer, output: Buffer, offset: number, length: number): void;
            function unmask(buffer: Buffer, mask: Buffer): void;
        }

        function shebang(str: string): string | null;

        class ReInterval {
            constructor(callback: (...args: any[]) => void, interval: number, args?: any[]);

            reschedule(interval: number): void;

            clear(): void;

            destroy(): void;
        }

        class RateLimiter {
            constructor(tokensPerInterval?: number, interval?: number, fireImmediately?: boolean);

            removeTokens(count: number): Promise<number>;

            tryRemoveTokens(count: number): boolean;

            getTokensRemaining(): number;
        }

        namespace I {
            interface ThrottleOptions {
                max?: number;
                interval?: number;
                ordered?: boolean;
                waitForReturn?: boolean;
            }
        }
        function throttle<R>(fn: () => R, options?: I.ThrottleOptions): () => Promise<R>;
        function throttle<T1, R>(fn: (a: T1) => R, options?: I.ThrottleOptions): (a: T1) => Promise<R>;
        function throttle<T1, T2, R>(fn: (a: T1, b: T2) => R, options?: I.ThrottleOptions): (a: T1, b: T2) => Promise<R>;
        function throttle<T1, T2, T3, R>(fn: (a: T1, b: T2, c: T3) => R, options?: I.ThrottleOptions): (a: T1, b: T2, c: T3) => Promise<R>;
        function throttle<T1, T2, T3, T4, R>(fn: (a: T1, b: T2, c: T3, d: T4) => R, options?: I.ThrottleOptions): (a: T1, b: T2, c: T3, d: T4) => Promise<R>;
        function throttle<T1, T2, T3, T4, T5, R>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5) => R, options?: I.ThrottleOptions): (a: T1, b: T2, c: T3, d: T4, e: T5) => Promise<R>;
        function throttle<R>(fn: (...args: any[]) => R, options?: I.ThrottleOptions): (...args: any[]) => Promise<R>;

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
         * Utils for uid/gid
         */
        namespace userid {
            /**
             * Returns uid by the given username
             */
            function uid(username: string): { uid: number, gid: number };

            /**
             * Returns gid by the given groupname
             */
            function gid(groupname: string): number;

            /**
             * Returns username by the given uid
             */
            function username(uid: number): string;

            /**
             * Returns groupname by the given gid
             */
            function groupname(gid: number): string;

            /**
             * Returns gids the given user belongs
             */
            function gids(username: string): number[];
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
    }
}
