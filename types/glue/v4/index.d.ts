// Type definitions for glue 4.2
// Project: https://github.com/hapijs/glue
// Definitions by: Greg Jednaszewski <https://github.com/gjednaszewski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { Server, ServerConnectionOptions, ServerOptions } from "hapi";

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
}

export interface Manifest {
  server: ServerOptions;
  connections: ServerConnectionOptions[];
  registrations?: Plugin[];
}

export function compose(manifest: Manifest,
                        options?: Options,
                        callback?: (err?: any, server?: Server) => void): Promise<Server>;
