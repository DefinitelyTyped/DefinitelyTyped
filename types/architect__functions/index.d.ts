// Type definitions for @architect/functions 3.13
// Project: https://github.com/architect/functions
// Definitions by: Scott Willeke <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { ArcHttp } from './http';
import { ArcTables } from './tables';
export { HttpRequest, HttpResponse, HttpHandler } from './http';

export const http: ArcHttp;
export const tables: ArcTables;
// TODO: export const static: ArcStatic
// TODO: export const events: ArcEvents
// TODO: export const queues: ArcQueues
