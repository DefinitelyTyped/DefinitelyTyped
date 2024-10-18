import { Algorithm, VerifyOptions } from "jsonwebtoken";
import { Strategy as PassportStrategy } from "passport-strategy";

export declare class Strategy extends PassportStrategy {
    /**
     * Strategy constructor
     */
    constructor(opt: StrategyOptionsWithoutRequest, verify: VerifyCallback);
    /**
     * Strategy constructor
     */
    constructor(opt: StrategyOptionsWithRequest, verify: VerifyCallbackWithRequest);
    name: string;
}

/**
 * Interface for providing the secret or key for verification.
 */
export interface SecretOrKeyProvider<T = any> {
    /**
     * Callback for secret or key provider.
     *
     * @param request - The request object from your framework (e.g., Express.Request)
     * @param rawJwtToken - The raw JWT token string
     * @param done - A function with the signature function(err, secret)
     */
    (request: T, rawJwtToken: any, done: (err: any, secretOrKey?: string | Buffer) => void): void;
}

interface BaseStrategyOptions {
    /**
     * Function that accepts a request as the only parameter and returns either the JWT as a string or null.
     * REQUIRED.
     */
    jwtFromRequest: JwtFromRequestFunction;
    /**
     * If defined, the issuer will be verified against this value.
     */
    issuer?: string | string[] | undefined;
    /**
     * If defined, the audience will be verified against this value.
     */
    audience?: string | string[] | undefined;
    /**
     * List of strings with the names of allowed algorithms (e.g., ["HS256", "HS384"]).
     */
    algorithms?: Algorithm[] | undefined;
    /**
     * If true, do not validate the expiration of the token.
     */
    ignoreExpiration?: boolean | undefined;

    /**
     * @deprecated
     * for backwards compatibility, still allowing you to pass
     * audience / issuer / algorithms / ignoreExpiration
     * on the options.
     */
    jsonWebTokenOptions?: VerifyOptions | undefined;
}
interface WithSecretOrKeyProvider extends BaseStrategyOptions {
    secretOrKeyProvider: SecretOrKeyProvider;
}
interface WithSecretOrKey extends BaseStrategyOptions {
    secretOrKey: string | Buffer;
}
type StrategyOptionsWithSecret =
    | Omit<WithSecretOrKey, "secretOrKeyProvider">
    | Omit<WithSecretOrKeyProvider, "secretOrKey">;
type StrategyOptionsWithRequest = StrategyOptionsWithSecret & {
    /**
     * If true, the verify callback will be called with args (request, jwt_payload, done_callback).
     */
    passReqToCallback: true;
};
type StrategyOptionsWithoutRequest = StrategyOptionsWithSecret & {
    /**
     * If true, the verify callback will be called with args (request, jwt_payload, done_callback).
     */
    passReqToCallback?: false;
};

/**
 * Union type for all possible Strategy options.
 */
export type StrategyOptions = StrategyOptionsWithRequest | StrategyOptionsWithoutRequest;

/**
 * Callback used to verify the JWT payload.
 */
export type VerifyCallback = (payload: any, done: VerifiedCallback) => void;

/**
 * Callback used to verify the JWT payload with request.
 */
export type VerifyCallbackWithRequest<T = any> = (req: T, payload: any, done: VerifiedCallback) => void;

/**
 * Callback for the verified result.
 */
export interface VerifiedCallback {
    (error: any, user?: unknown | false, info?: any): void;
}

/**
 * Function that returns either the JWT as a string or null.
 */
export interface JwtFromRequestFunction<T = any> {
    (req: T): string | null;
}

export declare namespace ExtractJwt {
    /**
     * Creates an extractor function to retrieve a token from the request header.
     *
     * @param {string} header_name - The name of the header to extract the token from.
     * @returns {JwtFromRequestFunction} A function that takes a request object and returns the extracted token.
     */
    export function fromHeader(header_name: string): JwtFromRequestFunction;
    /**
     * Creates an extractor function to retrieve a token from a field in the request body.
     *
     * @param {string} field_name - The name of the field to extract the token from.
     * @returns {JwtFromRequestFunction} A function that takes a request object and returns the extracted token.
     */
    export function fromBodyField(field_name: string): JwtFromRequestFunction;
    /**
     * Creates an extractor function to retrieve a token from a query parameter in the URL.
     *
     * @param {string} param_name - The name of the query parameter to extract the token from.
     * @returns {JwtFromRequestFunction} A function that takes a request object and returns the extracted token.
     */
    export function fromUrlQueryParameter(param_name: string): JwtFromRequestFunction;
    /**
     * Creates an extractor function to retrieve a token from the authorization header with a specific scheme.
     *
     * @param {string} auth_scheme - The authorization scheme (e.g., 'Bearer').
     * @returns {JwtFromRequestFunction} A function that takes a request object and returns the extracted token.
     */
    export function fromAuthHeaderWithScheme(auth_scheme: string): JwtFromRequestFunction;
    /**
     * Creates an extractor function that combines multiple extractor functions.
     *
     * @param {JwtFromRequestFunction[]} extractors - An array of extractor functions.
     * @returns {JwtFromRequestFunction} A function that takes a request object and returns the extracted token.
     */
    export function fromExtractors<T = any>(extractors: Array<JwtFromRequestFunction<T>>): JwtFromRequestFunction<T>;
    /**
     * Creates an extractor function to retrieve a token from the authorization header as a Bearer token.
     *
     * @returns {JwtFromRequestFunction} A function that takes a request object and returns the extracted token.
     */
    export function fromAuthHeaderAsBearerToken(): JwtFromRequestFunction;
}
