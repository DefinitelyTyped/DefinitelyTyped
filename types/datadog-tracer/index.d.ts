import { EventEmitter } from "events";
import * as opentracing from "opentracing";

export as namespace Tracer;
export = Tracer;

interface TracerOptions {
    service: string;
    hostname?: string | undefined;
    port?: number | undefined;
    protocol?: string | undefined;
    endpoint?: string | undefined;
}

declare class Tracer extends opentracing.Tracer {
    constructor(tracerOptions: TracerOptions);

    on(method: "error", cb?: (e: any) => void): void;
    addEventListener(method: "error", cb?: (e: any) => void): void;
}
