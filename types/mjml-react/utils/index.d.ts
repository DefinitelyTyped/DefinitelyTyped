export function namedEntityToHexCode(html: string): string;
export function fixConditionalComment(html: string, havingContent: string, newCondition: string): string;
export function useHttps(url?: string): string | undefined;
export function toMobileFontSize(sizeWithUnit: string): number;
export function addQueryParams(url: string, params: { [key: string]: any }): string;

export type TextAlignment = 'left' | 'right' | 'center' | 'justify' | 'inherit';
export function getTextAlign(value: string, fallback?: TextAlignment): TextAlignment;
