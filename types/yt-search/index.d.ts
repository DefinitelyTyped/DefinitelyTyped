// Type definitions for yt-search 2.0
// Project: https://github.com/talmobi/yt-search#readme
// Definitions by: cherryblossom <https://github.com/cherryblossom000>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.5

export = yts;

declare const yts: typeof search & { search: typeof search };

declare function search(query: string | yts.Options, callback: (err: Error | string | null | undefined, data: yts.SearchResult) => void): void;
declare function search(query: string | yts.Options): Promise<yts.SearchResult>;

declare function search(query: yts.VideoMetadataOptions, callback: (err: Error | string | null | undefined, data: yts.VideoMetadataResult) => void): void;
declare function search(query: yts.VideoMetadataOptions): Promise<yts.VideoMetadataResult>;

declare function search(query: yts.PlaylistMetadataOptions, callback: (err: Error | string | null | undefined, data: yts.PlaylistMetadataResult) => void): void;
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

    interface OptionsWithQuery extends BaseOptions { query: string; }
    interface OptionsWithSearch extends BaseOptions { search: string; }

    type Options = OptionsWithQuery | OptionsWithSearch;

    interface VideoMetadataOptions { videoId: string; }
    interface PlaylistMetadataOptions { listId: string; }

    interface Author {
        name: string;
        id: string;
        url: string;
        userId: string;
        userUrl: string;
        userName: string;
        channelId: string;
        channelUrl: string;
        channelName: string;
    }

    interface PlaylistAuthor extends Omit<Author, 'userName' | 'channelName'> {
        userText: string;
        channelText: string;
    }

    interface Duration {
        seconds: number;
        timestamp: string;
        toString(): string;
    }

    interface VideoSearchResult {
        type: 'video';
        title: string;
        description: string;
        url: string;
        videoId: string;
        seconds: number;
        timestamp: string;
        duration: Duration;
        views: number;
        image: string;
        /** @deprecated */
        thumbnail: string;
        ago: string;
        author: Pick<Author, 'name' | 'url'>;
    }

    interface PlaylistSearchResult {
        type: 'list';
        title: string;
        url: string;
        listId: string;
        videoCountLabel: string;
        videoCount: number;
        image: string;
        /** @deprecated */
        thumbnail: string;
        author: Author;
    }

    interface ChannelSearchResult {
        type: 'channel';
        title: string;
        description: string;
        url: string;
        videoCountLabel: string;
        videoCount: number;
        image: string;
        /** @deprecated */
        thumbnail: string;
        name: string;
        id: string;
    }

    interface SearchResult {
        videos: VideoSearchResult[];
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
        /** @deprecated */
        thumbnail: string;
        author: Author;
    }

    interface PlaylistItem {
        title: string;
        videoId: string;
        listId: string;
        url: string;
        thumbnailUrl: string;
        thumbnailUrlHQ: string;
        owner: string;
        author: PlaylistAuthor;
    }

    interface PlaylistMetadataResult {
        title: string;
        listId: string;
        url: string;
        /** @deprecated */
        videoCount: number;
        views: number;
        date: string;
        image: string;
        /** @deprecated */
        thumbnail: string;
        items: PlaylistItem[];
        videos: PlaylistItem[];
        author: PlaylistAuthor;
    }
}
