export function stringify(obj: any, options?: StringifyOptions): string;
export function stripBom(content: string): string;

export interface StringifyOptions {
    EOL?: string | undefined;
    finalEOL?: boolean | undefined;
    replacer?: ((key: string, value: any) => any) | undefined;
    spaces?: string | number | undefined;
}
