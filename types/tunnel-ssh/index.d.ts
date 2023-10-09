// Type definitions for tunnel-ssh 5.0
// Project: https://github.com/agebrock/tunnel-ssh
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as net from "net";
import * as ssh2 from "ssh2";

export interface TunnelOptions {
    autoClose?: boolean;
}
export interface ForwardOptions {
    srcAddr: string;
    srcPort: number;
    dstAddr: string;
    dstPort: number;
}

export function createTunnel(
    tunnelOptions: TunnelOptions,
    serverOptions: net.ListenOptions,
    sshOptions: ssh2.ConnectConfig,
    forwardOptions: ForwardOptions,
): Promise<[net.Server, ssh2.Client]>;
