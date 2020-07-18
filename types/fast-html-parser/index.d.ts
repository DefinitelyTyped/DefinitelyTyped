// Type definitions for fast-html-parser 1.0
// Project: https://github.com/ashi009/node-fast-html-parser
// Definitions by: Ryan Howard <https://github.com/rollercodester>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export function parse(data: string, options?: ParseOptions): HTMLElement;

export enum NodeType {
  ELEMENT_NODE = 1,
  TEXT_NODE = 3,
}

export interface Attributes {
  [key: string]: string;
}

export interface HTMLElement {
  readonly attributes: Attributes;
  readonly childNodes: HTMLElement[];
  readonly classNames: string[];
  readonly firstChild: HTMLElement;
  readonly id: string;
  readonly isWhitespace: boolean;
  readonly lastChild: HTMLElement;
  readonly nodeType: NodeType;
  readonly rawAttrs: string;
  readonly rawAttributes: Attributes;
  readonly rawText: string;
  readonly structure: string;
  readonly structuredText: string;
  readonly text: string;
  readonly tagName: string;
  appendChild(node: HTMLElement): HTMLElement;
  querySelector(selector: string): HTMLElement;
  querySelectorAll(selector: string): HTMLElement[];
  removeWhitespace(): HTMLElement;
  trimRight(pattern?: RegExp): HTMLElement;
}

export interface ParseOptions {
  lowerCaseTagName?: boolean;
  pre?: boolean;
  script?: boolean;
  style?: boolean;
}
