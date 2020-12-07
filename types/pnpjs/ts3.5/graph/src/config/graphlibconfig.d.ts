import { LibraryConfiguration, TypedHash, HttpClientImpl } from "@pnp/common";
export interface GraphConfigurationPart {
    graph?: {
        /**
         * Any headers to apply to all requests
         */
        headers?: TypedHash<string>;
        /**
         * Defines a factory method used to create fetch clients
         */
        fetchClientFactory?: () => HttpClientImpl;
    };
}
export interface GraphConfiguration extends LibraryConfiguration, GraphConfigurationPart {
}
export declare function setup(config: GraphConfiguration): void;
export declare class GraphRuntimeConfigImpl {
    readonly headers: TypedHash<string>;
    readonly fetchClientFactory: () => HttpClientImpl;
}
export declare let GraphRuntimeConfig: GraphRuntimeConfigImpl;
