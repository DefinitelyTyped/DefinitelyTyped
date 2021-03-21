// Type definitions for @architect/functions 3.13
// Project: https://github.com/architect/functions
// Definitions by: Scott Willeke <https://github.com/activescott>
//                 Ryan Block <https://github.com/ryanblock>
//                 Francis Gulotta <https://github.com/reconbot>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { ArcHttp } from './http';
import { ArcTables } from './tables';

export { HttpRequest, HttpResponse, HttpHandler } from './http';

export const http: ArcHttp;
export const tables: ArcTables;

export type Todo = any;
export const static: Todo;
export const events: Todo;
export const queues: Todo;
export const ws: Todo;
