// Type definitions for audiosprite 0.6
// Project: https://github.com/tonistiigi/audiosprite
// Definitions by: Gyusun Yeom <https://github.com/Perlmint>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace audiosprite;
export = audiosprite;

declare function audiosprite(files: string[], callback: (error: Error, obj: audiosprite.Result) => void): void;
declare function audiosprite(files: string[], option: audiosprite.Option, callback: (error: Error, obj: audiosprite.Result) => void): void;

declare namespace audiosprite {
    type ExportType = "jukebox" | "howler" | "createjs" | null;
    type LogLevel = "debug" | "info" | "notice" | "warning" | "error";
    type VBR = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    type VBR_Vorbis = VBR | 10;
    type Channels = 1 | 2;
    interface Option {
        output?: string;
        path?: string;
        export?: string;
        format?: ExportType;
        log?: LogLevel;
        autoplay?: string | null;
        loop?: string[];
        silence?: number;
        gap?: number;
        minlength?: number;
        bitrate?: number;
        vbr?: VBR;
        'vbr:vorbis'?: VBR_Vorbis;
        samplerate?: number;
        channels?: Channels;
        rawparts?: string;
        logger?: Logger;
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
            }
        };
        autoplay?: string;
    }
}
