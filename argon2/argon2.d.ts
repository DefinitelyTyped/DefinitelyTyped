// Type definitions for argon2
// Project: https://github.com/ranisalt/node-argon2
// Definitions by: JD Conley <https://github.com/jdconley/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

export interface Options {
    hashLength?: number;
    timeCost?: number; 
    memoryCost?: number; 
    parallelism?: number; 
    argon2d?: boolean; 
}

export interface NumericLimit {
    max: number;
    min: number;
}

export interface OptionLimits {
    hashLength: NumericLimit;
    memoryCost: NumericLimit;
    timeCost: NumericLimit;
    parallelism: NumericLimit;
}

export const defaults: Options;
export const limits: OptionLimits;
export function hash(plain: Buffer | string, salt: Buffer, options?: Options): Promise<string>;
export function generateSalt(length?: number): Promise<Buffer>;
export function verify(hash: string, plain: Buffer | string): Promise<boolean>;