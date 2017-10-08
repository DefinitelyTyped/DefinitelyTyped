// Type definitions for net-keepalive
// Project: https://github.com/hertzg/node-net-keepalive
// Definitions by: George Kotchlamazashvili <georgedot@gmail.com>
// Definitions: https://github.com/hertzg/node-net-keepalive

/// <reference types="node" />

declare module "net-keepalive" {
    type NodeJSSocketWithFileDescriptor = NodeJS.Socket | {_handle: {_fd: number}}

    function setKeepAliveProbes(socket: NodeJSSocketWithFileDescriptor, cnt: number ) : number
    function setKeepAliveInterval(socket: NodeJSSocketWithFileDescriptor, intvl: number) : number

    export = {
        setKeepAliveProbes,
        setKeepAliveInterval
    }
}