interface OmitOptions {
    omitZero?: boolean | undefined;
}

declare function omitEmpty<T extends object>(obj: T, options?: OmitOptions): Partial<T>;
export = omitEmpty;
