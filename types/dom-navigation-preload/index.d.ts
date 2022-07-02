// Type definitions for non-npm package dom-navigation-preload-browser 0.0
// Project: https://w3c.github.io/ServiceWorker/#service-worker-registration-navigationpreload
// Definitions by: Jan Kuehle <https://github.com/frigus02>
//                 Martin Probst <https://github.com/mprobst>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.4

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
    new (): NavigationPreloadManager;
};

/*~ https://w3c.github.io/ServiceWorker/#dictdef-navigationpreloadstate */
interface NavigationPreloadState {
    enabled?: boolean;
    headerValue?: string;
}
