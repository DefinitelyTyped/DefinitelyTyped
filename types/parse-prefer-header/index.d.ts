// Type definitions for parse-prefer-header 1.0
// Project: https://github.com/ppaskaris/node-parse-prefer-header
// Definitions by: Vincenzo Chianese <https://github.com/XVincentX>, Marcell Toth <https://github.com/marcelltoth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function parsePreferHeader(preferHeader: string | ReadonlyArray<string> | null | undefined): { [key: string]: string | true };

export = parsePreferHeader;
