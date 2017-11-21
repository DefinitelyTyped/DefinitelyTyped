export namespace services {
    export interface ApiClientOptions { hostname: string; port: string; path: string; protocol: string; headers: string; method: string }
    export interface ApiClientResponse { statusCode: string; statusText: string; body: Object; headers: Object }
    export interface ListItemObject { value: string, status: string, version: any }
    export interface ListObject { name: string, status: string, version: any }
    export interface ApiClient {
        /**
         * Make a POST API call to the specified uri with headers and optional body
         * @param {string} uri http(s?) endpoint to call
         * @param {Object} headers Key value pair of headers
         * @param {string} body post body to send
         * @returns {Promise<ApiClientResponse>}
         * @memberof ApiClient
         */
        post(uri: string, headers: Object, body?: string): Promise<ApiClientResponse>;
        /**
         * Make a PUT API call to the specified uri with headers and optional body
         * @param {string} uri http(s?) endpoint to call
         * @param {Object} headers Key value pair of headers
         * @param {string} body post body to send
         * @returns {Promise<ApiClientResponse>}
         * @memberof ApiClient
         */
        put(uri: string, headers: Object, body?: string): Promise<ApiClientResponse>;
        /**
         * Make a GET API call to the specified uri with headers
         * @param {string} uri http(s?) endpoint to call
         * @param {Object} headers key value pair of headers
         * @returns {Promise<ApiClientResponse>}
         * @memberof ApiClient
         */
        get(uri: string, headers: Object): Promise<ApiClientResponse>;
        /**
        * Make a DELETE API call to the specified uri with headers
        * @param {string} uri http(s?) endpoint to call
        * @param {Object} headers key value pair of headers
        * @returns {Promise<ApiClientResponse>}
        */
        delete(uri: string, headers: Object): Promise<ApiClientResponse>;
    }
    export class DeviceAddressService {
        /**
         * Create an instance of DeviceAddressService
         * @param {ApiClient} [apiClient=new ApiClient()] ApiClient
         * @memberOf DeviceAddressService
         */
        constructor(apiClient: ApiClient);

        /**
         * Get full address information from Alexa Device Address API
         * @param {string} deviceId deviceId from Alexa request
         * @param {string} apiEndpoint API apiEndpoint from Alexa request
         * @param {string} token bearer token for device address permission
         * @returns {Promise<Object>}
         * @memberOf DeviceAddressService
         */
        getFullAddress(deviceId: string, apiEndpoint: string, token: string): Promise<Object>;

        /**
         * Get country and postal information from Alexa Device Address API
         * @param {string} deviceId deviceId from Alexa request
         * @param {string} apiEndpoint API apiEndpoint from Alexa request
         * @param {string} token bearer token for device address permission
         * @returns {Promise<Object>}
         * @memberOf DeviceAddressService
         */
        getCountryAndPostalCode(deviceId: string, apiEndpoint: string, token: string): Promise<Object>;
    }
    export class DirectiveService {

        /**
         * Creates an instance of DirectiveService.
         * @param {ApiClient} [apiClient=new ApiClient()] ApiClient
         * @memberof DirectiveService
         */
        constructor(apiClient: ApiClient);

        /**
         * Send the specified directiveObj to Alexa directive service
         *
         * @param {Object} directive directive to send to service
         * @param {string} apiEndpoint API endpoint from Alexa request
         * @param {string} token bearer token for directive service
         * @returns {Promise<void>}
         * @memberof DirectiveService
         */
        enqueue(directive: Object, apiEndpoint: string, token: string): Promise<void>;
    }
    export class ListManagementService {

        /**
         * Create an instance of ListManagementService
         * @param apiClient
         */
        constructor(apiClient: ApiClient);

        /**
         * Set apiEndpoint address, default is 'https://api.amazonalexa.com'
         * @param apiEndpoint
         * @returns void
         * @memberOf ListManagementService
         */
        setApiEndpoint(apiEndpoint: string): void;

        /**
         * Get currently set apiEndpoint address
         * @returns {string}
         * @memberOf ListManagementService
         */
        getApiEndpoint(): string;

        /**
         * Retrieve the metadata for all customer lists, including the customer's default lists
         * @param {string} token bearer token for list management permission
         * @returns {Promise<Object>}
         * @memberOf ListManagementService
         */
        getListsMetadata(token: string): Promise<Object>;

        /**
         * Create a custom list. The new list name must be different than any existing list name
         * @param {ListObject} listObject
         * @param {string} token bearer token for list management permission
         * @returns {Promise<Object>}
         * @memberOf ListManagementService
         */
        createList(listObject: ListObject, token: string): Promise<Object>

        /**
         * Retrieve list metadata including the items in the list with requested status
         * @param {string} listId unique Id associated with the list
         * @param {string} itemStatus itemsStatus can be either 'active' or 'completed'
         * @param {string} token bearer token for list management permission
         * @returns {Promise<Object>}
         * @memberOf ListManagementService
         */
        getList(listId: string, itemStatus: string, token: string): Promise<Object>;

        /**
         * Update a custom list. Only the list name or state can be updated
         * @param {string} listId unique Id associated with the list
         * @param {ListObject} listObject
         * @param {string} token bearer token for list management permission
         * @returns {Promise<Object>}
         * @memberOf ListManagementService
         */
        updateList(listId: string, listObject: ListObject, token: string): Promise<Object>;

        /**
         * Delete a custom list
         * @param {string} listId unique Id associated with the list
         * @param {string} token bearer token for list management permission
         * @returns {Promise<Object>}
         * @memberOf ListManagementService
         */
        deleteList(listId: string, token: string): Promise<Object>;

        /**
         * Create an item in an active list or in a default list
         * @param {string} listId unique Id associated with the list
         * @param {ListItemObject} listItemObject
         * @param {string} token bearer token for list management permission
         * @returns {Promise<Object>}
         * @memberOf ListManagementService
         */
        createListItem(listId: string, listItemObject: ListItemObject, token: string): Promise<Object>;

        /**
         * Retrieve single item within any list by listId and itemId
         * @param {string} listId unique Id associated with the list
         * @param {string} itemId unique Id associated with the item
         * @param {string} token bearer token for list management permission
         * @returns {Promise<Object>}
         * @memberOf ListManagementService
         */
        getListItem(listId: string, itemId: string, token: string): Promise<Object>;

        /**
         * Update an item value or item status
         * @param {string} listId unique Id associated with the list
         * @param {string} itemId unique Id associated with the item
         * @param {ListItemObject} listItemObject
         * @param {string} token bearer token for list management permission
         * @returns {Promise<Object>}
         * @memberOf ListManagementService
         */
        updateListItem(listId: string, itemId: string, listItemObject: ListItemObject, token: string): Promise<Object>;

        /**
         * Delete an item in the specified list
         * @param {string} listId unique Id associated with the list
         * @param {string} itemId unique Id associated with the item
         * @param {string} token bearer token for list management permission
         * @returns {Promise<Object>}
         * @memberOf ListManagementService
         */
        deleteListItem(listId: string, itemId: string, token: string): Promise<Object>;
    }
}