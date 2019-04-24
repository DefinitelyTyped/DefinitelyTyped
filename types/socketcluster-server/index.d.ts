// Type definitions for socketcluster-server 14.2
// Project: https://github.com/SocketCluster/socketcluster-server
// Definitions by: Daniel Rose <https://github.com/DanielRose>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { Server } from "http";

export import SCServer = require("./scserver");
export import SCServerSocket = require("./scserversocket");

export function listen(port?: number, options?: SCServer.SCServerOptions, listeningListener?: () => void): SCServer;
export function listen(port?: number, listeningListener?: () => void): SCServer;

export function attach(server: Server, options?: SCServer.SCServerOptions): SCServer;
