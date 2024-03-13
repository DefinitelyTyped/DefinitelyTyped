export class Client {
    /**
     * Creates a new Client object by passing in the connection parameters. Both password and private key authentication methods are supported
     */
    constructor(params: {
        host: string;
        username: string;
        port?: number | undefined;
        password?: string | undefined;
        pkey?: string | undefined;
    });

    /**
     * Opens a session
     */
    open(callback: (err: any) => void): void;

    /**
     * Sends requests. Requests are sent using the .rpc() method
     */
    rpc(request: any, callback: (err: any, reply: any) => void): void;

    /**
     * Closes the session
     */
    close(callback?: (err: any) => void): void;

    /**
     * Collects some useful information from several RPC calls and presents the results back
     */
    facts(
        callback: (
            err: any,
            facts: { hostname: string; version: string; module: string; uptime: string; serial: string },
        ) => void,
    ): void;

    /**
     * Loads configuration data into candidate-config using NETCONF. Default options are equivalent to "load merge" and would expect configuration data in JunOS curly-brace format
     */
    load(
        args: string | {
            config: any;
            action?: "merge" | "replace" | "override" | "update" | "set" | undefined;
            format?: "text" | "xml" | undefined;
        },
        callback: (err: any, reply: any) => void,
    ): void;

    /**
     * Commits candidate configuration to device
     */
    commit(callback: (err: any, reply: any) => void): void;

    /**
     * Shows difference between running and candidate-config. Equivalent to "show | compare".
     */
    compare(callback: (err: any, diff: any) => void): void;

    /**
     * Discards candidate configuration on device
     */
    rollback(callback: (err: any, reply: any) => void): void;
}
