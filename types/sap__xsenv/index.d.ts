// Type definitions for non-npm package @sap/xsenv 2.0
// Project: https://help.sap.com/hana_platform
// Definitions by: [Michael Müller] <https://github.com/mad-mike>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// For more information see the Developer Guide for SAP HANA XS Advanced Model run time.
// The module is available on the https://npm.sap.com registry.

export function loadEnv(jsonFile?: string): void;
export function readCFServices(): any;

export type ServiceFilter = string | { name?: string; label?: string; tag?: string; plan?: string } | ((service: any) => boolean);

/**
 * Reads service configuration from CloudFoundry environment variable <code>VCAP_SERVICES</code>.
 *
 * @param filter Filter used to find a bound Cloud Foundry service, see filterCFServices
 * @return credentials property of found service
 * @throws Error in case no or multiple matching services are found
 */
export function cfServiceCredentials(filter: ServiceFilter): any;
/**
 * Returns an array of Cloud Foundry services matching the given filter.
 *
 * @param filter
 *  - if string, returns the service with the same service instance name (name property)
 *  - if Object, should have some of these properties [name, label, tag, plan] and returns all services
 *    where all of the given properties match. Given tag matches if it is present in the tags array.
 *  - if function, should take a service object as argument and return true only if it matches the filter
 * @returns Arrays of matching service objects, empty if no matches
 */
export function filterCFServices(filter: ServiceFilter): any;

/**
 * Looks up and returns bound Cloud Foundry services.
 *
 * If a service is not found in VCAP_SERVICES, returns default service configuration loaded from a JSON file.
 *
 * @param query describes requested Cloud Foundry services, each property value is a filter
 *  as described in filterCFServices.
 * @param servicesFile path to JSON file to load default service configuration (default is default-services.json).
 *  If null, do not load default service configuration.
 *
 * @returns with the same properties as in query argument where the value of each
 *  property is the respective service credentials object.
 * @throws Error, if for some of the requested services no or multiple instances are found; Error, if query parameter is not provided
 */
export function getServices(query: any, servicesFile?: string): any;

export function loadCertificates(certPath?: string): any;
