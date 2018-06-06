// Type definitions for eventsource 1.0
// Project: http://github.com/EventSource/eventsource
// Definitions by: Scott Lee Davis <https://github.com/scottleedavis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare class EventSource {
  constructor(url: string, eventSourceInitDict?: EventSource.EventSourceInitDict);

  static CLOSED: EventSource.ReadyState;
  static CONNECTING: EventSource.ReadyState;
  static OPEN: EventSource.ReadyState;

  url: string;
  readyState: EventSource.ReadyState;
  onopen: EventListener;
  onmessage: EventListener;
  onerror: EventListener;
  addEventListener(type: string, listener: EventListener): void;
  close(): void;
}

declare namespace EventSource {
  enum ReadyState {CONNECTING = 0, OPEN = 1, CLOSED = 2}

  interface EventSourceInitDict {
    withCredentials?: boolean;
    headers?: object;
    proxy?: string;
    https?: object;
    rejectUnauthorized?: boolean;
  }
}

export = EventSource;
export as namespace EventSource;
