// Type definitions for kill-port 1.6
// Project: https://github.com/tiaanduplessis/kill-port
// Definitions by: 0xGorilla <https://github.com/0xGorilla>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Kill the process running on given port
 * @param port Port where the process is running
 * @param method Protocol where the port is running. Defaults to `tcp`
 */
declare function kill(port: number, method?: 'tcp' | 'udp'): Promise<void>;

export default kill;
