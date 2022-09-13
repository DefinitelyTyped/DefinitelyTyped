// Type definitions for timing-safe-equal 1.0
// Project: https://github.com/crypto-browserify/timing-safe-equal
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = timingSafeEqual;

declare function timingSafeEqual(a: Buffer, b: Buffer): boolean;
