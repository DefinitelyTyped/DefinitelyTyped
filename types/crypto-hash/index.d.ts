// Type definitions for crypto-hash 1.0
// Project: https://github.com/sindresorhus/crypto-hash#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function sha1(
    buffer: string | ArrayBuffer | ArrayBufferView,
    options?: OptionsHexOutput
): Promise<string>;
export function sha1(
    buffer: string | ArrayBuffer | ArrayBufferView,
    options: OptionBufferOutput
): Promise<ArrayBuffer>;

export function sha256(
    buffer: string | ArrayBuffer | ArrayBufferView,
    options?: OptionsHexOutput
): Promise<string>;
export function sha256(
    buffer: string | ArrayBuffer | ArrayBufferView,
    options: OptionBufferOutput
): Promise<ArrayBuffer>;

export function sha384(
    buffer: string | ArrayBuffer | ArrayBufferView,
    options?: OptionsHexOutput
): Promise<string>;
export function sha384(
    buffer: string | ArrayBuffer | ArrayBufferView,
    options: OptionBufferOutput
): Promise<ArrayBuffer>;

export function sha512(
    buffer: string | ArrayBuffer | ArrayBufferView,
    options?: OptionsHexOutput
): Promise<string>;
export function sha512(
    buffer: string | ArrayBuffer | ArrayBufferView,
    options: OptionBufferOutput
): Promise<ArrayBuffer>;

export interface OptionsHexOutput {
    outputFormat?: 'hex';
}

export interface OptionBufferOutput {
    outputFormat: 'buffer';
}
