// Type definitions for lrc-parser 1.0
// Project: https://github.com/dkakashi69/lrc-parser#readme
// Definitions by: Alex Kovacs <https://github.com/alexthemaster>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface LrcData {
    [key: string]: string | ScriptItem[] | undefined;
    scripts?: ScriptItem[];
}

export interface ScriptItem {
    start: number;
    text: string;
    end: number;
}

export default function lrcParser(data: string): LrcData;
