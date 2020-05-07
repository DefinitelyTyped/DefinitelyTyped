// Type definitions for generate-password 1.5
// Project: https://github.com/brendanashworth/generate-password
// Definitions by: Eddie CooRo <https://github.com/Eddie-Cooro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface IGenerateOptions {
    length?: number;
    numbers?: boolean;
    symbols?: boolean;
    lowercase?: boolean;
    uppercase?: boolean;
    excludeSimilarCharacters?: boolean;
    exclude?: string;
    strict?: boolean;
}

export function generate(options?: IGenerateOptions): string;
export function generateMultiple(count: number, options?: IGenerateOptions): string[];
