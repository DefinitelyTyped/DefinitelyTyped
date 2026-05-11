interface ServiceWorkerRegistration {
    /*~ https://w3c.github.io/ServiceWorker/#ref-for-dom-serviceworkerregistration-navigationpreload */
    readonly navigationPreload: NavigationPreloadManager;
}

/*~ https://w3c.github.io/ServiceWorker/#navigationpreloadmanager */
interface NavigationPreloadManager {
    disable(): Promise<void>;
    enable(): Promise<void>;
    getState(): Promise<NavigationPreloadState>;
    setHeaderValue(value: string): Promise<void>;
}

declare var NavigationPreloadManager: {
    prototype: NavigationPreloadManager;
    new(): NavigationPreloadManager;
};

/*~ https://w3c.github.io/ServiceWorker/#dictdef-navigationpreloadstate */
interface NavigationPreloadState {
    enabled?: boolean;
    headerValue?: string;
}
