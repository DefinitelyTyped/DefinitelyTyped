export interface Subtitle {
    start: number;
    dur: number;
    text: string;
}

export type SubtitleOutput = Subtitle[];

export function getSubtitles({ videoID, lang }: {
    videoID: string;
    lang: string;
}): Promise<SubtitleOutput>;
