export import SCClientSocket = require("./lib/scclientsocket");

export function create(options?: SCClientSocket.ClientOptions): SCClientSocket;

/** @deprecated */
export function connect(options?: SCClientSocket.ClientOptions): SCClientSocket;

export function destroy(socket: SCClientSocket): void;

export const clients: {
    [id: string]: SCClientSocket;
};

export const version: string;
