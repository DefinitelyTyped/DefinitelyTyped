// Node.js ESNEXT support
interface String {
    /** Removes whitespace from the left end of a string. */
    trimLeft(): string;
    /** Removes whitespace from the right end of a string. */
    trimRight(): string;

    /** Returns a copy with leading whitespace removed. */
    trimStart(): string;
    /** Returns a copy with trailing whitespace removed. */
    trimEnd(): string;
}

interface ImportMeta {
    url: string;
}

/*-----------------------------------------------*
 *                                               *
 *                   GLOBAL                      *
 *                                               *
 ------------------------------------------------*/

// For backwards compability
interface NodeRequire extends NodeJS.Require {}
interface RequireResolve extends NodeJS.RequireResolve {}
interface NodeModule extends NodeJS.Module {}

declare var process: NodeJS.Process;
declare var console: Console;

declare var __filename: string;
declare var __dirname: string;

declare function queueMicrotask(callback: () => void): void;

declare var require: NodeRequire;
declare var module: NodeModule;

// Same as module.exports
declare var exports: any;

/*----------------------------------------------*
*                                               *
*               GLOBAL INTERFACES               *
*                                               *
*-----------------------------------------------*/
declare namespace NodeJS {
    interface InspectOptions {
        /**
         * If set to `true`, getters are going to be
         * inspected as well. If set to `'get'` only getters without setter are going
         * to be inspected. If set to `'set'` only getters having a corresponding
         * setter are going to be inspected. This might cause side effects depending on
         * the getter function.
         * @default `false`
         */
        getters?: 'get' | 'set' | boolean;
        showHidden?: boolean;
        /**
         * @default 2
         */
        depth?: number | null;
        colors?: boolean;
        customInspect?: boolean;
        showProxy?: boolean;
        maxArrayLength?: number | null;
        /**
         * Specifies the maximum number of characters to
         * include when formatting. Set to `null` or `Infinity` to show all elements.
         * Set to `0` or negative to show no characters.
         * @default Infinity
         */
        maxStringLength?: number | null;
        breakLength?: number;
        /**
         * Setting this to `false` causes each object key
         * to be displayed on a new line. It will also add new lines to text that is
         * longer than `breakLength`. If set to a number, the most `n` inner elements
         * are united on a single line as long as all properties fit into
         * `breakLength`. Short array elements are also grouped together. Note that no
         * text will be reduced below 16 characters, no matter the `breakLength` size.
         * For more information, see the example below.
         * @default `true`
         */
        compact?: boolean | number;
        sorted?: boolean | ((a: string, b: string) => number);
    }

    interface Global {
        Array: typeof Array;
        ArrayBuffer: typeof ArrayBuffer;
        Boolean: typeof Boolean;
        DataView: typeof DataView;
        Date: typeof Date;
        Float32Array: typeof Float32Array;
        Float64Array: typeof Float64Array;
        Function: typeof Function;
        Infinity: typeof Infinity;
        Int16Array: typeof Int16Array;
        Int32Array: typeof Int32Array;
        Int8Array: typeof Int8Array;
        Intl: typeof Intl;
        JSON: typeof JSON;
        Map: MapConstructor;
        Math: typeof Math;
        NaN: typeof NaN;
        Number: typeof Number;
        Object: typeof Object;
        Promise: typeof Promise;
        RegExp: typeof RegExp;
        Set: SetConstructor;
        String: typeof String;
        Symbol: Function;
        Uint16Array: typeof Uint16Array;
        Uint32Array: typeof Uint32Array;
        Uint8Array: typeof Uint8Array;
        Uint8ClampedArray: typeof Uint8ClampedArray;
        WeakMap: WeakMapConstructor;
        WeakSet: WeakSetConstructor;
        decodeURI: typeof decodeURI;
        decodeURIComponent: typeof decodeURIComponent;
        encodeURI: typeof encodeURI;
        encodeURIComponent: typeof encodeURIComponent;
        escape: (str: string) => string;
        eval: typeof eval;
        global: Global;
        isFinite: typeof isFinite;
        isNaN: typeof isNaN;
        parseFloat: typeof parseFloat;
        parseInt: typeof parseInt;
        queueMicrotask: typeof queueMicrotask;
        undefined: typeof undefined;
        unescape: (str: string) => string;
        gc?: () => void;
        v8debug?: any;
    }

    type TypedArray =
        | Uint8Array
        | Uint8ClampedArray
        | Uint16Array
        | Uint32Array
        | Int8Array
        | Int16Array
        | Int32Array
        | BigUint64Array
        | BigInt64Array
        | Float32Array
        | Float64Array;
    type ArrayBufferView = TypedArray | DataView;

    interface Require {
        (id: string): any;
        resolve: RequireResolve;
        cache: Dict<NodeModule>;
        /**
         * @deprecated
         */
        extensions: RequireExtensions;
        main: Module | undefined;
    }

    interface RequireResolve {
        (id: string, options?: { paths?: string[]; }): string;
        paths(request: string): string[] | null;
    }

    interface RequireExtensions extends Dict<(m: Module, filename: string) => any> {
        '.js': (m: Module, filename: string) => any;
        '.json': (m: Module, filename: string) => any;
        '.node': (m: Module, filename: string) => any;
    }
    interface Module {
        exports: any;
        require: Require;
        id: string;
        filename: string;
        loaded: boolean;
        /** @deprecated since 14.6.0 Please use `require.main` and `module.children` instead. */
        parent: Module | null | undefined;
        children: Module[];
        /**
         * @since 11.14.0
         *
         * The directory name of the module. This is usually the same as the path.dirname() of the module.id.
         */
        path: string;
        paths: string[];
    }

    interface Dict<T> {
        [key: string]: T | undefined;
    }

    interface ReadOnlyDict<T> {
        readonly [key: string]: T | undefined;
    }
}
