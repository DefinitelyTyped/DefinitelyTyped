// Type definitions for @theme-ui/color 0.3
// Project: https://github.com/system-ui/theme-ui
// Definitions by: Allan Pope <https://github.com/allanpope>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

export function darken(color: string, number: number | string): string;
export function lighten(color: string, number: number | string): string;
export function rotate(color: string, degree: number | string): string;

export function hue(color: string, hue: number | string): string;
export function saturation(color: string, saturation: number | string): string;
export function lightness(color: string, lightness: number | string): string;

export function desaturate(color: string, number: number | string): string;
export function saturate(color: string, number: number | string): string;

export function shade(color: string, number: number | string): string;
export function tint(color: string, number: number | string): string;

export function transparentize(color: string, number: number | string): string;
export function alpha(color: string, number: number | string): string;

export function mix(color: string, otherColor: string, number?: number | string): string;

export function complement(color: string): string;
export function invert(color: string): string;

export function grayscale(color: string): string;
