/**
 * Represents an API request
 */
declare class APIRequest {
    _nodeId: string;
    _method: string;
    _endpoint: string;
    _path: string[];
    _fields: string[];
    _params: Record<any, any>;
    _fileParams: Record<any, any>;
    _fileCounter: number;
    /**
     * @param {string} nodeId The node id to perform the api call.
     * @param {string} method The HTTP method of the call.
     * @param {string} endpoint The edge of the api call.
     */
    constructor(nodeId: string, method: string, endpoint: string);
    /**
     * Getter function for node ID
     * @return {string} Node ID
     */
    get nodeId(): string;
    /**
     * Getter function for HTTP method e.g. GET, POST
     * @return {string} HTTP method
     */
    get method(): string;
    /**
     * Getter function for the edge of the API call
     * @return {string} Endpoint edge
     */
    get endpoint(): string;
    /**
     * Getter function for path tokens
     * @return {string[]} Array of path tokens
     */
    get path(): string[];
    /**
     * Getter function for requested fields
     * @return {string[]} Array of request fields
     */
    get fields(): string[];
    /**
     * Getter function for API params
     * @return {Object} Object containing API Params
     */
    get params(): Record<any, any>;
    /**
     * Getter function for API fileparams
     * @return {Object} Object containing API fileParams
     */
    get fileParams(): Record<any, any>;
    /**
     * @param {string} filePath Path to file attached to the request
     * @return {APIReqeust} APIRequest instance
     */
    addFile(filePath: string): APIRequest;
    /**
     * @param {string[]} filePaths Array of paths to files attached to the request
     * @return {APIRequest} APIRequest instance
     */
    addFiles(filePaths: string[]): APIRequest;
    /**
     * @param {string} field Requested field
     * @return {APIReqeust} APIRequest instance
     */
    addField(field: string): APIRequest;
    /**
     * @param {string[]} fields Array of requested fields
     * @return {APIRequest} APIRequest instance
     */
    addFields(fields: string[]): APIRequest;
    /**
     * @param {string} key Param key
     * @param {*} value Param value
     * @return {APIRequest} APIRequest instance
     */
    addParam(key: string, value: any): APIRequest;
    /**
     * @param {Object} params An object containing param keys and values
     * @return {APIRequest} APIRequest instance
     */
    addParams(params: Record<any, any>): APIRequest;
}
export default APIRequest;
