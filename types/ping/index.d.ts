// Type definitions for ping 0.2
// Project: http://github.com/danielzzz/node-ping
// Definitions by: Richard Honor <https://github.com/RMHonor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export interface PingConfig {
    /**
     * Map IP address to hostname or not. Default `true`
     */
    numeric?: boolean;
    /**
     * Time duration, in seconds, for ping command to exit. Default `2` on Mac/Linux, `5` on Windows.
     */
    timeout?: number;
    /**
     *  Exit after sending number of `ECHO_REQUEST`. Default `1`
     */
    min_reply?: number;
    /**
     * Ping via ipv6 or not. Default `false`
     */
    v6?: boolean;
    /**
     * Source address for sending the ping.
     */
    sourceAddr?: string;
    /**
     * Additional arguments. Default `[]`
     */
    extra?: string[];
  }

  export interface PingResponse {
    /**
     * The input IP address or host. `unknown` if ping fails.
     */
    host: string;
    /**
     * Numeric target IP address
     */
    numeric_host?: string;
    /**
     * `true` for existing host
     */
    alive: boolean;
    /**
     * Raw stdout from system ping
     */
    output: string;
    /**
     * Time (float) in ms for first successful ping response. `unknown` if ping fails.
     */
    time: number | 'unknown';
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
  }

  export const sys: {
    /**
     * Performs a system ping utility.
     *
     * @param addr Hostname or IP address
     * @param cb Response callback.
     *   First argument is successful response boolean.
     *   Second argument is any error, `null` if no error.
     * @param config Optional configuration
     */
    probe(addr: string, cb: (isAlive: boolean, error: any) => void, config?: PingConfig): void;
  };

  export const promise: {
    /**
     * Performs a system ping utility.
     *
     * @param addr Hostname or IP address
     * @param config Optional configuration
     */
    probe(addr: string, config?: PingConfig): Promise<PingResponse>;
  };
