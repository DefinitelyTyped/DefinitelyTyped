import type { Instance as MagnetUriInstance } from "magnet-uri";

export interface ParsedFile {
    path: string;
    name: string;
    length: number;
    offset: number;
}

export interface Instance extends MagnetUriInstance {
    info?: any;
    infoBuffer?: Uint8Array;
    infoHash: string;
    infoHashBuffer?: Uint8Array;
    name?: string;
    private?: boolean;
    created?: Date;
    createdBy?: string;
    comment?: string;
    announce: string[];
    urlList?: string[];
    files?: ParsedFile[];
    length?: number;
    pieceLength?: number;
    lastPieceLength?: number;
    pieces?: string[];
}

export type TorrentId = string | Uint8Array | Instance;

/**
 * Parse a torrent identifier (magnet uri, .torrent file, info hash)
 */
export default function parseTorrent(torrentId: TorrentId): Promise<Instance>;

/**
 * Parse a torrent from a remote source (URL, Blob, or filesystem path)
 */
export function remote(
    torrentId: string | Uint8Array | Instance | Blob,
    opts: RequestInit,
    cb: (err: Error | null, torrent?: Instance) => void,
): void;
export function remote(
    torrentId: string | Uint8Array | Instance | Blob,
    cb: (err: Error | null, torrent?: Instance) => void,
): void;

/**
 * Convert a parsed torrent object back into a .torrent file buffer
 */
export function toTorrentFile(parsed: Instance): Uint8Array;

/**
 * Convert a parsed torrent object into a magnet URI string
 */
export function toMagnetURI(parsed: MagnetUriInstance): string;
