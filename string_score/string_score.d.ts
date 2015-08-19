// Type definitions for url-template 0.1.22
// Project: https://github.com/joshaven/string_score
// Definitions by: Marcin Porębski <https://github.com/marcinporebski/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface String {
    score: (word: string, fuzzy?: number) => number;
}
