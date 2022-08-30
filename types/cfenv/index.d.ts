// Type definitions for cfenv 1.2
// Project: https://github.com/cloudfoundry-community/node-cfenv
// Definitions by: Jordan Adams <https://github.com/jordanadams>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Service {
    label: string;
    name: string;
    plan: string;
    tags: string[];
    credentials: Record<string, any>;
}

export interface ApplicationConfig {
    name?: string;

    [rest: string]: any;
}

export interface ServicesConfig {
    [name: string]: Array<{
        credentials?: Record<string, any>;
        name?: string;

        [rest: string]: any;
    }>;
}

export interface AppEnv {
    app: Record<string, any>;
    isLocal: boolean;
    name: string;
    port: number;
    bind: string;
    urls: string[];
    url: string;
    services: Record<string, any>;

    toJSON: () => string;
    getServices: () => { [key: string]: Service };
    getService: (spec: string | RegExp) => Service | null;
    getServiceURL: (
        spec: string | RegExp,
        replacements?: Record<string, any>,
    ) => string | null;
    getServiceCreds: (spec: string | RegExp) => Record<string, any> | null;
}

export interface GetAppEnvOptions {
    name?: string;
    protocol?: string;
    vcap?: {
        application?: ApplicationConfig;
        services?: ServicesConfig;
    };
    vcapFile?: string;
}

export function getAppEnv(options?: GetAppEnvOptions): AppEnv;
