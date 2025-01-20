export interface X86 {
    hash32: (bytes: Uint8Array, seed?: number) => number;
    hash128: (bytes: Uint8Array, seed?: number) => string;
}
export interface X64 {
    hash128: (bytes: Uint8Array, seed?: number) => string;
}
export const x86: X86;
export const x64: X64;

export const MurmurHash3: {
    x86: X86;
    x64: X64;
};

export as namespace MurmurHash3;
