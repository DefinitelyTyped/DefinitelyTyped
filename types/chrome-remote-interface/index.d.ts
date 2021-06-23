// Type definitions for chrome-remote-interface 0.30
// Project: https://github.com/cyrus-and/chrome-remote-interface
// Definitions by: Khairul Azhar Kasmiran <https://github.com/kazarmy>
//                 Seth Westphal <https://github.com/westy92>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

import type ProtocolProxyApi from 'devtools-protocol/types/protocol-proxy-api';

declare namespace CDP {
    interface BaseOptions {
        host?: string;
        port?: number;
        secure?: boolean;
        useHostName?: boolean;
        alterPath?: (path: string) => string;
    }

    interface Options extends BaseOptions {
        target?: ((targets: Target[]) => Target | number) | Target | string;
        protocol?: object;
        local?: boolean;
    }

    interface CloseOptions extends BaseOptions {
        id: string;
    }

    interface NewOptions extends BaseOptions {
        url?: string;
    }

    interface EventMessage {
        method: string;
        params: object;
        sessionId?: string;
    }

    interface Target {
        description: string;
        devtoolsFrontendUrl: string;
        id: string;
        title: string;
        type: string;
        url: string;
        webSocketDebuggerUrl: string;
    }

    interface Client {
        close: () => Promise<void>;
        on(event: 'event', callback: (message: EventMessage) => void): void;
        // TODO Event: '<domain>.<method>' | '<domain>.<method>.<sessionId>'
        on(event: 'ready' | 'disconnect', callback: () => void): void;

        Network: ProtocolProxyApi.NetworkApi;
        Page: ProtocolProxyApi.PageApi;
        Runtime: ProtocolProxyApi.RuntimeApi;
    }
}

declare const CDP: {
    (options: CDP.Options, callback: (client: CDP.Client) => void): void;
    (callback: (client: CDP.Client) => void): void;
    (options?: CDP.Options): Promise<CDP.Client>;

    Close(options: CDP.CloseOptions, callback: (err: Error | null) => void): void;
    Close(options: CDP.CloseOptions): Promise<void>;

    List(options: CDP.BaseOptions, callback: (err: Error | null, targets: CDP.Target[]) => void): void;
    List(callback: (err: Error | null, targets: CDP.Target[]) => void): void;
    List(options?: CDP.BaseOptions): Promise<CDP.Target[]>;

    New(options: CDP.NewOptions, callback: (err: Error | null, target: CDP.Target) => void): void;
    New(callback: (err: Error | null, target: CDP.Target) => void): void;
    New(options?: CDP.NewOptions): Promise<CDP.Target>;
};

export = CDP;
