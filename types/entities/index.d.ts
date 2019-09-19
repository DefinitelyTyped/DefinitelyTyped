// Type definitions for entities 1.1
// Project: https://github.com/fb55/entities
// Definitions by: Alice Klipper <https://github.com/aliceklipper>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function decode(data: string, level?: number): string;
export function decodeStrict(data: string, level?: number): string;
export function encode(data: string, level?: number): string;

export function decodeXML(str: string): string;
export function decodeXMLStrict(str: string): string;
export function encodeXML(data: string): string;

export function decodeHTML(str: string): string;
export function decodeHTMLStrict(str: string): string;
export function encodeHTML(data: string): string;

export function decodeHTML4(str: string): string;
export function decodeHTML4Strict(str: string): string;
export function encodeHTML4(data: string): string;

export function decodeHTML5(str: string): string;
export function decodeHTML5Strict(str: string): string;
export function encodeHTML5(data: string): string;

export function escape(data: string): string;
