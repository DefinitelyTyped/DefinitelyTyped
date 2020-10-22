// Type definitions for event-emitter-es6 1.1
// Project: https://github.com/insane-jo/event-emitter#readme
// Definitions by: Anton Strömkvist <https://github.com/ahstro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
  emitDelay?: number;
  strictMode?: boolean;
}

type Listener = (...args: any[]) => void;

declare class EventEmitter {
  constructor(options?: Options);
  on(type: string, listener: Listener): void;
  once(type: string, listener: Listener): void;
  off(type: string, listener?: Listener): void;
  emit(type: string, ...eventArgs: any[]): void;
  emitSync(type: string, ...eventArgs: any[]): void;
  destroy(): void;
}

export = EventEmitter;
