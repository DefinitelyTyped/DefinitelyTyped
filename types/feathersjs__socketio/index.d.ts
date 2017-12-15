// Type definitions for @feathersjs/socketio
// Project: http://feathersjs.com/
// Definitions by: Jan Lohage <https://github.com/j2L4e/>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript

///<reference types="socket.io" />

declare module '@feathersjs/socketio' {
  export default function (callback: (io: SocketIO.Server) => void): () => void;
  export default function (options: number | SocketIO.ServerOptions, callback?: (io: SocketIO.Server) => void): () => void;
  export default function (port: number, options?: SocketIO.ServerOptions, callback?: (io: SocketIO.Server) => void): () => void;
}