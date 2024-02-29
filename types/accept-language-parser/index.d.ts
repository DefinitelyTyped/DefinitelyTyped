// https://github.com/opentable/accept-language-parser/blob/v1.5.0/index.js

export function parse(acceptLanguage?: string): Language[];
export function pick<T extends string>(
    supportedLanguages: T[],
    acceptLanguage: string | Language[],
    options?: PickOptions,
): T | null;

export interface Language {
    code: string;
    script?: string | null | undefined;
    region?: string | undefined;
    quality: number;
}

export interface PickOptions {
    loose?: boolean | undefined;
}
