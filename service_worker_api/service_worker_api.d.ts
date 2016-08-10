// Type definitions for service_worker_api
// Project: https://developer.mozilla.org/fr/docs/Web/API/ServiceWorker_API
// Definitions by: Tristan Caron <https://github.com/tristancaron>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// <reference path="../es6-promise/es6-promise.d.ts" /> // REMOVED third "/" so this doesn't fire. Problem with duplicate Promises
// between es6 and typescript - https://github.com/DefinitelyTyped/DefinitelyTyped/issues/5015

/**
 * Provides methods relating to the body of the response/request, allowing you
 * to declare what its content type is and how it should be handled.
 */
interface Body {
    /**
     * Contains a Boolean that indicates whether the body has been read.
     * @readonly
     */
    bodyUsed: boolean;

    /**
     * Takes a Response stream and reads it to completion.
     * It returns a promise that resolves with an ArrayBuffer.
     */
    arrayBuffer(): Promise<ArrayBuffer>;

    /**
     * Takes a Response stream and reads it to completion.
     * It returns a promise that resolves with a Blob.
     */
    blob(): Promise<Blob>;

    /**
     * Takes a Response stream and reads it to completion.
     * It returns a promise that resolves with a FormData object.
     */
    formData(): Promise<FormData>;

    /**
     * Takes a Response stream and reads it to completion.
     * It returns a promise that resolves with a JSON object.
     */
    json(): Promise<JSON>;

    /**
     * Takes a Response stream and reads it to completion.
     * It returns a promise that resolves with a USVString (text).
     */
    text(): Promise<Text>;

}

/**
 * Represents response/request headers, allowing you to query them and take
 * different actions depending on the results.
 */
interface Header {
    new(): Header;

    /**
     * Appends a new value onto an existing header inside a Headers object, or
     * adds the header if it does not already exist.
     *
     * @param name The name of the HTTP header you want to add to the Headers
     * object.
     * @param value The value of the HTTP header you want to add.
     */
    append(name: string, value: string): void;

    /**
     * Deletes a header from a Headers object.
     *
     * @param name The name of the HTTP header you want to delete from the
     * Headers object.
     */
    delete(name: string): void;

    /**
     * Returns the first value of a given header from within a Headers object.
     *
     * @param name The name of the HTTP header whose value you want to retrieve
     * from the Headers object. If the given name is not the name of an
     * HTTP header, this method throws a TypeError.
     */
    get(name: string): string;

    /**
     * Returns an array of all the values of a header within a Headers object
     * with a given name.
     *
     * @param name The name of the HTTP header whose values you want to retrieve
     * from the Headers object. If the given name is not the name of an
     * HTTP header, this method throws a TypeError.
     */
    getAll(name:string): Array<string>;

    /**
     * Returns a boolean stating whether a Headers object contains a
     * certain header.
     *
     * @param name The name of the HTTP header you want to test for. If the
     * given name is not the name of an HTTP header, this method throws
     * a TypeError.
     */
    has(name: string): boolean;

    /**
     * Sets a new value for an existing header inside a Headers object, or
     * adds the header if it does not already exist.
     *
     * @param name The name of the HTTP header you want to set to a new value.
     * If the given name is not the name of an HTTP header, this method throws
     * a TypeError.
     * @param value The new value you want to set.
     */
    set(name: string, value: string): void;
}

/**
 * Represents the response to a request.
 */
interface Response extends Body {
    new(): Response;

    /**
     * Contains the type of the response (e.g., basic, cors).
     * @readonly
     */
    type: string;

    /**
     * Contains the URL of the response.
     * @readonly
     */
    url: string;

    /**
     * Contains a boolean stating whether this is the final URL of the response.
     */
    useFinalURL: boolean;

    /**
     * Contains the status code of the response (e.g., 200 for a success).
     * @readonly
     */
    status: number;

    /**
     * Contains a boolean stating whether the response was successful
     * (status in the range 200-299) or not.
     * @readonly
     */
    ok: boolean;

    /**
     * Contains the status message corresponding to the status code
     * (e.g., OK for 200).
     * @readonly
     */
    statusText: string;

