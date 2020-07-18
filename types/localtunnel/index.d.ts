// Type definitions for localtunnel 2.0
// Project: https://github.com/localtunnel/localtunnel
// Definitions by: Vladyslav Khrapov <https://github.com/vladhrapov>
//                 Noam Alffasy <https://github.com/noamalffasy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from "events";

export = localtunnel;

declare function localtunnel(
    port: number | localtunnel.TunnelConfig & { port: number }
): Promise<localtunnel.Tunnel>;

declare function localtunnel(
    opts: localtunnel.TunnelConfig & { port: number },
    callback: localtunnel.TunnelCallback,
): localtunnel.Tunnel;

declare function localtunnel(
    port: number,
    opts: localtunnel.TunnelConfig
): Promise<localtunnel.Tunnel>;

declare function localtunnel(
    port: number,
    opts: localtunnel.TunnelConfig,
    callback: localtunnel.TunnelCallback,
): localtunnel.Tunnel;

declare namespace localtunnel {
    type TunnelCallback = (
        err?: string,
        tunnel?: Tunnel
    ) => void;

    interface TunnelConfig {
        subdomain?: string;
        host?: string;
        local_host?: string;
        local_https?: boolean;
        local_cert?: string;
        local_key?: string;
        local_ca?: string;
        allow_invalid_cert?: boolean;
    }

    interface Tunnel extends EventEmitter {
        url: string;
        tunnelCluster: TunnelCluster;
        open(cb: ((err: string) => void) | (() => void)): void;
        close(): void;
    }

    interface TunnelCluster extends EventEmitter {
        open(): void;
    }
}
