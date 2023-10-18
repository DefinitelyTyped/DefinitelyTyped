export interface PhoneticOptions {
    syllables?: number | undefined;
    seed?: string | undefined;
    phoneticSimplicity?: number | undefined;
    compoundSimplicity?: number | undefined;
    capFirst?: boolean | undefined;
}

export function generate(options?: PhoneticOptions): string;
