import { TypedHash } from "./collections";
import { ISPFXContext } from "./spfxcontextinterface";
export interface LibraryConfiguration {
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
    spfxContext?: any;
}
export declare function setup(config: LibraryConfiguration): void;
export declare class RuntimeConfigImpl {
    private _v;
    constructor(_v?: Map<string, any>);
    /**
     *
     * @param config The set of properties to add to the globa configuration instance
     */
    extend(config: TypedHash<any>): void;
    get(key: string): any;
    readonly defaultCachingStore: "session" | "local";
    readonly defaultCachingTimeoutSeconds: number;
    readonly globalCacheDisable: boolean;
    readonly enableCacheExpiration: boolean;
    readonly cacheExpirationIntervalMilliseconds: number;
    readonly spfxContext: ISPFXContext;
}
export declare let RuntimeConfig: RuntimeConfigImpl;
