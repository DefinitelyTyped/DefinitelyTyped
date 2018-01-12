// Type definitions for @feathersjs/express 1.1
// Project: http://feathersjs.com/
// Definitions by: Jan Lohage <https://github.com/j2L4e>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript
// TypeScript Version: 2.2

import { Application as FeathersApplication } from '@feathersjs/feathers';
import { Application as ExpressApplication } from 'express';

export default function feathersExpress<T>(app: FeathersApplication<T>): ExpressApplication & FeathersApplication<T>;
