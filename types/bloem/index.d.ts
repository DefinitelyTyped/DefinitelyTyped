// Type definitions for bloem 0.2
// Project: https://github.com/wiedi/node-bloem
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types= "node" />

export function calculateSize(capacity: number, error_rate: number): number;
export function calculateSlices(size: number, capacity: number): number;

export class Bloem {
  constructor(size: number, slices: number, buffer: Buffer);

  has(key: Buffer): boolean;
  add(key: Buffer): void;
}

export class SafeBloem {
  constructor(capacity: number, error_rate: number, buffer: Buffer);

  has(key: Buffer): boolean;
  add(key: Buffer): boolean;
}

export class ScalingBloem {
  constructor(
    error_rate: number,
    options?: {
      ratio?: number;
      initial_capacity?: number;
      scaling?: number;
    }
  );

  has(key: Buffer): boolean;
  add(key: Buffer): void;
}
