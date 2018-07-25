// Type definitions for whatwg-mimetype 2.1
// Project: https://github.com/jsdom/whatwg-mimetype#readme
// Definitions by: Pete Johanson <https://github.com/petejohanson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = MIMEType;

declare class MIMEType {
  type: string;
  subtype: string;

  readonly essence: string;
  readonly parameters: Map<string, string>;

  static parse(s: string): MIMEType | null;

  constructor(s: string);

  isHTML(): boolean;
  isXML(): boolean;
  isJavaScript(opts?: { allowParameters?: boolean }): boolean;
}
