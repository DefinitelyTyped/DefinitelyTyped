import { EventEmitter } from "events";

export interface LogFn {
    (message: string, error: Error, context?: any): void;
    (message_or_error: string | Error, context?: any): void;
    (context: any): void;
}

export type LogLevel = "trace" | "debug" | "info" | "warn" | "error" | "fatal";

export interface LoggerOptions {
    sequence?: handlers.Handler;
    handlers?: handlers.Handler[];
    message?: string;
    level?: LogLevel;
    maxListeners?: number;
}

export interface Logger {
    trace: LogFn;
    debug: LogFn;
    info: LogFn;
    warn: LogFn;
    error: LogFn;
    fatal: LogFn;
    log: LogFn;
    child: (options: LoggerOptions) => Logger;
}

export class Logger extends EventEmitter implements Logger {
    constructor(options?: LoggerOptions);
}

export namespace handlers {
    type PropertyName = string | number | symbol;

    type Event = {
        message?: string;
        level: LogLevel;
        error?: { message: string; level: string; error: any };
    } & Record<string, any>;

    interface Handler extends EventEmitter {
        /**
         * handles the event
         * @remarks handle must emit 'message' event, passing on the altered event
         */
        handle(event: Event): void;
    }

    class Merge extends EventEmitter implements Handler {
        constructor(other: Record<string, any>, options?: { key?: PropertyName | PropertyName[]; invert?: boolean });
        handle(event: Event): void;
    }

    class KeyFilter extends EventEmitter implements Handler {
        constructor(other: { include?: string[]; exclude?: string[] });
        handle(event: Event): void;
    }

    class Oversized extends EventEmitter implements Handler {
        constructor(options: { size: number });
        handle(event: Event): void;
    }

    class Sequence extends EventEmitter implements Handler {
        constructor(handlers?: Handler[]);
        handle(event: Event): void;
    }

    class Env extends EventEmitter implements Handler {
        handle(event: Event): void;
    }
    class Noop extends EventEmitter implements Handler {
        handle(event: Event): void;
    }
    class Repo extends EventEmitter implements Handler {
        handle(event: Event): void;
    }
    class Tracer extends EventEmitter implements Handler {
        handle(event: Event): void;
    }
    class Process extends EventEmitter implements Handler {
        handle(event: Event): void;
    }
    class System extends EventEmitter implements Handler {
        handle(event: Event): void;
    }
    class Timestamp extends EventEmitter implements Handler {
        handle(event: Event): void;
    }
    class Flatten extends EventEmitter implements Handler {
        handle(event: Event): void;
    }
    class Unflatten extends EventEmitter implements Handler {
        handle(event: Event): void;
    }
}
