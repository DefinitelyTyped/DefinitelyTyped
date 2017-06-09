// Type definitions for http-link-header 0.6
// Project: https://github.com/jhermsmeier/node-http-link-header
// Definitions by: Christian Rackerseder <https://www.echooff.de/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Reference {
    uri: string;
    rel: string;
    [index: string]: string;
}
export interface Link {
    refs: Reference[];
    has(attribute: string, value: string): boolean;
    get(attribute: string, value: string): Reference;
    rel(value: string): Reference;
    set(ref: Reference): Reference;
}
export function parse(header: string): Link;
