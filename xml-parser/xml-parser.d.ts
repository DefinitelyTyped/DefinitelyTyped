// Type definitions for xml-parser 1.2.1
// Project: https://github.com/segmentio/xml-parser
// Definitions by: Matt Frantz <https://github.com/mhfrantz/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'xml-parser' {

  function parse(xml: string): parse.Document;

  module parse {
    export interface Document {
      declaration: Declaration;
      root: Node;
    }

    export interface Declaration {
      attributes: Attributes;
    }

    export interface Node {
      name: string;
      attributes: Attributes;
      children: Node[];
      content?: string;
    }

    export interface Attributes {
      [name: string]: string;
    }
  }

  export = parse;
}
