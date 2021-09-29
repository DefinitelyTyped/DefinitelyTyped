export namespace ajax {
    /**
     * Send an ajax request.
     * @function
     * @param {string} url - Url path.
     * @param {Object} [params] - Ajax parameters:
     * @param {ajax.Method|string} [params.type] - 'POST' or 'GET' ajax method. 'GET' is default.
     * @param {boolean} [params.async] - Asynchronous ajax flag. True is default.
     * @param {Object} [params.data] - Qery data.
     * @param {Object} [params.sender] - Sender object, that success callback binded with. ActiveXObject is default.
     * @param {string} [params.responseType] - Responce data type. Culd be 'text', 'json', 'jsonp', 'html'. 'text' is default.
     * @param {ajax.Xhr~successCallback} [params.success] - The callback that handles the success response.
     * @param {ajax.Xhr~errorCallback} [params.error] - The callback that handles the failed response.
     * @param {ajax.Xhr~abortCallback} [params.abort] - The callback that handles aborted requests.
     * @returns {ajax.Xhr} - Returns object that could be aborted.
     */
    function request(url: string, params?: {
        type?: any;
        async?: boolean;
        data?: any;
        sender?: any;
        responseType?: string;
    }): any;
}
