interface ConvertOptions {
    cap?: boolean;
    curry?: boolean;
    fixed?: boolean;
    immutable?: boolean;
    rearg?: boolean;
}

declare function convert(func: object, options?: ConvertOptions): any;
declare function convert(name: string, func: (...args: any[]) => any, options?: ConvertOptions): any;
export = convert;
