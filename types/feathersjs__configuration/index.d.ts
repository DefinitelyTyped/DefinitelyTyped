// Type definitions for @feathersjs/configuration
// Project: http://feathersjs.com/
// Definitions by: Jan Lohage <https://github.com/j2L4e/>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript

declare module '@feathersjs/configuration' {
  import { Application } from '@feathersjs/feathers';

  export default function (): <T>(this: Application<T>) => Application<T>
}