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
        dstHost?: string | undefined;
        dstPort?: number | undefined;
        localHost?: string | undefined;
        keepAlive?: boolean | undefined;
        host?: string | undefined;
        port?: number | undefined;
        localAddress?: string | undefined;
        localPort?: number | undefined;
        forceIPv4?: boolean | undefined;
        forceIPv6?: boolean | undefined;
        hostHast?: string | undefined;
        hostVerifier?: ((hashedKey: string, ...cb: Array<(doContinue: boolean) => void>) => boolean) | undefined;
        username?: string | undefined;
        password?: string | undefined;
        agent?: string | undefined;
        agentForward?: boolean | undefined;
        privateKey?: Buffer | string | undefined;
        passphrase?: string | undefined;
        localHostname?: string | undefined;
        localUsername?: string | undefined;
        tryKeyboard?: boolean | undefined;
        authHandler?: ((methodsLeft: null | string[], partialSuccess: null | boolean, cb: (nextMethod: string) => void) => string) | undefined;
        keepaliveInterval?: number | undefined;
        keepaliveCountMax?: number | undefined;
        readyTimeout?: number | undefined;
        sock?: ReadableStream | undefined;
        strictVendor?: boolean | undefined;
        algorithms?: {
            key?: string[] | undefined;
            cipher?: string[] | undefined;
            serverHostKey?: string[] | undefined;
            hmac?: string[] | undefined;
            compress?: string[] | undefined;
        } | undefined;
        compress?: "force" | boolean | undefined;
        debug?: ((info: string) => void) | undefined;
    }
}
