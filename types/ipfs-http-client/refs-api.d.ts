import { IpfsPath, NodeCallback } from './common.d';

export enum RefFormat {
    src = '<src>',
    dest = '<dst>',
    linkname = '<linkname>',
}

export interface RefOptions {
    recursive: boolean;
    unique: boolean;
    format: RefFormat;
    edges: boolean;
    maxDepth: number;
}

export interface RefResult {
    ref: string;
    error: string;
}

export interface Refs {
    (path: IpfsPath, options?: Partial<RefOptions>): Promise<RefResult>;
    (path: IpfsPath, callback: NodeCallback<RefResult>): void;
    (path: IpfsPath, options: Partial<RefOptions>, callback: NodeCallback<RefResult>): void;

    local(): Promise<RefResult>;
    local(callback: NodeCallback<RefResult>): void;
}
