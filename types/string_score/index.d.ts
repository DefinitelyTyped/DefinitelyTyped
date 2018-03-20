// Type definitions for string_score 0.1.22
// Project: https://github.com/joshaven/string_score
// Definitions by: Marcin Porębski <https://github.com/marcinporebski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "string_score"
{
    // nothing here as it's only extending the build in String class
}

interface String {
    score: (word: string, fuzzy?: number) => number;
}
