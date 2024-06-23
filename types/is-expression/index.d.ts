import acorn = require("acorn");

type Options = acorn.Options & {
    /**
     * Throw an error if the string is not an expression.
     * The error can be an Acorn error, with location information in `err.loc` and `err.pos`. Defaults to `false`.
     */
    throw: boolean;
    /**
     * Use strict mode when trying to parse the string. Defaults to `false`.
     * Even if this option is `false`, if you have provided `options.sourceType === 'module'`
     * which imples strict mode under ES2015, strict mode will be used.
     */
    strict: boolean;
    /**
     * When `true`, allows line comments in the expression. Defaults to `false` for safety.
     */
    lineComment: boolean;
};

/**
 * Validates a string as a JavaScript expression.
 */
declare function isExpression(src: string, options?: Partial<Options>): boolean;

export = isExpression;
