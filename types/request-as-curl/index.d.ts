// Type definitions for request-as-curl 0.1
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Arne Schubert <https://github.com/atd-schubert>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { CoreOptions, Request, RequestAPI, RequiredUriUrl } from "request";

export = request_as_curl;

declare function request_as_curl(request: RequestAPI<Request, CoreOptions, RequiredUriUrl>, body?: any): string;

declare namespace request_as_curl {
    function serialize(request: RequestAPI<Request, CoreOptions, RequiredUriUrl>): string;
}