    /**
     * Contains the Headers object associated with the response.
     * @readonly
     */
    headers: Header;

    /**
     * Creates a clone of a Response object.
     */
    clone(): Response;

    /**
     * Returns a new Response object associated with a network error.
     */
    error(): Response;

    /**
     * Creates a new response with a different URL.
     */
    redirect(): Response;
}

/**
 * Represents a resource request.
 */
interface Request extends Body {
    new(): Request;

    /**
     * Contains the request's method (GET, POST, etc.).
     * @readonly
     */
    method: string;

    /**
     * Contains the URL of the request.
     * @readonly
     */
    url: string;

    /**
     * Contains the associated Headers object of the request.
     * @readonly
     */
    headers: Header;

    /**
     * Contains the context of the request (e.g., audio, image, iframe, etc.).
     * @readonly
     */
    context: string;

    /**
     * Contains the referrer of the request (e.g., client).
     * @readonly
     */
    referrer: string;

    /**
     * Contains the mode of the request (e.g., cors, no-cors, same-origin).
     * @readonly
     */
    mode: string;

    /**
     * Contains the credentials of the request (e.g., omit, same-origin).
     * @readonly
     */
    credentials: string;

    /**
     * Contains the cache mode of the request (e.g., default, reload, no-cache).
     * @readonly
     */
    cache: string;

    /**
     * Creates a copy of the current Request object.
     */
    clone(): Request;
}

/**
 * An CacheOptions object allowing you to set specific control options for the
 * matching done in the match operation.
 *
 * @property [ignoreSearch] A Boolean that specifies whether the matching
 * process should ignore the query string in the url.  If set to true,
 * the ?value=bar part of http://foo.com/?value=bar would be ignored when
 * performing a match. It defaults to false.
 *
 * @property [ignoreMethod] A Boolean that, when set to true, prevents matching
 * operations from validating the Request http method (normally only GET
 * and HEAD are allowed.) It defaults to false.
 *
 * @property [ignoreVary] A Boolean that when set to true tells the matching
 * operation not to perform VARY header matching — i.e. if the URL matches you
 * will get a match regardless of the Response object having a VARY header or
 * not. It defaults to false.
 *
 * @property [cacheName] A DOMString that represents a specific cache to search
 * within. Note that this option is ignored by Cache.match().
 */
interface CacheOptions {
    ignoreSearch?: boolean;
    ignoreMethod?: boolean;
    ignoreVary?: boolean;
    cacheName?: string;
}

/**
 * Represents the storage for Request / Response object pairs that are cached as
 * part of the ServiceWorker life cycle.
 */
interface Cache {
    /**
     * Returns a Promise that resolves to the response associated with the first
     * matching request in the Cache object.
     *
     * @param request The Request you are attempting to find in the Cache.
     * @param {CacheOptions} options
     */
    match(request: Request | string, options?: CacheOptions): Promise<Response>;

    /**
     * Returns a Promise that resolves to an array of all matching responses in
     * the Cache object.
     *
     * @param request The Request you are attempting to find in the Cache.
     * @param {CacheOptions} options
     */
    matchAll(request: Request | string, options?: CacheOptions): Promise<Array<Response>>;

    /**
     * Returns a Promise that resolves to a new Cache entry whose key
     * is the request.
     *
     * @param request The Request you want to add to the cache.
     */
    add(request: Request | string): Promise<void>;

    /**
     * Returns a Promise that resolves to a new array of Cache entries whose
     * keys are the requests.
     *
     * @param request An array of Request objects you want to add to the cache.
     */
    addAll(...request: Array<Request | string>): Promise<void>;

    /**
     * Adds additional key/value pairs to the current Cache object.
     *
     * @param request The Request you want to add to the cache.
     * @param response The response you want to match up to the request.
     */
    put(request: Request, response: Response): Promise<void>;

    /**
     * Finds the Cache entry whose key is the request, and if found, deletes the
     * Cache entry and returns a Promise that resolves to true. If no Cache
     * entry is found, it returns false.
     *
     * @param request The Request you are looking to delete.
     * @param {CacheOptions} options
     */
    delete(request: Request | string, options?: CacheOptions): Promise<boolean>;

