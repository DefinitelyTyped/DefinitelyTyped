import { HookContext } from "@feathersjs/feathers";

export type Connection = any; // todo: spec connection

export interface Channel {
    join(...connections: Connection[]): this;

    leave(...connections: Connection[]): this;

    filter(callback: (connection: Connection) => boolean): Channel;

    send(data: any): this;
}

declare module "@feathersjs/feathers" {
    interface ServiceAddons<T> {
        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        publish(callback: (data: T, hook: HookContext<T>) => Channel | Channel[] | void): this;

        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        publish(event: string, callback: (data: T, hook: HookContext<T>) => Channel | Channel[] | void): this;
    }

    interface Application<ServiceTypes> {
        channels: string[];

        channel(name: string[]): Channel;
        channel(...names: string[]): Channel;

        // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
        publish<T>(callback: (data: T, hook: HookContext<T>) => Channel | Channel[] | void): Application<ServiceTypes>;

        publish<T>(
            event: string,
            // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
            callback: (data: T, hook: HookContext<T>) => Channel | Channel[] | void,
        ): Application<ServiceTypes>;
    }
}
