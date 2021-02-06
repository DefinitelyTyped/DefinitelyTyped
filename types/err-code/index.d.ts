// Type definitions for err-code 2.0
// Project: https://github.com/IndigoUnited/js-err-code#readme
// Definitions by: George <https://github.com/zorji>
//                 Cayman <https://github.com/wemeetagain>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.2

type Scalar = number | string | boolean | bigint | null | undefined;

declare function createError<Props extends object = object, Err extends Error = Error>(
    error: Err,
    props?: Props,
): Err & Props;

declare function createError<Code extends Scalar = Scalar, Props extends object = object, Err extends Error = Error>(
    error: Err,
    code: Code,
    props?: Props,
): Err & Props & { code: NonNullable<Code> };

declare namespace createError {
}

export = createError;
