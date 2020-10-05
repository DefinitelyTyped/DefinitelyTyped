// Type definitions for i18next-fs-backend 1.0
// Project: https://github.com/i18next/i18next-fs-backend
// Definitions by: Nejc Drobnič <https://github.com/quantumlytangled>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { BackendModule, InitOptions, Services, ReadCallback } from 'i18next';

export namespace i18next {
    interface InitOptions {
        backend?: i18nextFsBackend.i18nextFsBackendOptions;
    }
}

export namespace i18nextFsBackend {
    type loadPathFunction = (language: string, namespace: string) => string;

    interface i18nextFsBackendOptions {
        loadPath?: string | loadPathFunction;
        addPath?: string;
        ident?: number;
        parse?: (data: string) => unknown;
        stringify?: (data: unknown) => string;
    }
}

export default class Backend implements BackendModule<i18nextFsBackend.i18nextFsBackendOptions> {
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
