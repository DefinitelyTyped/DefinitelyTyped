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
        pageStart?: number | undefined;
        pageEnd?: number | undefined;
        pages?: number | undefined;
        userAgent?: string | undefined;

        /**
         * The language.
         * @default 'en'
         */
        hl?: string | undefined;

        /**
         * The location.
         * @default 'US'
         */
        gl?: string | undefined;

        /**
         * The category (for example `'music'`.)
         * @default ''
         */
        category?: string | undefined;

        sp?: string | undefined;
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
        /** @default 'en' */
        hl?: string | undefined;
        /** @default 'US' */
        gl?: string | undefined;
    }
    interface PlaylistMetadataOptions {
        listId: string;
        /** @default 'en' */
        hl?: string | undefined;
        /** @default 'US' */
        gl?: string | undefined;
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
        type: "video";
        videoId: string;
        url: string;
        title: string;
        description: string;
        image: string;
        thumbnail: string | undefined;
        seconds: number;
        timestamp: string;
        duration: Duration;
        ago: string;
        views: number;
        author: Author;
    }

    interface LiveSearchResultBase {
        type: "live";
        videoId: string;
        url: string;
        title: string;
        description: string;
        image: string;
        thumbnail: string | undefined;
        watching: number;
        author: Author;
    }

    interface UpcomingLiveSearchResult extends LiveSearchResultBase {
        status: "UPCOMING";
        startTime: number;
        startDate: string;
    }

    interface LiveLiveSearchResult extends LiveSearchResultBase {
        status: "LIVE";
    }

    type LiveSearchResult = UpcomingLiveSearchResult | LiveLiveSearchResult;

    interface PlaylistSearchResult {
        type: "list";
        listId: string;
        url: string;
        title: string;
        image: string;
        thumbnail: string | undefined;
        videoCount: number;
        author: Author;
    }

    interface ChannelSearchResult {
        type: "channel";
        name: string;
        url: string;
        title: string;
        image: string;
        thumbnail: string | undefined;
        videoCount: number;
        videoCountLabel: string;
        subCount: number | undefined;
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
        thumbnail: string | undefined;
        duration: Duration;
        author: Author;
    }

    interface PlaylistMetadataResult {
        title: string;
        listId: string;
        url: string;
        size: number;
        views: number;
        date: string;
        image: string;
        thumbnail: string;
        videos: PlaylistItem[];
        author: Author;
    }
}
