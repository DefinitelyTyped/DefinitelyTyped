// Type definitions for simple-youtube-api 5.2
// Project: https://github.com/tjrgg/simple-youtube-api
// Definitions by: abh0 <https://github.com/abh80>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare interface options {
    type: string;
}
declare class YouTube {
    constructor(key: string);
    getVideo(url: string, options?: options): object;
    getVideoByID(id: string, options?: options): object;
    getPlaylist(url: string, options?: options): object;
    getPlaylistByID(id: string, options?: options): object;
    getChannel(url: string, options?: options): object;
    getChannelByID(id: string, options?: options): object;
    search(query: string, limit?: number, options?: options): object[];
    searchVideos(query: string, limit?: number, options?: options): object[];
    searchPlaylists(query: string, limit?: number, options?: options): object[];
    searchChannels(query: string, limit?: number, options?: options): object[];
}
declare namespace YouTube {
    class Video {
        constructor(youtube: YouTube, data: options);
        fetch(options: options): any;
        static extractID(url: string): string;
    }
    class Channel {
        constructor(youtube: YouTube, data: options);
        fetch(options: options): any;
        static extractID(url: string): string;
    }
    class Playlist {
        constructor(youtube: YouTube, data: options);
        fetch(options: options): any;
        static extractID(url: string): string;
    }
    namespace util {
        function parseURL(url: string): string;
    }
}

export = YouTube;
