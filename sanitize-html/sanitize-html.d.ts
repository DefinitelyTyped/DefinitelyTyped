// Type definitions for sanitize-html 1.12.0
// Project: https://github.com/punkave/sanitize-html
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>, Afshin Darian <https://github.com/afshin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare function sanitize(dirty: string, options?: sanitize.IOptions): string;


declare namespace sanitize {
  type Attributes = { [attr: string]: string };


  type Tag = { tagName: string; attributes: Attributes; };


  type Transformer = (tagName: string, attributes: Attributes) => Tag;


  interface IDefaults {
    allowedAttributes: { [index: string]: string[] };
    allowedSchemes: string[];
    allowedSchemesByTag: { [index: string]: string[] };
    allowedTags: string[];
    selfClosing: string[];
  }


  interface IFrame {
    tag: string;
    attributes: { [index: string]: string };
    text: string;
    tagPosition: number;
  }


  interface IOptions {
    allowedAttributes?: { [index: string]: string[] };
    allowedClasses?: { [index: string]: string[] };
    allowedSchemes?: string[];
    allowedTags?: string[];
    exclusiveFilter?: (frame: IFrame) => boolean;
    selfClosing?: string[];
    transformTags?: { [tagName: string]: string | Transformer };
  }


  var defaults: IDefaults;


  function simpleTransform(tagName: string, attributes: Attributes, merge?: boolean): Transformer;
}


declare module 'sanitize-html' {
  export = sanitize;
}
