import { EventEmitter } from 'events';

type LogFn = {
  (message: string, error: Error, context?: any): void;
  (message: string, context?: any): void;
  (error: Error, context?: any): void;
  (context: any): void;
};

type LogLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal';

export type LoggerOptions = {
  sequence?: handlers.Handler;
  handlers?: handlers.Handler[];
  message?: string;
  level?: LogLevel;
  maxListeners?: number;
};

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

declare namespace handlers {
  type PropertyName = string | number | symbol;

  export type Event = {
    message?: string;
    level: LogLevel;
    error?: { message: string; level: string; error: any };
  } & Record<string, any>

  export interface Handler extends EventEmitter {
    /**
     * handles the event
     * @param event 
     * @remarks handle must emit 'message' event, passing on the altered event
     */
    handle(event: Event): void;
  }

  export class Merge extends EventEmitter implements Handler {
    constructor(other: Record<string, any>, options?: { key?: PropertyName | PropertyName[]; invert?: boolean });
    handle(event: Event): void;
  }

  export class KeyFilter extends EventEmitter implements Handler {
    constructor(other: { include?: string[]; exclude?: string[] });
    handle(event: Event): void;
  }

  export class Oversized extends EventEmitter implements Handler {
    constructor(options: { size: number });
    handle(event: Event): void;
  }

  export class Sequence extends EventEmitter implements Handler {
    constructor(handlers?: Handler[]);
    handle(event: Event): void;
  }

  export class Env extends EventEmitter implements Handler { handle(event: Event): void; }
  export class Noop extends EventEmitter implements Handler { handle(event: Event): void; }
  export class Repo extends EventEmitter implements Handler { handle(event: Event): void; }
  export class Tracer extends EventEmitter implements Handler { handle(event: Event): void; }
  export class Process extends EventEmitter implements Handler { handle(event: Event): void; }
  export class System extends EventEmitter implements Handler { handle(event: Event): void; }
  export class Timestamp extends EventEmitter implements Handler { handle(event: Event): void; }
  export class Flatten extends EventEmitter implements Handler { handle(event: Event): void; }
  export class Unflatten extends EventEmitter implements Handler { handle(event: Event): void; }
}
