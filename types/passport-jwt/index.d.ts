import { Algorithm, VerifyOptions } from "jsonwebtoken";
import { Strategy as PassportStrategy } from "passport-strategy";

export declare class Strategy extends PassportStrategy {
    constructor(opt: StrategyOptionsWithoutRequest, verify: VerifyCallback);
    constructor(opt: StrategyOptionsWithRequest, verify: VerifyCallbackWithRequest);
    name: string;
}

export interface SecretOrKeyProvider<T = any> {
    (request: T, rawJwtToken: any, done: (err: any, secretOrKey?: string | Buffer) => void): void;
}

interface BaseStrategyOptions {
    jwtFromRequest: JwtFromRequestFunction;
    issuer?: string | string[] | undefined;
    audience?: string | string[] | undefined;
    algorithms?: Algorithm[] | undefined;
    ignoreExpiration?: boolean | undefined;
    jsonWebTokenOptions?: VerifyOptions | undefined;
}
interface WithSecretOrKeyProvider extends BaseStrategyOptions {
    secretOrKeyProvider: SecretOrKeyProvider;
}

interface WithSecretOrKey extends BaseStrategyOptions {
    secretOrKey: string | Buffer;
}

type StrategyOptionsWithSecret = Omit<WithSecretOrKey, 'secretOrKeyProvider'> | Omit<WithSecretOrKeyProvider, 'secretOrKey'>;

export type StrategyOptionsWithRequest = StrategyOptionsWithSecret & {
    passReqToCallback: true;
}

export type StrategyOptionsWithoutRequest = StrategyOptionsWithSecret & {
    passReqToCallback?: false | undefined;
}

export type StrategyOptions = StrategyOptionsWithRequest | StrategyOptionsWithoutRequest;

export interface VerifyCallback {
    (payload: any, done: VerifiedCallback): void;
}

export interface VerifyCallbackWithRequest<T = any> {
    (req: T, payload: any, done: VerifiedCallback): void;
}

export interface VerifiedCallback {
    (error: any, user?: unknown | false, info?: any): void;
}

export interface JwtFromRequestFunction<T = any> {
    (req: T): string | null;
}

export declare namespace ExtractJwt {
    export function fromHeader(header_name: string): JwtFromRequestFunction;
    export function fromBodyField(field_name: string): JwtFromRequestFunction;
    export function fromUrlQueryParameter(param_name: string): JwtFromRequestFunction;
    export function fromAuthHeaderWithScheme(auth_scheme: string): JwtFromRequestFunction;
    export function fromAuthHeader(): JwtFromRequestFunction;
    export function fromExtractors<T = any>(extractors: Array<JwtFromRequestFunction<T>>): JwtFromRequestFunction<T>;
    export function fromAuthHeaderAsBearerToken(): JwtFromRequestFunction;
}
