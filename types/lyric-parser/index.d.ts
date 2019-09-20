// Type definitions for lyric-parser 1.0
// Project: https://github.com/ustbhuangyi/lyric-parser
// Definitions by: Wang KaiLing <https://github.com/wkl007>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export default class Lyric {
    constructor(lrc: string, handler: (params: { lineNum: number; txt: string }) => void);

    lrc: string;
    tags: { album: string; artist: string; by: string; offset: string; title: string };
    lines: string[];
    handler: (params: { lineNum: number; txt: string }) => void;
    state: number;
    curLine: number;

    play(startTime: number, skipLast?: boolean): void;

    togglePlay(): void;

    stop(): void;

    seek(offset: number): void;
}
