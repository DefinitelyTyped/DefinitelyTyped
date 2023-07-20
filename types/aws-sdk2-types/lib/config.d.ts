import {ConfigurationServicePlaceholders, ConfigurationServiceApiVersions} from './config_service_placeholders';
import {ConfigBase, ConfigurationOptions} from './config-base';

export class Config extends ConfigBase {
    /**
     * Creates a new configuration object.
     * This is the object that passes option data along to service requests, including credentials, security, region information, and some service specific settings.
     */
    constructor(options?: ConfigurationOptions & ConfigurationServicePlaceholders & APIVersions);
    /**
     * Loads configuration data from a JSON file into this config object.
     * Loading configuration will reset all existing configuration on the object.
     * This feature is not supported in the browser environment of the SDK.
     *
     * @param {string} path - the path relative to your process's current working directory to load configuration from.
     */
    loadFromPath(path: string): Config & ConfigurationServicePlaceholders & APIVersions;
    /**
     * Updates the current configuration object with new options.
     *
     * @param {ConfigurationOptions} options - a map of option keys and values.
     * @param {boolean} allowUnknownKeys - Whether unknown keys can be set on the configuration object.
     */
    update(options: ConfigurationOptions & ConfigurationServicePlaceholders & APIVersions & {[key: string]: any}, allowUnknownKeys: true): void;
    /**
     * Updates the current configuration object with new options.
     *
     * @param {ConfigurationOptions} options - a map of option keys and values.
     * @param {boolean} allowUnknownKeys - Defaults to false. Whether unknown keys can be set on the configuration object.
     */
    update(options: ConfigurationOptions & ConfigurationServicePlaceholders & APIVersions, allowUnknownKeys?: false): void;
}

export type GlobalConfigInstance = Config & ConfigurationServicePlaceholders & APIVersions;


export interface APIVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in all services (unless overridden by apiVersions). Specify \'latest\' to use the latest possible version.
     */
    apiVersion?: "latest"|string;
    /**
     * A map of service identifiers (the lowercase service class name) with the API version to use when instantiating a service. Specify 'latest' for each individual that can use the latest available version.
     */
    apiVersions?: ConfigurationServiceApiVersions;
}

// for backwards compatible client generation
export { ConfigBase } from "./config-base";
