// Type definitions for serviceworker-webpack-plugin 1.0
// Project: https://github.com/oliviertassinari/serviceworker-webpack-plugin#readme
// Definitions by: Remco Haszing <https://github.com/remcohaszing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare interface Runtime {
    register(options?: RegistrationOptions): Promise<ServiceWorkerRegistration>;
}

declare const runtime: Runtime;

export default runtime;
