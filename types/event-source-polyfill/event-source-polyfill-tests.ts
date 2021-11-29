/// <reference lib="dom" />

import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill';

declare const hubUrl: string;

// $ExpectType EventSourcePolyfill
const es = new EventSourcePolyfill('/events', {
    headers: {
        'X-Custom-Header': 'value',
    },
});

const es2 = new EventSourcePolyfill(hubUrl, {
    lastEventIdQueryParameterName: 'Last-Event-Id',
});

const nes = new NativeEventSource('/events', { withCredentials: true });

const typecheckPolyfill: EventSource = es;

// assigning the native to the polyfill typing doesnt work, however
// const typecheckNative: EventSourcePolyfill = nes;
