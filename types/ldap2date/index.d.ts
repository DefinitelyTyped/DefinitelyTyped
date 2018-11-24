// Type definitions for ldap2date 1.0
// Project: https://github.com/rsolomo/ldap2date.js
// Definitions by: Alan Plum <https://github.com/pluma>
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
