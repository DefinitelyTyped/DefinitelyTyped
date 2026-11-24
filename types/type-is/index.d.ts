/// <reference types="node" />
import { IncomingMessage } from "http";

export = typeIs;

declare function typeIs(
    request: IncomingMessage | typeIs.RequestLike,
    types: readonly string[],
): string | false | null;
declare function typeIs(
    request: IncomingMessage | typeIs.RequestLike,
    ...types: string[]
): string | false | null;

declare namespace typeIs {
    interface RequestLike {
        headers: Record<string, string | string[] | undefined>;
    }

    function normalize(type: string): string | false;
    function hasBody(request: IncomingMessage | RequestLike): boolean;
    function is(mediaType: string, types: readonly string[]): string | false;
    function is(mediaType: string, ...types: string[]): string | false;
    function match(expected: false | string, actual: string): boolean;
}
