export as namespace audiosprite;
export = audiosprite;

declare function audiosprite(files: string[], callback: (error: Error, obj: audiosprite.Result) => void): void;
declare function audiosprite(
    files: string[],
    option: audiosprite.Option,
    callback: (error: Error, obj: audiosprite.Result) => void,
): void;

declare namespace audiosprite {
    type ExportType = "jukebox" | "howler" | "createjs" | null;
    type LogLevel = "debug" | "info" | "notice" | "warning" | "error";
    type VBR = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    type VBR_Vorbis = VBR | 10;
    type Channels = 1 | 2;
    interface Option {
        output?: string | undefined;
        path?: string | undefined;
        export?: string | undefined;
        format?: ExportType | undefined;
        log?: LogLevel | undefined;
        autoplay?: string | null | undefined;
        loop?: string[] | undefined;
        silence?: number | undefined;
        gap?: number | undefined;
        minlength?: number | undefined;
        bitrate?: number | undefined;
        vbr?: VBR | undefined;
        "vbr:vorbis"?: VBR_Vorbis | undefined;
        samplerate?: number | undefined;
        channels?: Channels | undefined;
        rawparts?: string | undefined;
        logger?: Logger | undefined;
        ignorerounding?: boolean | undefined;
    }

    interface Logger {
        debug?(...log: any[]): void;
        info?(...log: any[]): void;
        log?(...log: any[]): void;
    }

    interface Result {
        resources: string[];
        spritemap: {
            [key: string]: {
                start: number;
                end: number;
                loop: boolean;
            };
        };
        autoplay?: string | undefined;
    }
}
