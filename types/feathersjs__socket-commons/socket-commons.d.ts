declare module '@feathersjs/socket-commons' {
    export type Connection = any; // todo: spec connection

    export interface Channel {
        join(...connections: Connection[]): this;

        leave(...connections: Connection[]): this;

        filter(callback: (connection: Connection) => boolean): Channel;

        send(data: any): this;
    }
}
