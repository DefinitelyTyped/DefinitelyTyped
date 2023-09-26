interface EncodeOptions {
    section?: string;
    whitespace?: boolean;
}

export function decode(str: string): {
    [key: string]: any;
};
export function parse(str: string): {
    [key: string]: any;
};
export function encode(object: any, options?: EncodeOptions | string): string;
export function stringify(object: any, options?: EncodeOptions | string): string;
export function safe(val: string): string;
export function unsafe(val: string): string;
