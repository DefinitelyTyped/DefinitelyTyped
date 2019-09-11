import { CID } from './js-cid';
import { IpfsPath, NodeCallback } from './common.d';

interface BlockData {
    data: Buffer;
    cid: CID;
}

export type PutContent = Buffer | Block;

export interface PutOptions {
    cid: IpfsPath;
    format: string;
    mhtype: string;
    mhlen: number;
    version: number;
}

export interface StatResult {
    key: string;
    size: number;
}

export interface Block {
    get(cid: IpfsPath, options?: {}): Promise<BlockData>;
    get(cid: IpfsPath, callback: NodeCallback<BlockData>): void;
    get(cid: IpfsPath, options: {}, callback: NodeCallback<BlockData>): void;

    put(block: PutContent, options?: Partial<PutOptions>): Promise<BlockData>;
    put(block: PutContent, callback: NodeCallback<BlockData>): void;
    put(block: PutContent, options: Partial<PutOptions>, callback: NodeCallback<BlockData>): void;

    stat(cid: IpfsPath): Promise<StatResult>;
    stat(cid: IpfsPath, callback: NodeCallback<StatResult>): void;
}
