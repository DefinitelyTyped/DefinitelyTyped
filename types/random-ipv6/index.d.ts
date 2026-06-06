interface Options extends
    Record<
        string | symbol,
        boolean | undefined | { max?: number | string | undefined; min?: number | string | undefined }
    >
{
    compressed?: boolean | undefined;
    padded?: boolean | undefined;
}

declare function randomIPv6(schema?: Options): string;
declare function randomIPv6(schema: string, options?: Options): string;
export = randomIPv6;
