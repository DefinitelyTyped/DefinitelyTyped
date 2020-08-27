// Type definitions for i18next-fs-backend 1.0.7
// Project: https://github.com/i18next/i18next-fs-backend
// Definitions by: Nejc Drobnič <https://github.com/quantumlytangled>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module i18next {
    interface InitOptions {
        backend?: i18nextFsBackend.i18nextFsBackendOptions;
    }
}

declare namespace i18nextFsBackend {
    type loadPathFunction = (language: string, namespace: string) => string;

    interface i18nextFsBackendOptions {
        loadPath?: string | loadPathFunction;
        addPath?: string;
        indent?: number;
        parse?: (data: string) => unknown;
        stringify?: (data: unknown) => string;
    }
}

declare module 'i18next-fs-backend' {
    import { BackendModule, InitOptions, Services, ReadCallback } from 'i18next';

    class Backend implements BackendModule<i18nextFsBackend.i18nextFsBackendOptions> {
        type: 'backend';
        constructor(services: Services, backendOptions: i18nextFsBackend.i18nextFsBackendOptions, i18nextOptions: InitOptions);
        init(services: Services, backendOptions: i18nextFsBackend.i18nextFsBackendOptions, i18nextOptions: InitOptions): void;
        read(language: string, namespace: string, callback: ReadCallback): void;
        create(languages: string[], namespace: string, key: string, fallbackValue: string): void;

        write(): void;
        writeFile(lng: string, namespace: string): void;
        queue(lng: string, namespace: string, key: string, fallbackValue: string, callback: unknown): void;

        static type: 'backend';
    }

    const module: typeof Backend;
    export = module;
}
