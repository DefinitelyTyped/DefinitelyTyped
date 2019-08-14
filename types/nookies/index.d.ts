// Type definitions for nookies 1.1
// Project: https://github.com/maticzav/nookies#readme
// Definitions by: Andreas Bergqvist <https://github.com/andreasbergqvist>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { NextContext } from 'next';
import { CookieParseOptions, CookieSerializeOptions } from 'cookie';

export function parseCookies(ctx: NextContext, options?: CookieParseOptions): { [key: string]: string };
export function setCookie(ctx: NextContext, name: string, value: string, options?: CookieSerializeOptions): void;
export function destroyCookie(ctx: NextContext, name: string): void;

declare const Nookies: {
    set(ctx: NextContext, name: string, value: string, options?: CookieSerializeOptions): void;
    get(ctx: NextContext, options?: CookieParseOptions): { [key: string]: string };
    destroy(ctx: NextContext, name: string): void;
};

export default Nookies;
