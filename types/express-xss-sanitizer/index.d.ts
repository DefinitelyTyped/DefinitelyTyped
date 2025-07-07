declare module 'express-xss-sanitizer' {
  import type { RequestHandler } from 'express';

  export interface XssSanitizerOptions {
    allowedTags?: string[];
    allowedAttributes?: Record<string, string[]>;
    allowedKeys?: string[];
  }

  export function xss(options?: XssSanitizerOptions): RequestHandler;
  export function sanitize<T = unknown>(data: T, options?: XssSanitizerOptions): T;
}
