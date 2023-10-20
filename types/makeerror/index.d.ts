export = makeError;

declare function makeError<T extends makeError.DefaultData>(
    name: string,
    defaultMessage?: string,
    defaultData?: T,
): makeError.CustomErrorConstructor<T>;

declare namespace makeError {
    type DefaultData = Record<string, unknown> & { proto?: CustomError<Record<string, unknown>> };

    interface CustomErrorConstructor<T extends Record<string, unknown>> {
        new<U, V>(
            message?: U extends Record<string, unknown> ? U : string,
            data?: V extends Record<string, unknown> ? V : never,
        ): U extends Record<string, unknown> ? V extends Record<string, unknown> ? CustomError<V>
            : CustomError<U>
            : V extends Record<string, unknown> ? CustomError<V>
            : CustomError<T>;

        <U, V>(
            message?: U extends Record<string, unknown> ? U : string,
            data?: V extends Record<string, unknown> ? V : never,
        ): U extends Record<string, unknown> ? V extends Record<string, unknown> ? CustomError<V>
            : CustomError<U>
            : V extends Record<string, unknown> ? CustomError<V>
            : CustomError<T>;

        readonly prototype: "proto" extends keyof T ? T["proto"] : BaseError;
    }

    interface CustomError<T extends Record<string, unknown>> extends BaseError {
        data: DataObject<T>;
        fileName?: string;
        lineNumber?: number;
    }
}

type DataObject<T extends Record<string, unknown>> = {
    [P in keyof T as Exclude<P, "proto">]: T[P];
};

interface BaseError extends Error {
    toString(): string;
}
