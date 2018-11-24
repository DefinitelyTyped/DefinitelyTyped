// Type definitions for ldap2date 1.0
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function parse(time: string): Date;

export function toGeneralizedTime(date: Date): string;

export function getYear(time: string): number;
export function getMonth(time: string): number;
export function getDay(time: string): number;
export function getHours(time: string): number;
export function getMinutes(time: string): number;
export function getSeconds(time: string): number;
export function getMilliseconds(time: string): number;
export function getTimeZone(time: string): number;
