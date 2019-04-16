// Type definitions for localtunnel 1.9
// Project: https://github.com/localtunnel/localtunnel
// Definitions by: Vladyslav Khrapov <https://github.com/vladhrapov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = localtunnel;

declare function localtunnel(
    port: number,
    opt: localtunnel.TunnelConfig,
    callback: localtunnel.TunnelCallback
): localtunnel.Tunnel;

declare function localtunnel(
    port: number,
    callback: localtunnel.TunnelCallback
): localtunnel.Tunnel;

declare namespace localtunnel {
    type TunnelCallback = (
        err: string,
        tunnel?: Tunnel
    ) => void;

    interface TunnelConfig {
        host?: string;
        subdomain?: string;
        port?: number;
        local_host?: string;
    }

    interface Tunnel {
        url: string;
        tunnel_cluster: TunnelCluster;
        open(err: string, tunnel?: Tunnel): void;
        close(): void;
    }

    interface TunnelCluster {
        domain: string;
    }
}
