// Type definitions for socketio-wildcard 2.0
// Project: https://github.com/hden/socketio-wildcard
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="socket.io" />
/// <reference types="socket.io-client" />

import EventEmitter = NodeJS.EventEmitter;
import Socket = SocketIO.Socket;
import ClientSocket = SocketIOClient.Socket;

export = sioWildcard;

declare function sioWildcard(emitterCtor?: { prototype: typeof EventEmitter.prototype }): (socket: Socket | ClientSocket, next?: (err?: any) => void) => void;
