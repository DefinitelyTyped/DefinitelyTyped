// Type definitions for html-to-rtf 1.3
// Project: https://github.com/oziresrds/html-to-rtf
// Definitions by: Alex Brick <https://github.com/bricka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function convertHtmlToRtf(html: string): string;
export function saveRtfInFile(path: string, value: string): void;
