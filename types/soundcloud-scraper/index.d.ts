// Type definitions for soundcloud-scraper 5.0
// Project: https://soundcloud-scraper.js.org
// Definitions by: newt! <https://github.com/newtykins>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference lib="dom" />
/// <reference types="cheerio" />

import { RequestOptions, IncomingMessage } from 'http';
import { Options as m3u8Options, Stream as m3u8Stream } from 'm3u8stream';

export type Optional<T> = {
    [P in keyof T]?: T[P];
};

export interface ClientOptions {
    fetchAPIKey?: boolean;
}

export interface CommentAuthor {
    name?: string;
    username?: string;
    url?: string;
}

export interface Comment {
    text: string;
    createdAt: Date;
    author: CommentAuthor;
}

export interface EmbedAuthor {
    name: string;
    url: string;
}

export interface EmbedProvider {
    name: string;
    url: string;
}

export interface BaseUser {
    name: string;
    username: string;
    urn: number;
    verified: boolean;
}

export interface PlaylistAuthor extends BaseUser {
    profile: string;
}

export interface Playlist {
    id: number;
    title: string;
    url: string;
    description: string;
    thumbnail: string;
    author: PlaylistAuthor;
    embedURL: string;
    embed: Embed;
    genre: string;
    trackCount: number;
    tracks: Song[];
}

export interface PlaylistParseOptions {
    fetchEmbed?: boolean;
}

export type SearchResultType = 'track' | 'artist' | 'playlist' | 'unknown';
export type SearchType = 'all' | 'artist' | 'playlist' | 'track';

export interface SearchResult {
    index: number;
    artist: string;
    url: string;
    itemName: string;
    name: string;
    type: SearchResultType;
}

export interface SongAuthor extends BaseUser {
    followers: number;
    following: number;
    avatarURL: string;
    url: string;
}

export interface SongStreams {
    hls: string;
    progressive: string;
}

export interface SongData {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    url: string;
    duration: number;
    playCount: string;
    commentsCount: string;
    likes: string;
    genre: string;
    author: SongAuthor;
    publishedAt: Date;
    embedURL: string;
    embed: Embed;
    track: Optional<SongStreams>;
    trackURL: string;
    streamURL: string;
    comments: Comment[];
}

export interface UserInfo extends BaseUser {
    createdAt: Date;
    avatarURL: string;
    profile: string;
    bannerURL: string;
    followers: number;
    following: number;
    likesCount: number;
    tracksCouint: number;
    tracks: UserTracks[];
    likes: UserLikes[];
}

export interface UserLikesAuthor {
    name?: string;
    username?: string;
    profile?: string;
}

export interface UserLikes {
    title: string;
    url: string;
    publishedAt: Date;
    author: UserLikesAuthor;
}

export interface UserTracks {
    title: string;
    url: string;
    publishedAt: Date;
    genre: string;
    author: string;
    duration: number;
}

export interface SongInfoOptions {
    fetchEmbed?: boolean;
    fetchComments?: boolean;
    fetchStreamURL?: boolean;
    requestOptions?: RequestInit;
}

export class Client {
    constructor(apiKey?: string, options?: ClientOptions);

    options: ClientOptions;

    apiVersion(force?: boolean): Promise<string>;
    createAPIKey(key: string, fetch?: boolean): Promise<void>;
    fetchStreamURL(trackURL: string): Promise<string>;
    getEmbed(embedURL: string): Promise<Embed>;
    getPlaylist(url: string, options?: PlaylistParseOptions): Promise<Playlist>;
    getSongInfo(url: string, options?: SongInfoOptions): Promise<Song>;
    getUser(username: string): Promise<UserInfo>;
    search(query: string, type: SearchType): Promise<SearchResult[]>;
}

export class Downloader {
    constructor();

    downloadHLS(url: string, options?: m3u8Options): Promise<m3u8Stream>;
    downloadProgressive(url: string, options?: RequestOptions): Promise<IncomingMessage>;
}

export class Embed {
    constructor(data: object, embedURL: string);

    author: EmbedAuthor;
    description: string;
    height: number;
    provider: EmbedProvider;
    thumbnailURL: string;
    title: string;
    type: string;
    url: string;
    version: number;
    visualizer: string;
    width: number;

    toHTML(): string;
    toJSON(): object;
    toString(): string;
}

export class Song {
    constructor(data: object);

    readonly age: number;
    author: SongAuthor;
    comments: Comment[];
    commentsCount: number;
    description: string;
    duration: number;
    embed: Embed;
    embedURL: string;
    genre: string;
    id: string;
    likes: number;
    playCount: number;
    publishedAt: Date;
    readonly publishedTimestamp: number;
    streams: SongStreams;
    streamURL: string;
    thumbnail: string;
    title: string;
    trackURL: string;
    url: string;

    downloadHLS(options?: m3u8Options): Promise<m3u8Stream>;
    downloadProgressive(options?: RequestOptions): Promise<IncomingMessage>;
    toJSON(): SongData;
    toString(): string;
}

export namespace Util {
    function fetchSongStreamURL(songURL: string, clientID: string): Promise<string>;
    function keygen(force?: boolean): Promise<string>;
    function last(arr: any[]): void;
    function loadHTML(html: string): cheerio.Root;
    function parseComments(commentSection: string): Comment[];
    function parseDuration(duration: string): number;
    function parseHTML(url: RequestInfo, options?: RequestInit): Promise<string>;
    function request(url: RequestInfo, options?: RequestInit): Promise<Response>;
    function validateURL(url: string, type?: SearchType): boolean;
}
