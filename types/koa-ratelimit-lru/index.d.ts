// Type definitions for koa-ratelimit-lru 1.0
// Project: https://github.com/Dreamacro/koa-ratelimit-lru
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Middleware } from 'koa';

declare namespace rateLimit {
    interface Options {
      readonly duration?: number;
      readonly max?: number;
      readonly prefix?: string;
      readonly store?: any; // lru-cache ?
      readonly rate?: number;
      readonly id?: string;
      readonly headers?: {
        readonly remaining?: string;
        readonly reset?: string;
        readonly total?: string;
      };
      readonly errorMessage?: string;
    }
  }

declare function rateLimit(options?: rateLimit.Options): Middleware;

export = rateLimit;
