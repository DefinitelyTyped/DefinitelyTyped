export import factory = require("./lib/factory");
export import AGClientSocket = require("./lib/clientsocket");

export function create(options?: AGClientSocket.ClientOptions): AGClientSocket;

export const version: string;
