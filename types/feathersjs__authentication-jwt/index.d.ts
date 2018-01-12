// Type definitions for @feathersjs/authentication-jwt 1.0
// Project: http://feathersjs.com/
// Definitions by: Jan Lohage <https://github.com/j2L4e>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript
// TypeScript Version: 2.2

import { Application } from '@feathersjs/feathers';
import { Request } from 'express';

export default function feathersAuthenticationJwt(options?: FeathersAuthenticationJWTOptions): () => void;

export interface FeathersAuthenticationJWTOptions {
    /**
     * the name to use when invoking the authentication Strategy
     */
    name: string;
    /**
     * the entity that you pull from if an 'id' is present in the payload
     */
    entity: string;
    /**
     * the service to look up the entity
     */
    service: string;
    /**
     * whether the request object should be passed to `verify`
     */
    passReqToCallback: boolean;
    /**
     * a passport-jwt option determining where to parse the JWT
     */
    jwtFromRequest: JwtFromRequestFunction;
    /**
     * Your main secret provided to passport-jwt
     */
    secretOrKey: string;
    /**
     * whether to use sessions,
     */
    session: boolean;
    /**
     * A Verifier class. Defaults to the built-in one but can be a custom one. See below for details.
     */
    Verifier: JWTVerifier;
}

export class JWTVerifier {
    constructor(app: Application<any>, options: any); // the class constructor

    verify(req: Request, payload: any, done: (error: any, user?: any, info?: any) => void): void;
}

export type JwtFromRequestFunction = (req: Request) => string;

export const ExtractJWT: {
    fromHeader(header_name: string): JwtFromRequestFunction;
    fromBodyField(field_name: string): JwtFromRequestFunction;
    fromUrlQueryParameter(param_name: string): JwtFromRequestFunction;
    fromAuthHeaderWithScheme(auth_scheme: string): JwtFromRequestFunction;
    fromAuthHeader(): JwtFromRequestFunction;
    fromExtractors(extractors: JwtFromRequestFunction[]): JwtFromRequestFunction;
    fromAuthHeaderAsBearerToken(): JwtFromRequestFunction;
};

export const defaults: {
    name: string;
    bodyKey: string;
};