    /**
     * Returns a Promise that resolves to an array of Cache keys.
     *
     * @param request The Request want to return, if a specific key is desired.
     * @param {CacheOptions} options
     */
    keys(request?: Request, options?: CacheOptions): Promise<Array<Request>>;
}

/**
 * Represents the storage for Cache objects. It provides a master directory of
 * all the named caches that a ServiceWorker can access and maintains a mapping
 * of string names to corresponding Cache objects.
 */
interface CacheStorage {
    /**
     * Checks if a given Request is a key in any of the Cache objects that the
     * CacheStorage object tracks and returns a Promise that resolves
     * to that match.
     *
     * @param request The Request you are looking for a match for in the CacheStorage.
     * @param {CacheOptions} options
     */
    match(request: Request | string, options?: CacheOptions): Promise<Response>;

    /**
     * Returns a Promise that resolves to true if a Cache object matching
     * the cacheName exists.
     *
     * @param cacheName The Request you are looking for a match for in the
     * CacheStorage.
     */
    has(cacheName: string): Promise<boolean>;

    /**
     * Returns a Promise that resolves to the Cache object matching
     * the cacheName.
     *
     * @param cacheName The name of the cache you want to open.
     */
    open(cacheName: string): Promise<Cache>;

    /**
     * Finds the Cache object matching the cacheName, and if found, deletes the
     * Cache object and returns a Promise that resolves to true. If no
     * Cache object is found, it returns false.
     *
     * @param cacheName The name of the cache you want to delete.
     */
    delete(cacheName: string): Promise<boolean>;

    /**
     * Returns a Promise that will resolve with an array containing strings
     * corresponding to all of the named Cache objects tracked by the
     * CacheStorage. Use this method to iterate over a list of all the
     * Cache objects.
     */
    keys(): Promise<Array<string>>;
}

/**
 * Represents the scope of a service worker client. A service worker client is
 * either a document in a browser context or a SharedWorker, which is controlled
 * by an active worker.
 */
interface ServiceWorkerClient {
    /**
     * Allows a service worker client to send a message to a ServiceWorker.
     *
     * @param message The message to send to the service worker.
     * @param [transfer] A transferable object such as, for example, a reference
     * to a port.
     */
    postMessage(message: string, transfer?: Object): void;

    /**
     * Indicates the type of browsing context of the current client.
     * This value can be one of auxiliary, top-level, nested, or none.
     * @readonly
     */
    frameType: string;

    /**
     * Returns the id of the Client object.
     * @readonly
     */
    id: string;

    /**
     * The URL of the current service worker client.
     * @readonly
     */
    url: string;
}

interface WindowClient extends ServiceWorkerClient {
    /**
     * Gives user input focus to the current client.
     */
    focus(): Promise<WindowClient>;

    /**
     * A boolean that indicates whether the current client has focus.
     * @readonly
     */
    focused: boolean;

    /**
     * Indicates the visibility of the current client. This value can be one of
     * hidden, visible, prerender, or unloaded.
     * @readonly
     */
    visibilityState: string;
}

interface ServiceWorkerClientsMatchOptions {
    includeUncontrolled?: boolean;
    type?: string;
}

/**
 * Represents a container for a list of Client objects; the main way to access
 * the active service worker clients at the current origin.
 */
interface ServiceWorkerClients {
    /**
     * Gets a list of service worker clients and returns them in a Promise.
     * Include the options parameter to return all service worker clients whose
     * origin is the same as the associated service worker's origin. If options
     * are not included, the method returns only the service worker clients
     * controlled by the service worker.
     *
     * @param options
     */
    matchAll(options: ServiceWorkerClientsMatchOptions): Promise<Array<ServiceWorkerClient>>;

    /**
     * Opens a service worker Client in a new browser window.
     *
     * @param url A string representing the URL of the client you want to open
     * in the window.
     */
    openWindow(url: string): Promise<WindowClient>;

