/// <reference lib="DOM" />

import EventSource = require("eventsource");

const eventSource = new EventSource("http://foobar");
let readyState: number = eventSource.readyState;
let closedState: number = eventSource.CLOSED;
closedState = EventSource.CLOSED;
let connectingState: number = eventSource.CONNECTING;
connectingState = EventSource.CONNECTING;
let openState: number = eventSource.OPEN;
openState = EventSource.OPEN;
let url: string = eventSource.url;
let withCredentials: boolean = eventSource.withCredentials;
eventSource.onmessage = (event: MessageEvent) => {};
eventSource.onerror = (event: MessageEvent) => {};
eventSource.onopen = (event: MessageEvent) => {};
eventSource.addEventListener = (type: string, listener: EventListener) => {};
eventSource.dispatchEvent = (event: Event) => true;
eventSource.removeEventListener = (type: string, listener: EventListener) => {};
eventSource.close();

import EventSourcePolyfill = require("eventsource/lib/eventsource-polyfill");

const eventSourcePolyfill = new EventSourcePolyfill("http://foobar");
readyState = eventSourcePolyfill.readyState;
closedState = eventSource.CLOSED;
closedState = EventSource.CLOSED;
connectingState = eventSource.CONNECTING;
connectingState = EventSource.CONNECTING;
openState = eventSource.OPEN;
openState = EventSource.OPEN;
url = eventSourcePolyfill.url;
withCredentials = eventSource.withCredentials;
eventSourcePolyfill.onmessage = (event: MessageEvent) => {};
eventSourcePolyfill.onerror = (event: MessageEvent) => {};
eventSourcePolyfill.onopen = (event: MessageEvent) => {};
eventSourcePolyfill.addEventListener = (type: string, listener: EventListener) => {};
eventSourcePolyfill.dispatchEvent = (event: Event) => true;
eventSourcePolyfill.removeEventListener = (type: string, listener: EventListener) => {};
eventSourcePolyfill.close();
