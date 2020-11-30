import { ILibraryConfiguration, ITypedHash, IHttpClientImpl } from "../common";
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
    get headers(): ITypedHash<string>;
    get baseUrl(): string;
    get fetchClientFactory(): () => IHttpClientImpl;
}
export declare let GraphRuntimeConfig: GraphRuntimeConfigImpl;
//# sourceMappingURL=graphlibconfig.d.ts.map