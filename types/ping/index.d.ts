// Type definitions for ping 0.4
// Project: https://github.com/danielzzz/node-ping
// Definitions by: Richard Honor <https://github.com/RMHonor>
//                 BendingBender <https://github.com/bendingbender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface PingConfig {
    /**
     * Map IP address to hostname or not.
     * @default true
     */
    numeric?: boolean | undefined;
    /**
     * Timeout in seconds for each ping request.
     * @default 2 on Linux/Mac, 5 on Windows
     */
    timeout?: number | undefined;
    /**
     * Specify a timeout, in seconds, before ping exits regardless of
     * how many packets have been sent or received. In this case ping
     * does not stop after count packet are sent, it waits either for
     * deadline expire or until count probes are answered or for some
     * error notification from network.
     *
     * This option is only available on Linux and Mac.
     */
    deadline?: number | undefined;
    /**
     * Exit after sending number of `ECHO_REQUEST`.
     * @default 1
     */
    min_reply?: number | undefined;
    /**
     * Ping via IPv6 or not.
     * @default false
     */
    v6?: boolean | undefined;
    /**
     * Source address for sending the ping.
     */
    sourceAddr?: string | undefined;
    /**
     * Specifies the number of data bytes to be sent.
     * @default 56 on Linux/Mac, 32 on Windows
     */
    packetSize?: number | undefined;
    /**
     * Additional arguments.
     * @default []
     */
    extra?: string[] | undefined;
}

export interface PingResponse {
    /**
     * The input IP address or host.
     */
    inputHost: string;
    /**
     * Parsed host from system command's output. `unknown` if ping fails.
     */
    host: string;
    /**
     * Numeric target IP address.
     */
    numeric_host?: string | undefined;
    /**
     * `true` for existing host.
     */
    alive: boolean;
    /**
     * Raw stdout from system ping. `unknown` if ping fails.
     */
    output: string;
    /**
     * Time (float) in ms for first successful ping response. `unknown` if ping fails.
     */
    time: number | 'unknown';
    /**
     * Array of times (float) in ms for each ping response.
     */
    times: number[];
    /**
     * Minimum time for collection records. `unknown` if ping fails.
     */
    min: string;
    /**
     * Maximum time for collection records. `unknown` if ping fails.
     */
    max: string;
    /**
     * Average time for collection records. `unknown` if ping fails.
     */
    avg: string;
    /**
     * Standard deviation time for collected records. `unknown` if ping fails.
     */
    stddev: string;
    /**
     * Packet losses in percent (100% -> "100.000"). `unknown` if ping fails.
     */
    packetLoss: string;
}

export const sys: {
    /**
     * Executes the system ping utility.
     *
     * @param addr Hostname or IP address.
     * @param cb Response callback.
     * @param cb.isAlive Whether ping request was successful.
     * @param cb.error Error or `null` if no error.
     * @param config Ping configuration.
     */
    probe(addr: string, cb: (isAlive: boolean | null, error: unknown) => void, config?: PingConfig): void;
};

export const promise: {
    /**
     * Executes the system ping utility.
     *
     * @param addr Hostname or IP address.
     * @param config Ping configuration.
     */
    probe(addr: string, config?: PingConfig): Promise<PingResponse>;
};
