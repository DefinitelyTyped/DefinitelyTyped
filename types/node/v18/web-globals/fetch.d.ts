export {};

import * as undici from "undici-types";

type _FormData = typeof globalThis extends { onmessage: any } ? {} : undici.FormData;
type _Headers = typeof globalThis extends { onmessage: any } ? {} : undici.Headers;
type _MessageEvent = typeof globalThis extends { onmessage: any } ? {} : undici.MessageEvent;
type _Request = typeof globalThis extends { onmessage: any } ? {} : undici.Request;
type _RequestInit = typeof globalThis extends { onmessage: any } ? {} : undici.RequestInit;
type _Response = typeof globalThis extends { onmessage: any } ? {} : undici.Response;
type _ResponseInit = typeof globalThis extends { onmessage: any } ? {} : undici.ResponseInit;

declare global {
    function fetch(
        input: string | URL | Request,
        init?: RequestInit,
    ): Promise<Response>;

    interface FormData extends _FormData {}
    var FormData: typeof globalThis extends { onmessage: any; FormData: infer T } ? T : typeof undici.FormData;

    interface Headers extends _Headers {}
    var Headers: typeof globalThis extends { onmessage: any; Headers: infer T } ? T : typeof undici.Headers;

    interface MessageEvent extends _MessageEvent {}
    var MessageEvent: typeof globalThis extends { onmessage: any; MessageEvent: infer T } ? T
        : typeof undici.MessageEvent;

    interface Request extends _Request {}
    var Request: typeof globalThis extends { onmessage: any; Request: infer T } ? T : typeof undici.Request;

    interface RequestInit extends _RequestInit {}

    interface Response extends _Response {}
    var Response: typeof globalThis extends { onmessage: any; Response: infer T } ? T : typeof undici.Response;

    interface ResponseInit extends _ResponseInit {}
}
