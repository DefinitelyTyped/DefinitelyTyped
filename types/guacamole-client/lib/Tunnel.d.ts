import { Status } from './Status';
export {};

export namespace Tunnel {
    export {};

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
    /**
     * All possible tunnel states.
     */
    export type State = TunnelState[keyof TunnelState];
    /**
     * All possible tunnel states.
     */
    export const State: TunnelState;
}

export abstract class Tunnel {
    static readonly INTERNAL_DATA_OPCODE: '';
    /**
     * The maximum amount of time to wait for data to be received, in
     * milliseconds. If data is not received within this amount of time,
     * the tunnel is closed with an error. The default value is 15000.
     */
    receiveTimeout: number;

    /**
     * The current state of this tunnel.
     */
    state: Tunnel.State;

    /**
     * The UUID uniquely identifying this tunnel. If not yet known, this will
     * be null.
     */
    uuid: string | null;

    /**
     * The amount of time to wait for data to be received before considering
     * the connection to be unstable, in milliseconds. If data is not received
     * within this amount of time, the tunnel status is updated to warn that
     * the connection appears unresponsive and may close. The default value is
     * 1500.
     */
    unstableThreshold: number;

    /**
     * Connect to the tunnel with the given optional data. This data is
     * typically used for authentication. The format of data accepted is
     * up to the tunnel implementation.
     *
     * @param data The data to send to the tunnel when connecting.
     */
    connect(data: string): void;

    /**
     * Disconnect from the tunnel.
     */
    disconnect(): void;

    /**
     * Returns whether this tunnel is currently connected.
     * @returns true if this tunnel is currently connected, false otherwise.
     */
    isConnected(): boolean;

    /**
     * Send the given message through the tunnel to the service on the other
     * side. All messages are guaranteed to be received in the order sent.
     *
     * @param elements
     *     The elements of the message to send to the service on the other side
     *     of the tunnel.
     */
    sendMessage(message: any, ...messages: any[]): void;

    /**
     * Fired once for every complete Guacamole instruction received, in order.
     * @event
     * @param opcode The Guacamole instruction opcode.
     * @param parameters The parameters provided for the instruction, if any.
     */
    oninstruction: null | ((opcode: string, args: unknown[]) => void);

    /**
     * Fired whenever the state of the tunnel changes.
     * @event
     * @param state The new state of the client.
     */
    onstatechange: null | ((state: Tunnel.State) => void);

    /**
     * Fired whenever an error is encountered by the tunnel.
     * @event
     * @param status A status object which describes the error.
     */
    onerror: null | ((status: Status) => void);
}
