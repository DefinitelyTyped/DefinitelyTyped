export = makeServiceWorkerEnv;
declare function makeServiceWorkerEnv(): WorkerGlobalScope;

declare namespace makeServiceWorkerEnv {
    interface Caches {
        [key: string]: Cache;
    }

    type Listeners = Map<keyof ServiceWorkerGlobalScopeEventMap, EventListener>;

    interface Snapshot {
        /**
         * A key/value map of current cache contents.
         */
        caches: Caches;

        /**
         * A list of active clients.
         */
        clients: Client[];

        /**
         * A list of active notifications.
         */
        notifications: Notification[];
    }
}

declare global {
    /**
     * A key/value map of active listeners (`install`/`activate`/`fetch`/etc).
     */
    const listeners: makeServiceWorkerEnv.Listeners;

    /**
     * Used to trigger active listeners.
     */
    function trigger(type: keyof ServiceWorkerGlobalScopeEventMap): Promise<void>;
    function trigger(name: "fetch", request: string | Request): Promise<void>;
    function trigger(name: "notificationclick" | "notificationclose", args: Notification): Promise<void>;
    function trigger(name: "push", args: Partial<PushEvent>): Promise<void>;
    function trigger(name: "message", args: Partial<MessageEvent>): Promise<void>;

    /**
     * Used to generate a snapshot of the service worker internals.
     */
    function snapshot(): makeServiceWorkerEnv.Snapshot;

    interface WorkerGlobalScope {
        listeners: typeof listeners;
        trigger: typeof trigger;
        snapshot: typeof snapshot;
    }
}
