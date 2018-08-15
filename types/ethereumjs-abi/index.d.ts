// Type definitions for ethereumjs-abi 0.6
// Project: https://github.com/ethereumjs/ethereumjs-abi
// Definitions by: Leonid Logvinov <https://github.com/LogvinovLeon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export function soliditySHA3(argTypes: string[], args: any[]): Buffer;
export function soliditySHA256(argTypes: string[], args: any[]): Buffer;
export function methodID(name: string, types: string[]): Buffer;
export function simpleEncode(signature: string, ...args: any[]): Buffer;
export function rawDecode(signature: string[], data: Buffer): any[];
