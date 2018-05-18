// Type definitions for require-relative 0.8
// Project: https://github.com/kamicane/require-relative
// Definitions by: Mattias Buelens <https://github.com/MattiasBuelens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare function requireRelative(id: string, relativeTo?: string): any;

declare namespace requireRelative {
    function resolve(id: string, relativeTo?: string): string;
}

export = requireRelative;
