// Type definitions for @feathersjs/socketio-client 1.0
// Project: http://feathersjs.com/
// Definitions by: Jan Lohage <https://github.com/j2L4e>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript

/// <reference types="socket.io-client" />

export default function feathersSocketIOClient(socket: SocketIOClient.Socket, options?: FeathersSocketIOClientOptions): () => void;

export interface FeathersSocketIOClientOptions {
    timeout?: number;
}
