// Type definitions for fastify-jwt 0.4
// Project: https://github.com/fastify/fastify-jwt#readme
// Definitions by: Jannik Keye <https://github.com/jannikkeye>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4
import fastify = require("fastify");

import { Secret, SignOptions, VerifyOptions, VerifyCallback, SignCallback, DecodeOptions } from 'jsonwebtoken';
import { IncomingMessage, ServerResponse } from 'http';

declare module "fastify" {
  interface FastifyInstance<HttpServer, HttpRequest, HttpResponse> {
      jwt: jwt;
  }

  interface SignFunction {
    (payload: string | Buffer | object, options?: SignOptions): string;
    (payload: string | Buffer | object, options?: SignOptions, callback?: SignCallback): void;
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
      jwtSign: (payload: string | Buffer | object, options?: SignOptions | SignCallback, next?: SignCallback) => void;
  }
}

declare function fastifyJwt(): void;

declare namespace fastifyJwt {
    type SecretCallback = (request: fastify.FastifyRequest<IncomingMessage>, reply: string | Buffer | object, callback?: VerifyCallback | SignCallback) => void;

    interface FastifyJwtOptions {
        secret: string | SecretCallback;
    }
}

export = fastifyJwt;
