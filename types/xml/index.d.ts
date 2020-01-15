// Type definitions for xml 1.0
// Project: http://github.com/dylang/node-xml
// Definitions by: Jianrong Yu <https://github.com/YuJianrong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

interface Option {
  /**
   * String used for tab, defaults to no tabs (compressed)
   */
  indent?: string;
  /**
   * Return the result as a `stream` (default false)
   */
  stream?: boolean;
  /**
   * Add default xml declaration (default false)
   */
  declaration?: boolean | {
    encoding?: string;
    standalone?: string;
  };
}

interface XmlAttrs {
  [attr: string]: XmlAtom;
}
interface XmlDescArray {
  [index: number]: { _attr: XmlAttrs } | XmlObject;
}
interface ElementObject {
  push(xmlObject: XmlObject): void;
  close(xmlObject?: XmlObject): void;
}

type XmlAtom = string | number | boolean | null;
type XmlDesc = { _attr: XmlAttrs } | { _cdata: string } | { _attr: XmlAttrs, _cdata: string } | XmlAtom | XmlAtom[] | XmlDescArray;
type XmlObject = { [tag: string]: ElementObject | XmlDesc } | XmlDesc;

declare namespace xml {
  function element(...xmlObjects: XmlObject[]): ElementObject;
  function Element(...xmlObjects: XmlObject[]): ElementObject;
}

declare function xml(xmlObject: XmlObject | XmlObject[], options: { stream: true, indent?: string }): NodeJS.ReadableStream;
declare function xml(xmlObject?: XmlObject | XmlObject[], options?: boolean | string | Option): string;

export = xml;
