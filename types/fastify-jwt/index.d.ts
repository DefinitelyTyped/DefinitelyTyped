// Type definitions for fastify-jwt 0.4
// Project: https://github.com/fastify/fastify-jwt#readme
// Definitions by: My Self <https://github.com/jannikkeye>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3
import fastify = require("fastify");

import { Secret, SignOptions, VerifyOptions, VerifyCallback, SignCallback, DecodeOptions } from 'jsonwebtoken';

declare module "fastify" {
  interface FastifyInstance<HttpServer, HttpRequest, HttpResponse> {
      jwt: jwt;
  }

  interface SignFunction {
    (payload: any, options?: SignOptions): string;
    (payload: any, options?: SignOptions, callback?: SignCallback): void;
  }

  interface VerifyFunction {
    (token: string, options?: VerifyOptions, callback?: VerifyCallback): void;
    (token: string, options?: VerifyOptions): object | string;
  }

  interface jwt {
      sign: SignFunction;
      verify: VerifyFunction;
      decode(token: string, options?: DecodeOptions): null | { [key: string]: any } | string;
      secret: Secret;
  }
  
  interface FastifyRequest<HttpRequest> {
      jwtVerify: (options?: VerifyOptions | VerifyCallback, next?: VerifyCallback) => Promise<null | { [key: string]: any } | string> | null | { [key: string]: any } | string;
  }
  
  interface FastifyReply<HttpResponse> {
      jwtSign: (payload: any, options?: SignOptions | SignCallback, next?: SignCallback) => void;
  }
}

declare function fastifyJwt (): void;

declare namespace fastifyJwt {}

export = fastifyJwt;