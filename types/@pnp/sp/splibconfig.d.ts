import { ILibraryConfiguration, ITypedHash, IHttpClientImpl } from "@pnp/common";
export declare const emptyGuid = "00000000-0000-0000-0000-000000000000";
export interface ISPConfigurationPart {
    sp?: {
        /**
         * Any headers to apply to all requests
         */
        headers?: ITypedHash<string>;
        /**
         * The base url used for all requests
         */
        baseUrl?: string;
        /**
         * Defines a factory method used to create fetch clients
         */
        fetchClientFactory?: () => IHttpClientImpl;
    };
}
export interface ISPConfiguration extends ILibraryConfiguration, ISPConfigurationPart {
}
export declare function setup(config: ISPConfiguration): void;
export declare class SPRuntimeConfigImpl {
    readonly headers: ITypedHash<string>;
    readonly baseUrl: string | null;
    readonly fetchClientFactory: () => IHttpClientImpl;
}
export declare let SPRuntimeConfig: SPRuntimeConfigImpl;
//# sourceMappingURL=splibconfig.d.ts.map