/**
 * (c) Copyright Reserved EVRYTHNG Limited 2021. All rights reserved.
 * Use of this material is subject to license.
 * Copying and unauthorised use of this material strictly prohibited.
 */
/**
 * Settings can be applied globally or for individual request.
 * Available options are provided below:
 *
 * property {string} apiUrl - Url of the request
 * property {Object} headers - Headers to send with request
 * property {string} eventTimeZoneOffset - The default eventTimeZoneOffset that will be set in
 * property {number} timeout - Timeout for request in ms
 * property {number} digitalLinkDomain - The digital link domain that should be used in when
 * building a digital link from an epc
 * property {boolean} documentValidation - whether the EPCISDocument has to be validated or not
 * before sending it via the capture interface
 * property {string} EPCISDocumentContext - The default value of the '@context' parameter of an
 * EPCISDocument. Set it to undefined if you don't want the parameter in your EPCISDocument.
 * property {string} EPCISDocumentSchemaVersion - The default value of the 'schemaVersion'
 * parameter of an EPCISDocument. Set it to undefined if you don't want the parameter in your
 * EPCISDocument.
 * property {string} validationMode - The default value of 'validationMode' for the
 * validation of an EPCISDocument or an EPCIS Event against schemas.
 * Possible values are either "full" or "fast".
 * property {boolean} checkExtensions - set it to true if you want the extension of the
 * EPCISDocument to be checked against the EPCIS Document context.
 * Otherwise, the extensions check will be ignored.
 * Please refer to: https://www.npmjs.com/package/ajv-formats/v/0.3.4
 */
export const defaultSettings: Settings;
export default settings;
/**
 * Settings can be applied globally or for individual request.
 * Available options are provided below:
 */
export interface Settings {
    /**
     * - Url of the request
     */
    apiUrl: string;
    /**
     * - Headers to send with request
     */
    headers: any;
    /**
     * - The default eventTimeZoneOffset that will be set in
     */
    eventTimeZoneOffset: string;
    /**
     * - Timeout for request in ms
     */
    timeout: number;
    /**
     * - The digital link domain that should be used in when
     * building a digital link from an epc
     */
    digitalLinkDomain: number;
    /**
     * - whether the EPCISDocument has to be validated or not
     * before sending it via the capture interface
     */
    documentValidation: boolean;
    /**
     * - The default value of the '@context' parameter of an
     * EPCISDocument. Set it to undefined if you don't want the parameter in your EPCISDocument.
     */
    EPCISDocumentContext: string;
    /**
     * - The default value of the 'schemaVersion'
     * parameter of an EPCISDocument. Set it to undefined if you don't want the parameter in your
     * EPCISDocument.
     */
    EPCISDocumentSchemaVersion: string;
    /**
     * - The default value of 'validationMode' for the
     * validation of an EPCISDocument or an EPCIS Event against schemas.
     * Possible values are either "full" or "fast".
     */
    validationMode: string;
    /**
     * - set it to true if you want the extension of the
     * EPCISDocument to be checked against the EPCIS Document context.
     * Otherwise, the extensions check will be ignored.
     * Please refer to: https://www.npmjs.com/package/ajv-formats/v/0.3.4
     */
    checkExtensions: boolean;
}
declare namespace settings {
    const apiUrl: string;
    const headers: any;
    const eventTimeZoneOffset: string;
    const timeout: number;
    const digitalLinkDomain: number;
    const documentValidation: boolean;
    const EPCISDocumentContext: string;
    const EPCISDocumentSchemaVersion: string;
    const validationMode: string;
    const checkExtensions: boolean;
}
