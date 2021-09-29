export class Loader {
    constructor(maxRequests?: number);
    MAX_REQUESTS: number;
    events: Events;
    _loading: number;
    _queue: any[];
    _promises: {
        json: (r: any) => any;
        blob: (r: any) => any;
        arrayBuffer: (r: any) => any;
        imageBitmap: (r: any) => any;
        text: (r: any) => any;
    };
    load(params: any, callback: any): void;
    fetch(params: any): Promise<{
        status: string;
        data: any;
    } | {
        status: string;
        msg: any;
    }>;
    _exec(): Promise<void>;
    abort(): void;
}
import { Events } from "../Events.js";