    /**
     * Allows an active Service Worker to set itself as the active worker for a
     * client page when the worker and the page are in the same scope.
     */
    claim(): Promise<void>;
}

/**
 * Extends the lifetime of the install and activate events dispatched on the
 * ServiceWorkerGlobalScope as part of the service worker lifecycle. This
 * ensures that any functional events (like FetchEvent) are not dispatched to
 * the ServiceWorker until it upgrades database schemas, deletes outdated cache
 * entries, etc.
 */
interface ExtendableEvent extends Event {
    /**
     * Extends the lifetime of the event.
     * It is intended to be called in the install EventHandler for the
     * installing worker and on the active EventHandler for the active worker.
     *
     * @param all
     */
    waitUntil(all: any): any;
}

/**
 * The parameter passed into the ServiceWorkerGlobalScope.onfetch handler,
 * FetchEvent represents a fetch action that is dispatched on the
 * ServiceWorkerGlobalScope of a ServiceWorker. It contains information about
 * the request and resulting response, and provides the FetchEvent.respondWith()
 * method, which allows us to provide an arbitrary response back to the
 * controlled page.
 */
interface FetchEvent extends Event {
    /**
     * Returns a Boolean that is true if the event was dispatched with the
     * user's intention for the page to reload, and false otherwise. Typically,
     * pressing the refresh button in a browser is a reload, while clicking a
     * link and pressing the back button is not.
     * @readonly
     */
    isReload: boolean;

    /**
     * Returns the Request that triggered the event handler.
     * @readonly
     */
    request: Request;

    /**
     * Returns the Client that the current service worker is controlling.
     * @readonly
     */
    client: ServiceWorkerClient;

    /**
     * Resolves by returning a Response or a network error to Fetch.
     *
     * @param all
     */
    respondWith(all: any): Response;
}

/**
 * Represents a service worker. Multiple browsing contexts (e.g. pages, workers,
 * etc.) can be associated with the same ServiceWorker object.
 */
interface ServiceWorker extends Worker {
    /**
     * Returns the ServiceWorker serialized script URL defined as part of
     * ServiceWorkerRegistration. The URL must be on the same origin as the
     * document that registers the ServiceWorker.
     * @readonly
     */
    scriptURL: string;

    /**
     * Returns the state of the service worker. It returns one of the following
     * values: installing, installed, activating, activated, or redundant.
     * @readonly
     */
    state: string;

    /**
     * An EventListener property called whenever an event of type statechange
     * is fired; it is basically fired anytime the ServiceWorker.state changes.
     *
     * @param [statechangeevent]
     */
    onstatechange: (statechangeevent?: any) => void;
}

/**
 * The PushSubscription interface provides a subcription's URL endpoint and
 * subscription ID.
 */
interface PushSubscription {
    /**
     * The endpoint associated with the push subscription.
     * @readonly
     */
    endpoint: any;

    /**
     * The subscription ID associated with the push subscription.
     * @readonly
     */
    subscriptionId: any;
}

/**
 * The PushManager interface provides a way to receive notifications from
 * third-party servers as well as request URLs for push notifications.
 * This interface has replaced functionality offered by the obsolete
 * PushRegistrationManager.
 */
interface PushManager {
    /**
     * Returns a promise that resolves to a PushSubscription with details of a
     * new push subscription.
     */
    subscribe(): Promise<PushSubscription>;

    /**
     * Returns a promise that resolves to a PushSubscription details of
     * the retrieved push subscription.
     */
    getSubscription(): Promise<PushSubscription>;

    /**
     * Returns a promise that resolves to the PushPermissionStatus of the
     * requesting webapp, which will be one of granted, denied, or default.
     */
    hasPermission(): Promise<any>;
}

/**
 * Represents a service worker registration.
 */
interface ServiceWorkerRegistration extends EventTarget {
    /**
     * Returns a unique identifier for a service worker registration.
     * This must be on the same origin as the document that registers
     * the ServiceWorker.
     * @readonly
     */
    scope: any;

    /**
     * Returns a service worker whose state is installing. This is initially
     * set to null.
     * @readonly
     */
    installing: ServiceWorker;

