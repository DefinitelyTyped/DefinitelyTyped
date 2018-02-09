// Type definitions for @feathersjs/socket-commons 3.1
// Project: http://feathersjs.com/
// Definitions by: Jan Lohage <https://github.com/j2L4e>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript
// TypeScript Version: 2.3

import { HookContext } from '@feathersjs/feathers';

export type Connection = any; // todo: spec connection

export interface Channel {
    join(...connections: Connection[]): this;

    leave(...connections: Connection[]): this;

    filter(callback: (connection: Connection) => boolean): Channel;

    send(data: any): this;
}

declare module '@feathersjs/feathers' {
    interface ServiceAddons<T> {
        publish(callback: (data: T, hook: HookContext<T>) => Channel): this;

        publish(event: string, callback: (data: T, hook: HookContext<T>) => Channel): this;
    }

    interface Application<ServiceTypes> {
        channel(...names: string[]): Channel;

        publish<T>(callback: (data: T, hook: HookContext<T>) => Channel | Channel[]): Application<ServiceTypes>;

        publish<T>(event: string, callback: (data: T, hook: HookContext<T>) => Channel | Channel[]): Application<ServiceTypes>;
    }
}
