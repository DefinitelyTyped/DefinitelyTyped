export as namespace base64topdf;

export function base64Encode(file: string): void;
export function base64Decode(base64str: string, file: string): void;
export function rtfToText(rtfStr: string): string;
export function textToRtf(textStr: string): string;
export function strToBase64(str: string): string;
export function base64ToStr(base64Str: string): string;
