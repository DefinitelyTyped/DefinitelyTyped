// Type definitions for cryptex 1.0
// Project: https://github.com/technologyadvice/cryptex
// Definitions by: Robert Brownstein <https://github.com/brownstein>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

// this is the config structure for a given env
// typically, you find these in cryptex.json
export interface CryptexConfig {
    keySource: string;
    keySourceOpts?: {
        dataKey?: string;
        region?: string;
    };
    algorithm?: string;
    secretEncoding?: string;
    secrets: object;
}
// constructor and update params
export interface CryptexOpts {
    file?: string;
    env?: string;
    cacheKey?: boolean;
    cacheKeyTimeout?: number;
    config?: CryptexConfig;
}
// cryptex exports a module-level instance by default
export function decrypt(data: string, encoding?: string): Promise<string>;
export function encrypt(data: string, encoding?: string): Promise<string>;
export function getSecret(secret: string, optional?: boolean): Promise<string>;
export function getSecrets(secrets: string[], optional?: boolean): Promise<string[]>;
export function update(opts: CryptexOpts): void;

// but you can still create individual instances
export class Cryptex {
    constructor(opts: CryptexOpts)
    decrypt(data: string, encoding?: string): string;
    encrypt(data: string, encoding?: string): string;
    getSecret(secret: string, optional?: boolean): Promise<string>;
    getSecrets(secrets: string[], optional?: boolean): Promise<string[]>;
    update(opts: CryptexOpts): void;
}
