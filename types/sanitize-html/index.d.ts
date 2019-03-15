// Type definitions for sanitize-html 1.18.2
// Project: https://github.com/punkave/sanitize-html
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
//                 Afshin Darian <https://github.com/afshin>
//                 BehindTheMath <https://github.com/BehindTheMath>
//                 Rinze de Laat <https://github.com/biermeester>
//                 Will Gibson <https://github.com/WillGibson>
//                 A penguin <https://github.com/sirMerr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {Options} from "htmlparser2";

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
    allowedStyles?:  { [index: string]: { [index: string]: RegExp[] } };
    allowedClasses?: { [index: string]: string[] } | boolean;
    allowedIframeHostnames?: string[];
    allowedSchemes?: string[] | boolean;
    allowedSchemesByTag?: { [index: string]: string[] } | boolean;
    allowedSchemesAppliedToAttributes?: string[];
    allowProtocolRelative?: boolean;
    allowedTags?: string[] | boolean;
    exclusiveFilter?: (frame: IFrame) => boolean;
    nonTextTags?: string[];
    selfClosing?: string[];
    transformTags?: { [tagName: string]: string | Transformer };
    parser?: Options;
  }


  var defaults: IDefaults;


  function simpleTransform(tagName: string, attribs: Attributes, merge?: boolean): Transformer;
}
