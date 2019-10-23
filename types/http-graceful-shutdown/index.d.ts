// Type definitions for http-graceful-shutdown 2.1
// Project: https://github.com/sebhildebrandt/http-graceful-shutdown
// Definitions by: Dave Lee <https://github.com/dlee-nvisia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Server as HttpServer } from "http";
import { Server as HttpsServer } from "https";

declare function GracefulShutdown(server: HttpServer | HttpsServer, options?: GracefulShutdown.Options): void;

declare namespace GracefulShutdown {
    interface Options {
        signals?: string;
        timeout?: number;
        development?: boolean;
        onShutdown?: (signal: string) => Promise<void>;
        finally?: () => void;
    }
}

export = GracefulShutdown;
