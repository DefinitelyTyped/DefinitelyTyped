// Type definitions for @parcel/watcher 2.0
// Project: https://github.com/parcel-bundler/watcher#readme
// Definitions by: Matt Kane <https://github.com/ascorbic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node"/>

export class ParcelWatcherSubscription {
    unsubscribe(): Promise<void>;
}

export type ParcelWatcherEventType = 'create' | 'update' | 'delete';

export interface ParcelWatcherEvent {
    type: ParcelWatcherEventType;
    path: string;
}

export type ParcelWatcherBackend = 'fs-events' | 'watchman' | 'inotify' | 'windows' | 'brute-force';

export interface ParcelWatcherOptions {
    ignore?: string[];
    backend?: ParcelWatcherBackend;
}

export type ParcelWatcherCallback = (error?: Error, events?: ParcelWatcherEvent[]) => any;

export function getEventsSince(
    dirPath: string,
    snapshotPath: string,
    options?: ParcelWatcherOptions,
): Promise<ParcelWatcherEvent[]>;

export function subscribe(
    dirPath: string,
    callback: ParcelWatcherCallback,
    options?: ParcelWatcherOptions,
): Promise<ParcelWatcherSubscription>;

export function unsubscribe(
    dirPath: string,
    callback: ParcelWatcherCallback,
    options?: ParcelWatcherOptions,
): Promise<void>;

export function writeSnapshot(dirPath: string, snapshotPath: string, options?: ParcelWatcherOptions): Promise<void>;
