// Type definitions for fbdl-core 1.0
// Project: https://github.com/Snowflake107/fbdl-core#readme
// Definitions by: 1chiSensei <https://github.com/1chiSensei>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Readable } from 'stream';

export interface Response {
    name: string;
    title: string;
    description: string;
    rawVideo: string;
    thumbnail: string;
    uploadedAt: Date;
    duration: string;
    interactionCount: number;
    streamURL: string;
    publishedAt: Date;
    width: number;
    height: number;
    nsfw: boolean;
    genre: string;
    keywords: any[];
    comments: number;
    size: string;
    quality: string;
    author: {
        type: string;
        name: string;
        url: string;
    };
    publisher: {
        type: string;
        name: string;
        url: string;
        avatar: string;
    };
    url: string;
    reactions: {
        total: number;
        like: number;
        love: number;
        care: number;
        wow: number;
        haha: number;
        sad: number;
        angry: number;
    };
    shares: string;
    views: string;
}

/**
 * Validates facebook url
 */
export function validateURL(url: string): boolean;

/**
 * Downloads facebook video
 */
export function download(url: string): Promise<Readable>;

/**
 * Fetches facebook video info
 */
export function getInfo(url: string): Promise<Response | null>;

/**
 * Parses time in ms
 */
export function parseTime(duration: string): string;
