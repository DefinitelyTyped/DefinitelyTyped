export as namespace preconditions;

// Turn off automatic exporting since this type alias shouldn't get exported.
export {};
type ErrorCallback<T> = (err: T | null) => void;

export class IllegalArgumentError extends Error {
    constructor(message?: string);
}

export class IllegalStateError extends Error {
    constructor(message?: string);
}

export class IllegalValueError extends Error {
    constructor(message?: string);
}

export class InvalidTypeError extends Error {
    constructor(message?: string);
}

export class UndefinedValueError extends Error {
    constructor(message?: string);
}

export class UnknownValueError extends Error {
    constructor(message?: string);
}

export function checkArgument(condition: any, message?: string, callback?: ErrorCallback<IllegalArgumentError>): void;
export function checkArgument(condition: any, callback?: ErrorCallback<IllegalArgumentError>): void;

export function checkState(condition: any, message?: string, callback?: ErrorCallback<IllegalStateError>): void;
export function checkState(condition: any, callback?: ErrorCallback<IllegalStateError>): void;

export function checkNumberType(value: any, message?: string, callback?: ErrorCallback<InvalidTypeError>): void;
export function checkNumberType(value: any, callback?: ErrorCallback<InvalidTypeError>): void;

export function checkNotNumberType(value: any, message?: string, callback?: ErrorCallback<InvalidTypeError>): void;
export function checkNotNumberType(value: any, callback?: ErrorCallback<InvalidTypeError>): void;

export function checkContains(
    value: any,
    object: any,
    message?: string,
    callback?: ErrorCallback<UnknownValueError>,
): void;
export function checkContains(value: any, object: any, callback?: ErrorCallback<UnknownValueError>): void;

export function checkDoesNotContain(
    value: any,
    object: any,
    message?: string,
    callback?: ErrorCallback<UnknownValueError>,
): void;
export function checkDoesNotContain(value: any, object: any, callback?: ErrorCallback<UnknownValueError>): void;

export function checkEquals(
    actual: any,
    expected: any,
    message?: string,
    callback?: ErrorCallback<UnknownValueError>,
): void;
export function checkEquals(actual: any, expected: any, callback?: ErrorCallback<UnknownValueError>): void;

export function checkDoesNotEqual(
    actual: any,
    expected: any,
    message?: string,
    callback?: ErrorCallback<UnknownValueError>,
): void;
export function checkDoesNotEqual(actual: any, expected: any, callback?: ErrorCallback<UnknownValueError>): void;

export function checkDefined(value: any, message?: string, callback?: ErrorCallback<UndefinedValueError>): void;
export function checkDefined(value: any, callback?: ErrorCallback<UndefinedValueError>): void;

export function checkUndefined(value: any, message?: string, callback?: ErrorCallback<UndefinedValueError>): void;
export function checkUndefined(value: any, callback?: ErrorCallback<UndefinedValueError>): void;

export function checkEmpty(value: any, message?: string, callback?: ErrorCallback<IllegalValueError>): void;
export function checkEmpty(value: any, callback?: ErrorCallback<IllegalValueError>): void;

export function checkNotEmpty(value: any, message?: string, callback?: ErrorCallback<IllegalValueError>): void;
export function checkNotEmpty(value: any, callback?: ErrorCallback<IllegalValueError>): void;

export function checkNull(value: any, message?: string, callback?: ErrorCallback<IllegalValueError>): void;
export function checkNull(value: any, callback?: ErrorCallback<IllegalValueError>): void;

export function checkNotNull(value: any, message?: string, callback?: ErrorCallback<IllegalValueError>): void;
export function checkNotNull(value: any, callback?: ErrorCallback<IllegalValueError>): void;
