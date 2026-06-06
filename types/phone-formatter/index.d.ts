declare module "phone-formatter" {
    export interface FormatOptions {
        normalize: boolean;
    }

    export function normalize(digits: string): string;
    export function format(digits: string, format: string, options?: FormatOptions): string;
}
