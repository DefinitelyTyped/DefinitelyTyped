// Type definitions for i18next-xhr-backend 1.2.0
// Project: https://github.com/i18next/i18next-xhr-backend
// Definitions by: Jan Mühlemann <https://github.com/jamuhl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'i18next-xhr-backend' {

    interface Interpolator {
        interpolate: () => string
    }
    interface Services {
        interpolator: Interpolator
    }

    interface BackendOptions {
        loadPath?: string | Function,
        addPath?:  string,
        allowMultiLoading?: boolean,
        parse?: Function,
        crossDomain?: boolean,
        withCredentials?: boolean,
        ajax?: Function
    }

    export default class Backend {
        type: 'backend';
        services: Services;
        options: BackendOptions;
        constructor(services?: Services, options?: BackendOptions);
        init(services?: Services, options?: BackendOptions): void;
        readMulti(languages: any[], namespaces: any[], callback: Function): void;
        read(language: {}, namespace: {}, callback: Function): void;
        loadUrl(url: string, callback: Function): void;
        create(languages: any[], namespace: string, key: string, fallbackValue: string): void;
    }
}