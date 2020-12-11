import { ILibraryConfiguration, ITypedHash, IHttpClientImpl } from "@pnp/common";
export interface IGraphConfigurationPart {
    graph?: {
        /**
         * The base url used for all requests (default: none)
         */
        baseUrl?: string;
        /**
         * Any headers to apply to all requests
         */
        headers?: ITypedHash<string>;
        /**
         * Defines a factory method used to create fetch clients
         */
        fetchClientFactory?: () => IHttpClientImpl;
    };
}
export interface IGraphConfiguration extends ILibraryConfiguration, IGraphConfigurationPart {
}
export declare function setup(config: IGraphConfiguration): void;
export declare class GraphRuntimeConfigImpl {
    readonly headers: ITypedHash<string>;
    readonly baseUrl: string;
    readonly fetchClientFactory: () => IHttpClientImpl;
}
export declare let GraphRuntimeConfig: GraphRuntimeConfigImpl;
//# sourceMappingURL=graphlibconfig.d.ts.map