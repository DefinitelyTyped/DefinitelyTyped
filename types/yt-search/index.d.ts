// Type definitions for yt-search 1.1
// Project: https://github.com/talmobi/yt-search#readme
// Definitions by: cherryblossom <https://github.com/cherryblossom000>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.5

export = search;

declare function search(query: string | search.Options, callback: (err: Error, data: search.SearchResult) => void): void;
declare function search(query: string | search.Options): Promise<search.SearchResult>;

declare function search(query: search.VideoMetadataOptions, callback: (err: Error, data: search.VideoMetadataResult) => void): void;
declare function search(query: search.VideoMetadataOptions): Promise<search.VideoMetadataResult>;

declare function search(query: search.PlaylistMetadataOptions, callback: (err: Error, data: search.PlaylistMetadataResult) => void): void;
declare function search(query: search.PlaylistMetadataOptions): Promise<search.PlaylistMetadataResult>;

declare namespace search {
    interface BaseOptions {
        pageStart?: number;
        pageEnd?: number;
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

    interface VideoSearchResult {
        type: 'video';
        title: string;
        description: string;
        url: string;
        videoId: string;
        seconds: number;
        timestamp: string;
        duration: {
            seconds: number;
            timestamp: string;
        };
        views: number;
        thumbnail: string;
        image: string;
        ago: string;
        author: Author;
    }

    interface PlaylistSearchResult {
        type: 'list';
        title: string;
        url: string;
        listId: string;
        videoCountLabel: string;
        videoCount: number;
        thumbnail: string;
        image: string;
        author: Author;
    }

    interface ChannelSearchResult {
        type: 'channel';
        title: string;
        description: string;
        url: string;
        videoCountLabel: string;
        videoCount: number;
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
        duration: {
            seconds: number;
            timestamp: string;
        };
        views: number;
        genre: string;
        uploadDate: string;
        ago: string;
        thumbnail: string;
        image: string;
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
        videoCount: number;
        views: number;
        lastUpdate: string;
        thumbnail: string;
        items: PlaylistItem[];
        author: PlaylistAuthor;
    }
}
