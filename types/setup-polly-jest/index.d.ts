// Type definitions for setup-polly-jest 0.5
// Project: https://github.com/gribnoysup/setup-polly-jest#readme
// Definitions by: Offir Golan <https://github.com/offirgolan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { Polly, PollyConfig } from '@pollyjs/core';

export interface Context {
    readonly polly: Polly;
}

export function setupPolly(config?: PollyConfig): Context;
