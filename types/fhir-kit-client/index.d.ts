// Type definitions for fhir-kit-client 1.1
// Project: https://github.com/Vermonster/fhir-kit-client
// Definitions by: Matthew Morrissette <https://github.com/yinzara>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="fhir" />

import { Options, Headers } from "request";
import { OpPatch } from "json-patch";

// Set to R4
import fhir4 from "fhir/r4";
import fhir = fhir4;

type ResourceType = string;

interface SmartAuthMetadata {
    authorizeUrl?: string;
    tokenUrl?: string;
    registerUrl?: string;
    manageUrl?: string;
}

interface CustomResource extends fhir.Resource {
    [key: string]: any;
}

type FhirResource = CustomResource | fhir.FhirResource;

interface SearchParams {
    [key: string]: string|number|boolean|Array<string|number|boolean>;
}

interface Compartment  {
    id: string;
    resourceType: string;
}

declare class Client {
    baseUrl: string;
    customHeaders: Headers;
    bearerToken: string | undefined;

    /**
     * Create a FHIR client.
     *
     * @param {Object} config Client configuration
     * @param {String} config.baseUrl ISS for FHIR server
     * @param {Object} [config.customHeaders] Optional custom headers to send with
     *   each request
     * @throws An error will be thrown unless baseUrl is a non-empty string.
     */
    constructor(config: {
        baseUrl: string
        customHeaders?: Headers,
        requestOptions?: Options
    });

    resolve(params: {
        reference: string
        context?: fhir.Bundle | fhir.FhirResource
        headers?: Headers
        options?: Options
    }): Promise<FhirResource>;

    /**
     * Obtain the SMART OAuth URLs from the Capability Statement
     * http://docs.smarthealthit.org/authorization/conformance-statement/
     *
     * @async
     *
     * @example
     *
     * // Using promises
     * fhirClient.smartAuthMetadata().then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.smartAuthMetadata();
     * console.log(response);
     *
     * @param {Object} [params] - The request parameters.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} contains the following SMART URIs: authorizeUrl,
     *   tokenUrl, registerUrl, manageUrl
     */
    smartAuthMetadata(params?: { headers?: Headers, options?: Options }): Promise<SmartAuthMetadata>;

