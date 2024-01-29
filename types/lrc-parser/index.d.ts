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
