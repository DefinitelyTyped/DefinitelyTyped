// Type definitions for @zeit/next-typescript 0.1
// Project: https://github.com/zeit/next-plugins/tree/master/packages/next-typescript, https://github.com/zeit/next-plugins
// Definitions by: icopp <https://github.com/icopp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare function withTypescript(
    /** @default {} */
    nextConfig?: { [key: string]: any }
): { [key: string]: any };

export = withTypescript;
