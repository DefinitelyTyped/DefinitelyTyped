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

declare namespace NodeJS {
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
        /**
         * If present, the address to which a network connection failed
         */
        address?: string;
        /**
         * The system-provided error number
         */
        errno?: number;
        /**
         * The string error code
         */
        code?: string;
        /**
         * If present, extra details about the error condition
         */
        info?: object;
        /**
         * If present, the file path when reporting a file system error
         */
        path?: string;
        /**
         * If present, the network connection port that is not available
         */
        port?: number;
        /**
         * The name of the system call that triggered the error
         */
        syscall?: string;
        stack?: string;
    }

    interface Global {
        Error: typeof Error;
        EvalError: typeof EvalError;
        RangeError: typeof RangeError;
        ReferenceError: typeof ReferenceError;
        SyntaxError: typeof SyntaxError;
        TypeError: typeof TypeError;
        URIError: typeof URIError;
    }
}
