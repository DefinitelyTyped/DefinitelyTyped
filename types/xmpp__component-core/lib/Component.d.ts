import ConnectionTCP = require('@xmpp/connection-tcp');

export = Component;

declare class Component extends ConnectionTCP {
    static readonly NS: 'jabber:component:accept';

    socketParameters(service: string): Component.SocketParameters;
    authenticate(id: string, password: string): Promise<void>;
}

declare namespace Component {
    interface SocketParameters extends ConnectionTCP.SocketParameters {
        port: number;
    }
}
