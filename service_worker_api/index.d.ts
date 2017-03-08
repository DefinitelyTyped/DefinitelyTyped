// Type definitions for service_worker_api 0.0
// Project: https://developer.mozilla.org/fr/docs/Web/API/ServiceWorker_API
// Definitions by: Tristan Caron <https://github.com/tristancaron>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="whatwg-fetch" />

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
     * @param [options] An object that sets options for the match operation.
     */
    match(request: Request | string, options?: CacheOptions): Promise<Response>;

    /**
     * Returns a Promise that resolves to an array of all matching responses in
     * the Cache object.
     *
     * @param request The Request you are attempting to find in the Cache.
     * @param [options] An object that sets options for the match operation.
     */
    matchAll(request: Request | string, options?: CacheOptions): Promise<Response[]>;

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
    addAll(requests: Array<Request | string>): Promise<void>;

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
     * @param [options] An object that sets options for the match operation.
     */
    delete(request: Request | string, options?: CacheOptions): Promise<boolean>;

    /**
     * Returns a Promise that resolves to an array of Cache keys.
     *
     * @param request The Request want to return, if a specific key is desired.
     * @param [options] An object that sets options for the match operation.
     */
    keys(request?: Request, options?: CacheOptions): Promise<Request[]>;
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
     * @param [options] An object that sets options for the match operation.
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
    keys(): Promise<string[]>;
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
    postMessage(message: any, transfer?: any): void;

    /**
     * Indicates the type of browsing context of the current client.
     * This value can be one of auxiliary, top-level, nested, or none.
     */
    readonly frameType: string;

    /**
     * Returns the id of the Client object.
     */
    readonly id: string;

    /**
     * The URL of the current service worker client.
     */
    readonly url: string;
}

interface WindowClient extends ServiceWorkerClient {
    /**
     * Gives user input focus to the current client.
     */
    focus(): Promise<WindowClient>;

    /**
     * A boolean that indicates whether the current client has focus.
     */
    readonly focused: boolean;

    /**
     * Indicates the visibility of the current client. This value can be one of
     * hidden, visible, prerender, or unloaded.
     */
    readonly visibilityState: string;
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
     * Gets a service worker client matching a given id and returns it in a Promise.
     * @param clientId The ID of the client you want to get.
     */
    get(clientId: string): Promise<ServiceWorkerClient>;

    /**
     * Gets a list of service worker clients and returns them in a Promise.
     * Include the options parameter to return all service worker clients whose
     * origin is the same as the associated service worker's origin. If options
     * are not included, the method returns only the service worker clients
     * controlled by the service worker.
     *
     * @param [options] An options object allowing you to set options for the matching operation.
     */
    matchAll(options?: ServiceWorkerClientsMatchOptions): Promise<ServiceWorkerClient[]>;

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
 * Represents a service worker. Multiple browsing contexts (e.g. pages, workers,
 * etc.) can be associated with the same ServiceWorker object.
 */
interface ServiceWorker extends Worker {
    /**
     * Returns the ServiceWorker serialized script URL defined as part of
     * ServiceWorkerRegistration. The URL must be on the same origin as the
     * document that registers the ServiceWorker.
     */
    readonly scriptURL: string;

    /**
     * Returns the state of the service worker. It returns one of the following
     * values: installing, installed, activating, activated, or redundant.
     */
    readonly state: string;

    /**
     * An EventListener property called whenever an event of type statechange
     * is fired; it is basically fired anytime the ServiceWorker.state changes.
     */
    onstatechange: (statechangeevent: Event) => void;
}

/**
 * The PushMessageData interface of the Push API provides
 * methods which let you retrieve the push data sent by a server in various formats.
 */
interface PushMessageData {
    /**
     * Extracts the data as an ArrayBuffer object.
     */
    arrayBuffer(): ArrayBuffer;

    /**
     * Extracts the data as a Blob object.
     */
    blob(): Blob;

    /**
     * Extracts the data as a JSON object.
     */
    json(): any;
    json<T>(): T;

    /**
     * Extracts the data as a plain text string.
     */
    text(): string;
}

/**
 * The PushSubscription interface provides a subcription's URL endpoint and
 * subscription ID.
 */
interface PushSubscription {
    /**
     * The endpoint associated with the push subscription.
     */
    readonly endpoint: any;

