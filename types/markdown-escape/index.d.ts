// Type definitions for markdown-escape 1.1
// Project: https://github.com/kemitchell/markdown-escape.js
// Definitions by: Christoph Thiede <https://github.com/LinqLover>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type CharacterSets = [
    'asterisks',
    'number signs',
    'slashes',
    'parentheses',
    'parentheses',
    'square brackets',
    'square brackets',
    'angle brackets',
    'angle brackets',
    'underscores'
];

declare namespace markdownEscape {
    type CharacterSet = CharacterSets[number];
}

declare function markdownEscape(string: string, skips?: markdownEscape.CharacterSet[]): string;

export = markdownEscape;
