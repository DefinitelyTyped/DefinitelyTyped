// Type definitions for tunnel-ssh 4.1
// Project: https://github.com/agebrock/tunnel-ssh
// Definitions by:  Maz Ahmadi <https://github.com/cmdshepard>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node"/>

import { Server } from "net";

export = tunnel;

declare function tunnel(config?: tunnel.Config, cb?: (error: Error, server: Server) => void): Server;

declare namespace tunnel {
    import ReadableStream = NodeJS.ReadableStream;

    interface Config {
        dstHost?: string;
        dstPort?: number;
        localHost?: string;
        keepAlive?: boolean;
        host?: string;
        port?: number;
        localAddress?: string;
        localPort?: number;
        forceIPv4?: boolean;
        forceIPv6?: boolean;
        hostHast?: string;
        hostVerifier?: (hashedKey: string, ...cb: Array<(doContinue: boolean) => void>) => boolean;
        username?: string;
        password?: string;
        agent?: string;
        agentForward?: boolean;
        privateKey?: Buffer | string;
        passphrase?: string;
        localHostname?: string;
        localUsername?: string;
        tryKeyboard?: boolean;
        authHandler?: (methodsLeft: null | string[], partialSuccess: null | boolean, cb: (nextMethod: string) => void) => string;
        keepaliveInterval?: number;
        keepaliveCountMax?: number;
        readyTimeout?: number;
        sock?: ReadableStream;
        strictVendor?: boolean;
        algorithms?: {
            key?: string[];
            cipher?: string[];
            serverHostKey?: string[];
            hmac?: string[];
            compress?: string[];
        };
        compress?: "force" | boolean;
        debug?: (info: string) => void;
    }
}
