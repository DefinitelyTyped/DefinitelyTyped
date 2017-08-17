import { Emitter } from "event-emitter";

declare namespace pipe {
    interface EmitterPipe {
        close(): void;
    }
}

declare function pipe(source: Emitter, target: Emitter, emitMethodName?: string | Symbol): pipe.EmitterPipe;
export = pipe;
