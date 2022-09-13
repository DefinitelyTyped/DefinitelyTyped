// Type definitions for randombytes 2.0
// Project: https://github.com/crypto-browserify/randombytes
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { randomBytes as _randomBytes } from 'crypto';

export = randomBytes;

declare const randomBytes: typeof _randomBytes;
