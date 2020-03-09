// Type definitions for cfenv 1.2
// Project: https://github.com/cloudfoundry-community/node-cfenv
// Definitions by: Jordan Adams <https://github.com/jordanadams>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Service {
    label: string;
    name: string;
    plan: string;
    tags: string[];
    credentials: object;
}

export interface AppEnv {
    app: object;
    isLocal: boolean;
    name: string;
    port: number;
    bind: string;
    urls: string[];
    url: string;
    services: object;

    toJSON: () => string;
    getServices: () => { [key: string]: Service };
    getService: (spec: string | RegExp) => Service | null;
    getServiceURL: (spec: string | RegExp, replacements?: object) => string | null;
    getServiceCreds: (spec: string | RegExp) => object | null;
}

export interface GetAppEnvOptions {
    name?: string;
    protocol?: string;
    vcap?: {
        application?: string;
        services?: string;
    };
    vcapFile?: string;
}

export function getAppEnv(options?: GetAppEnvOptions): AppEnv;
