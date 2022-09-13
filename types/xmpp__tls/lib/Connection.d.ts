import Connection = require('@xmpp/connection');
import ConnectionTCP = require('@xmpp/connection-tcp');
import Socket = require('./Socket');

export = ConnectionTLS;

declare class ConnectionTLS extends ConnectionTCP {
    Socket: ConnectionTCP.SocketConstructor;
    socketParameters(service: string): ConnectionTLS.SocketParameters | undefined;
}

declare namespace ConnectionTLS {
    interface SocketParameters {
        port: number;
        host: string;
    }

    interface SocketConstructor extends Connection.SocketConstructor {
        new (): Socket;
    }
}
