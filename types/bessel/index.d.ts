// Type definitions for bessel 1.0
// Project: https://oss.sheetjs.com/bessel/
// Definitions by: LeoDog896 <https://github.com/LeoDog896>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace BESSEL;

export const version: string;
export function besselj(value: number, order: number): number;
export function bessely(value: number, order: number): number;
export function besseli(value: number, order: number): number;
export function besselk(value: number, order: number): number;
