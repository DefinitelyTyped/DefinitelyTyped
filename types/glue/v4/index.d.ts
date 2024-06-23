import { Server, ServerConnectionOptions, ServerOptions } from "hapi";

export interface Options {
    relativeTo: string;
    preConnections?: ((Server: Server, next: (err: any) => void) => void) | undefined;
    preRegister?: ((Server: Server, next: (err: any) => void) => void) | undefined;
}

export interface Plugin {
    plugin: string | {
        register: string;
        options?: any;
    };
    options?: any;
}

export interface Manifest {
    server: ServerOptions;
    connections: ServerConnectionOptions[];
    registrations?: Plugin[] | undefined;
}

export function compose(
    manifest: Manifest,
    options?: Options,
    callback?: (err?: any, server?: Server) => void,
): Promise<Server>;
