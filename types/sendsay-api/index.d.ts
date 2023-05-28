// Type definitions for sendsay-api
// Project: https://github.com/sendsay-ru/sendsay-api-js#readme
// Definitions by: Dmitry_The_Fucker_LV https://github.com/T0R0NT0T0KY0
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import type { SendsayOptionsApiKey, SendsayOptionsAuth } from "./constructor.type";
import type { SendsayRequest } from "./request.type";
import type { SendsayResponse } from "./respnse";
import { SendsayRequestOptions } from "./request-options";

declare class Sendsay {
    constructor(options: SendsayOptionsApiKey);

    constructor(options: SendsayOptionsAuth);

    login(): Promise<void>;

    setSession(session: string): void;

    setSessionFromCookie(name: string): void;

    setPolicy(policy: string): void;

    setPolicyFromCookie(name: string): void;

    onError(handler: (err: Error) => void): void;

    request(req: SendsayRequest, options?: SendsayRequestOptions): Promise<SendsayResponse>;

    performRequest(req: SendsayRequest, options: SendsayRequestOptions): Promise<SendsayResponse>;

    catchConnectionErrors(err: Error): never;

    checkStatus(res: SendsayResponse): Promise<SendsayResponse>;

    parseResponse(res: SendsayResponse): Promise<SendsayResponse>;

    checkResponseErrors(
        req: SendsayRequest,
        res: SendsayResponse,
        options: SendsayRequestOptions,
    ): SendsayResponse;

    checkRedirect(req: SendsayRequest, res: SendsayResponse, options: SendsayRequestOptions): SendsayResponse;

    callErrorHandler(err: Error): void;

    getRequestBody(req: SendsayResponse): string;

    getRequestData(req: SendsayResponse): string;

    getRequestId(): string;

    getUsername(): string;
}

export = Sendsay;
