export default class HttpServiceInterface {
    /**
     * @param {String} $url The graph API endpoint that will be requested
     * @param {HttpMethod} $method The HTTP request method
     * @param {Object} $headers Contains HTTP request headers including User-Agent and Accept-Encoding
     * @param {Object} $params Contains request parameters including access_token, data, test_event_code, etc.
     * @return {Promise<Object>}
     */
    executeRequest(url: string, method: string, headers: Record<any, any>, params: Record<any, any>): Promise<Record<any, any>>;
}
