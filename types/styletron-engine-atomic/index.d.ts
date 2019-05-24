// Type definitions for styletron-engine-atomic 1.1
// Project: https://github.com/styletron/styletron
// Definitions by: Jhey Tompkins <https://github.com/jh3y>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import { KeyframesObject, FontFace as FontFaceObject, StandardEngine } from 'styletron-standard'

export = StyletronEngineAtomic

type hydrateType = HTMLCollectionOf<HTMLStyleElement> | Array<HTMLStyleElement> | NodeListOf<HTMLStyleElement>
type sheetType = {
  css: string,
  attrs: { [key: string]: string }
}

interface ClientOptions {
  hydrate?: hydrateType;
  container?: Element;
  prefix?: string;
}

interface ServerOptions {
  prefix?: string;
}

declare namespace StyletronEngineAtomic {
  class Client implements StandardEngine {
    constructor(opts?: ClientOptions);
    styleElements: { [key: string]: HTMLStyleElement };
    fontFaceSheet: HTMLStyleElement;
    keyframesSheet: HTMLStyleElement;
    styleCache: MultiCache<{pseudo: string, block: string}>;
    keyframesCache: Cache<KeyframesObject>;
    fontFaceCache: Cache<FontFaceObject>;
  }
  class Server implements StandardEngine {
    constructor(opts?: ServerOptions)
    styleRules: { [key: string]: string };
    keyframesRules: string;
    fontFaceRules: string;
    getStylesheets(): Array<sheetType>;
    getStylesheetsHtml(className?: string): string;
    getCss(): string;
  }
}