    /**
     * Get the default capability statement.
     *
     * @async
     *
     * @example
     *
     * // Using promises
     * fhirClient.capabilityStatement().then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.capabilityStatement();
     * console.log(response);
     *
     * @param {Object} [params] - The request parameters.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} capability statement FHIR resource.
     */
    capabilityStatement(params?: { headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.CapabilityStatement>;

    /**
     * Get a resource by id.
     *
     * @example
     *
     * // Using promises
     * fhirClient.read({
     *   resourceType: 'Patient',
     *   id: '12345',
     * }).then(data => console.log(data));
     *
     * // Using async
     * let response = await fhirClient.read({
     *   resourceType: 'Patient',
     *   id: '12345',
     * });
     * console.log(response);
     *
     * @param {Object} params - The request parameters.
     * @param {String} params.resourceType - The resource type (e.g. "Patient",
     *   "Observation").
     * @param {String} params.id - The FHIR id for the resource.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resource
     */
    read(params: { resourceType: ResourceType, id: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | FhirResource>;

    /**
     * Get a resource by id and version.
     *
     * @example
     *
     * // Using promises
     * fhirClient.vread({
     *   resourceType: 'Patient',
     *   id: '12345',
     *   version: '1',
     * }).then(data => console.log(data));
     *
     * // Using async
     * let response = await fhirClient.vread({
     *   resourceType: 'Patient',
     *   id: '12345',
     *   version: '1',
     * });
     * console.log(response);
     *
     * @param {Object} params - The request parameters.
     * @param {String} params.resourceType - The resource type (e.g. "Patient",
     *   "Observation").
     * @param {String} params.id - The FHIR id for the resource.
     * @param {String} params.version - The version id for the resource.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resource
     */
    vread(params: { resourceType: ResourceType, id: string, version: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | FhirResource>;

    /**
     * Create a resource.
     *
     * @example
     * const newPatient = {
     *   resourceType: 'Patient',
     *   active: true,
     *   name: [{ use: 'official', family: ['Coleman'], given: ['Lisa', 'P.'] }],
     *   gender: 'female',
     *   birthDate: '1948-04-14',
     * }
     *
     * // Using promises
     * fhirClient.create({
     *   resourceType: 'Patient',
     *   body: newPatient,
     * }).then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.create({
     *   resourceType: 'Patient',
     *   body: newPatient,
     * })
     * console.log(response);
     *
     * @param {Object} params - The request parameters.
     * @param {String} params.resourceType - The FHIR resource type.
     * @param {Response} params.body - The new resource data to create.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resource
     */
    create<T extends FhirResource>(params: { resourceType: ResourceType, body: T, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | T>;

    /**
     * Delete a resource by FHIR id.
     *
     * @example
     *
     * // Using promises
     * fhirClient.delete({
     *   resourceType: 'Patient',
     *   id: 12345,
     * }).then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.delete({ resourceType: 'Patient', id: 12345 });
     * console.log(response);
     *
     * @param {Object} params - The request parameters.
     * @param {String} params.resourceType - The resource type (e.g. "Patient", "Observation").
     * @param {String} params.id - The FHIR id for the resource.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} Operation Outcome FHIR resource
     */
    delete(params: { resourceType: ResourceType, id: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome>;

    /**
     * Update a resource by FHIR id.
     *
     * @example
     *
     * const updatedPatient = {
     *   resourceType: 'Patient',
     *   birthDate: '1948-04-14',
     * }
     *
     * // Using promises
     * fhirClient.update({
     *   resourceType: 'Patient',
     *   id: 12345,
     *   body: updatedPatient,
     * }).then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.update({
     *   resourceType: 'Patient',
     *   id: 12345,
     *   body: updatedPatient,
     * });
     * console.log(response);
     *
     * @param {Object} params - The request parameters.
     * @param {String} params.resourceType - The resource type (e.g. "Patient",
     *   "Observation").
     * @param {String} params.id - The FHIR id for the resource.
     * @param {String} params.body - The resource to be updated.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resource
     */
    update<T extends FhirResource>(params: { resourceType: ResourceType, id: string, body: T, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | T>;

    /**
     * Patch a resource by FHIR id.
     *
     * From http://hl7.org/fhir/STU3/http.html#patch:
     * Content-Type is 'application/json-patch+json'
     * Expects a JSON Patch document format, see http://jsonpatch.com/
     *
     * @example
     *
     * // JSON Patch document format from http://jsonpatch.com/
     * const JSONPatch = [{ op: 'replace', path: '/gender', value: 'male' }];
     *
     * // Using promises
     * fhirClient.patch({
     *   resourceType: 'Patient',
     *   id: 12345,
     *   JSONPatch,
     * }).then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.patch({
     *   resourceType: 'Patient',
     *   id: 12345,
     *   JSONPatch
     * });
     * console.log(response);
     *
     * @param {Object} params - The request parameters.
     * @param {String} params.resourceType - The resource type (e.g. "Patient",
     *   "Observation").
     * @param {String} params.id - The FHIR id for the resource.
     * @param {Array} params.JSONPatch - A JSON Patch document containing an array
     *   of patch operations, formatted according to http://jsonpatch.com/.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resource
     */
    patch(params: { resourceType: ResourceType, id: string, JSONPatch: OpPatch[], headers?: Headers, options?: Options, }): Promise<fhir.OperationOutcome | FhirResource>;

    /**
     * Submit a set of actions to perform independently as a batch.
     *
     * Update, create or delete a set of resources in a single interaction.
     * There should be no interdependencies between entries in the bundle.
     *
     * @example
     *
     * const request.Bundle = {
     *   'resourceType': 'fhir.Bundle',
     *   'type': 'batch',
     *   'entry': [
     *    {
     *      'fullUrl': 'http://example.org/fhir/Patient/123',
     *      'resource': {
     *        'resourceType': 'Patient',
     *        'id': '123',
     *        'active': true
     *      },
     *      'request': {
     *        'method': 'PUT',
     *        'url': 'Patient/123'
     *      }
     *    },
     *     {
     *       'request': {
     *         'method': 'DELETE',
     *         'url': 'Patient/2e27c71e-30c8-4ceb-8c1c-5641e066c0a4'
     *       }
     *     },
     *     {
     *       'request': {
     *         'method': 'GET',
     *         'url': 'Patient?name=peter'
     *       }
     *     }
     *   ]
     * }
     *
     * // Using promises
     * fhirClient.batch({
     *   body: request.Bundle
     * }).then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.batch({
     *   body: request.Bundle
     * });
     * console.log(response);
     *
     * @param {Object} params - The request parameters.
     * @param {string} params.body - The request body with a type of 'batch'.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resources in a FHIR fhir.Bundle structure.
     */
    batch(params: { body: fhir.Bundle & { type: "batch" }, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Bundle & { type: "batch-response" }>;

    /**
     * Submit a set of actions to perform independently as a transaction.
     *
     * Update, create or delete a set of resources in a single interaction.
     * The entire set of changes should succeed or fail as a single entity.
     * Multiple actions on multiple resources different types may be submitted.
     * The outcome should not depend on the order of the resources loaded.
     * Order of processing actions: DELETE, POST, PUT, and GET.
     * The transaction fails if any resource overlap in DELETE, POST and PUT.
     *
     * @example
     *
     * const request.Bundle = {
     *   'resourceType': 'fhir.Bundle',
     *   'type': 'transaction',
     *   'entry': [
     *    {
     *      'fullUrl': 'http://example.org/fhir/Patient/123',
     *      'resource': {
     *        'resourceType': 'Patient',
     *        'id': '123',
     *        'active': true
     *      },
     *      'request': {
     *        'method': 'PUT',
     *        'url': 'Patient/123'
     *      }
     *    },
     *     {
     *       'request': {
     *         'method': 'DELETE',
     *         'url': 'Patient/2e27c71e-30c8-4ceb-8c1c-5641e066c0a4'
     *       }
     *     },
     *     {
     *       'request': {
     *         'method': 'GET',
     *         'url': 'Patient?name=peter'
     *       }
     *     }
     *   ]
     * }
     *
     * // Using promises
     * fhirClient.transaction({
     *   body: request.Bundle
     * }).then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.transaction({
     *   body: request.Bundle
     * });
     * console.log(response);
     *
     * @param {Object} params - The request parameters.
     * @param {String} params.body - The request body with a type of
     *   'transaction'.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resources in a FHIR fhir.Bundle structure.
     */
    transaction(params: { body: fhir.Bundle & { type: "transaction" }, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Bundle & { type: "transaction-response" }>;

    /**
     * Return the next page of results.
     *
     * @param {Object} params - The request parameters. Passing the bundle as the
     *   first parameter is DEPRECATED
     * @param {object} params.bundle - fhir.Bundle result of a FHIR search
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     * @param {Object} [headers] - DEPRECATED Optional custom headers to add to
     *   the request
     *
     * @return {Promise<Object>} FHIR resources in a FHIR fhir.Bundle structure.
     */
    nextPage<T extends string>(params: { bundle: fhir.Bundle & {type: T}, options?: Options }, headers?: Headers): Promise<fhir.OperationOutcome | fhir.Bundle & {type: T}>;

    /**
     * Return the previous page of results.
     *
     * @param {Object} params - The request parameters. Passing the bundle as the
     *   first parameter is DEPRECATED
     * @param {object} params.bundle - fhir.Bundle result of a FHIR search
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     * @param {Object} [headers] - DEPRECATED Optional custom headers to add to
     *   the request
     *
     * @return {Promise<Object>} FHIR resources in a FHIR fhir.Bundle structure.
     */
    prevPage<T extends string>(params: { bundle: fhir.Bundle & {type: T}, options?: Options }, headers?: Headers): Promise<fhir.OperationOutcome | fhir.Bundle & {type: T}>;

    /**
     * Search for a FHIR resource, with or without compartments, or the entire
     * system
     *
     * @example
     *
     * // Using promises
     * fhirClient.search({
     *   resourceType: 'Observation',
     *   compartment: { resourceType: 'Patient', id: 123 },
     *   searchParams: { code: 'abc', _include: ['Observation:encounter', 'Observation:performer'] },
     * }).then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.search({
     *   resourceType: 'Observation',
     *   compartment: { resourceType: 'Patient', id: 123 },
     *   searchParams: { code: 'abc', _include: ['Observation:encounter', 'Observation:performer'] },
     * });
     * console.log(response);
     *
     * @param {Object} params - The request parameters.
     * @param {String} [params.resourceType] - The resource type
     *   (e.g. "Patient", "Observation"), optional.
     * @param {Object} [params.compartment] - The search compartment, optional.
     * @param {Object} [params.searchParams] - The search parameters, optional.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resources in a FHIR fhir.Bundle structure.
     *
     * @throws {Error} if neither searchParams nor resourceType are supplied
     */
    search(params: { resourceType: ResourceType, compartment?: Compartment, searchParams?: SearchParams, headers?: Headers, options?: Options }):
        Promise<fhir.OperationOutcome | fhir.Bundle & { type: "searchset" }>;

    /**
     * Search for a FHIR resource.
     *
     * @example
     *
     * // Using promises
     * fhirClient.resourceSearch({
     *   resourceType: 'Patient',
     *   searchParams: { name: 'Smith' },
     * }).then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.resourceSearch({
     *   resourceType: 'Patient',
     *   searchParams: { name: 'Smith' },
     * });
     * console.log(response);
     *
     * @param {Object} params - The request parameters.
     * @param {String} params.resourceType - The resource type (e.g. "Patient",
     *   "Observation").
     * @param {Object} params.searchParams - The search parameters.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resources in a FHIR fhir.Bundle structure.
     */
    resourceSearch(params: { resourceType: ResourceType, searchParams: SearchParams, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Bundle & { type: "searchset" }>;

    /**
     * Search across all FHIR resource types in the system.
     * Only the parameters defined for all resources can be used.
     *
     * @example
     *
     * // Using promises
     * fhirClient.systemSearch({
     *   searchParams: { name: 'smith' }
     * }).then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.systemSearch({ searchParams: { name: 'smith' } });
     * console.log(response);
     *
     * @param {Object} params - The request parameters.
     * @param {Object} params.searchParams - The search parameters.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resources in a FHIR fhir.Bundle structure.
     */
    systemSearch(params: { searchParams: SearchParams, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Bundle & { type: "searchset" }>;

    /**
     * Search for FHIR resources within a compartment.
     * The resourceType and id must be specified.
     *
     * @example
     *
     * // Using promises
     * fhirClient.compartmentSearch({
     *   resourceType: 'Observation',
     *   compartment: { resourceType: 'Patient', id: 123 },
     *   searchParams: { code: 'abc' }
     * }).then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.compartmentSearch({
     *   resourceType: 'Observation',
     *   compartment: { resourceType: 'Patient', id: 123 },
     *   searchParams: { code: 'abc' }
     * });
     * console.log(response);
     *
     * @param {Object} params - The request parameters.
     * @param {String} params.resourceType - The resource type (e.g. "Patient",
     *   "Observation").
     * @param {Object} params.compartment - The search compartment.
     * @param {Object} [params.searchParams] - The search parameters, optional.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resources in a FHIR fhir.Bundle structure.
     */
    compartmentSearch(params:
        { resourceType: ResourceType, compartment: Compartment, searchParams?: SearchParams, headers?: Headers, options?: Options }):
        Promise<fhir.OperationOutcome | fhir.Bundle & { type: "searchset" }> ;

    /**
     * Retrieve the change history for a FHIR resource id, a resource type or the
     * entire system
     *
     * @example
     *
     * // Using promises
     * fhirClient.history({ resourceType: 'Patient', id: '12345' });
     *   .then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.history({ resourceType: 'Patient', id: '12345' });
     * console.log(response);
     *
     * @param {Object} [params] - The request parameters.
     * @param {string} [params.resourceType] - The resource type
     *   (e.g. "Patient", "Observation"), optional.
     * @param {string} [params.id] - The FHIR id for the resource, optional.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resources in a FHIR fhir.Bundle structure.
     */
    history(params?: { resourceType?: ResourceType, id?: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Bundle & { type: "history" }>;

    /**
     * Retrieve the change history for a particular resource FHIR id.
     *
     * @example
     *
     * // Using promises
     * fhirClient.resourceHistory({ resourceType: 'Patient', id: '12345' });
     *           .then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.resourceHistory({ resourceType: 'Patient', id: '12345' });
     * console.log(response);
     *
     * @param {Object} params - The request parameters.
     * @param {string} params.resourceType - The resource type (e.g. "Patient",
     *   "Observation").
     * @param {string} params.id - The FHIR id for the resource.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resources in a FHIR fhir.Bundle structure.
     */
    resourceHistory(params: { resourceType: ResourceType, id: string, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Bundle & { type: "history" }>;

    /**
     * Retrieve the change history for a particular resource type.
     *
     * @example
     *
     * // Using promises
     * fhirClient.typeHistory({ resourceType: 'Patient' });
     *           .then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.typeHistory({ resourceType: 'Patient' });
     * console.log(response);
     *
     * @param {Object} params - The request parameters.
     * @param {string} params.resourceType - The resource type (e.g. "Patient",
     *   "Observation").
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resources in a FHIR fhir.Bundle structure.
     */
    typeHistory(params: { resourceType: ResourceType, headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Bundle & { type: "history" }>;

    /**
     * Retrieve the change history for all resources.
     *
     * @example
     *
     * // Using promises
     * fhirClient.systemHistory();
     *           .then((data) => { console.log(data); });
     *
     * // Using async
     * let response = await fhirClient.systemHistory();
     * console.log(response);
     *
     * @param {Object} [params] - The request parameters.
     * @param {Object} [params.headers] - DEPRECATED Optional custom headers to
     *   add to the request
     * @param {Object} [params.options] - Optional options object
     * @param {Object} [params.options.headers] - Optional headers to add to the
     *   request
     *
     * @return {Promise<Object>} FHIR resources in a FHIR fhir.Bundle structure.
     */
    systemHistory(params?: { headers?: Headers, options?: Options }): Promise<fhir.OperationOutcome | fhir.Bundle & { type: "history" }>;
}

export = Client;
