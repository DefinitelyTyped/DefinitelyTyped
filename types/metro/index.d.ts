// Type definitions for metro 0.66
// Project: https://github.com/facebook/metro
// Definitions by: Adam Foxman <https://github.com/afoxman>
//                 Tommy Nguyen <https://github.com/tido64>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export * from './Asset';
export * from './DeltaBundler/types';
export * from './ModuleGraph/types';
export * from './ModuleGraph/worker/collectDependencies';
export * from './Server';
export * from './lib/reporting';
export * from './shared/types';

import { Server as HttpServer } from 'http';
import { Server as HttpsServer } from 'https';
import { ConfigT } from 'metro-config';

export { HttpServer, HttpsServer };

export interface RunServerOptions {
    hasReducedPerformance?: boolean;
    host?: string;
    onError?: (error: Error & { code?: string }) => void;
    onReady?: (server: HttpServer | HttpsServer) => void;
    runInspectorProxy?: boolean;
    secureServerOptions?: Record<string, unknown>;

    /** @deprecated since version 0.61 */
    secure?: boolean;

    /** @deprecated since version 0.61 */
    secureCert?: string;

    /** @deprecated since version 0.61 */
    secureKey?: string;
}

export function runServer(
    config: ConfigT,
    options: RunServerOptions,
): Promise<HttpServer | HttpsServer>;
