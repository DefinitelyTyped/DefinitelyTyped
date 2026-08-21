/** Finds all instances of a specified executable in the PATH environment variable */

type AppendNullIfNothrow<TOptions, TRet> = TOptions extends { nothrow: infer TVal }
    // nothrow is specified
    ? TVal extends false
        // TVal is false
        ? TRet
        // TVal is boolean or true
    : TRet | null
    // nothrow not specified
    : TRet;

type TransformToArrayIfAll<TOptions, TRet> = TOptions extends { all: infer TVal }
    // all is specified
    ? TVal extends true
        // TVal is true
        ? readonly TRet[]
    : TVal extends false
        // TVal is false
        ? TRet
        // TVal is boolean
    : readonly TRet[] | TRet
    // all not specified
    : TRet;

type ReturnType<TOptions> = AppendNullIfNothrow<TOptions, TransformToArrayIfAll<TOptions, string>>;

type Exact<T, U extends T> = {
    [Key in keyof U]: Key extends keyof T ? U[Key]
        : never;
};

declare function which<TOptions extends which.Options>(
    cmd: string,
    options?: Exact<which.Options, TOptions>,
): Promise<ReturnType<Exact<which.Options, TOptions>>>;

declare namespace which {
    /** Finds all instances of a specified executable in the PATH environment variable */
    function sync<TOptions extends Options>(
        cmd: string,
        options?: Exact<Options, TOptions>,
    ): ReturnType<Exact<Options, TOptions>>;

    /** Options for which() API */
    interface Options {
        /** If true, return all matches, instead of just the first one. Note that this means the function returns an array of strings instead of a single string. */
        all?: boolean | undefined;
        /** Use instead of the PATH environment variable. */
        path?: string | undefined;
        /** Use instead of the PATHEXT environment variable. */
        pathExt?: string | undefined;
        /** Use instead of the platform's native path separator. */
        delimiter?: string | undefined;
        /** If true, returns null when not found */
        nothrow?: boolean | undefined;
    }
}

export = which;
