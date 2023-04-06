// Type definitions for lrc-parser 1.0
// Project: https://github.com/dkakashi69/lrc-parser#readme
// Definitions by: Alex Kovacs <https://github.com/alexthemaster>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface LrcData {
    [key: string]: string | ScriptItem[] | undefined;
    scripts?: ScriptItem[];
}

interface ScriptItem {
    start: number;
    text: string;
    end: number;
}

declare function lrcParser(data: string): LrcData;

export = lrcParser;
