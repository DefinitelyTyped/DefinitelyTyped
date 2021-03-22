// Type definitions for detect-libc 1.0
// Project: https://github.com/lovell/detect-libc
// Definitions by: Jamie Magee <https://github.com/JamieMagee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const GLIBC: 'glibc';
export const MUSL: 'musl';
export const family: '' | 'glibc' | 'musl';
export const version: string;
export const method: '' | 'getconf' | 'ldd' | 'filesystem';
export const isNonGlibcLinux: boolean;
