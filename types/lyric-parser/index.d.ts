declare class Lyric {
    constructor(lrc: string, handler: (params: { lineNum: number; txt: string }) => void);

    lrc: string;
    tags: { album: string; artist: string; by: string; offset: string; title: string };
    lines: Array<{ time: number; txt: string }>;
    handler: (params: { lineNum: number; txt: string }) => void;
    state: number;
    curLine: number;

    play(startTime: number, skipLast?: boolean): void;

    togglePlay(): void;

    stop(): void;

    seek(offset: number): void;
}

export = Lyric;
