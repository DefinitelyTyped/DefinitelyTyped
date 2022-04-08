declare module HTTP {
    interface HTTPRequest {
        content?: string;
        data?: any;
        query?: string;
        params?: {
            [id: string]: string
        };
        auth?: string;
        headers?: {
            [id: string]: string
        };
        timeout?: number;
        followRedirects?: boolean;
    }

    interface HTTPResponse {
        statusCode?: number;
        headers?: {
            [id: string]: string
        };
        content?: string;
        data?: any;
    }

    type AsyncCallback = (error: Meteor.Error | null, result?: HTTPResponse) => void;

    function call(method: string, url: string, options?: HTTP.HTTPRequest, asyncCallback?: AsyncCallback): HTTP.HTTPResponse;

    function del(url: string, callOptions?: HTTP.HTTPRequest, asyncCallback?: AsyncCallback): HTTP.HTTPResponse;

    function get(url: string, callOptions?: HTTP.HTTPRequest, asyncCallback?: AsyncCallback): HTTP.HTTPResponse;

    function post(url: string, callOptions?: HTTP.HTTPRequest, asyncCallback?: AsyncCallback): HTTP.HTTPResponse;

    function put(url: string, callOptions?: HTTP.HTTPRequest, asyncCallback?: AsyncCallback): HTTP.HTTPResponse;

    function call(method: string, url: string, options?: {
        content?: string;
        data?: Object;
        query?: string;
        params?: Object;
        auth?: string;
        headers?: Object;
        timeout?: number;
        followRedirects?: boolean;
        npmRequestOptions?: Object;
        beforeSend?: Function;
    }, asyncCallback?: AsyncCallback): HTTP.HTTPResponse;
}
