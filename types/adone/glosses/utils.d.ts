declare namespace adone.util {
    function arrify<T>(val: T[]): T[];
    function arrify<T>(val: T): [T];
    function slice<T>(args: T[], sliceStart?: number, sliceEnd?: number): T[];
    function spliceOne(list: any[], index: number): void;
    function normalizePath(str: string, stripTrailing?: boolean): string;
    function unixifyPath(filePath: string, unescape?: boolean): string;
    function functionName(fn: (...args: any[]) => any): string;
    function mapArguments(argmap: (...args: any[]) => any | any[]): (...args: any[]) => any;
    function mapArguments(argmap: number): <T>(...args: T[]) => T[];
    function mapArguments(...args: any[]): <T>(x: T) => T;
    interface ParseMsResult {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
        milliseconds: number;
    }
    function parseMs(ms: number): ParseMsResult;
    function pluralizeWord(str: string, plural?: string, count?: number): string;
    function functionParams(func: (...args: any[]) => any): string[];
    function randomChoice<T>(arrayLike: ArrayLike<T>, from?: number, to?: number): T;
    function shuffleArray<T>(array: T[]): T[];
    function enumerate<T>(iterable: Iterable<T>, start?: number): IterableIterator<[number, T]>;
    function zip<T1, T2>(a: Iterable<T1>, b: Iterable<T2>): IterableIterator<[T1, T2]>;
    function zip<T1, T2, T3>(a: Iterable<T1>, b: Iterable<T2>, c: Iterable<T3>): IterableIterator<[T1, T2, T3]>;
    function zip<T1, T2, T3, T4>(a: Iterable<T1>, b: Iterable<T2>, c: Iterable<T3>, d: Iterable<T4>): IterableIterator<[T1, T2, T3, T4]>;
    function zip(...iterables: Array<Iterable<any>>): IterableIterator<any[]>;
    interface KeysOptions {
        onlyEnumerable?: boolean;
        followProto?: boolean;
        all?: boolean;
    }
    function keys(object: object, options?: KeysOptions): string[];
    function values(object: object, options?: KeysOptions): any[];
    function entries(object: object, options?: KeysOptions): Array<string | any>;
    function toDotNotation(object: object): object;
    interface FlattenOptions {
        depth?: number;
    }
    function flatten(array: any[], options?: FlattenOptions): any[];
    function globParent(str: string): string;
    interface ByResult<S, T, R> {
        (a: S, b: S): R;
        compare(a: T, b: T): R;
        by(a: S): T;
    }
    function by<S, T, R>(by: (a: S) => T, compare?: (a: T, b: T) => R): ByResult<S, T, R>;
    function toFastProperties(object: object): object;
    function stripBom(x: string): string;
    interface SortKeysOptions {
        deep?: boolean;
        compare?(a: any, b: any): number;
    }
    function sortKeys(object: object, options?: SortKeysOptions): object;
    interface GlobizeOptions {
        exts?: string;
        recursively?: boolean;
    }
    function globize(path: string, options?: GlobizeOptions): string;
    function unique<T>(array: T[], projection?: (a: T) => any): T[];
    function invertObject(source: object, options?: KeysOptions): object;
    interface HumanizeTimeOptions {
        msDecimalDigits?: number;
        secDecimalDigits?: number;
        verbose?: boolean;
        compact?: boolean;
    }
    function humanizeTime(ms: number, options?: HumanizeTimeOptions): string;
    function humanizeSize(num: number, space?: string): string;
    function parseSize(str: string | number): number | null;
    interface CloneOptions {
        deep?: boolean;
    }
    function clone(object: object, options?: CloneOptions): object;
    function toUTF8Array(str: string): number[];
    function asyncIter<T>(array: T[], iter: (elem: T, index: number, cb: () => void) => any, cb: () => void): void;
    function asyncFor<T>(obj: { [key: string]: T }, iter: (key: string, value: T, index: number, length: number, next: () => void) => void, cb: () => void): void;
    interface OnceOptions {
        silent: boolean;
    }
    function once<T>(fn: (...args: any[]) => T, options?: OnceOptions): (...args: any[]) => T;
    type WaterFallTask = (...args: any[]) => void;
    function asyncWaterfall<T>(tasks: WaterFallTask[], callback?: (err?: Error | null, ...args: any[]) => void): void;
    function xrange(start?: number, stop?: number, step?: number): IterableIterator<number>;
    function range(start?: number, stop?: number, step?: number): number[];
    function reFindAll(regexp: RegExp, str: string): RegExpExecArray[];
    function assignDeep<T>(target: T, ...sources: object[]): T;
    interface MatchOptions {
        index?: boolean;
        start?: number;
        end?: number;
        dot?: boolean;
    }
    function match(criteria: any | any[], options?: MatchOptions): (value: any | any[], options?: MatchOptions) => number | boolean;
    function match(criteria: any | any[], value: any | any[], options?: MatchOptions): number | boolean;
    function toposort(array: any[]): any[]; // TODO
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
    function jsesc(argument: any, options?: JSEscOptions): string;
    function typeOf(obj: any): string;
    namespace memcpy {
        function utou(target: Buffer, targetOffset: number, source: Buffer, sourceStart: number, sourceEnd: number): number;
        function atoa(target: ArrayBuffer, targetOffset: number, source: ArrayBuffer, sourceStart: number, sourceEnd: number): number;
        function atou(target: Buffer, targetOffset: number, source: ArrayBuffer, sourceStart: number, sourceEnd: number): number;
        function utoa(target: ArrayBuffer, targetOffset: number, source: Buffer, sourceStart: number, sourceEnd: number): number;
        function copy(target: Buffer | ArrayBuffer, targetOffset: number, source: Buffer | ArrayBuffer, sourceStart: number, sourceEnd: number): number;
    }
    namespace uuid {
        interface V1Options {
            clockseq?: number;
            msecs?: number;
            nsecs?: number;
        }
        function v1(options?: V1Options): string;
        function v1(options: V1Options, buf: any[], offset?: number): number[];

        function v4(options?: any): string;
        function v4(options: any, buf: any[], offset?: number): number[];

        function v5(name: string | number[], namespace: string | number[]): string;
        function v5(name: string | number[], namespace: string | number[], buf: any[], offset?: number): number[];
    }

    interface Delegator {
        method(name: string): Delegator;
        access(name: string): Delegator;
        getter(name: string): Delegator;
        setter(name: string): Delegator;
    }
    function delegate(object: object, property: string): Delegator;

    class GlobExp {
        constructor(pattern: string, options?: any); // TODO GlobExpOptions

        hasMagic(): boolean;

        static hasMagic(pattern: string, options?: any): boolean;

        expandBraces(): string[];

        static expandBraces(pattern: string, options?: any): string[];

        makeRe(): RegExp;

        static makeRe(pattern: string, options?: any): RegExp;

        static test(p: string, pattern: string, options?: any): boolean;

        test(p: string): boolean;
    }
    namespace iconv {
        // TODO
    }
    namespace sqlstring {
        function escapeId(val: string | string[], forbidQualified?: boolean): string;
        function dateToString(date: any, timeZone?: string): string;
        function arrayToList(array: any[]): string;
        function bufferToString(buffer: Buffer): string;
        function objectToValues(object: object, timeZone?: string): string;
        function escape(value: any, stringifyObjects?: boolean, timeZone?: string): string;
        function format(sql: string, values?: any | any[], stringifyObjects?: boolean, timeZone?: string): string;
    }
    interface EditorOptions {
        text?: string;
        editor?: string;
        path?: string;
        ext?: string;
    }
    class Editor {
        static DEFAULT: string;

        constructor(options?: EditorOptions);

        spawn(): Promise<adone.std.child_process.ChildProcess>;

        run(): Promise<string>;

        cleanup(): Promise<void>;

        static edit(options?: EditorOptions): Promise<string>;
    }

    interface BinarySearch {
        <T>(aHaystack: T[], aNeedle: number, aLow?: number, aHigh?: number, aCompare?: (a: T, b: T) => number, aBias?: number): T;
        GREATEST_LOWER_BOUND: number;
        LEAST_UPPER_BOUND: number;
    }
    const binarySearch: BinarySearch;
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
    interface ThrottleOptions {
        max?: number;
        interval?: number;
        ordered?: boolean;
        waitForReturn?: boolean;
    }
    function throttle<R>(fn: () => R, options?: ThrottleOptions): () => Promise<R>;
    function throttle<T1, R>(fn: (a: T1) => R, options?: ThrottleOptions): (a: T1) => Promise<R>;
    function throttle<T1, T2, R>(fn: (a: T1, b: T2) => R, options?: ThrottleOptions): (a: T1, b: T2) => Promise<R>;
    function throttle<T1, T2, T3, R>(fn: (a: T1, b: T2, c: T3) => R, options?: ThrottleOptions): (a: T1, b: T2, c: T3) => Promise<R>;
    function throttle<T1, T2, T3, T4, R>(fn: (a: T1, b: T2, c: T3, d: T4) => R, options?: ThrottleOptions): (a: T1, b: T2, c: T3, d: T4) => Promise<R>;
    function throttle<T1, T2, T3, T4, T5, R>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5) => R, options?: ThrottleOptions): (a: T1, b: T2, c: T3, d: T4, e: T5) => Promise<R>;
    function throttle<R>(fn: (...args: any[]) => R, options?: ThrottleOptions): (...args: any[]) => Promise<R>;
    // TODO fakeClock, ltgt
}
