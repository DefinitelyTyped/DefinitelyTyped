// Type definitions for sanitize-html 1.20.1
// Project: https://github.com/punkave/sanitize-html
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
//                 Afshin Darian <https://github.com/afshin>
//                 BehindTheMath <https://github.com/BehindTheMath>
//                 Rinze de Laat <https://github.com/biermeester>
//                 Will Gibson <https://github.com/WillGibson>
//                 A penguin <https://github.com/sirMerr>
//                 Johan Davidsson <https://github.com/johandavidson>
//                 Jianrong Yu <https://github.com/YuJianrong>
//                 GP <https://github.com/paambaati>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

///<reference types="htmlparser2"/>

import { Options } from "htmlparser2";

export = sanitize;

declare function sanitize(dirty: string, options?: sanitize.IOptions): string;

declare namespace sanitize {
  type Attributes = { [attr: string]: string };


  type Tag = { tagName: string; attribs: Attributes; text?: string; };


  type Transformer = (tagName: string, attribs: Attributes) => Tag;

  type AllowedAttribute = string | { name: string; multiple?: boolean; values: string[] };

  interface IDefaults {
    allowedAttributes: { [index: string]: AllowedAttribute[] };
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
    allowedAttributes?: { [index: string]: AllowedAttribute[] } | boolean;
    allowedStyles?:  { [index: string]: { [index: string]: RegExp[] } };
    allowedClasses?: { [index: string]: string[] } | boolean;
    allowedIframeHostnames?: string[];
    allowIframeRelativeUrls?: boolean;
    allowedSchemes?: string[] | boolean;
    allowedSchemesByTag?: { [index: string]: string[] } | boolean;
    allowedSchemesAppliedToAttributes?: string[];
    allowProtocolRelative?: boolean;
    allowedTags?: string[] | boolean;
    textFilter?: (text: string) => string; 
    exclusiveFilter?: (frame: IFrame) => boolean;
    nonTextTags?: string[];
    selfClosing?: string[];
    transformTags?: { [tagName: string]: string | Transformer };
    parser?: Options;
  }


  var defaults: IDefaults;


  function simpleTransform(tagName: string, attribs: Attributes, merge?: boolean): Transformer;
}
