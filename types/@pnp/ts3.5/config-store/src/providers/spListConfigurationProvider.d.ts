import { IConfigurationProvider } from "../configuration";
import { TypedHash } from "@pnp/common";
import { default as CachingConfigurationProvider } from "./cachingConfigurationProvider";
import { Web } from "@pnp/sp";
/**
 * A configuration provider which loads configuration values from a SharePoint list
 *
 */
export default class SPListConfigurationProvider implements IConfigurationProvider {
    readonly web: Web;
    readonly listTitle: string;
    private keyFieldName;
    private valueFieldName;
    /**
     * Creates a new SharePoint list based configuration provider
     * @constructor
     * @param {string} webUrl Url of the SharePoint site, where the configuration list is located
     * @param {string} listTitle Title of the SharePoint list, which contains the configuration settings (optional, default: "config")
     * @param {string} keyFieldName The name of the field in the list to use as the setting key (optional, default: "Title")
     * @param {string} valueFieldName The name of the field in the list to use as the setting value (optional, default: "Value")
     */
    constructor(web: Web, listTitle?: string, keyFieldName?: string, valueFieldName?: string);
    /**
     * Loads the configuration values from the SharePoint list
     *
     * @return {Promise<TypedHash<string>>} Promise of loaded configuration values
     */
    getConfiguration(): Promise<TypedHash<string>>;
    /**
     * Wraps the current provider in a cache enabled provider
     *
     * @return {CachingConfigurationProvider} Caching providers which wraps the current provider
     */
    asCaching(cacheKey?: string): CachingConfigurationProvider;
}
