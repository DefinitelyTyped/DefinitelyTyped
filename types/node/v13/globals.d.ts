declare global {
    interface SymbolConstructor {}

    // Forward-declarations for needed types from es2015 and later (in case users are using `--lib es5`)
    // Empty interfaces are used here which merge fine with the real declarations in the lib XXX files
    // just to ensure the names are known and node typings can be used without importing these libs.
    // if someone really needs these types the libs need to be added via --lib or in tsconfig.json
    interface MapConstructor { }
    interface WeakMapConstructor { }
    interface SetConstructor { }
    interface WeakSetConstructor { }

    interface PromiseConstructor {}
}

export interface ErrnoException extends NodeJS.ErrnoException {}

declare global {
    // Declare "static" methods in Error
    interface ErrorConstructor {
        /** Create .stack property on a target object */
        captureStackTrace(targetObject: object, constructorOpt?: Function): void;

        /**
         * Optional override for formatting stack traces
         *
         * @see https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces
         */
        prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;

        stackTraceLimit: number;
    }

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

    var __filename: string;
    var __dirname: string;

    function queueMicrotask(callback: () => void): void;

    /*----------------------------------------------*
    *                                               *
    *               GLOBAL INTERFACES               *
    *                                               *
    *-----------------------------------------------*/
    namespace NodeJS {
        interface CallSite {
            /**
             * Value of "this"
             */
            getThis(): any;

            /**
             * Type of "this" as a string.
             * This is the name of the function stored in the constructor field of
             * "this", if available.  Otherwise the object's [[Class]] internal
             * property.
             */
            getTypeName(): string | null;

            /**
             * Current function
             */
            getFunction(): Function | undefined;

            /**
             * Name of the current function, typically its name property.
             * If a name property is not available an attempt will be made to try
             * to infer a name from the function's context.
             */
            getFunctionName(): string | null;

            /**
             * Name of the property [of "this" or one of its prototypes] that holds
             * the current function
             */
            getMethodName(): string | null;

            /**
             * Name of the script [if this function was defined in a script]
             */
            getFileName(): string | null;

            /**
             * Current line number [if this function was defined in a script]
             */
            getLineNumber(): number | null;

            /**
             * Current column number [if this function was defined in a script]
             */
            getColumnNumber(): number | null;

            /**
             * A call site object representing the location where eval was called
             * [if this function was created using a call to eval]
             */
            getEvalOrigin(): string | undefined;

            /**
             * Is this a toplevel invocation, that is, is "this" the global object?
             */
            isToplevel(): boolean;

            /**
             * Does this call take place in code defined by a call to eval?
             */
            isEval(): boolean;

            /**
             * Is this call in native V8 code?
             */
            isNative(): boolean;

            /**
             * Is this a constructor call?
             */
            isConstructor(): boolean;
        }

        interface ErrnoException extends Error {
            errno?: number;
            code?: string;
            path?: string;
            syscall?: string;
            stack?: string;
        }

        interface Global {
            Array: typeof Array;
            ArrayBuffer: typeof ArrayBuffer;
            Boolean: typeof Boolean;
            DataView: typeof DataView;
            Date: typeof Date;
            Error: typeof Error;
            EvalError: typeof EvalError;
            Float32Array: typeof Float32Array;
            Float64Array: typeof Float64Array;
            Function: typeof Function;
            GLOBAL: Global;
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
            Promise: PromiseConstructor;
            RangeError: typeof RangeError;
            ReferenceError: typeof ReferenceError;
            RegExp: typeof RegExp;
            Set: SetConstructor;
            String: typeof String;
            Symbol: SymbolConstructor;
            SyntaxError: typeof SyntaxError;
            TypeError: typeof TypeError;
            URIError: typeof URIError;
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
            /**
             * @deprecated Use `global`.
             */
            root: Global;
            queueMicrotask: typeof queueMicrotask;
            undefined: typeof undefined;
            unescape: (str: string) => string;
            gc: () => void;
            v8debug?: any;
        }

        interface Dict<T> {
            [key: string]: T | undefined;
        }

        interface ReadOnlyDict<T> {
            readonly [key: string]: T | undefined;
        }
    }
}