    /**
     * Returns a service worker whose state is installed. This is initially
     * set to null.
     * @readonly
     */
    waiting: ServiceWorker;

    /**
     * Returns a service worker whose state is either activating or activated.
     * This is initially set to null. An active worker will control a
     * ServiceWorkerClient if the client's URL falls within the scope of the
     * registration (the scope option set when ServiceWorkerContainer.register
     * is first called).
     * @readonly
     */
    active: ServiceWorker;

    /**
     * Returns an interface to for managing push subscriptions, including
     * subcribing, getting an anctive subscription, and accessing push
     * permission status.
     * @readonly
     */
    pushManager: PushManager;

    /**
     * An EventListener property called whenever an event of type updatefound
     * is fired; it is fired any time the ServiceWorkerRegistration.installing
     * property acquires a new service worker.
     */
    onupdatefound: () => void;

    /**
     * Allows you to update a service worker.
     */
    update(): void;

    /**
     * Unregisters the service worker registration and returns a promise
     * (see Promise). The service worker will finish any ongoing operations
     * before it is unregistered.
     */
    unregister(): Promise<boolean>;
}

interface ServiceWorkerRegisterOptions {
    scope: string;
}

/**
 * Provides an object representing the service worker as an overall unit in the
 * network ecosystem, including facilities to register, unregister and update
 * service workers, and access the state of service workers
 * and their registrations.
 */
interface ServiceWorkerContainer {
    /**
     * Returns a ServiceWorker object if its state is activated (the same object
     * returned by ServiceWorkerRegistration.active). This property returns null
     * if the request is a force refresh (Shift + refresh) or if there is no
     * active worker.
     * @readonly
     */
    controller: ServiceWorker;

    /**
     * Defines whether a service worker is ready to control a page or not.
     * It returns a Promise that will never reject, which resolves to a
     * ServiceWorkerRegistration with an ServiceWorkerRegistration.active worker.
     * @readonly
     */
    ready: Promise<ServiceWorkerRegistration>;

    /**
     * An event handler fired whenever a controllerchange event occurs — when
     * the document's associated ServiceWorkerRegistration acquires a new
     * ServiceWorkerRegistration.active worker.
     *
     * @param [controllerchangeevent]
     */
    oncontrollerchange: (controllerchangeevent?: Event) => void;

    /**
     * An event handler fired whenever an error event occurs in the associated
     * service workers.
     *
     * @param [errorevent]
     */
    onerror: (errorevent?: ErrorEvent) => void;

    /**
     * An event handler fired whenever a message event occurs — when incoming
     * messages are received to the ServiceWorkerContainer object (e.g. via a
     * MessagePort.postMessage() call.)
     *
     * @param [messageevent]
     */
    onmessage: (messageevent?: MessageEvent) => void;

    /**
     * Creates or updates a ServiceWorkerRegistration for the given scriptURL.
     *
     * @param scriptURL The URL of the service worker script.
     * @param [options] An options object to provide options upon registration.
     * Currently available options are: scope: A USVString representing a URL
     * that defines a service worker's registration scope; what range of URLs a
     * service worker can control. This is usually a relative URL, and it
     * defaults to '/' when not specified.
     */
    register(scriptURL: string, options?: ServiceWorkerRegisterOptions): Promise<ServiceWorkerRegistration>;

    /**
     * Gets a ServiceWorkerRegistration object whose scope URL matches the
     * provided document URL.  If the method can't return a
     * ServiceWorkerRegistration, it returns a Promise.
     *
     * @param [scope] A unique identifier for a service worker registration — the
     * scope URL of the registration object you want to return. This is usually
     * a relative URL.
     */
    getRegistration(scope?: string): Promise<ServiceWorkerRegistration>;

    /**
     * Returns all ServiceWorkerRegistrations associated with a
     * ServiceWorkerContainer in an array.  If the method can't return
     * ServiceWorkerRegistrations, it returns a Promise.
     */
    getRegistrations(): Promise<Array<ServiceWorkerRegistration>>;
}

