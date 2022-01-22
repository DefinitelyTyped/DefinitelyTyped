export function stringify(
    obj: any,
    options?: {
        EOL?: string | undefined;
        finalEOL?: boolean | undefined;
        replacer?: ((key: string, value: any) => any) | undefined;
        spaces?: string | number | undefined;
    },
): string;
export function stripBom(content: string): string;
