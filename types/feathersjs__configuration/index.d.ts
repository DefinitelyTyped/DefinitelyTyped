// Type definitions for @feathersjs/configuration 1.0
// Project: https://feathersjs.com
// Definitions by: Jan Lohage <https://github.com/j2L4e>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript
// TypeScript Version: 2.8

import { Application } from '@feathersjs/feathers';

export default function feathersConfiguration(): <T>(app: Application<T>) => Application<T>;
