import { Server } from "http";

export import SCServer = require("./scserver");
export import SCServerSocket = require("./scserversocket");

export function listen(port?: number, options?: SCServer.SCServerOptions, listeningListener?: () => void): SCServer;
export function listen(port?: number, listeningListener?: () => void): SCServer;

export function attach(server: Server, options?: SCServer.SCServerOptions): SCServer;
