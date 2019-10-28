// Type definitions for passport-oauth2-refresh 1.1
// Project: https://github.com/fiznool/passport-oauth2-refresh#readme
// Definitions by: Daphne Smit <https://github.com/daphnesmit>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Strategy } from 'passport-oauth2';

export function use(name: string | Strategy, strategy?: Strategy): void;

export function has(name: string): boolean;

export function requestNewAccessToken(name: string, refreshToken: string, params: any, done: () => any): any;
