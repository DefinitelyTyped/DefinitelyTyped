// Type definitions for usetube 2.1.4
// Project: https://github.com/valerebron/usetube (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Ezell Frazier <https://github.com/lynellf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface YouTubeResults {
    videos: Video[];
    didyoumean: string;
    token: string;
    apikey: string;
}

interface Video {
    id: string;
    original_title: string;
    title: string;
    artist: string;
    duration: number;
    publishedAt: string;
}

interface VideoDesc {
    text: string;
    navigationEndpoint?: NavigationEndpoint;
}

interface NavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata;
    urlEndpoint: URLEndpoint;
}

interface CommandMetadata {
    webCommandMetadata: WebCommandMetadata;
}

interface WebCommandMetadata {
    url: string;
    webPageType: string;
    rootVe: number;
}

interface URLEndpoint {
    url: string;
    target?: string;
    nofollow: boolean;
}

interface ChannelResults {
    channels: Channel[];
    didyoumean: string;
    token: string;
    apikey: string;
}

interface Channel {
    name: string;
    channel_id: string;
    nb_videos: number;
    nb_subscriber: number;
    official: boolean;
    channel_avatar_small: string;
    channel_avatar_medium: string;
    channel_avatar_large: string;
}

export const searchVideo: (terms: string) => Promise<YouTubeResults>;
export const getVideoDesc: (video_id: string) => Promise<VideoDesc>;
export const getChannelVideos: (channel_id: string) => Promise<Video[]>;
export const getChannelDesc: (channel_id: string) => Promise<string>;
export const getPlaylistVideos: (playlist_id: string) => Promise<Video[]>;
export const getVideoDate: (video_id: string) => Promise<string>;
export const searchChannel: (terms: string) => Promise<ChannelResults>;
