// Type definitions for events 1.1
// Project: https://github.com/Gozala/events
// Definitions by: Yasunori Ohoka <https://github.com/yasupeke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export type Listener = (...args: any[]) => void;

export class EventEmitter {
  static listenerCount(emitter: EventEmitter, type: string): number;
  static defaultMaxListeners: number;

  setMaxListeners(n: number): this;
  emit(type: string, ...args: any[]): boolean;
  addListener(type: string, listener: Listener): this;
  on(type: string, listener: Listener): this;
  once(type: string, listener: Listener): this;
  removeListener(type: string, listener: Listener): this;
  removeAllListeners(type: string): this;
  listeners(type: string): Listener[];
  listenerCount(type: string): number;
}
