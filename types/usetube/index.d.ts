// Type definitions for usetube 2.1
// Project: https://github.com/valerebron/usetube
// Definitions by: Ezell Frazier <https://github.com/lynellf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface YouTubeResults {
    videos: Video[];
    didyoumean: string;
    token: string;
    apikey: string;
}

export interface Video {
    id: string;
    original_title: string;
    title: string;
    artist: string;
    duration: number;
    publishedAt: string;
}

export interface VideoDesc {
    text: string;
    navigationEndpoint?: NavigationEndpoint;
}

export interface NavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata;
    urlEndpoint: URLEndpoint;
}

export interface CommandMetadata {
    webCommandMetadata: WebCommandMetadata;
}

export interface WebCommandMetadata {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface URLEndpoint {
    url: string;
    target?: string;
    nofollow: boolean;
}

export interface ChannelResults {
    channels: Channel[];
    didyoumean: string;
    token: string;
    apikey: string;
}

export interface Channel {
    name: string;
    channel_id: string;
    nb_videos: number;
    nb_subscriber: number;
    official: boolean;
    channel_avatar_small: string;
    channel_avatar_medium: string;
    channel_avatar_large: string;
}

export function searchVideo(terms: string): Promise<YouTubeResults>;
export function getVideoDesc(video_id: string): Promise<VideoDesc>;
export function getChannelVideos(channel_id: string): Promise<Video[]>;
export function getChannelDesc(channel_id: string): Promise<string>;
export function getPlaylistVideos(playlist_id: string): Promise<Video[]>;
export function getVideoDate(video_id: string): Promise<string>;
export function searchChannel(terms: string): Promise<ChannelResults>;
