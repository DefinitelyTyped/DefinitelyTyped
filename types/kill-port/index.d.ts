/// <reference types="node" />

import type { SuccessfulExec } from "shell-exec";

export = killPort;

/**
 * Kill the process running on given port.
 *
 * @param port Port where the process is running.
 * @param protocol Protocol for the port.
 *
 * @example
 * import kill = require('kill-port')
 * import * as http from 'http';
 * const port = 8080
 *
 * const server = http.createServer((req, res) => {
 *   res.writeHead(200, {
 *     'Content-Type': 'text/plain'
 *   })
 *
 *   res.end('Hi!')
 * })
 *
 * server.listen(port, () => {
 *   setTimeout(() => {
 *     // Currently you can kill ports running on TCP or UDP protocols
 *     kill(port, 'tcp')
 *       .then(console.log)
 *       .catch(console.log)
 *   }, 1000)
 * })
 */
declare function killPort(
    port: number,
    /** @default 'tcp' */
    protocol?: "tcp" | "udp",
): Promise<SuccessfulExec>;
