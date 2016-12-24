// Type definitions for verror v1.9.0
// Project: https://github.com/davepacheco/node-verror
// Definitions by: Sven Reglitzki <https://github.com/svi3c/>, Maxime Toumi-M <https://github.com/max4t/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


type VErrorInfo = { [key: string]: any };

declare interface VErrorOptions {
    cause?: Error | null | undefined;
    name?: string;
    strict?: boolean;
    constructorOpt?: Function;
    info?: VErrorInfo;
}

/*
 * VError([cause], fmt[, arg...]): Like JavaScript's built-in Error class, but
 * supports a "cause" argument (another error) and a printf-style message.  The
 * cause argument can be null or omitted entirely.
 *
 * Examples:
 *
 * CODE                                    MESSAGE
 * new VError('something bad happened')    "something bad happened"
 * new VError('missing file: "%s"', file)  "missing file: "/etc/passwd"
 *   with file = '/etc/passwd'
 * new VError(err, 'open failed')          "open failed: file not found"
 *   with err.message = 'file not found'
 */
declare class VError extends Error {
    static VError: typeof VError;
    static SError: typeof SError;
    static MultiError: typeof MultiError;
    static WError: typeof WError;

    static cause(err: Error): Error | null;
    static info(err: Error): VErrorInfo;
    static findCauseByName(err: Error, name: string): Error | null;
    static fullStack(err: Error): string;

    cause(): Error | undefined;
    constructor(options: VErrorOptions, message: string, ...params: any[]);
    constructor(cause: Error, message: string, ...params: any[]);
    constructor(message: string, ...params: any[]);
}

/*
 * SError is like VError, but stricter about types.  You cannot pass "null" or
 * "undefined" as string arguments to the formatter.  Since SError is only a
 * different function, not really a different class, we don't set
 * SError.prototype.name.
 */
declare class SError extends VError {
}

/*
 * Represents a collection of errors for the purpose of consumers that generally
 * only deal with one error.  Callers can extract the individual errors
 * contained in this object, but may also just treat it as a normal single
 * error, in which case a summary message will be printed.
 */
declare class MultiError extends VError {
    constructor(errors: Error[]);
    errors(): Error[];
}

/*
 * Like JavaScript's built-in Error class, but supports a "cause" argument which
 * is wrapped, not "folded in" as with VError.	Accepts a printf-style message.
 * The cause argument can be null.
 */
declare class WError extends VError {
}

export = VError;
