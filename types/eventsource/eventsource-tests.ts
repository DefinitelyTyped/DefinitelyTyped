import * as EventSource from "eventsource";

const eventSource = new EventSource("http://foobar");
eventSource.onmessage = (x: any) => {};
eventSource.onerror = (x: any) => {};
eventSource.onopen = (x: any) => {};
eventSource.close();

import * as EventSourcePolyfill from "eventsource/lib/eventsource-polyfill";

const eventSourcePolyfill = new EventSourcePolyfill("http://foobar");
eventSourcePolyfill.onmessage = (x: any) => {};
eventSourcePolyfill.onerror = (x: any) => {};
eventSourcePolyfill.onopen = (x: any) => {};
eventSourcePolyfill.close();
