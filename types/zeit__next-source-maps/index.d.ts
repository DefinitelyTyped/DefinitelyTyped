// Type definitions for @zeit/next-source-maps 0.0
// Project: https://github.com/zeit/next-plugins/tree/master/packages/next-source-maps, https://github.com/zeit/next-plugins
// Definitions by: ldthorne <https://github.com/ldthorne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

import { ServerConfig } from 'next';

declare function withSourceMaps(
    nextConfig?: ServerConfig
): ServerConfig;

export = withSourceMaps;
