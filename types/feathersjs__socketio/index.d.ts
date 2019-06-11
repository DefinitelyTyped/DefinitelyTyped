// Type definitions for @feathersjs/socketio 3.0
// Project: https://feathersjs.com
// Definitions by: Jan Lohage <https://github.com/j2L4e>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript
// TypeScript Version: 2.8

/// <reference types="node" />

import * as http from 'http';
import * as io from 'socket.io';

declare const socketio: FeathersSocketIO;
export = socketio;

interface FeathersSocketIO {
  (callback?: (io: io.Server) => void): () => void;
  (options: number | io.ServerOptions, callback?: (io: io.Server) => void): () => void;
  (port: number, options?: io.ServerOptions, callback?: (io: io.Server) => void): () => void;
  readonly SOCKET_KEY: unique symbol;
  default: FeathersSocketIO;
}
