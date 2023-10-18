export interface LevenshteinOptions {
    useCollator?: boolean | undefined;
}

export function get(str1: string, str2: string, opts?: LevenshteinOptions): number;
