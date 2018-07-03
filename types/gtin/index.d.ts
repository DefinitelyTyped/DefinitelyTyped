// Type definitions for gtin 0.3
// Project: https://github.com/xbpf/gtin
// Definitions by: RafaelKr <https://github.com/RafaelKr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace gtin;

export type GtinFormat = 'GTIN-8' | 'GTIN-12' | 'GTIN-13' | 'GTIN-14';

export function isGTIN(gtin: string): boolean;
export function validate(gtin: string): boolean;
export function minify(gtin: string): string;
export function getFormat(gtin: string): GtinFormat;
export function getRealFormat(gtin: string): GtinFormat;

export namespace upce {
    function compress(gtin: string): string | null;
    function expand(gtin: string): string;
}
