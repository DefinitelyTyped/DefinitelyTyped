// Type definitions for socketcluster-client 13.0
// Project: https://github.com/SocketCluster/socketcluster-client, http://socketcluster.io
// Definitions by: Daniel Rose <https://github.com/DanielRose>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export import SCClientSocket = require('./lib/scclientsocket');

export function create(options?: SCClientSocket.ClientOptions): SCClientSocket;

/** @deprecated */
export function connect(options?: SCClientSocket.ClientOptions): SCClientSocket;

export function destroy(socket: SCClientSocket): void;

export const clients: {
    [id: string]: SCClientSocket;
};

export const version: string;
