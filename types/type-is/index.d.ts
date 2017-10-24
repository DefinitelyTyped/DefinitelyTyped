// Type definitions for type-is 1.6
// Project: https://github.com/jshttp/type-is#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { IncomingMessage } from 'http';

export = typeIs;

declare function typeIs(request: IncomingMessage, types: string[]): string | false | null;
declare function typeIs(request: IncomingMessage, ...types: string[]): string | false | null;

declare namespace typeIs {
    function hasBody(request: IncomingMessage): boolean;
    function is(mediaType: string, types: string[]): string | false;
    function is(mediaType: string, ...types: string[]): string | false;
}
