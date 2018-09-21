// Type definitions for fastify-jwt 0.4
// Project: https://github.com/fastify/fastify-jwt#readme
// Definitions by: My Self <https://github.com/jannikkeye>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Secret, SignOptions, VerifyOptions, VerifyCallback, SignCallback, DecodeOptions } from 'jsonwebtoken';

export interface FastifyInstance<HttpServer, HttpRequest, HttpResponse> {
    jwt: jwt;
}

export interface jwt {
    sign: (payload: any, options?: SignOptions, callback?: SignCallback) => void;
    verify: (token: string, options?: VerifyOptions, callback?: VerifyCallback) => void;
    decode: (token: string, options?: DecodeOptions) => null | { [key: string]: any } | string;
    secret: Secret;
}

export interface FastifyRequest<HttpRequest> {
    jwtVerify: (options?: VerifyOptions | VerifyCallback, next?: VerifyCallback) => Promise<null | { [key: string]: any } | string> | null | { [key: string]: any } | string;
}

export interface FastifyReply<HttpResponse> {
    jwtSign: (payload: any, options?: SignOptions | SignCallback, next?: SignCallback) => void;
}
