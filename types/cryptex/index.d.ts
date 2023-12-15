// this is the config structure for a given env
// typically, you find these in cryptex.json
export interface CryptexConfig {
    keySource: string;
    keySourceOpts?: {
        dataKey?: string | undefined;
        region?: string | undefined;
    } | undefined;
    algorithm?: string | undefined;
    secretEncoding?: string | undefined;
    secrets: object;
}
// constructor and update params
export interface CryptexOpts {
    file?: string | undefined;
    env?: string | undefined;
    cacheKey?: boolean | undefined;
    cacheKeyTimeout?: number | undefined;
    config?: CryptexConfig | undefined;
}
// cryptex exports a module-level instance by default
export function decrypt(data: string, encoding?: string): Promise<string>;
export function encrypt(data: string, encoding?: string): Promise<string>;
export function getSecret(secret: string, optional?: boolean): Promise<string>;
export function getSecrets(secrets: string[], optional?: boolean): Promise<string[]>;
export function update(opts: CryptexOpts): void;

// but you can still create individual instances
export class Cryptex {
    constructor(opts: CryptexOpts);
    decrypt(data: string, encoding?: string): string;
    encrypt(data: string, encoding?: string): string;
    getSecret(secret: string, optional?: boolean): Promise<string>;
    getSecrets(secrets: string[], optional?: boolean): Promise<string[]>;
    update(opts: CryptexOpts): void;
}
