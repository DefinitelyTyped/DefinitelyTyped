// Type definitions for @feathersjs/express 1.1
// Project: http://feathersjs.com/
// Definitions by: Jan Lohage <https://github.com/j2L4e>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript

import { Application } from '@feathersjs/feathers';

export default function feathersExpress<T>(app: Application<T>): Application<T>;
