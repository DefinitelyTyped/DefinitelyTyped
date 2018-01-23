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
