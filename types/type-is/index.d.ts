/// <reference types="node" />
import { IncomingMessage } from "http";

export = typeIs;

declare function typeIs(request: IncomingMessage, types: string[]): string | false | null;
declare function typeIs(request: IncomingMessage, ...types: string[]): string | false | null;

declare namespace typeIs {
    function normalize(type: string): string | false;
    function hasBody(request: IncomingMessage): boolean;
    function is(mediaType: string, types: string[]): string | false;
    function is(mediaType: string, ...types: string[]): string | false;
    function mimeMatch(expected: false | string, actual: string): boolean;
}
