export type JSONValue = string | number | boolean | null | { [k: string]: JSONValue } | JSONValue[];
export type ServiceCredentials = Record<string, JSONValue>;
export interface ServiceBinding<T = ServiceCredentials> {
    name: string;
    label: string;
    plan?: string;
    tags?: string[];
    credentials: T;
    instance_name?: string;
    instance_guid?: string;
    binding_guid?: string;
    binding_name?: string;
}
/**
 * Cloud Foundry supports: name, label, tag, plan
 * K8S supports: name, label
 *  - if string, returns the service with the same service instance name (name property).
 *  - if object, should have some of these properties [name, label, tag, plan] and returns all services where all of the given properties match. Given tag matches if it is present in the tags array.
 *  - if function, should take a service object as argument and return true only if it matches the filter.
 */
export type ServiceQuery =
    | string
    | { name?: string | undefined; label?: string | undefined; tag?: string | undefined; plan?: string | undefined }
    | ((service: ServiceBinding) => boolean);

/**
 * Loads the environment from a JSON file. This function converts each top-level property to a string and sets it in the respective environment variable, unless it is already set.
 * This function does not change existing environment variables. So the file content acts like default values for environment variables. This function does not complain if the file does not exist.
 * @param file - (optional) name of JSON file to load, `default-env.json` by default. Does nothing if the file does not exist.
 */
export function loadEnv(file?: string): void;
/**
 * Loads the certificates listed in the given path. If this argument is not provided, it uses `XS_CACERT_PATH` environment variable instead.
 * @param certPath - (optional) string with certificate files to load. The file names are separated by path.delimiter. Default is `process.env.XS_CACERT_PATH`.
 * @returns Array of loaded certificates or undefined if certPath argument is not provided.
 * @throws Error, if some of the files could not be loaded.
 */
export function loadCertificates(certPath?: string): string[] | undefined;

/**
 * Looks up bound service instances matching the given query. If a service is not found - returns default service configuration loaded from a JSON file.
 * The order of lookup is: `VCAP_SERVICES`, mounted secrets path in K8S, default service configuration.
 * @param query - object describing requested services. Each property value is a filter as described in ServiceQuery.
 * @param servicesFile - (optional) path to JSON file to load default service configuration (default is `default-services.json`). If null, do not load default service configuration.
 * @returns Object with the same properties as in query argument where the value of each property is the respective service credentials object.
 * @throws Error, if for some of the requested services no or multiple instances are found; Error, if query parameter is not provided.
 */
export function getServices<T extends Record<string, unknown> = Record<string, ServiceCredentials>>(
    query: Record<keyof T, ServiceQuery>,
    servicesFile?: string | null,
): T;
/**
 * Looks up bound service instances matching the given query. If a service is not found - returns default service configuration loaded from a JSON file.
 * The order of lookup is: `VCAP_SERVICES`, mounted secrets path in K8S, default service configuration.
 * @param path - string containing the mount path where the secrets are located in Kubernetes. By default is `/etc/secrets/sapcp`.
 *               For example, by default the credentials for an instance `inst-name` of service `service-name` would be located under `/etc/secrets/sapcp/service-name/inst-name`.
 * @param query - object describing requested services. Each property value is a filter as described in ServiceQuery.
 * @param servicesFile - (optional) path to JSON file to load default service configuration (default is `default-services.json`). If null, do not load default service configuration.
 * @returns Object with the same properties as in query argument where the value of each property is the respective service credentials object.
 * @throws Error, if for some of the requested services no or multiple instances are found; Error, if query parameter is not provided.
 */
export function getServices<T extends Record<string, unknown> = Record<string, ServiceCredentials>>(
    path: string,
    query: Record<keyof T, ServiceQuery>,
    servicesFile?: string | null,
): T;

/**
 * Returns all bound services. Works in Cloud Foundry and Kubernetes.
 * @param path - (optional) string containing the mount path where the secrets are located in Kubernetes. By default is `/etc/secrets/sapcp`.
 * @param options - (optional) object with options to customize behavior. Only supports field `disableCache` to disable K8s secrets caching.
 * @returns Object where each service instance is mapped to its name. Works in Kubernetes and Cloud Foundry.
 */
export function readServices(path?: string, options?: { disableCache?: boolean }): Record<string, ServiceBinding>;
/**
 * Same as readServices() but works only in Cloud Foundry. It is recommended to use the generic function.
 */
export function readCFServices(): Record<string, ServiceBinding>;

/**
 * Looks up a bound service instance matching the given filter works for both the Kubernetes and Cloud Foundry environments.
 * Note: This function does not load default service configuration from `default-services.json`.
 * @param filter - Service lookup criteria as described in ServiceQuery.
 * @returns Credentials object of found service.
 * @throws Error in case no or multiple matching services are found.
 */
export function serviceCredentials(filter: ServiceQuery): ServiceCredentials;
/**
 * Looks up a bound service instance matching the given filter works for both the Kubernetes and Cloud Foundry environments.
 * Note: This function does not load default service configuration from `default-services.json`.
 * @param path - string containing the mount path where the secrets are located in Kubernetes. By default is `/etc/secrets/sapcp`.
 * @param filter - Service lookup criteria as described in ServiceQuery.
 * @returns Credentials object of found service.
 * @throws Error in case no or multiple matching services are found.
 */
export function serviceCredentials(path: string, filter: ServiceQuery): ServiceCredentials;
/**
 * Same as serviceCredentials(filter) but works only in Cloud Foundry. It is recommended to use the generic function.
 */
export function cfServiceCredentials(filter: ServiceQuery): ServiceCredentials;

/**
 * Returns all bound services that match the given criteria. Works in Cloud Foundry and Kubernetes.
 * @param filter - Service lookup criteria as described in ServiceQuery.
 * @returns Array of credentials objects of matching services. Empty array, if no matches found.
 */
export function filterServices(filter: ServiceQuery): ServiceBinding[];
/**
 * Returns all bound services that match the given criteria. Works in Cloud Foundry and Kubernetes.
 * @param path - string containing the mount path where the secrets are located in Kubernetes. By default is `/etc/secrets/sapcp`.
 * @param filter - Service lookup criteria as described in ServiceQuery.
 * @returns Array of credentials objects of matching services. Empty array, if no matches found.
 */
export function filterServices(path: string, filter: ServiceQuery): ServiceBinding[];
/**
 * Same as filterServices(filter) but works only in Cloud Foundry. It is recommended to use the generic function.
 */
export function filterCFServices(filter: ServiceQuery): ServiceBinding[];
