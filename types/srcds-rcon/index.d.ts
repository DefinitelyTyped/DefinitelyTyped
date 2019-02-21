// Type definitions for srcds-rcon 2.2.1
// Project: https://github.com/randunel/node-srcds-rcon
// Definitions by: Juan de Urtubey <https://github.com/jdeurt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

/**
 * Create an Rcon Instance.
 * @param params - An object containing the address and password to use to connect.
 * @param params.address - The address to connect to.
 * @param params.password - The Rcon password to use.
 */
declare function Rcon(params: Params): RconInstance;

/**
 * Rcon connection parameters.
 */
type Params = {
    /**
     * A valid address.
     */
    address: string,

    /**
     * An Rcon password.
     */
    password: string
};

declare class RconInstance {
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

declare module "srcds-rcon" {
    export = Rcon;
}
