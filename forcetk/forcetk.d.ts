// Type definitions for ForceTK
// Project: https://github.com/developerforce/Force.com-JavaScript-REST-Toolkit
// Definitions by: Pomu Takeuchi <https://github.com/pomu0325/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

declare module forcetk {
    //var CallbackFunction: (response?: {records: any[]}) => void

    export class Client {
        /**
         * The Client provides a convenient wrapper for the Force.com REST API,
         * allowing JavaScript in Visualforce pages to use the API via the Ajax
         * Proxy.
         * @param [clientId=null] 'Consumer Key' in the Remote Access app settings
         * @param [loginUrl='https://login.salesforce.com/'] Login endpoint
         * @param [proxyUrl=null] Proxy URL. Omit if running on Visualforce or
         *                  PhoneGap etc
         * @constructor
         */
        constructor(clientId?: string, loginUrl?: string, proxyUrl?: string)
        clientId: string
        loginUrl: string
        proxyUrl: string
        authzHeader: string
        refreshToken: string
        sessionId: string
        apiVersion: string
        instanceUrl: string
        asyncAjax: boolean

        /**
         * Set a refresh token in the client.
         * @param refreshToken an OAuth refresh token
         */
        setRefreshToken(refreshToken: string): void

        /**
         * Refresh the access token.
         * @param callback function to call on success
         * @param error function to call on failure
         */
        refreshAccessToken(callback: (data: any, textStatus: string, jqXHR: JQueryXHR) => void, error: Function): XMLHttpRequest

        /**
         * Set a session token and the associated metadata in the client.
         * @param sessionId a salesforce.com session ID. In a Visualforce page,
         *                   use '{!$Api.sessionId}' to obtain a session ID.
         * @param [apiVersion="27.0"] Force.com API version
         * @param [instanceUrl] Omit this if running on Visualforce; otherwise
         *                   use the value from the OAuth token.
         */
        setSessionToken(sessionId: string, apiVersion?: string, instanceUrl?: string): void

        /*
         * Low level utility function to call the Salesforce endpoint.
         * @param path resource path relative to /services/data
         * @param callback function to which response will be passed
         * @param [error=null] function to which jqXHR will be passed in case of error
         * @param [method="GET"] HTTP method for call
         * @param [payload=null] payload for POST/PATCH etc
         */
        ajax(path: string, callback: (data: any, textStatus: string, jqXHR: JQueryXHR) => void, error?: (jqXHR: JQueryXHR, textStatus: string, errorThrown: string) => void, method?: string, payload?: {}, retry?: boolean): XMLHttpRequest


        /**
         * Utility function to query the Chatter API and download a file
         * Note, raw XMLHttpRequest because JQuery mangles the arraybuffer
         * This should work on any browser that supports XMLHttpRequest 2 because arraybuffer is required.
         * For mobile, that means iOS >= 5 and Android >= Honeycomb
         * @author Tom Gersic
         * @param path resource path relative to /services/data
         * @param mimetype of the file
         * @param callback function to which response will be passed
         * @param [error=null] function to which request will be passed in case of error
         * @param retry true if we've already tried refresh token flow once
         **/
        getChatterFile(path: string, mimetype: string, callback: (data: any, textStatus: string, jqXHR: JQueryXHR) => void, error?: (jqXHR: JQueryXHR, textStatus: string, errorThrown: string) => void, retry?: boolean): void

        /*
         * Low level utility function to call the Salesforce endpoint specific for Apex REST API.
         * @param path resource path relative to /services/apexrest
         * @param callback function to which response will be passed
         * @param [error=null] function to which jqXHR will be passed in case of error
         * @param [method="GET"] HTTP method for call
         * @param [payload=null] payload for POST/PATCH etc
         * @param [paramMap={}] parameters to send as header values for POST/PATCH etc
         * @param [retry] specifies whether to retry on error
         */
        apexrest(path: string, callback: (data: any, textStatus: string, jqXHR: JQueryXHR) => void, error?: (jqXHR: JQueryXHR, textStatus: string, errorThrown: string) => void, method?: string, payload?: {}, paramMap?: {}, retry?: boolean): XMLHttpRequest

        /*
         * Lists summary information about each Salesforce.com version currently
         * available, including the version, label, and a link to each version's
         * root.
         * @param callback function to which response will be passed
         * @param [error=null] function to which jqXHR will be passed in case of error
         */
        versions(callback: (data: any, textStatus: string, jqXHR: JQueryXHR) => void, error?: (jqXHR: JQueryXHR, textStatus: string, errorThrown: string) => void): XMLHttpRequest

        /*
         * Lists available resources for the client's API version, including
         * resource name and URI.
         * @param callback function to which response will be passed
         * @param [error=null] function to which jqXHR will be passed in case of error
         */
        resources(callback: (data: any, textStatus: string, jqXHR: JQueryXHR) => void, error?: (jqXHR: JQueryXHR, textStatus: string, errorThrown: string) => void): XMLHttpRequest

        /*
         * Lists the available objects and their metadata for your organization's
         * data.
         * @param callback function to which response will be passed
         * @param [error=null] function to which jqXHR will be passed in case of error
         */
        describeGlobal(callback: (data: any, textStatus: string, jqXHR: JQueryXHR) => void, error?: (jqXHR: JQueryXHR, textStatus: string, errorThrown: string) => void): XMLHttpRequest

