import { IpcNetConnectOpts, Socket, TcpNetConnectOpts } from "net";
import { ConnectionOptions as TlsConnectionOptions } from "tls";

import Client = require("./Client");
import { SocketOptions } from "./Socket";

declare function connect(
    optionsOrPathOrPort: connect.ConnectOptions | string | number,
    connectionListener?: connect.ConnectionListener,
): Client;
declare function connect(port: number, host?: string, connectionListener?: connect.ConnectionListener): Client;

export = connect;

declare namespace connect {
    interface ConnectHeaders {
        "accept-version"?: string | undefined;
        "heart-beat"?: string | undefined;
        host?: string | undefined;
        login?: string | undefined;
        passcode?: string | undefined;
    }

    interface BaseConnectOptions extends SocketOptions {
        connectHeaders?: ConnectHeaders | undefined;
        ssl?: boolean | undefined;
        // This connectionListener type comes from @types/node
        connect?: ((options: ConnectOptions, connectionListener?: () => void) => Socket) | undefined;
    }

    interface NetTcpConnectOptions extends BaseConnectOptions, TcpNetConnectOpts {
        ssl?: false | undefined;
    }

    interface NetIpcConnectOptions extends BaseConnectOptions, IpcNetConnectOpts {
        ssl?: false | undefined;
    }

    interface SslConnectOptions extends BaseConnectOptions, TlsConnectionOptions {
        ssl: true;
    }

    type ConnectOptions = NetTcpConnectOptions | NetIpcConnectOptions | SslConnectOptions;

    type ConnectionListener = (err: Error | null, client: Client) => void;
}
