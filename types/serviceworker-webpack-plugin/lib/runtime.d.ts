export interface ServiceWorkerWebpackPluginRuntime {
    /**
     * Register the service worker registered using serviceworker-webpack-plugin.
     *
     * @param options Forwarded to `navigator.serviceWorker.register()`
     * @returns A promise if the runtime supports service workers, otherwise false.
     */
    register(options?: RegistrationOptions): false | Promise<ServiceWorkerRegistration>;
}

declare const runtime: ServiceWorkerWebpackPluginRuntime;

export default runtime;
