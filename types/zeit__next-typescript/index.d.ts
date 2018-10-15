// Type definitions for @zeit/next-typescript 0.1
// Project: https://github.com/zeit/next-plugins/tree/master/packages/next-typescript
// Definitions by: icopp <https://github.com/icopp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ServerConfig } from 'next';

declare function withTypescript(
    /** @default {} */
    nextConfig?: ServerConfig
): ServerConfig;

export = withTypescript;
