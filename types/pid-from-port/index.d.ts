// Type definitions for pid-from-port 1.1
// Project: https://github.com/kevva/pid-from-port#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pidFromPort;

/**
 * Get PID from a port
 * @param port Port to lookup.
 */
declare function pidFromPort(port: number): Promise<number>;

declare namespace pidFromPort {
    /**
     * Get PIDs for a list of ports.
     * @param ports Ports to lookup.
     * @returns A `Promise<Map>` with the port as key and the PID as value.
     */
    function all(ports: number[]): Promise<Map<number, number>>;
    /**
     * Get all PIDs from ports.
     * @returns A `Promise<Map>` with the port as key and the PID as value.
     */
    function list(): Promise<Map<number, number>>;
}
