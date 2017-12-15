// Type definitions for @feathersjs/socket-commons
// Project: http://feathersjs.com/
// Definitions by: Jan Lohage <https://github.com/j2L4e/>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript

declare module '@feathersjs/socket-commons' {
  // (JL) does it have a public API?
  export type Connection = any; // todo: spec connection

  export interface Channel {
    join(...connections: Connection[]): this;
    leave(...connections: Connection[]): this;
    filter(callback: (connection: Connection) => boolean): Channel;
    send(data: any): this;
  }
}

declare module '@feathersjs/feathers' {
  import { Channel } from '@feathersjs/socket-commons';
  import { HookContext } from '@feathersjs/feathers';

  export interface ServiceAddons<T> {
    publish(callback: (data: T, hook: HookContext<T>) => Channel): this
    publish(event: string, callback: (data: T, hook: HookContext<T>) => Channel): this
  }

  export interface Application<ServiceTypes = {}> {
    channel(...names: string[]): Channel;

    publish<T>(callback: (data: T, hook: HookContext<T>) => Channel | Channel[]): Application<ServiceTypes>;
    publish<T>(event: string, callback: (data: T, hook: HookContext<T>) => Channel | Channel[]): Application<ServiceTypes>;
  }
}