declare namespace createErrorClass {
    type ExtendError<E extends Error, P extends Record<string, any> = any> = (propsOrMessage?: P | string) => E & P;

    function type(className?: string, props?: Record<string, any>): ExtendError<TypeError>;
    function range(className?: string, props?: Record<string, any>): ExtendError<RangeError>;
    // function eval(className?: string, props?: Record<string, any>): ExtendError<EvalError>;
    function syntax(className?: string, props?: Record<string, any>): ExtendError<SyntaxError>;
    function reference(className?: string, props?: Record<string, any>): ExtendError<ReferenceError>;
    function uri(className?: string, props?: Record<string, any>): ExtendError<URIError>;
}

declare function createErrorClass(className?: string, props?: Record<string, any>): createErrorClass.ExtendError<Error>;
declare function createErrorClass(
    className?: "TypeError",
    props?: Record<string, any>,
): createErrorClass.ExtendError<TypeError>;
declare function createErrorClass(
    className?: "RangeError",
    props?: Record<string, any>,
): createErrorClass.ExtendError<RangeError>;
declare function createErrorClass(
    className?: "EvalError",
    props?: Record<string, any>,
): createErrorClass.ExtendError<EvalError>;
declare function createErrorClass(
    className?: "SyntaxError",
    props?: Record<string, any>,
): createErrorClass.ExtendError<SyntaxError>;
declare function createErrorClass(
    className?: "ReferenceError",
    props?: Record<string, any>,
): createErrorClass.ExtendError<ReferenceError>;
declare function createErrorClass(
    className?: "URIError",
    props?: Record<string, any>,
): createErrorClass.ExtendError<URIError>;

export = createErrorClass;
