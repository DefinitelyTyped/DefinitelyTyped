// Type definitions for money-math 2.5
// Project: https://github.com/ikr/money-math#readme
// Definitions by: taoqf <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace Money;

export function add(a: string, b: string): string;
export function subtract(a: string, b: string): string;
export function mul(a: string, b: string): string;
export function div(a: string, b: string): string;
export function percent(a: string, b: string): string;
export function cmp(a: string, b: string): 0 | number;
export function isEqual(a: string, b: string): boolean;
export function isZero(value: string): boolean;
export function isNegative(value: string): boolean;
export function isPositive(value: string): boolean;
export function floatToAmount(value: number): string;
export function format(currency: 'CHF' | 'CNY' | 'EUR' | 'GBP' | 'JPY' | 'LTL' | 'PLN' | 'SEK' | 'SKK' | 'UAH' | 'USD' | string, value: string): string;
export function roundUpTo5Cents(value: string): string;
export function roundTo5Cents(value: string): string;
