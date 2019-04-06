// Type definitions for http-link-header 1.0.2
// Project: https://github.com/jhermsmeier/node-http-link-header
// Definitions by: Christian Rackerseder <https://github.com/screendriver>
// Definitions by: Evert Pot <https://evertpot.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Reference {
    uri: string;
    rel: string;
    [index: string]: string;
}

export default class Link {

  constructor(value?: string);

  rel(value: string): Reference[];
  get(attribute: string, value: string): Reference[];
  set(ref: Reference): this;
  has(attribute: string, value: string): boolean;
  parse(header: string, offset?: number): this;
  toString(): string;

}
