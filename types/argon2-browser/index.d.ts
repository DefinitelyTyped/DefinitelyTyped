// Type definitions for argon2-browser 1.12
// Project: https://github.com/antelle/argon2-browser#readme
// Definitions by: Ivan Gabriele <https://github.com/ivangabriele>
//                 Brendan Early <https://github.com/mymindstorm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export { };

// Argon2Error is provided on promise rejection
export function hash(
  options: Argon2BrowserHashOptions,
): Promise<Argon2BrowserHashResult>;

export function unloadRuntime(): void;

interface Argon2BrowserHashOptions {
  pass: string | Uint8Array;
  salt: string | Uint8Array;
  time?: number;
  mem?: number;
  hashLen?: number;
  parallelism?: number;
  type?: ArgonType;
  distPath?: string;
}

interface Argon2BrowserHashResult {
  encoded: string;
  hash: Uint8Array;
  hashHex: string;
}

// Argon2Error provided on promise rejection
export function verify(options: Argon2VerifyOptions): Promise<undefined>;

interface Argon2VerifyOptions {
  pass: string;
  encoded: string | Uint8Array;
  type?: ArgonType;
}

interface Argon2Error {
  message: string;
  code: number;
}

export enum ArgonType {
  Argon2d = 0,
  Argon2i = 1,
  Argon2id = 2,
}
