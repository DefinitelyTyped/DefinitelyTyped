// Type definitions for uid-generator 2.0
// Project: https://github.com/nwoltman/node-uid-generator
// Definitions by: TheEmrio <https://github.com/TheEmrio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface UIDGenerator {
  readonly bitSize: number;
  readonly uidLength: number;
  readonly baseEncoding: string;
  readonly base: number;
  generateSync(): string;
  generate(): Promise<string>;
  generate(cb: (uid: string) => any): void;
}

export interface UIDGeneratorConstructor {
  new (bitSize?: number, baseEncoding?: string): UIDGenerator;
  new (baseEncoding?: string): UIDGenerator;
  readonly BASE16: '0123456789abcdef';
  readonly BASE36: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  readonly BASE58: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  readonly BASE62: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  readonly BASE66: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~';
  readonly BASE71: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!'()*-._~";
  readonly BASE94: "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
}

export const UIDGenerator: UIDGeneratorConstructor;
