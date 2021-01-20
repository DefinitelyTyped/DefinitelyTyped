// Type definitions for @feathersjs/primus-client 1.0
// Project: https://feathersjs.com
// Definitions by: Jan Lohage <https://github.com/j2L4e>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// primus removed its typings from the repo https://github.com/primus/primus/pull/623, as of 01/2018 there are none on DT
export default function feathersPrimusClient(socket: any, options?: FeathersPrimusClientOptions): () => void;

export interface FeathersPrimusClientOptions {
    timeout?: number;
}
