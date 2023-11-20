import { Server } from "http";

export import AGServer = require("./server");
export import AGServerSocket = require("./serversocket");

export function listen(port?: number, options?: AGServer.AGServerOptions, listeningListener?: () => void): AGServer;
export function listen(port?: number, listeningListener?: () => void): AGServer;

export function attach(server: Server, options?: AGServer.AGServerOptions): AGServer;
