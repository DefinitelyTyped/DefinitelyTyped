// Type definitions for parse-prefer-header 1.0
// Project: https://github.com/ppaskaris/node-parse-prefer-header
// Definitions by: Vincenzo Chianese <https://github.com/XVincentX>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function parsePreferHeader(preferHeader: string | string[]): { [key: string]: string | boolean };

export = parsePreferHeader;
