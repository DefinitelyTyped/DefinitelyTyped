import { IConfigOptions, ISPFXContext } from "@pnp/common";
import { ISPConfiguration } from "./splibconfig";
/**
 * Root of the SharePoint REST module
 */
export declare class SPRest {
    protected _options: IConfigOptions;
    protected _baseUrl: string;
    /**
     * Creates a new instance of the SPRest class
     *
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    constructor(_options?: IConfigOptions, _baseUrl?: string);
    /**
     * Configures instance with additional options and baseUrl.
     * Provided configuration used by other objects in a chain
     *
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    configure(options: IConfigOptions, baseUrl?: string): SPRest;
    /**
     * Global SharePoint configuration options
     *
     * @param config The SharePoint configuration to apply
     */
    setup(config: ISPConfiguration | ISPFXContext): void;
}
export declare const sp: SPRest;
//# sourceMappingURL=rest.d.ts.map