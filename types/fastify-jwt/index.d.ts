// Type definitions for fastify-jwt 0.4
// Project: https://github.com/fastify/fastify-jwt#readme
// Definitions by: My Self <https://github.com/jannikkeye>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { SignOptions, VerifyOptions, VerifyCallback, SignCallback, DecodeOptions } from 'jsonwebtoken';

export interface FastifyInstance<HttpServer, HttpRequest, HttpResponse> {
    jwt: jwt;
}

export interface jwt {
    sign: (payload: any, options?: SignOptions, callback?: SignCallback) => string;
    verify: (token: string, options?: VerifyOptions, callback?: VerifyCallback) => string;
    decode: (token: string, options?: DecodeOptions) => string;
    secret: string;
}

export interface FastifyRequest<HttpRequest> {
    jwtVerify: (options?: VerifyOptions | VerifyCallback, next?: jwt["verify"]) => FastifyRequest<HttpRequest>;
}

export interface FastifyReply<HttpResponse> {
    jwtSign: (payload: any, options?: SignOptions | SignCallback, next?: jwt["sign"]) => FastifyReply<HttpResponse>;
}
