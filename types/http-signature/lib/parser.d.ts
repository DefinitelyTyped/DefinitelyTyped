import { ClientRequest } from "node:http";
import { Signature } from "./signer";

export interface ParseOptions {
    /**
     * Allowed clock skew in seconds
     * @default 300
     */
    clockSkew?: number | undefined;
    /** Required header names */
    headers?: readonly string[] | undefined;
    /** Algorithms to support. Defaults to all */
    algorithms?: readonly string[] | undefined;
    /**
     * Whether to enforce latest spec parsing
     * @default false
     */
    strict?: boolean | undefined;
}

export interface ParseResponse {
    scheme: string;
    params: Signature;
    signingString: string;
}

/**
 * Parses the 'Authorization' header out of an http.ServerRequest object.
 *
 * Note that this API will fully validate the Authorization header, and throw
 * on any error. It will not however check the signature, or the keyId format
 * as those are specific to your environment. You can use the options object
 * to pass in extra constraints
 *
 * @param request The ClientRequest
 * @param options Optional options
 *
 * @throws {TypeError} Nn invalid input
 * @throws {InvalidHeaderError} On an invalid Authorization header error
 * @throws {InvalidParamsError} If the params in the scheme are invalid
 * @throws {MissingHeaderError} If the params indicate a header not present,
 *                              Either in the request headers from the params,
 *                              or not in the params from a required header in options
 * @throws {StrictParsingError} If old attributes are used in strict parsing mode
 * @throws {ExpiredRequestError} If the value of date or x-date exceeds skew
 */
export function parseRequest(request: ClientRequest, options?: ParseOptions): ParseResponse;
