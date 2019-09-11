import { NodeCallback, ReadableStream, EntryType, IpfsPath, CID } from './common';

export interface FileDescriptor {
    path: string;
    content: AddContent;
}

export interface DirectoryItemDescriptor {
    depth: number;
    name: string;
    path: string;
    size: number;
    hash: string;
    type: EntryType;
}

export type AddContent = Buffer | ReadableStream | File | FileDescriptor[];

export interface AddOptions {
    chunker: string;
    cidVersion: number;
    cidBase: string;
    enableShardingExperiment: boolean;
    hashAlg: string;
    onlyHash: boolean;
    pin: boolean;
    progress: (status: number) => void;
    quiet: boolean;
    quieter: boolean;
    rawLeaves: boolean;
    recursive: boolean;
    shardSplitThreshold: number;
    silent: boolean;
    tricke: boolean;
    wrapWithDirectory: boolean;
}

export interface AddResult {
    path: string;
    hash: string;
    size: number;
}

export type AddStreamOptions = Pick<
    AddOptions,
    'cidVersion' | 'progress' | 'hashAlg' | 'wrapWithDirectory' | 'pin'
>;

export interface AddFromFsOptions {
    recursive: boolean;
    ignore: string[];
    hidden: boolean;
}

export interface CatOptions {
    offset: number;
    length: number;
}

export interface RegularFiles {
    add(data: AddContent, options?: Partial<AddOptions>): Promise<AddResult>;
    add(data: AddContent, callback: NodeCallback<AddResult>): void;
    add(data: AddContent, options: Partial<AddOptions>, callback: NodeCallback<AddResult>): void;

    addReadableStream(options?: Partial<AddStreamOptions>): ReadableStream;

    addFromFs(options: Partial<AddFromFsOptions>): Promise<AddResult[]>;
    addFromFs(options: Partial<AddFromFsOptions>, callback: NodeCallback<AddResult[]>): void;

    addFromURL(url: string): Promise<AddResult>;
    addFromURL(url: string, callback: NodeCallback<AddResult>): void;

    addFromStream(stream: ReadableStream): Promise<AddResult>;
    addFromStream(stream: ReadableStream, callback: NodeCallback<AddResult>): void;

    cat(ipfsPath: IpfsPath, options?: Partial<CatOptions>): Promise<Buffer>;
    cat(ipfsPath: IpfsPath, callback: NodeCallback<Buffer>): void;
    cat(ipfsPath: IpfsPath, options: Partial<CatOptions>, callback: NodeCallback<Buffer>): void;

    catReadableStream(ipfsPath: IpfsPath, options?: Partial<CatOptions>): ReadableStream;

    get(ipfsPath: IpfsPath): Promise<FileDescriptor>;
    get(ipfsPath: IpfsPath, callback: NodeCallback<FileDescriptor>): void;

    getReadableStream(ipfsPath: IpfsPath): ReadableStream;

    ls(ipfsPath: IpfsPath): Promise<DirectoryItemDescriptor[]>;
    ls(ipfsPath: IpfsPath, callback: NodeCallback<DirectoryItemDescriptor[]>): void;

    lsReadableStream(ipfsPath: IpfsPath): ReadableStream;

}
