// Type definitions for jQuery Plugin - base64 codec
// Project: https://github.com/yatt/jquery.base64/
// Definitions by: Shinya Mochizuki <https://github.com/enrapt-mochizuki/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

interface JQueryBase64Static {
  encode(data: string, isUTF8?: boolean): string;
  decode(data: string, isUTF8?: boolean): string;
}

interface JQueryStatic {
  base64: JQueryBase64Static;
}
