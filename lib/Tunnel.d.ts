declare module 'guacamole-client' {
  export namespace Tunnel {
    type TunnelState = Readonly<{
      /**
       * A connection is in pending. It is not yet known whether connection was successful.
       */
      CONNECTING: 0;
      /**
       * Connection was successful, and data is being received.
       */
      OPEN: 1;
      /**
       * The connection is closed. Connection may not have been successful, the
       * tunnel may have been explicitly closed by either side, or an error may have occurred.
       */
      CLOSED: 2;
      /**
       * The connection is open, but communication through the tunnel appears to
       * be disrupted, and the connection may close as a result.
       */
      UNSTABLE: 3;
    }>;
    export type State = TunnelState[keyof TunnelState];
    export const State: TunnelState;
  }

  export abstract class Tunnel {
    receiveTimeout: number;
    state: Tunnel.State;
    uuid: string;

    connect(data: string): void;
    disconnect(): void;
    isConnected(): boolean;
    sendMessage(message: any, ...messages: any[]): void;

    oninstruction: null | ((opcode: string, args: any[]) => void);
    onstatechange: null | ((state: Tunnel.State) => void);
    onerror: null | ((status: Status) => void);
  }
}
