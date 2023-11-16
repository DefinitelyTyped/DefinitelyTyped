export default class Http {
    /**
     * Request
     * @param   {String}  method
     * @param   {String}  url
     * @param   {Object}  [data]
     * @return  {Promise}
     */
    static request(method: string, url: string, data: Record<any, any>, files: Record<any, any>, useMultipartFormData: boolean, showHeader: boolean): Promise<any>;
    /**
     * XmlHttpRequest request
     * @param   {String}  method
     * @param   {String}  url
     * @param   {Object}  [data]
     * @return  {Promise}
     */
    static xmlHttpRequest(method: any, url: any, data: any): Promise<any>;
    /**
     * Request Promise
     * @param   {String}  method The HTTP method name (e.g. 'GET').
     * @param   {String}  url A full URL string.
     * @param   {Object}  [data] A mapping of request parameters where a key
     *   is the parameter name and its value is a string or an object
     *   which can be JSON-encoded.
     * @param   {Object}  [files] An optional mapping of file names to ReadStream
     *   objects. These files will be attached to the request.
     * @param   {Boolean} [useMultipartFormData] An optional flag to call with
     *   multipart/form-data.
     * @return  {Promise}
     */
    static requestPromise(method: string, url: string, data: Record<any, any>, files: Record<any, any>, useMultipartFormData?: boolean, showHeader?: boolean): Promise<any>;
}
