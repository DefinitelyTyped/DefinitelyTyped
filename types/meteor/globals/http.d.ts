declare namespace HTTP {
    interface HTTPRequest {
        content?: string | undefined;
        data?: any;
        query?: string | undefined;
        params?: { [id: string]: string } | undefined;
        auth?: string | undefined;
        headers?: { [id: string]: string } | undefined;
        timeout?: number | undefined;
        followRedirects?: boolean | undefined;
    }

    interface HTTPResponse {
        statusCode?: number | undefined;
        headers?: { [id: string]: string } | undefined;
        content?: string | undefined;
        data?: any;
    }

    type AsyncCallback = (error: Meteor.Error | null, result?: HTTPResponse) => void;

    function call(
        method: string,
        url: string,
        options?: HTTP.HTTPRequest,
        asyncCallback?: AsyncCallback,
    ): HTTP.HTTPResponse;

    function del(url: string, callOptions?: HTTP.HTTPRequest, asyncCallback?: AsyncCallback): HTTP.HTTPResponse;

    function get(url: string, callOptions?: HTTP.HTTPRequest, asyncCallback?: AsyncCallback): HTTP.HTTPResponse;

    function post(url: string, callOptions?: HTTP.HTTPRequest, asyncCallback?: AsyncCallback): HTTP.HTTPResponse;

    function put(url: string, callOptions?: HTTP.HTTPRequest, asyncCallback?: AsyncCallback): HTTP.HTTPResponse;

    function call(
        method: string,
        url: string,
        options?: {
            content?: string | undefined;
            data?: Object | undefined;
            query?: string | undefined;
            params?: Object | undefined;
            auth?: string | undefined;
            headers?: Object | undefined;
            timeout?: number | undefined;
            followRedirects?: boolean | undefined;
            npmRequestOptions?: Object | undefined;
            beforeSend?: Function | undefined;
        },
        asyncCallback?: AsyncCallback,
    ): HTTP.HTTPResponse;
}
