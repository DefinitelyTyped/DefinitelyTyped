// Type definitions for @feathersjs/socketio-client
// Project: http://feathersjs.com/
// Definitions by: Jan Lohage <https://github.com/j2L4e/>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript

///<reference types="socket.io-client" />

declare module '@feathersjs/socketio-client' {
  export default function(socket: SocketIOClient.Socket, options?: FeathersSocketIOClientOptions): () => void

  export interface FeathersSocketIOClientOptions {
    timeout?: number
  }
}
