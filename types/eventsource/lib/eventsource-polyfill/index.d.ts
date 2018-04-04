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
