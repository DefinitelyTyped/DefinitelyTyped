// Type definitions for socketcluster-client 16.0
// Project: https://github.com/SocketCluster/socketcluster-client, http://socketcluster.io
// Definitions by: Daniel Rose <https://github.com/DanielRose>
//                 Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export import factory = require("./lib/factory");
export import AGClientSocket = require("./lib/clientsocket");

export function create(options?: AGClientSocket.ClientOptions): AGClientSocket;

export const version: string;
