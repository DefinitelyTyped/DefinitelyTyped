export const lower: string;
export const upper: string;

export const consonants: string;
export const vowels: string;
export const digits: string;

export const symbols: string;
export const copyableSymbols: string;
export const fullSymbols: string;

export interface RandomPasswordCharactersSet {
    characters: string;
    exactly?: number | undefined;
}

export interface RandomPasswordOptions {
    avoidAmbiguous?: boolean | undefined;
    characters?: string | RandomPasswordCharactersSet | Array<(RandomPasswordCharactersSet | string)> | undefined;
    length?: number | undefined;
    predicate?: ((result: string) => boolean) | undefined;
}

export function randomPassword(options?: RandomPasswordOptions): string;
export function randomString(options?: RandomPasswordOptions): string;
