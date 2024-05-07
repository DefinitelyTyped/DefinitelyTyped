import { CoreOptions, Request, RequestAPI, RequiredUriUrl } from "request";

export = request_as_curl;

declare function request_as_curl(request: RequestAPI<Request, CoreOptions, RequiredUriUrl>, body?: any): string;

declare namespace request_as_curl {
    function serialize(request: RequestAPI<Request, CoreOptions, RequiredUriUrl>): string;
}
