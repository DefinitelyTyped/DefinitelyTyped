// Type definitions for srcds-rcon 2.2
// Project: https://github.com/randunel/node-srcds-rcon#readme
// Definitions by: Juan de Urtubey <https://github.com/jdeurt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Create an Rcon Instance.
 * @param params - An object containing the address and password to use to connect.
 * @param params.address - The address to connect to.
 * @param params.password - The Rcon password to use.
 */
declare function Rcon(params: Params): RconInterface;

/**
 * Rcon connection parameters.
 */
interface Params {
    /**
     * A valid address.
     */
    address: string;

    /**
     * An Rcon password.
     */
    password: string;
}

declare class RconInterface {
    /**
     * Connect to the server using predefined credentials.
     */
    connect(): Promise<void>;

    /**
     * Disconnect from the server.
     */
    disconnect(): Promise<void>;

    /**
     * Send a command to the server.
     * @param text - The command to send.
     * @param timeout - The time to wait before throwing an error.
     */
    command(text: string, timeout?: number): Promise<string>;
}

export default Rcon;
