// Type definitions for @hapi/glue 6.1
// Project: https://github.com/hapijs/glue
// Definitions by: Gareth Parker <https://github.com/garfty>
//                 Silas Rech <https://github.com/lenovouser>
//                 Avery Fay <https://github.com/btmorex>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Plugin, Server, ServerOptions } from "@hapi/hapi";

export interface Options {
  relativeTo: string;
  preConnections?: (Server: Server, next: (err: any) => void) => void;
  preRegister?: (Server: Server, next: (err: any) => void) => void;
}

export interface PluginObject {
  plugin: string | Plugin<any>;
  options?: any;
  routes?: any;
}

export interface Manifest {
  server: ServerOptions;
  register?: {
    plugins: string[] | PluginObject[] | Array<(string|PluginObject)>
  };
}

export function compose(manifest: Manifest, options?: Options): Promise<Server>;
