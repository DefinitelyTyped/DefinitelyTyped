/// <reference types="node" />
import type { Readable as ReadableStream } from "node:stream"


export type CreateTorrentCallback = (err: Error | null, torrent?: Buffer) => void

export interface CreateTorrentOptions {
    name?: string
    creationDate?: number | Date
    comment?: string
    createdBy?: string
    private?: boolean | number
    pieceLength?: number
    maxPieceLength?: number
    announceList?: string[][]
    urlList?: string[]
    info?: Record<string, unknown>
    onProgress?: (hashedLength: number, estimatedTorrentLength: number) => void
}

export type TorrentInput = string | File | FileList | Buffer | ReadableStream | string[] | File[] | Buffer[]

declare function createTorrent(input: TorrentInput, opts: CreateTorrentOptions, cb: CreateTorrentCallback): void
declare function createTorrent(input: TorrentInput, cb: CreateTorrentCallback): void

declare const announceList: string[][]
declare function isJunkPath(path: string): boolean

export default createTorrent
export { announceList, isJunkPath }
