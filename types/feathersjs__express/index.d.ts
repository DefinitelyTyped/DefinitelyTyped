// Type definitions for @feathersjs/express
// Project: http://feathersjs.com/
// Definitions by: Jan Lohage <https://github.com/j2L4e/>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript

//todo: check if this package alters the Application interface

declare module '@feathersjs/express' {
  import { Application } from '@feathersjs/feathers';
  export default function <T>(app: Application<T>): Application<T>;
}
