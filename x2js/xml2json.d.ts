// Type definitions for x2js
// Project: https://code.google.com/p/x2js/
// Original Definitions: https://github.com/borisyankov/DefinitelyTyped
// Modified by sflint to match x2js v2.0.1

interface IX2JS {
  new (config?: IX2JSOption): IX2JS;

  getVersion(): string;

  dom2js<T>(dom: Node): T;
  js2dom<T>(json: T): Node;
  xml2js<T>(xml: string): T;
  js2xml<T>(json: T): string;
  xml2dom(xml: string): Node;

  asArray(prop: any): any[];
  asDateTime(key: string): string;
  toXmlDateTime(date: Date): string;
  toXmlDateTime(date: number): string;
}

interface IX2JSOption {
  escapeMode?: boolean;
  attributePrefix?: string;
  arrayAccessForm?: string;
  emptyNodeForm?: string;
  enableToStringFunc?: boolean;
  arrayAccessFormPaths?: any[];
  skipEmptyTextNodesForObj?: boolean;
  stripWhitespaces?: boolean;
  datetimeAccessFormPaths?: any[];
}

declare var X2JS: IX2JS;

