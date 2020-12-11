import { Logger } from "@pnp/logging";
import { PnPClientStorage, dateAdd, combine, getCtxCallback, getRandomString, getGUID, isFunc, objectDefinedNotNull, isArray, extend, isUrlAbsolute, stringIsNullOrEmpty, getAttrValueFromString, sanitizeGuid } from "@pnp/common";
import { Settings } from "@pnp/config-store";
import { GraphRest } from "@pnp/graph";
import { SPRestAddIn } from "@pnp/sp-addinhelpers";
import { PnPConfiguration } from "./config/pnplibconfig";
/**
 * Root class of the Patterns and Practices namespace, provides an entry point to the library
 */
/**
 * Re-export everything from the dependencies to match the previous pattern
 */
export * from "@pnp/sp";
export * from "@pnp/graph";
export * from "@pnp/common";
export * from "@pnp/logging";
export * from "@pnp/config-store";
export * from "@pnp/odata";
/**
 * Utility methods
 */
export declare const util: {
    combine: typeof combine;
    dateAdd: typeof dateAdd;
    extend: typeof extend;
    getAttrValueFromString: typeof getAttrValueFromString;
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
 * Provides access to the Microsoft Graph REST interface
 */
export declare const graph: GraphRest;
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
     * Provides access to the Microsoft Graph REST interface
     */
    graph: GraphRest;
    /**
     * Global logging instance to which subscribers can be registered and messages written
     */
    log: typeof Logger;
    /**
     * Provides access to local and session storage
     */
    setup: (config: PnPConfiguration) => void;
    /**
     * Provides access to the REST interface
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
        combine: typeof combine;
        dateAdd: typeof dateAdd;
        extend: typeof extend;
        getAttrValueFromString: typeof getAttrValueFromString;
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
