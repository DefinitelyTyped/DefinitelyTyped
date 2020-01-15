// Type definitions for @hapi/glue 6.1
// Project: https://github.com/hapijs/glue
// Definitions by: Gareth Parker <https://github.com/garfty>
//                 Silas Rech <https://github.com/lenovouser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Server, ServerOptions } from "@hapi/hapi";

export interface Options {
  relativeTo: string;
  preConnections?: (Server: Server, next: (err: any) => void) => void;
  preRegister?: (Server: Server, next: (err: any) => void) => void;
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
    plugins: string[] | Plugin[] | Array<(string|Plugin)>
  };
}

export function compose(manifest: Manifest, options?: Options): Promise<Server>;