    /**
     * The subscription ID associated with the push subscription.
     */
    readonly subscriptionId: any;
}

/**
 * Object containing optional subscribe parameters.
 */
interface PushSubscriptionOptions {
    /**
     * A boolean indicating that the returned push subscription will only be used for
     * messages whose effect is made visible to the user.
     */
    readonly userVisibleOnly: boolean;

    /**
     * A public key your push server will use to send messages to client apps via a push server.
     * This value is part of a signing key pair generated by your application server and usable
     * with elliptic curve digital signature (ECDSA) over the P-256 curve.
     */
    readonly applicationServerKey?: Uint8Array;
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
     *
     * @param [options] An object containing optional configuration parameters.
     */
    subscribe(options?: PushSubscriptionOptions): Promise<PushSubscription>;

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

/////// Service Worker Events ///////

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
     * @param promise
     */
    waitUntil(promise: Promise<any>): void;
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
     */
    readonly isReload: boolean;

    /**
     * Returns the Request that triggered the event handler.
     */
    readonly request: Request;

    /**
     * Returns the Client that the current service worker is controlling.
     */
    readonly client: ServiceWorkerClient;

    /**
     * Returns the id of the client that the current service worker is controlling.
     */
    readonly clientId: string;

    /**
     * Resolves by returning a Response or a network error to Fetch.
     *
     * @param all Any custom response-generating code.
     */
    respondWith(all: any): Response;
}

/**
 * The ExtendableMessageEvent interface of the ServiceWorker API represents
 * the event object of a message event fired on
 * a service worker (when a channel message is received on
 * the ServiceWorkerGlobalScope from another context)
 * — extends the lifetime of such events.
 */
interface ExtendableMessageEvent extends ExtendableEvent {
    /**
     * Returns the event's data. It can be any data type.
     */
    readonly data: any;

    /**
     * Returns the origin of the ServiceWorkerClient that sent the message
     */
    readonly origin: string;

    /**
     * Represents, in server-sent events, the last event ID of the event source.
     */
    readonly lastEventId: string;

    /**
     * Returns a reference to the service worker that sent the message.
     */
    readonly source: ServiceWorkerClient;

    /**
     * Returns the array containing the MessagePort objects
     * representing the ports of the associated message channel.
     */
    readonly ports: MessagePort[];
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
     */
    readonly activeWorker: ServiceWorker;
}

/**
 * The parameter passed into the onnotificationclick handler,
 * the NotificationEvent interface represents
 * a notification click event that is dispatched on
 * the ServiceWorkerGlobalScope of a ServiceWorker.
 */
interface NotificationEvent extends ExtendableEvent {
    /**
     * Returns a Notification object representing
     * the notification that was clicked to fire the event.
     */
    notification: any; // need to be replaced with `Notification` when possible

    /**
     * Returns the string ID of the notification button the user clicked.
     * This value returns undefined if the user clicked
     * the notification somewhere other than an action button,
     * or the notification does not have a button.
     */
    action: string;
}

/**
 * The PushEvent interface of the Push API represents
 * a push message that has been received.
 * This event is sent to the global scope of a ServiceWorker.
 * It contains the information sent from an application server to a PushSubscription.
 */
interface PushEvent extends ExtendableEvent {
    /**
     * Returns a reference to a PushMessageData object containing
     * data sent to the PushSubscription.
     */
    readonly data: PushMessageData;
}

interface ServiceWorkerContainerEventMap {
    "message": MessageEvent;
    "error": ErrorEvent;
    "controllerchange": Event;
}

interface ServiceWorkerEventMap {
    "activate": ExtendableEvent;
    "fetch": FetchEvent;
    "install": InstallEvent;
    // "message": ExtendableMessageEvent;
    "message": MessageEvent;
    "notificationclick": NotificationEvent;
    "push": PushEvent;
    "pushsubscriptionchang": PushEvent;
}

/**
 * Represents a service worker registration.
 */
interface ServiceWorkerRegistration extends EventTarget {
    /**
     * Returns a unique identifier for a service worker registration.
     * This must be on the same origin as the document that registers
     * the ServiceWorker.
     */
    readonly scope: any;

    /**
     * Returns a service worker whose state is installing. This is initially
     * set to null.
     */
    readonly installing: ServiceWorker;

    /**
     * Returns a service worker whose state is installed. This is initially
     * set to null.
     */
    readonly waiting: ServiceWorker;

    /**
     * Returns a service worker whose state is either activating or activated.
     * This is initially set to null. An active worker will control a
     * ServiceWorkerClient if the client's URL falls within the scope of the
     * registration (the scope option set when ServiceWorkerContainer.register
     * is first called).
     */
    readonly active: ServiceWorker;

