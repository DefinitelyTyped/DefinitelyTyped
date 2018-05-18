// Type definitions for net-keepalive 0.4
// Project: https://github.com/hertzg/node-net-keepalive
// Definitions by: George Kotchlamazashvili <https://github.com/hertzg>
// Definitions: https://github.com/hertzg/node-net-keepalive
// TypeScript Version: 2.8

/// <reference types="node" />

export type NodeJSSocketWithFileDescriptor = NodeJS.Socket | { _handle: { _fd: number } }
export function setKeepAliveProbes(socket: NodeJSSocketWithFileDescriptor, cnt: number): number
export function setKeepAliveInterval(socket: NodeJSSocketWithFileDescriptor, intvl: number): number