/**
 * The parameter passed into the oninstall handler, the InstallEvent interface
 * represents an install action that is dispatched on the
 * ServiceWorkerGlobalScope of a ServiceWorker. As a child of ExtendableEvent,
 * it ensures that functional events such as FetchEvent are not dispatched
 * during installation.
 */
interface InstallEvent extends ExtendableEvent {
    /**
     * Returns the ServiceWorker that is currently actively controlling the page.
     * @readonly
     */
    activeWorker: ServiceWorker;
}

interface ServiceWorkerGlobalScope {
    /**
     * Contains the Clients object associated with the service worker.
     * @readonly
     */
    clients: ServiceWorkerClients;

    /**
     * Contains the ServiceWorkerRegistration object that represents the
     * service worker's registration.
     * @readonly
     */
    registration: ServiceWorkerRegistration;

    /**
     * An event handler fired whenever an activate event occurs — when a
     * ServiceWorkerRegistration acquires a new ServiceWorkerRegistration.active
     * worker.
     *
     * @param [activateevent]
     */
    onactivate: (activateevent?: ExtendableEvent) => void;

    /**
     * Not defined in the spec yet, but it looks like this will be fired when
     * the device is nearly out of storage space, prompting the UA to start
     * claiming back some space from web apps that are using client-side storage,
     * and the current app is targeted.
     *
     * @param [beforeevictedevent]
     */
    onbeforeevicted: (beforeevictedevent?: Event) => void;

    /**
     * Not defined in the spec yet, but it looks like this will be fired when
     * the device is out of storage space, and the UA claims back some space
     * from the current app.
     *
     * @param [evictedevent]
     */
    onevicted: (evictedevent?: Event) => void;

    /**
     * An event handler fired whenever a fetch event occurs — when a fetch()
     * is called.
     *
     * @param [fetchevent]
     */
    onfetch: (fetchevent?: FetchEvent) => void;

    /**
     * An event handler fired whenever an install event occurs — when a
     * ServiceWorkerRegistration acquires a new
     * ServiceWorkerRegistration.installing worker.
     *
     * @param [installevent]
     */
    oninstall: (installevent?: InstallEvent) => void;

    /**
     * An event handler fired whenever a message event occurs — when incoming
     * messages are received. Controlled pages can use the
     * MessagePort.postMessage() method to send messages to service workers.
     * The service worker can optionally send a response back via the
     * MessagePort exposed in event.data.port, corresponding to the controlled
     * page.
     *
     * @param [messageevent]
     */
    onmessage: (messageevent?: MessageEvent) => void;

    /**
     * An event handler fired whenever a notificationclick event occurs — when
     * a user clicks on a displayed notification.
     *
     * @param [notificationclickevent]
     */
    onnotificationclick: (notificationclickevent?: NotificationEvent) => void;

    /**
     * An event handler fired whenever a push event occurs — when a server
     * push notification is received.
     *
     * @param [onpushevent]
     */
    onpush: (onpushevent?: Event) => void;

    /**
     * An event handler fired whenever a pushsubscriptionchange event occurs —
     * when a push subscription has been invalidated, or is about to be
     * invalidated (e.g. when a push service sets an expiration time).
     *
     * @param [pushsubscriptionchangeevent]
     */
    onpushsubscriptionchange: (pushsubscriptionchangeevent?: Event) => void;

    /**
     * Allows the current service worker registration to progress from waiting
     * to active state while service worker clients are using it.
     */
    skipWaiting(): Promise<void>;

    /**
     * TODO GlobalFetch
     * @param url
     * @param init
     */
    fetch(url: string | Request, init?: Object): Promise<Response>;
}

interface Navigator {
    /**
     * Returns a ServiceWorkerContainer object, which provides access to
     * registration, removal, upgrade, and communication with the ServiceWorker
     * objects for the associated document.
     */
    serviceWorker: ServiceWorkerContainer;
}

interface Window extends ServiceWorkerGlobalScope {
    caches: CacheStorage;
}

interface NotificationEvent extends Event, ExtendableEvent {
    notification: any;
}