    /**
     * Returns an interface to for managing push subscriptions, including
     * subcribing, getting an anctive subscription, and accessing push
     * permission status.
     */
    readonly pushManager: PushManager;

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

    /**
     * Returns a Promise that resolves to an array of Notification objects.
     * @param [options] An options object that can contain options to filter the notifications returned.
     */
    getNotifications(options?: ServiceWorkerGetNotificationOptions): Promise<any[]>; // need to be replaced with `Notification[]` when possible

    /**
     * Displays the notification with the requested title.
     * @param [title] The title that must be shown within the notification
     * @param [options] An object that allows to configure the notification.
     */
    showNotification(title: string, options?: ServiceWorkerNotificationOptions): Promise<NotificationEvent>;
}

/**
 * An options object to provide options upon a ServiceWorkerRegistration.
 * @param [scope] A USVString representing a URL that defines a service worker's registration scope; what range of
 * URLs a service worker can control. This is usually a relative URL, and it defaults to '/' when not specified.
 */
interface ServiceWorkerRegisterOptions {
    scope: string;
}

/**
 * Action to display in a notification.
 * @param [action] A DOMString identifying a user action to be displayed on the notification.
 * @param [title] A DOMString containing action text to be shown to the user.
 * @param [icon] A USVString containg the URL of an icon to display with the action.
 */
interface NotificationAction { // TODO: Maybe need to moved if NotificationApi types are defined
    action: string;
    title: string;
    icon?: string;
}

/**
 * Object that allows to configure a notification.
 * @param [actions] An array of actions to display in the notification.
 * Appropriate responses are built using event.action within the notificationclick event.
 * @param [badge] The URL of an image to represent the notification when there is not enough space to display the
 * notification itself such as, for example, the Android Notification Bar. On Android devices, the badge should
 * accommodate devices up to 4x resolution, about 96 by 96 px, and the image will be automatically masked.
 * @param [body] A string representing an extra content to display within the notification.
 * @param [dir] The direction of the notification; it can be auto, ltr, or rtl.
 * @param [icon] The URL of an image to be used as an icon by the notification.
 * @param [image] A USVSTring containing the URL of an image to be displayed in the notification.
 * @param [lang] Specify the lang used within the notification. This string must be a valid BCP 47 language tag.
 * @param [renotify] A boolean that indicates whether to supress vibrations and audible alerts when resusing a tag
 * value. The default is false.
 * @param [requireInteraction] Indicates that on devices with sufficiently large screens, a notification should remain
 * active until the user clicks or dismisses it. If this value is absent or false, the desktop version of Chrome
 * will auto-minimize notifications after approximately twenty seconds. The default value is false.
 * @param [tag] An ID for a given notification that allows you to find, replace, or remove the notification using
 * script if necessary.
 * @param [vibrate]  A vibration pattern to run with the display of the notification. A vibration pattern can be an
 * array with as few as one member. The values are times in milliseconds where the even indices (0, 2, 4, etc.) indicate
 * how long to vibrate and the odd indices indicate how long to pause. For example [300, 100, 400] would vibrate
 * 300ms, pause 100ms, then vibrate 400ms.
 * @param [data] Arbitrary data that you want associated with the notification. This can be of any data type.
 */
interface ServiceWorkerNotificationOptions {
    actions?: NotificationAction[];
    badge?: string;
    body?: string;
    dir?: 'auto' | 'ltr' | 'rtl';
    icon?: string;
    lang?: string;
    renotify?: boolean;
    requireInteraction?: boolean;
    tag?: string;
    vibrate?: number[];
    data?: any;
}

/**
 * An options object that can contain options to filter notifications.
 * @param [tag] A DOMString representing a notification tag. If specified, only notifications that have this tag
 * will be returned.
 */
interface ServiceWorkerGetNotificationOptions {
    tag: string;
}

/**
 * Provides an object representing the service worker as an overall unit in the
 * network ecosystem, including facilities to register, unregister and update
 * service workers, and access the state of service workers
 * and their registrations.
 */
interface ServiceWorkerContainer extends EventTarget {
    /**
     * Returns a ServiceWorker object if its state is activated (the same object
     * returned by ServiceWorkerRegistration.active). This property returns null
     * if the request is a force refresh (Shift + refresh) or if there is no
     * active worker.
     */
    readonly controller: ServiceWorker;

