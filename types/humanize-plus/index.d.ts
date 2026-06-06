// Numbers
export function formatNumber(number: number, decimals?: number): string;
export function intComma(number: number, decimals?: number): string;
export function compactInteger(number: number, decimals?: number): string;
export function boundedNumber(number: number, bounds?: number, ending?: string): string;
export function ordinal(value: number): string;
export function times(value: number, overrides?: any): string;
export function pace(value: number, intervalMs: number, unit?: string): string;
export function fileSize(filesize: number, precision?: number): string;
export function pluralize(number: number, singular?: string, plural?: string): string;

// Strings
export function truncate(string: string, length?: number, ending?: string): string;
export function truncateWords(string: string, length?: number): string | null;
export function capitalize(string: string, downCaseTail?: boolean): string;
export function capitalizeAll(string: string): string;
export function titleCase(string: string): string;

// Arrays
export function oxford(items: any[], limit?: number, limitStr?: string): string;
export function frequency(list: any[], verb?: string): string;

// Utility methods
export function toFixed(value: number, precision?: number): string;
export function normalizePrecision(value: number, base?: number): number;
