// Type definitions for glue
// Project: https://github.com/hapijs/glue
// Definitions by: Gareth Parker <https://github.com/garfty>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { Server, ServerOptions } from "hapi";

export interface Options {
  relativeTo: string;
  preConnections?: (Server:Server, next:(err:any)=>void ) => void;
  preRegister?: (Server:Server, next:(err:any)=>void ) => void;
}

interface Plugin {
  plugin: string | {
      register:string;
      options?:any;
  };
  options?: any;
  routes?: any
}

interface Manifest {
  server: ServerOptions;
  register?: {
    plugins: Array<Plugin>
  }
}

export function compose(manifest: Manifest, options?: Options): Server;

