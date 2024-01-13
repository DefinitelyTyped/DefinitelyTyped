import { Server, ServerOptions } from "hapi";

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
    routes?: any;
}

export interface Manifest {
    server: ServerOptions;
    register?: {
        plugins: string[] | Plugin[] | Array<(string | Plugin)>;
    } | undefined;
}

export function compose(manifest: Manifest, options?: Options): Promise<Server>;
