// Type definitions for @feathersjs/primus
// Project: http://feathersjs.com/
// Definitions by: Jan Lohage <https://github.com/j2L4e/>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript

declare module '@feathersjs/primus' {
  import {
    IPrimusOptions,
    Primus
  } from 'primus';

  export default function (options: IPrimusOptions, callback?: (primus: Primus) => void): () => void
}