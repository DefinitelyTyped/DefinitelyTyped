import request = require("request");
import http = require("http");

declare namespace requestPromise {
    interface RequestPromise<T = any> extends request.Request, Promise<T> {
        promise(): Promise<T>;
    }

    interface RequestPromiseOptions extends request.CoreOptions {
        simple?: boolean | undefined;
        transform?(body: any, response: request.Response, resolveWithFullResponse?: boolean): any;
        transform2xxOnly?: boolean | undefined;
        resolveWithFullResponse?: boolean | undefined;
    }

    type RequestPromiseAPI = request.RequestAPI<RequestPromise, RequestPromiseOptions, request.RequiredUriUrl>;
    type FullResponse = request.Response;
    type OptionsWithUri = request.UriOptions & RequestPromiseOptions;
    type OptionsWithUrl = request.UrlOptions & RequestPromiseOptions;
    type Options = OptionsWithUri | OptionsWithUrl;
}

declare const requestPromise: requestPromise.RequestPromiseAPI;
export = requestPromise;
