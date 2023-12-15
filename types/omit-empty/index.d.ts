interface OmitOptions {
    omitZero?: boolean | undefined;
}

declare function omitEmpty(obj: object, options?: OmitOptions): object;
export default omitEmpty;
