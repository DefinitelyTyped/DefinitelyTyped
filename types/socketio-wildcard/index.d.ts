/// <reference types="socket.io-client" />
import SocketIO = require("socket.io");

import { EventEmitter } from "events";
import Socket = SocketIO.Socket;
import ClientSocket = SocketIOClient.Socket;

export = sioWildcard;

declare function sioWildcard(
    emitterCtor?: { prototype: typeof EventEmitter.prototype },
): (socket: Socket | ClientSocket, next?: (err?: any) => void) => void;
