import { LibraryConfiguration, TypedHash, HttpClientImpl } from "@pnp/common";
export interface SPConfigurationPart {
    sp?: {
        /**
         * Any headers to apply to all requests
         */
        headers?: TypedHash<string>;
        /**
         * The base url used for all requests
         */
        baseUrl?: string;
        /**
         * Defines a factory method used to create fetch clients
         */
        fetchClientFactory?: () => HttpClientImpl;
    };
}
export interface SPConfiguration extends LibraryConfiguration, SPConfigurationPart {
}
export declare function setup(config: SPConfiguration): void;
export declare class SPRuntimeConfigImpl {
    readonly headers: TypedHash<string>;
    readonly baseUrl: string | null;
    readonly fetchClientFactory: () => HttpClientImpl;
}
export declare let SPRuntimeConfig: SPRuntimeConfigImpl;
