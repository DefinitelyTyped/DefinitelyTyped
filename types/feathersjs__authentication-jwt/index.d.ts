// Type definitions for @feathersjs/authentication-jwt 1.0
// Project: http://feathersjs.com/
// Definitions by: Jan Lohage <https://github.com/j2L4e>
// Definitions: https://github.com/feathersjs-ecosystem/feathers-typescript

import { Application } from '@feathersjs/feathers';
import { Request } from 'express';

export default function feathersAuthenticationJwt(options?: FeathersAuthenticationJWTOptions): () => void;

export interface FeathersAuthenticationJWTOptions {
    name: string; // the name to use when invoking the authentication Strategy
    entity: string; // the entity that you pull from if an 'id' is present in the payload
    service: string; // the service to look up the entity
    passReqToCallback: boolean; // whether the request object should be passed to `verify`
    jwtFromRequest: JwtFromRequestFunction; // a passport-jwt option determining where to parse the JWT
    secretOrKey: string; // Your main secret provided to passport-jwt
    session: boolean; // whether to use sessions,
    Verifier: JWTVerifier; // A Verifier class. Defaults to the built-in one but can be a custom one. See below for details.
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
