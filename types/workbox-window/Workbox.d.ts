import { EventTargetShim } from './utils/EventTargetShim';
import { WorkboxEvent } from './utils/WorkboxEvent';

interface WorkboxMessageEvent extends WorkboxEvent {
    /**
     * The `data` property from the original `message` event.
     */
    readonly data: any;
}

interface WorkboxExtendableEvent extends WorkboxEvent {
    /**
     * The service worker instance.
     */
    readonly sw: ServiceWorker;
}

interface WorkboxUpdatableEvent extends WorkboxExtendableEvent {
    /**
     * True if a service worker was already
     * controlling when this `Workbox` instance called `register()`.
     */
    readonly isUpdate?: boolean;
}

interface WorkboxWaitingEvent extends WorkboxUpdatableEvent {
    /**
     * True if a service worker with
     * a matching `scriptURL` was already waiting when this `Workbox`
     * instance called `register()`.
     */
    readonly wasWaitingBeforeRegister?: boolean;
}

interface WokerboxEventMap {
    message: WorkboxMessageEvent;
    installed: WorkboxEvent;
    waiting: WorkboxWaitingEvent;
    controlling: WorkboxEvent;
    activated: WorkboxUpdatableEvent;
    redundant: WorkboxEvent;
    externalinstalled: WorkboxExtendableEvent;
    externalwaiting: WorkboxExtendableEvent;
    externalactivated: WorkboxExtendableEvent;
}

declare class Workbox extends EventTargetShim {
    /**
     * Creates a new Workbox instance with a script URL and service worker
     * options. The script URL and options are the same as those used when
     * calling `navigator.serviceWorker.register(scriptURL, options)`. See:
     * https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register
     */
    constructor(scriptURL: string, registerOptions?: RegistrationOptions);

    /**
     * Registers a service worker for this instances script URL and service
     * worker options. By default this method delays registration until after
     * the window has loaded.
     */
    register(): Promise<ServiceWorkerRegistration>;

    /**
     * Resolves to the service worker registered by this instance as soon as it
     * is active. If a service worker was already controlling at registration
     * time then it will resolve to that if the script URLs (and optionally
     * script versions) match, otherwise it will wait until an update is found
     * and activates.
     */
    readonly active: Promise<ServiceWorker>;

    /**
     * Resolves to the service worker registered by this instance as soon as it
     * is controlling the page. If a service worker was already controlling at
     * registration time then it will resolve to that if the script URLs (and
     * optionally script versions) match, otherwise it will wait until an update
     * is found and starts controlling the page.
     * Note: the first time a service worker is installed it will active but
     * not start controlling the page unless `clients.claim()` is called in the
     * service worker.
     */
    readonly controlling: Promise<ServiceWorker>;

    /**
     * Resolves with a reference to a service worker that matches the script URL
     * of this instance, as soon as it's available.
     *
     * If, at registration time, there's already an active or waiting service
     * worker with a matching script URL, it will be used (with the waiting
     * service worker taking precedence over the active service worker if both
     * match, since the waiting service worker would have been registered more
     * recently).
     * If there's no matching active or waiting service worker at registration
     * time then the promise will not resolve until an update is found and starts
     * installing, at which point the installing service worker is used.
     */
    getSW(): Promise<ServiceWorker>;

    /**
     * Sends the passed data object to the service worker registered by this
     * instance (via [`getSW()`]{@link module:workbox-window.Workbox#getSW}) and resolves
     * with a response (if any).
     *
     * A response can be set in a message handler in the service worker by
     * calling `event.ports[0].postMessage(...)`, which will resolve the promise
     * returned by `messageSW()`. If no response is set, the promise will never
     * resolve.
     */
    messageSW(data: any): Promise<object>;

    addEventListener<K extends keyof WokerboxEventMap>(type: K, listener: (this: Workbox, ev: WokerboxEventMap[K]) => void): void;
    removeEventListener<K extends keyof WokerboxEventMap>(type: K, listener: (this: Workbox, ev: WokerboxEventMap[K]) => void): void;
}

export { Workbox };
