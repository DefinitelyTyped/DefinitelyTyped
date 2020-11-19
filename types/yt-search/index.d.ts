// Type definitions for yt-search 2.3
// Project: https://github.com/talmobi/yt-search#readme
// Definitions by: cherryblossom <https://github.com/cherryblossom000>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = yts;

declare const yts: typeof search & { search: typeof search };

declare function search(
    query: string | yts.Options,
    callback: (err: Error | string | null | undefined, data: yts.SearchResult) => void,
): void;
declare function search(query: string | yts.Options): Promise<yts.SearchResult>;

declare function search(
    query: yts.VideoMetadataOptions,
    callback: (err: Error | string | null | undefined, data: yts.VideoMetadataResult) => void,
): void;
declare function search(query: yts.VideoMetadataOptions): Promise<yts.VideoMetadataResult>;

declare function search(
    query: yts.PlaylistMetadataOptions,
    callback: (err: Error | string | null | undefined, data: yts.PlaylistMetadataResult) => void,
): void;
declare function search(query: yts.PlaylistMetadataOptions): Promise<yts.PlaylistMetadataResult>;

declare namespace yts {
    interface BaseOptions {
        pageStart?: number;
        pageEnd?: number;
        pages?: number;
        userAgent?: string;

        /**
         * The language.
         * @default 'en'
         */
        hl?: string;

        /**
         * The location.
         * @default 'US'
         */
        gl?: string;

        /**
         * The category (for example `'music'`.)
         * @default ''
         */
        category?: string;

        sp?: string;
    }

    interface OptionsWithQuery extends BaseOptions {
        query: string;
    }
    interface OptionsWithSearch extends BaseOptions {
        search: string;
    }

    type Options = OptionsWithQuery | OptionsWithSearch;

    interface VideoMetadataOptions {
        videoId: string;
    }
    interface PlaylistMetadataOptions {
        listId: string;
    }

    interface Author {
        name: string;
        url: string;
    }

    interface Duration {
        seconds: number;
        timestamp: string;
        toString: () => string;
    }

    interface VideoSearchResult {
        type: 'video';
        videoId: string;
        url: string;
        title: string;
        description: string;
        image: string;
        thumbnail: string;
        seconds: number;
        timestamp: string;
        duration: Duration;
        ago: string;
        views: number;
        author: Author;
    }

    interface LiveSearchResultBase {
        type: 'live';
        videoId: string;
        url: string;
        title: string;
        description: string;
        image: string;
        thumbnail: string;
        watching: number;
        author: Author;
    }

    interface UpcomingLiveSearchResult extends LiveSearchResultBase {
        status: 'UPCOMING';
        startTime: number;
        startDate: string;
    }

    interface LiveLiveSearchResult extends LiveSearchResultBase {
        status: 'LIVE';
    }

    type LiveSearchResult = UpcomingLiveSearchResult | LiveLiveSearchResult;

    interface PlaylistSearchResult {
        type: 'list';
        listId: string;
        url: string;
        title: string;
        image: string;
        thumbnail: string;
        videoCount: number;
        author: Author;
    }

    interface ChannelSearchResult {
        type: 'channel';
        name: string;
        url: string;
        title: string;
        image: string;
        thumbnail: string;
        videoCount: number;
        videoCountLabel: string;
        subCount: number;
        subCountLabel: string;
    }

    interface SearchResult {
        all: Array<VideoSearchResult | LiveSearchResult | PlaylistSearchResult | ChannelSearchResult>;
        videos: VideoSearchResult[];
        live: LiveSearchResult[];
        playlists: PlaylistSearchResult[];
        lists: PlaylistSearchResult[];
        accounts: ChannelSearchResult[];
        channels: ChannelSearchResult[];
    }

    interface VideoMetadataResult {
        title: string;
        description: string;
        url: string;
        videoId: string;
        seconds: number;
        timestamp: string;
        duration: Duration;
        views: number;
        genre: string;
        uploadDate: string;
        ago: string;
        image: string;
        thumbnail: string;
        author: Author;
    }

    interface PlaylistItem {
        title: string;
        videoId: string;
        listId: string;
        thumbnail: string;
        author: Author;
    }

    interface PlaylistMetadataResult {
        title: string;
        listId: string;
        url: string;
        views: number;
        date: string;
        image: string;
        thumbnail: string;
        videos: PlaylistItem[];
        author: Author;
    }
}
