import ConnectionTCP, { SocketParameters as ConnectionTCPSocketParameters } from "@xmpp/connection-tcp";

export default Component;

declare class Component extends ConnectionTCP {
    static readonly NS: "jabber:component:accept";

    socketParameters(service: string): SocketParameters;
    authenticate(id: string, password: string): Promise<void>;
}

export interface SocketParameters extends ConnectionTCPSocketParameters {
    port: number;
}
