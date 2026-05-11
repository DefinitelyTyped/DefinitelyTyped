import { Plugin, Server, ServerOptions } from "@hapi/hapi";

export interface Options {
    relativeTo: string;
    preConnections?: ((Server: Server, next: (err: any) => void) => void) | undefined;
    preRegister?: ((Server: Server, next: (err: any) => void) => void) | undefined;
}

export interface PluginObject {
    plugin: string | Plugin<any>;
    options?: any;
    routes?: any;
}

export interface Manifest {
    server: ServerOptions;
    register?: {
        plugins: string[] | PluginObject[] | Array<(string | PluginObject)>;
    } | undefined;
}

export function compose(manifest: Manifest, options?: Options): Promise<Server>;
