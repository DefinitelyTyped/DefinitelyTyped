// Type definitions for secure-random-password 0.1
// Project: https://github.com/rackerlabs/secure-random-password
// Definitions by: Bjørnar Snoksrud <https://github.com/bjornars>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const lower: string;
export const upper: string;
export const consonants: string;
export const vowels: string;
export const digits: string;
export const symbols: string;
export const fullSymbols: string;
export const copyableSymbols: string;

export interface RandomPasswordOptions {
    length?: number;
    characters?: string | string[];
}

export function randomPassword(options?: RandomPasswordOptions): string;
export function randomString(options?: RandomPasswordOptions): string;
