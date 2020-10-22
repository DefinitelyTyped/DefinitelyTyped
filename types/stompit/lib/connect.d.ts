import { Socket, TcpNetConnectOpts, IpcNetConnectOpts } from "net";
import { ConnectionOptions as TlsConnectionOptions } from "tls";

import Client = require("./Client");
import { SocketOptions } from "./Socket";

declare function connect(
    optionsOrPathOrPort: connect.ConnectOptions | string | number,
    connectionListener?: connect.ConnectionListener): Client;
declare function connect(port: number, host?: string, connectionListener?: connect.ConnectionListener): Client;

export = connect;

declare namespace connect {
    interface ConnectHeaders {
        "accept-version"?: string;
        "heart-beat"?: string;
        host?: string;
        login?: string;
        passcode?: string;
    }

    interface BaseConnectOptions extends SocketOptions {
        connectHeaders?: ConnectHeaders;
        ssl?: boolean;
        // This connectionListener type comes from @types/node
        connect?: (options: ConnectOptions, connectionListener?: () => void) => Socket;
    }

    interface NetTcpConnectOptions extends BaseConnectOptions, TcpNetConnectOpts {
        ssl?: false;
    }

    interface NetIpcConnectOptions extends BaseConnectOptions, IpcNetConnectOpts {
        ssl?: false;
    }

    interface SslConnectOptions extends BaseConnectOptions, TlsConnectionOptions {
        ssl: true;
    }

    type ConnectOptions = NetTcpConnectOptions | NetIpcConnectOptions | SslConnectOptions;

    type ConnectionListener = (err: Error | null, client: Client) => void;
}
