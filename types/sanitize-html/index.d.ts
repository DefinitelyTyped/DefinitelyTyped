// Type definitions for sanitize-html 2.9
// Project: https://github.com/punkave/sanitize-html
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
//                 Afshin Darian <https://github.com/afshin>
//                 Rinze de Laat <https://github.com/biermeester>
//                 Johan Davidsson <https://github.com/johandavidson>
//                 Jianrong Yu <https://github.com/YuJianrong>
//                 GP <https://github.com/paambaati>
//                 Dariusz Syncerek <https://github.com/dsyncerek>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
//                 Pirasis Leelatanon <https://github.com/1pete>
//                 Alex Rantos <https://github.com/alex-rantos>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ParserOptions } from "htmlparser2";

export = sanitize;

declare function sanitize(dirty: string, options?: sanitize.IOptions): string;

declare namespace sanitize {
  interface Attributes { [attr: string]: string; }

  interface Tag { tagName: string; attribs: Attributes; text?: string | undefined; }

  type Transformer = (tagName: string, attribs: Attributes) => Tag;

  type AllowedAttribute = string | { name: string; multiple?: boolean | undefined; values: string[] };

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
    mediaChildren: string[];
  }

  // tslint:disable-next-line:interface-name
  interface IOptions {
    allowedAttributes?: Record<string, AllowedAttribute[]> | false | undefined;
    allowedStyles?: { [index: string]: { [index: string]: RegExp[] } } | undefined;
    allowedClasses?: { [index: string]: boolean | Array<string | RegExp> } | undefined;
    allowedIframeDomains?: string[] | undefined;
    allowedIframeHostnames?: string[] | undefined;
    allowIframeRelativeUrls?: boolean | undefined;
    allowedSchemes?: string[] | boolean | undefined;
    allowedSchemesByTag?: { [index: string]: string[] } | boolean | undefined;
    allowedSchemesAppliedToAttributes?: string[] | undefined;
    allowedScriptDomains?: string[] | undefined;
    allowedScriptHostnames?: string[] | undefined;
    allowProtocolRelative?: boolean | undefined;
    allowedTags?: string[] | false | undefined;
    allowVulnerableTags?: boolean | undefined;
    textFilter?: ((text: string, tagName: string) => string) | undefined;
    exclusiveFilter?: ((frame: IFrame) => boolean) | undefined;
    nestingLimit?: number | undefined;
    nonTextTags?: string[] | undefined;
    /** @default true */
    parseStyleAttributes?: boolean | undefined;
    selfClosing?: string[] | undefined;
    transformTags?: { [tagName: string]: string | Transformer } | undefined;
    parser?: ParserOptions | undefined;
    disallowedTagsMode?: DisallowedTagsModes | undefined;
    /**
     * Setting this option to true will instruct sanitize-html to discard all characters outside of html tag boundaries
     * -- before `<html>` and after `</html>` tags
     * @see {@link https://github.com/apostrophecms/sanitize-html/#discarding-text-outside-of-htmlhtml-tags}
     * @default true
     */
    enforceHtmlBoundary?: boolean | undefined;
  }

  const defaults: IDefaults;
  const options: IOptions;

  function simpleTransform(tagName: string, attribs: Attributes, merge?: boolean): Transformer;
}
