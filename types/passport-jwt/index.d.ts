import { VerifyOptions } from "jsonwebtoken";
import { Strategy as PassportStrategy } from "passport-strategy";

export declare class Strategy<T> extends PassportStrategy {
    constructor(opt: StrategyOptions<T>, verify: VerifyCallback);
    constructor(opt: StrategyOptions<T>, verify: VerifyCallbackWithRequest);
    name: string;
}

export interface StrategyOptions<T> {
    secretOrKey?: string | Buffer | undefined;
    secretOrKeyProvider?: SecretOrKeyProvider | undefined;
    jwtFromRequest: JwtFromRequestFunction<T>;
    issuer?: string | string[] | undefined;
    audience?: string | string[] | undefined;
    algorithms?: string[] | undefined;
    ignoreExpiration?: boolean | undefined;
    passReqToCallback?: boolean | undefined;
    jsonWebTokenOptions?: VerifyOptions | undefined;
}

export interface VerifyCallback {
    (payload: any, done: VerifiedCallback): void;
}

export interface VerifyCallbackWithRequest {
    (req: Request, payload: any, done: VerifiedCallback): void;
}

export interface VerifiedCallback {
    (error: any, user?: Express.User | false, info?: any): void;
}

export interface JwtFromRequestFunction<T = Request> {
    (req: T): string | null;
}

export interface SecretOrKeyProvider {
    (request: Request, rawJwtToken: any, done: (err: any, secretOrKey?: string | Buffer) => void): void;
}

export declare namespace ExtractJwt {
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    export function fromHeader<T = Request>(header_name: string): JwtFromRequestFunction<T>;
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    export function fromBodyField<T = Request>(field_name: string): JwtFromRequestFunction<T>;
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    export function fromUrlQueryParameter<T = Request>(param_name: string): JwtFromRequestFunction<T>;
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    export function fromAuthHeaderWithScheme<T = Request>(auth_scheme: string): JwtFromRequestFunction<T>;
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    export function fromAuthHeader<T = Request>(): JwtFromRequestFunction<T>;
    export function fromExtractors<T = Request>(extractors: Array<JwtFromRequestFunction<T>>): JwtFromRequestFunction<T>;
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    export function fromAuthHeaderAsBearerToken<T = Request>(): JwtFromRequestFunction<T>;
}
