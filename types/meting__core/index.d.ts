// eslint-disable-next-line @definitelytyped/no-declare-current-package, @definitelytyped/no-single-declare-module
declare module "@meting/core" {
    export {};
    export type Platform = "netease" | "tencent" | "kugou" | "baidu" | "kuwo";

    export default class Meting {
        constructor(server?: Platform);

        readonly VERSION: string;
        /**
         * raw response
         */
        readonly raw: string;
        /**
         * response information
         */
        readonly info: Readonly<{ statusCode: number; headers: Readonly<Record<string, string>> }>;
        /**
         * error code
         */
        readonly error: string;
        /**
         * error message
         */
        readonly status: string;
        /**
         * request headers
         */
        readonly header: Readonly<Record<string, string>>;
        readonly server: Platform;
        readonly provider: unknown;
        readonly isFormat: boolean;

        site(server: Platform): this;
        cookie(cookie: string): this;
        format(enable: boolean): this;

        search(keyword: string, option?: SearchOption): Promise<string>;
        song(id: string): Promise<string>;
        album(id: string): Promise<string>;
        artist(id: string, limit?: number): Promise<string>;
        playlist(id: string): Promise<string>;
        url(id: string, bitrate?: number): Promise<string>;
        lyric(id: string): Promise<string>;
        pic(id: string, size?: number): Promise<string>;

        static getSupportedPlatforms(): Platform[];
        static isSupported(server: string): boolean;
    }

    interface SearchOption {
        page?: number;
        limit?: number;
        type?: number;
    }

    export interface FormattedSong {
        id: string;
        name: string;
        artist: string[];
        album: string;
        pic_id: string;
        url_id: string;
        lyric_id: string;
        source: Platform;
    }

    export interface FormattedLyric {
        lyric: string;
        tlyric: string;
    }

    export type FormattedUrl =
        & { size?: number }
        & (
            {
                url: "";
                br: -1;
            } | {
                url: string;
                br: number;
            }
        );

    export interface FormattedPic {
        url: string;
    }
}
