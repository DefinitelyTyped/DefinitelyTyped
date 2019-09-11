import CIDBase from 'cids';

export type CID = CIDBase.SerlializedCID;

export { Readable as ReadableStream } from 'stream';

export interface NodeCallback<T, E = Error> {
    (err: E, res: T): void;
}

export type EntryType = 'file' | 'directory';

export type IpfsPath = CID | Buffer | string;

export type MultiHash = Buffer | string;