    /**
     * Defines whether a service worker is ready to control a page or not.
     * It returns a Promise that will never reject, which resolves to a
     * ServiceWorkerRegistration with an ServiceWorkerRegistration.active worker.
     */
    readonly ready: Promise<ServiceWorkerRegistration>;

    /**
     * An event handler fired whenever a controllerchange event occurs — when
     * the document's associated ServiceWorkerRegistration acquires a new
     * ServiceWorkerRegistration.active worker.
     */
    oncontrollerchange: (controllerchangeevent: Event) => void;

    /**
     * An event handler fired whenever an error event occurs in the associated
     * service workers.
     */
    onerror: (errorevent: ErrorEvent) => void;

    /**
     * An event handler fired whenever a message event occurs — when incoming
     * messages are received to the ServiceWorkerContainer object (e.g. via a
     * MessagePort.postMessage() call.)
     */
    onmessage: (messageevent: MessageEvent) => void;

    /**
     * Creates or updates a ServiceWorkerRegistration for the given scriptURL.
     *
     * @param scriptURL The URL of the service worker script.
     * @param [options] An options object to provide options upon registration.
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
    getRegistrations(): Promise<ServiceWorkerRegistration[]>;

    addEventListener<K extends keyof ServiceWorkerContainerEventMap>(
        type: K,
        listener: (event: ServiceWorkerContainerEventMap[K]) => any,
        useCapture?: boolean
    ): void;
}

interface ServiceWorkerGlobalScope extends EventTarget {
    /**
     * Contains the CacheStorage object associated with the service worker.
     */
    readonly caches: CacheStorage;
    /**
     * Contains the Clients object associated with the service worker.
     */
    readonly clients: ServiceWorkerClients;

    /**
     * Contains the ServiceWorkerRegistration object that represents the
     * service worker's registration.
     */
    readonly registration: ServiceWorkerRegistration;

    /**
     * An event handler fired whenever an activate event occurs — when a
     * ServiceWorkerRegistration acquires a new ServiceWorkerRegistration.active
     * worker.
     */
    onactivate: (activateevent: ExtendableEvent) => void;

    /**
     * An event handler fired whenever a fetch event occurs — when a fetch()
     * is called.
     */
    onfetch: (fetchevent: FetchEvent) => void;

    /**
     * An event handler fired whenever an install event occurs — when a
     * ServiceWorkerRegistration acquires a new
     * ServiceWorkerRegistration.installing worker.
     */
    oninstall: (installevent: InstallEvent) => void;

    /**
     * An event handler fired whenever a message event occurs — when incoming
     * messages are received. Controlled pages can use the
     * MessagePort.postMessage() method to send messages to service workers.
     * The service worker can optionally send a response back via the
     * MessagePort exposed in event.data.port, corresponding to the controlled
     * page.
     *
     * `onmessage` is actually fired with `ExtendableMessageEvent`, but
     * since we are merging the interface into `Window`, we should
     * make sure it's compatible with `window.onmessage`
     */
    // onmessage: (messageevent: ExtendableMessageEvent) => void;
    onmessage: (messageevent: MessageEvent) => void;

    /**
     * An event handler fired whenever a notificationclick event occurs — when
     * a user clicks on a displayed notification.
     */
    onnotificationclick: (notificationclickevent: NotificationEvent) => void;

    /**
     * An event handler fired whenever a push event occurs — when a server
     * push notification is received.
     */
    onpush: (onpushevent: PushEvent) => void;

    /**
     * An event handler fired whenever a pushsubscriptionchange event occurs —
     * when a push subscription has been invalidated, or is about to be
     * invalidated (e.g. when a push service sets an expiration time).
     */
    onpushsubscriptionchange: (pushsubscriptionchangeevent: PushEvent) => void;

    /**
     * Allows the current service worker registration to progress from waiting
     * to active state while service worker clients are using it.
     */
    skipWaiting(): Promise<void>;

    addEventListener<K extends keyof ServiceWorkerEventMap>(
        type: K,
        listener: (event: ServiceWorkerEventMap[K]) => any,
        useCapture?: boolean
    ): void;
}

interface Navigator {
    /**
     * Returns a ServiceWorkerContainer object, which provides access to
     * registration, removal, upgrade, and communication with the ServiceWorker
     * objects for the associated document.
     */
    serviceWorker: ServiceWorkerContainer;
}

// tslint:disable-next-line no-empty-interface
interface Window extends ServiceWorkerGlobalScope {}
