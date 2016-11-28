// Type definitions for sanitize-html 1.13.0
// Project: https://github.com/punkave/sanitize-html
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>, Afshin Darian <https://github.com/afshin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = sanitize;

declare function sanitize(dirty: string, options?: sanitize.IOptions): string;

declare namespace sanitize {
  type Attributes = { [attr: string]: string };


  type Tag = { tagName: string; attribs: Attributes; text?: string; };


  type Transformer = (tagName: string, attribs: Attributes) => Tag;


  interface IDefaults {
    allowedAttributes: { [index: string]: string[] };
    allowedSchemes: string[];
    allowedSchemesByTag: { [index: string]: string[] };
    allowedTags: string[];
    selfClosing: string[];
  }


  interface IFrame {
    tag: string;
    attribs: { [index: string]: string };
    text: string;
    tagPosition: number;
  }


  interface IOptions {
    allowedAttributes?: { [index: string]: string[] } | boolean;
    allowedClasses?: { [index: string]: string[] } | boolean;
    allowedSchemes?: string[] | boolean;
    allowedTags?: string[] | boolean;
    exclusiveFilter?: (frame: IFrame) => boolean;
    nonTextTags?: string[];
    selfClosing?: string[];
    transformTags?: { [tagName: string]: string | Transformer };
  }


  var defaults: IDefaults;


  function simpleTransform(tagName: string, attribs: Attributes, merge?: boolean): Transformer;
}
