import { Logger } from "@pnp/logging";
import { PnPClientStorage, dateAdd, combine, getCtxCallback, getRandomString, getGUID, isFunc, objectDefinedNotNull, isArray, assign, isUrlAbsolute, stringIsNullOrEmpty, sanitizeGuid } from "@pnp/common";
import { Settings } from "@pnp/config-store";
import { SPRestAddIn } from "@pnp/sp-addinhelpers";
import { PnPConfiguration } from "./pnplibconfig";
import "@pnp/sp/presets/all";
import "@pnp/graph/presets/all";
/**
 * Re-export everything from the dependencies to match the previous pattern
 */
export * from "@pnp/common";
export * from "@pnp/logging";
export * from "@pnp/config-store";
export * from "@pnp/odata";
export * from "./sp-ns";
export * from "./graph-ns";
/**
 * Utility methods
 */
export declare const util: {
    assign: typeof assign;
    combine: typeof combine;
    dateAdd: typeof dateAdd;
    getCtxCallback: typeof getCtxCallback;
    getGUID: typeof getGUID;
    getRandomString: typeof getRandomString;
    isArray: typeof isArray;
    isFunc: typeof isFunc;
    isUrlAbsolute: typeof isUrlAbsolute;
    objectDefinedNotNull: typeof objectDefinedNotNull;
    sanitizeGuid: typeof sanitizeGuid;
    stringIsNullOrEmpty: typeof stringIsNullOrEmpty;
};
/**
 * Provides access to the SharePoint REST interface
 */
export declare const sp: SPRestAddIn;
/**
 * Provides access to the SharePoint REST interface
 */
export declare const graph: import("../graph").GraphRest;
/**
 * Provides access to local and session storage
 */
export declare const storage: PnPClientStorage;
/**
 * Global configuration instance to which providers can be added
 */
export declare const config: Settings;
/**
 * Global logging instance to which subscribers can be registered and messages written
 */
export declare const log: typeof Logger;
/**
 * Allows for the configuration of the library
 */
export declare const setup: (config: PnPConfiguration) => void;
declare const Def: {
    /**
     * Global configuration instance to which providers can be added
     */
    config: Settings;
    /**
     * Provides access to the Graph REST interface
     */
    graph: import("../graph").GraphRest;
    /**
     * Global logging instance to which subscribers can be registered and messages written
     */
    log: typeof Logger;
    /**
     * Provides access global setup method
     */
    setup: (config: PnPConfiguration) => void;
    /**
     * Provides access to the SharePoint REST interface
     */
    sp: SPRestAddIn;
    /**
     * Provides access to local and session storage
     */
    storage: PnPClientStorage;
    /**
     * Utility methods
     */
    util: {
        assign: typeof assign;
        combine: typeof combine;
        dateAdd: typeof dateAdd;
        getCtxCallback: typeof getCtxCallback;
        getGUID: typeof getGUID;
        getRandomString: typeof getRandomString;
        isArray: typeof isArray;
        isFunc: typeof isFunc;
        isUrlAbsolute: typeof isUrlAbsolute;
        objectDefinedNotNull: typeof objectDefinedNotNull;
        sanitizeGuid: typeof sanitizeGuid;
        stringIsNullOrEmpty: typeof stringIsNullOrEmpty;
    };
};
/**
 * Enables use of the import pnp from syntax
 */
export default Def;
//# sourceMappingURL=index.d.ts.map