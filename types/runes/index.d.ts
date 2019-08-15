// Type definitions for runes 0.4
// Project: https://github.com/dotcypress/runes
// Definitions by: Jamie Davies <https://github.com/viralpickaxe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function runes(text: string): string[];
declare namespace runes {
    function substr(text: string, start: number, width?: number): string;
}

export = runes;
