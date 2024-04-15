// Type definitions for ahocorasick 1.0.2
// Project: https://github.com/BrunoRB/ahocorasick

declare namespace AhoCorasick {
    function search(match: string): Array<[number, string[]]>;
}

declare class AhoCorasick {
    constructor(keywords: string[]);

    search(match: string): Array<[number, string[]]>;
}

export = AhoCorasick;

export as namespace AhoCorasick;
