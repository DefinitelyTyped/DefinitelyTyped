export interface ServiceWorkerWebpackPluginRuntime {
    register(options?: RegistrationOptions): Promise<ServiceWorkerRegistration>;
}

declare const runtime: ServiceWorkerWebpackPluginRuntime;

export default runtime;
