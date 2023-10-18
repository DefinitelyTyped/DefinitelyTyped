type CharacterSets = [
    "asterisks",
    "number signs",
    "slashes",
    "parentheses",
    "parentheses",
    "square brackets",
    "square brackets",
    "angle brackets",
    "angle brackets",
    "underscores",
];

declare namespace markdownEscape {
    type CharacterSet = CharacterSets[number];
}

declare function markdownEscape(string: string, skips?: markdownEscape.CharacterSet[]): string;

export = markdownEscape;
