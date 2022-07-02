/* tslint:disable:comment-format no-namespace */

"use strict";

import {
    Workbox,
    WorkboxEvent,
    WorkboxEventMap,
    messageSW,
} from "workbox-window";

//==============================================================================
// WorkboxWindow.Workbox
//==============================================================================

export namespace WorkboxTest {
    declare const url: string;
    declare const options: RegistrationOptions;

    // $ExpectType Workbox
    new Workbox(url);
    // $ExpectType Workbox
    new Workbox(url, options);

    declare const workbox: Workbox;
    declare const event: WorkboxEvent;
    declare const eventListener: () => void;
    declare const eventType: keyof WorkboxEventMap;
    declare const messageData: any;
    declare const registerOptions: Workbox.RegisterOptions;

    // $ExpectType Promise<ServiceWorker>
    workbox.active;

    // $ExpectType Promise<ServiceWorker>
    workbox.controlling;

    // $ExpectType void
    workbox.addEventListener(eventType, eventListener);

    // $ExpectType void
    workbox.dispatchEvent(event);

    // $ExpectType Promise<ServiceWorker>
    workbox.getSW();

    // $ExpectType Promise<any>
    workbox.messageSW(messageData);

    // $ExpectType Promise<ServiceWorkerRegistration>
    workbox.register();
    // $ExpectType Promise<ServiceWorkerRegistration>
    workbox.register(registerOptions);

    // $ExpectType void
    workbox.removeEventListener(eventType, eventListener);
}

//==============================================================================
// WorkboxWindow.messageSW
//==============================================================================

export namespace MessageSWTest {
    declare const data: any;
    declare const worker: ServiceWorker;

    // $ExpectType Promise<any>
    messageSW(worker, data);
}
