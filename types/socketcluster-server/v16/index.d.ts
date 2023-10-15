// Type definitions for socketcluster-server 16.1
// Project: https://github.com/SocketCluster/socketcluster-server
// Definitions by: Daniel Rose <https://github.com/DanielRose>
//                 Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Server } from "http";

export import AGServer = require("./server");
export import AGServerSocket = require("./serversocket");

export function listen(port?: number, options?: AGServer.AGServerOptions, listeningListener?: () => void): AGServer;
export function listen(port?: number, listeningListener?: () => void): AGServer;

export function attach(server: Server, options?: AGServer.AGServerOptions): AGServer;
