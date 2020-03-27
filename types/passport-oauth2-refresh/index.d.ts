// Type definitions for passport-oauth2-refresh 1.1
// Project: https://github.com/fiznool/passport-oauth2-refresh#readme
// Definitions by: Daphne Smit <https://github.com/daphnesmit>
//                 Brian Torres-Gil <https://github.com/btorresgil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Strategy } from 'passport-oauth2';
import { oauth2tokenCallback } from 'oauth';

export function use(name: string | Strategy, strategy?: Strategy): void;

export function has(name: string): boolean;

export function requestNewAccessToken(name: string, refreshToken: string, done: oauth2tokenCallback): any;
export function requestNewAccessToken(name: string, refreshToken: string, params: any, done: oauth2tokenCallback): any;
