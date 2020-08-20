// Type definitions for express-status-monitor 1.2
// Project: https://github.com/RafalWilinski/express-status-monitor#readme
// Definitions by: Alex Anderson <https://github.com/alexanderson1993>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="socket.io" />

import express = require('express');

declare namespace e {
    interface ExpressStatusMonitorConfig {
        title?: string;
        theme?: string;
        path?: string;
        socketPath?: string;
        websocket?: SocketIO.Server | null; // References a socket.io instance
        spans?: RetentionSpan[];
        chartVisibility?: {
            cpu?: boolean;
            mem?: boolean;
            load?: boolean;
            /** @default true */
            heap?: boolean;
            responseTime?: boolean;
            rps?: boolean;
            statusCodes?: boolean;
        };
        healthChecks?: HealthCheck[];
        ignoreStartsWith?: string;
    }

    interface RetentionSpan {
        interval: number;
        retention: number;
    }
    interface HealthCheck {
        protocol: string;
        host: string;
        path: string;
        port: string | number;
    }
}

declare function e(config?: e.ExpressStatusMonitorConfig): express.RequestHandler;

export = e;
