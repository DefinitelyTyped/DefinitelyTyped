// Type definitions for @architect/functions 3.13
// Project: https://github.com/architect/functions
// Definitions by: Scott Willeke <https://github.com/activescott>
//                 Ryan Block <https://github.com/ryanblock>
//                 Francis Gulotta <https://github.com/reconbot>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import { ArcHttp } from "./http";
import { ArcTables } from "./tables";
import { ArcWebSocket } from "./web-socket";

export { HttpHandler, HttpRequest, HttpResponse } from "./http";

export const http: ArcHttp;
export const tables: ArcTables;
export const ws: ArcWebSocket;

export type Todo = any;
export const static: Todo;
export const events: Todo;
export const queues: Todo;
