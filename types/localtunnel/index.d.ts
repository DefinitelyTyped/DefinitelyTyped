/// <reference types="node" />

import { EventEmitter } from "events";

export = localtunnel;

declare function localtunnel(
    port: number | localtunnel.TunnelConfig & { port: number },
): Promise<localtunnel.Tunnel>;

declare function localtunnel(
    opts: localtunnel.TunnelConfig & { port: number },
    callback: localtunnel.TunnelCallback,
): localtunnel.Tunnel;

declare function localtunnel(
    port: number,
    opts: localtunnel.TunnelConfig,
): Promise<localtunnel.Tunnel>;

declare function localtunnel(
    port: number,
    opts: localtunnel.TunnelConfig,
    callback: localtunnel.TunnelCallback,
): localtunnel.Tunnel;

declare namespace localtunnel {
    type TunnelCallback = (
        err?: string,
        tunnel?: Tunnel,
    ) => void;

    interface TunnelConfig {
        subdomain?: string | undefined;
        host?: string | undefined;
        local_host?: string | undefined;
        local_https?: boolean | undefined;
        local_cert?: string | undefined;
        local_key?: string | undefined;
        local_ca?: string | undefined;
        allow_invalid_cert?: boolean | undefined;
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
