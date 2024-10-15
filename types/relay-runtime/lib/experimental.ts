interface ErrorResult<TError> {
    ok: false;
    // TODO: This is $ReadOnlyArray<TError> in Flow
    errors: TError;
}

interface OkayResult<TValue> {
    ok: true;
    value: TValue;
}

export type Result<TValue, TError> = OkayResult<TValue> | ErrorResult<TError>;

export declare function isValueResult<TValue>(
    input: Result<TValue, any>,
): input is OkayResult<TValue>;

export declare function isErrorResult<TError>(
    input: Result<any, TError>,
): input is ErrorResult<TError>;
