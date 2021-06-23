// Type definitions for chrome-remote-interface 0.30
// Project: https://github.com/cyrus-and/chrome-remote-interface
// Definitions by: Khairul Azhar Kasmiran <https://github.com/kazarmy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.9

import type ProtocolProxyApi from 'devtools-protocol/types/protocol-proxy-api';

declare namespace CDP {
    interface BaseOptions {
        host?: string;
        port?: number;
    }

    type CloseOptions = BaseOptions & {
        id: string;
    };

    interface ListJson {
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
        Page: ProtocolProxyApi.PageApi;
        Runtime: ProtocolProxyApi.RuntimeApi;
    }
}

declare const CDP: {
    (options: CDP.BaseOptions, callback: (client: CDP.Client) => void): void;
    (callback: (client: CDP.Client) => void): void;
    (options?: CDP.BaseOptions): Promise<CDP.Client>;

    Close(options: CDP.CloseOptions, callback: (err: Error | null) => void): void;
    Close(options: CDP.CloseOptions): Promise<void>;

    List(options: CDP.BaseOptions, callback: (err: Error | null, targets: CDP.ListJson[]) => void): void;
    List(callback: (err: Error | null, targets: CDP.ListJson[]) => void): void;
    List(options?: CDP.BaseOptions): Promise<CDP.ListJson[]>;
};
export = CDP;
