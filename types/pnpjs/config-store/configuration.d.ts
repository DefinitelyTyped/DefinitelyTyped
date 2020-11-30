import { ITypedHash } from "../common";
/**
 * Interface for configuration providers
 *
 */
export interface IConfigurationProvider {
    /**
     * Gets the configuration from the provider
     */
    getConfiguration(): Promise<ITypedHash<string>>;
}
/**
 * Class used to manage the current application settings
 *
 */
export declare class Settings {
    private _settings;
    /**
     * Creates a new instance of the settings class
     *
     * @constructor
     */
    constructor(_settings?: Map<string, string>);
    /**
     * Adds a new single setting, or overwrites a previous setting with the same key
     *
     * @param {string} key The key used to store this setting
     * @param {string} value The setting value to store
     */
    add(key: string, value: string): void;
    /**
     * Adds a JSON value to the collection as a string, you must use getJSON to rehydrate the object when read
     *
     * @param {string} key The key used to store this setting
     * @param {any} value The setting value to store
     */
    addJSON(key: string, value: any): void;
    /**
     * Applies the supplied hash to the setting collection overwriting any existing value, or created new values
     *
     * @param {ITypedHash<any>} hash The set of values to add
     */
    apply(hash: ITypedHash<any>): Promise<void>;
    /**
     * Loads configuration settings into the collection from the supplied provider and returns a Promise
     *
     * @param {IConfigurationProvider} provider The provider from which we will load the settings
     */
    load(provider: IConfigurationProvider): Promise<void>;
    /**
     * Gets a value from the configuration
     *
     * @param {string} key The key whose value we want to return. Returns null if the key does not exist
     * @return {string} string value from the configuration
     */
    get(key: string): string | null;
    /**
     * Gets a JSON value, rehydrating the stored string to the original object
     *
     * @param {string} key The key whose value we want to return. Returns null if the key does not exist
     * @return {any} object from the configuration
     */
    getJSON(key: string): any;
}
//# sourceMappingURL=configuration.d.ts.map