        /*
         * Describes the individual metadata for the specified object.
         * @param objtype object type; e.g. "Account"
         * @param callback function to which response will be passed
         * @param [error=null] function to which jqXHR will be passed in case of error
         */
        metadata(objtype: string, callback: (data: any, textStatus: string, jqXHR: JQueryXHR) => void, error?: (jqXHR: JQueryXHR, textStatus: string, errorThrown: string) => void): XMLHttpRequest

        /*
         * Completely describes the individual metadata at all levels for the
         * specified object.
         * @param objtype object type; e.g. "Account"
         * @param callback function to which response will be passed
         * @param [error=null] function to which jqXHR will be passed in case of error
         */
        describe(objtype: string, callback: (data: any, textStatus: string, jqXHR: JQueryXHR) => void, error?: (jqXHR: JQueryXHR, textStatus: string, errorThrown: string) => void): XMLHttpRequest

        /*
         * Creates a new record of the given type.
         * @param objtype object type; e.g. "Account"
         * @param fields an object containing initial field names and values for
         *               the record, e.g. {:Name "salesforce.com", :TickerSymbol
         *               "CRM"}
         * @param callback function to which response will be passed
         * @param [error=null] function to which jqXHR will be passed in case of error
         */
        create(objtype: string, fields: {}, callback: (data: any, textStatus: string, jqXHR: JQueryXHR) => void, error?: (jqXHR: JQueryXHR, textStatus: string, errorThrown: string) => void): XMLHttpRequest

        /*
         * Retrieves field values for a record of the given type.
         * @param objtype object type; e.g. "Account"
         * @param id the record's object ID
         * @param [fields=null] optional comma-separated list of fields for which
         *               to return values; e.g. Name,Industry,TickerSymbol
         * @param callback function to which response will be passed
         * @param [error=null] function to which jqXHR will be passed in case of error
         */
        retrieve(objtype: string, id: string, fieldlist: string, callback: (data: any, textStatus: string, jqXHR: JQueryXHR) => void, error?: (jqXHR: JQueryXHR, textStatus: string, errorThrown: string) => void): void    // XXX

        /*
         * Upsert - creates or updates record of the given type, based on the
         * given external Id.
         * @param objtype object type; e.g. "Account"
         * @param externalIdField external ID field name; e.g. "accountMaster__c"
         * @param externalId the record's external ID value
         * @param fields an object containing field names and values for
         *               the record, e.g. {:Name "salesforce.com", :TickerSymbol
         *               "CRM"}
         * @param callback function to which response will be passed
         * @param [error=null] function to which jqXHR will be passed in case of error
         */
        upsert(objtype: string, externalIdField: string, externalId: string, fields: {}, callback: (data: any, textStatus: string, jqXHR: JQueryXHR) => void, error?: (jqXHR: JQueryXHR, textStatus: string, errorThrown: string) => void): XMLHttpRequest

        /*
         * Updates field values on a record of the given type.
         * @param objtype object type; e.g. "Account"
         * @param id the record's object ID
         * @param fields an object containing initial field names and values for
         *               the record, e.g. {:Name "salesforce.com", :TickerSymbol
         *               "CRM"}
         * @param callback function to which response will be passed
         * @param [error=null] function to which jqXHR will be passed in case of error
         */
        update(objtype: string, id: string, fields: {}, callback: (data: any, textStatus: string, jqXHR: JQueryXHR) => void, error?: (jqXHR: JQueryXHR, textStatus: string, errorThrown: string) => void): XMLHttpRequest

        /*
         * Deletes a record of the given type. Unfortunately, 'delete' is a
         * reserved word in JavaScript.
         * @param objtype object type; e.g. "Account"
         * @param id the record's object ID
         * @param callback function to which response will be passed
         * @param [error=null] function to which jqXHR will be passed in case of error
         */
        del(objtype: string, id: string, callback: (data: any, textStatus: string, jqXHR: JQueryXHR) => void, error?: (jqXHR: JQueryXHR, textStatus: string, errorThrown: string) => void): XMLHttpRequest

        /*
         * Executes the specified SOQL query.
         * @param soql a string containing the query to execute - e.g. "SELECT Id,
         *             Name from Account ORDER BY Name LIMIT 20"
         * @param callback function to which response will be passed
         * @param [error=null] function to which jqXHR will be passed in case of error
         */
        query(soql: string, callback: (data: any, textStatus: string, jqXHR: JQueryXHR) => void, error?: (jqXHR: JQueryXHR, textStatus: string, errorThrown: string) => void): XMLHttpRequest

        /*
         * Queries the next set of records based on pagination.
         * <p>This should be used if performing a query that retrieves more than can be returned
         * in accordance with http://www.salesforce.com/us/developer/docs/api_rest/Content/dome_query.htm</p>
         * <p>Ex: forcetkClient.queryMore( successResponse.nextRecordsUrl, successHandler, failureHandler )</p>
         *
         * @param url - the url retrieved from nextRecordsUrl or prevRecordsUrl
         * @param callback function to which response will be passed
         * @param [error=null] function to which jqXHR will be passed in case of error
         */
        queryMore(url: string, callback: (data: any, textStatus: string, jqXHR: JQueryXHR) => void, error?: (jqXHR: JQueryXHR, textStatus: string, errorThrown: string) => void): XMLHttpRequest

        /*
         * Executes the specified SOSL search.
         * @param sosl a string containing the search to execute - e.g. "FIND
         *             {needle}"
         * @param callback function to which response will be passed
         * @param [error=null] function to which jqXHR will be passed in case of error
         */
        search(sosl: string, callback: (data: any, textStatus: string, jqXHR: JQueryXHR) => void, error?: (jqXHR: JQueryXHR, textStatus: string, errorThrown: string) => void): XMLHttpRequest

    }
}
