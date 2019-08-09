// Type definitions for @feathersjs/primus 3.0
// Project: https://feathersjs.com
// Definitions by: Jan Lohage <https://github.com/j2L4e>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript
// TypeScript Version: 2.8

/// <reference types="feathersjs__socket-commons"/>

// primus removed its typings from the repo https://github.com/primus/primus/pull/623, as of 01/2018 there are none on DT
export default function feathersPrimus(options: any, callback?: (primus: any) => void): () => void;
