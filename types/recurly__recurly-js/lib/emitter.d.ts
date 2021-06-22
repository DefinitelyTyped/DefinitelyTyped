type Listener = (...args: any[]) => void;

interface Emitter<Event = string> {
  on(event: Event, listener: Listener): Emitter<Event>;
  once(event: Event, listener: Listener): Emitter<Event>;
  off(event?: Event, listener?: Listener): Emitter<Event>;
  emit(event: Event, ...args: any[]): Emitter<Event>;
  listeners(event: Event): Listener[];
  hasListeners(event: Event): boolean;
}

export {
  Emitter
};
