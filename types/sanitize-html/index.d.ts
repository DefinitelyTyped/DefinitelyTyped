// Type definitions for sanitize-html 2.3
// Project: https://github.com/punkave/sanitize-html
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
//                 Afshin Darian <https://github.com/afshin>
//                 Rinze de Laat <https://github.com/biermeester>
//                 A penguin <https://github.com/sirMerr>
//                 Johan Davidsson <https://github.com/johandavidson>
//                 Jianrong Yu <https://github.com/YuJianrong>
//                 GP <https://github.com/paambaati>
//                 tomotetra <https://github.com/tomotetra>
//                 Dariusz Syncerek <https://github.com/dsyncerek>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ParserOptions } from "htmlparser2";

export = sanitize;

declare function sanitize(dirty: string, options?: sanitize.IOptions): string;

declare namespace sanitize {
  interface Attributes { [attr: string]: string; }

  interface Tag { tagName: string; attribs: Attributes; text?: string; }

  type Transformer = (tagName: string, attribs: Attributes) => Tag;

  type AllowedAttribute = string | { name: string; multiple?: boolean; values: string[] };

  type DisallowedTagsModes = 'discard' | 'escape' | 'recursiveEscape';

  // tslint:disable-next-line:interface-name
  interface IDefaults {
    allowedAttributes: Record<string, AllowedAttribute[]>;
    allowedSchemes: string[];
    allowedSchemesByTag: { [index: string]: string[] };
    allowedSchemesAppliedToAttributes: string[];
    allowedTags: string[];
    allowProtocolRelative: boolean;
    disallowedTagsMode: DisallowedTagsModes;
    enforceHtmlBoundary: boolean;
    selfClosing: string[];
  }

  // tslint:disable-next-line:interface-name
  interface IFrame {
    tag: string;
    attribs: { [index: string]: string };
    text: string;
    tagPosition: number;
  }

  // tslint:disable-next-line:interface-name
  interface IOptions {
    allowedAttributes?: Record<string, AllowedAttribute[]> | false;
    allowedStyles?: { [index: string]: { [index: string]: RegExp[] } };
    allowedClasses?: { [index: string]: string[] | boolean };
    allowedIframeDomains?: string[];
    allowedIframeHostnames?: string[];
    allowIframeRelativeUrls?: boolean;
    allowedSchemes?: string[] | boolean;
    allowedSchemesByTag?: { [index: string]: string[] } | boolean;
    allowedSchemesAppliedToAttributes?: string[];
    allowProtocolRelative?: boolean;
    allowedTags?: string[] | false;
    allowVulnerableTags?: boolean;
    textFilter?: (text: string, tagName: string) => string;
    exclusiveFilter?: (frame: IFrame) => boolean;
    nestingLimit?: number;
    nonTextTags?: string[];
    selfClosing?: string[];
    transformTags?: { [tagName: string]: string | Transformer };
    parser?: ParserOptions;
    disallowedTagsMode?: DisallowedTagsModes;
    /**
     * Setting this option to true will instruct sanitize-html to discard all characters outside of html tag boundaries
     * -- before `<html>` and after `</html>` tags
     * @see {@link https://github.com/apostrophecms/sanitize-html/#discarding-text-outside-of-htmlhtml-tags}
     * @default true
     */
    enforceHtmlBoundary?: boolean;
  }

  const defaults: IDefaults;

  function simpleTransform(tagName: string, attribs: Attributes, merge?: boolean): Transformer;
}
