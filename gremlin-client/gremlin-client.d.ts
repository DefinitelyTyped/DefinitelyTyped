// Type definitions for Gremlin-Client 1.0.3
// Project: https://www.npmjs.com/package/gremlin-client
// Definitions by: Prabakar Kalivaradan <https://github.com/kprabakar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// This is just kick-starter definition. Should be improved much more.

declare module "gremlin-client" {

  export interface GremlinClient {
    execute(script: string, bindings?: {}, message?: string, callback?: Function): void;
    execute(script: string, bindings: {}, callback?: Function): void;
    stream(script: string, bindings?: {}, message?: string): NodeJS.EventEmitter;
  }

  export function createClient(port?: number, host?: string, options?: {session?: boolean}): GremlinClient;

}
