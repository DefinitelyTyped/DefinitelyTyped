import { ITypedHash } from "./collections";
import { ISPFXContext } from "./spfxcontextinterface";
export interface ILibraryConfiguration {
    /**
     * Allows caching to be global disabled, default: false
     */
    globalCacheDisable?: boolean;
    /**
     * Defines the default store used by the usingCaching method, default: session
     */
    defaultCachingStore?: "session" | "local";
    /**
     * Defines the default timeout in seconds used by the usingCaching method, default 30
     */
    defaultCachingTimeoutSeconds?: number;
    /**
     * If true a timeout expired items will be removed from the cache in intervals determined by cacheTimeoutInterval
     */
    enableCacheExpiration?: boolean;
    /**
     * Determines the interval in milliseconds at which the cache is checked to see if items have expired (min: 100)
     */
    cacheExpirationIntervalMilliseconds?: number;
    /**
     * Used to supply the current context from an SPFx webpart to the library
     */
    spfxContext?: ISPFXContext;
    /**
     * Used to place the library in ie11 compat mode. Some features may not work as expected
     */
    ie11?: boolean;
}
export declare function setup(config: ILibraryConfiguration): void;
export declare class RuntimeConfigImpl {
    private _v;
    constructor(_v?: Map<string, any>);
    /**
     *
     * @param config The set of properties to add to the globa configuration instance
     */
    assign(config: ITypedHash<any>): void;
    get(key: string): any;
    get defaultCachingStore(): "session" | "local";
    get defaultCachingTimeoutSeconds(): number;
    get globalCacheDisable(): boolean;
    get enableCacheExpiration(): boolean;
    get cacheExpirationIntervalMilliseconds(): number;
    get spfxContext(): ISPFXContext;
    get ie11(): boolean;
}
export declare let RuntimeConfig: RuntimeConfigImpl;
//# sourceMappingURL=libconfig.d.ts.map