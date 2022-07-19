// Type definitions for express-status-monitor 1.3
// Project: https://github.com/RafalWilinski/express-status-monitor#readme
// Definitions by: Alex Anderson <https://github.com/alexanderson1993>
//                 Prashant Sharma <https://github.com/tecxar-prashant>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import express = require('express');
import SocketIO = require('socket.io');

declare namespace e {
    interface ExpressStatusMonitorConfig {
        title?: string | undefined;
        theme?: string | undefined;
        path?: string | undefined;
        socketPath?: string | undefined;
        websocket?: SocketIO.Server | null | undefined; // References a socket.io instance
        spans?: RetentionSpan[] | undefined;
        chartVisibility?: {
            cpu?: boolean | undefined;
            mem?: boolean | undefined;
            load?: boolean | undefined;
            /** @default true */
            heap?: boolean | undefined;
            responseTime?: boolean | undefined;
            rps?: boolean | undefined;
            statusCodes?: boolean | undefined;
        } | undefined;
        healthChecks?: HealthCheck[] | undefined;
        ignoreStartsWith?: string | undefined;
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
