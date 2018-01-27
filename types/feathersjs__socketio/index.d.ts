// Type definitions for @feathersjs/socketio 3.0
// Project: http://feathersjs.com/
// Definitions by: Jan Lohage <https://github.com/j2L4e>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript

/// <reference types="socket.io" />
/// <reference types="feathersjs__socket-commons"/>

export default function feathersSocketIO(callback: (io: SocketIO.Server) => void): () => void;
export default function feathersSocketIO(options: number | SocketIO.ServerOptions, callback?: (io: SocketIO.Server) => void): () => void;
export default function feathersSocketIO(port: number, options?: SocketIO.ServerOptions, callback?: (io: SocketIO.Server) => void): () => void;
