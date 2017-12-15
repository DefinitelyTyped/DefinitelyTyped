// Type definitions for @feathersjs/primus-client
// Project: http://feathersjs.com/
// Definitions by: Jan Lohage <https://github.com/j2L4e/>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript


declare module '@feathersjs/primus-client' {
  import { Primus } from 'primus';

  export default function (socket: Primus, options?: FeathersPrimusClientOptions): () => void

  export interface FeathersPrimusClientOptions {
    timeout?: number;
  }
}

