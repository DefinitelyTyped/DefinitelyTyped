import { NodeCallback, MultiHash, CID } from './common';

export interface DataOptions {
    enc: string;
}

export interface LinksOptions extends DataOptions {}

export interface DAGLink {
    Name: string;
    Size: number;
    Hash: string;
}

export interface StatOptions {
    timeout: string;
}

export interface StatResult {
    Hash: string;
    NumLinks: number;
    BlockSize: number;
    LinkSize: number;
    DataSize: number;
    CumulativeSize: number;
}

export type Layout = 'unixfs-dir';

export interface DAGNode {
    Data: string | Buffer;
    links: DAGLink[];
}

export type PutObjectContent = DAGNode | Buffer;

export interface PutObjectOptions extends DataOptions {}

export interface GetObjectOptions extends DataOptions {}

export interface PathObjectOptions extends DataOptions {}

export type DAGLinkRm = DAGLink | { name: string };

export interface _Object {
    'new'(template?: Layout): Promise<CID>;
    'new'(callback: NodeCallback<CID>): void;
    'new'(template: Layout, callback: NodeCallback<CID>): void;

    put(obj: PutObjectContent, options?: Partial<PutObjectOptions>): Promise<CID>;
    put(obj: PutObjectContent, callback: NodeCallback<CID>): void;
    put(obj: PutObjectContent, options: Partial<PutObjectOptions>, callback: NodeCallback<CID>): void;

    get(multihash: MultiHash, options?: Partial<GetObjectOptions>): Promise<DAGNode>;
    get(multihash: MultiHash, callback: NodeCallback<DAGNode>): void;
    get(
        multihash: MultiHash,
        options: Partial<GetObjectOptions>,
        callback: NodeCallback<DAGNode>,
    ): void;

    data(multihash: MultiHash, options?: Partial<DataOptions>): Promise<Buffer>;
    data(multihash: MultiHash, callback: NodeCallback<Buffer>): void;
    data(multihash: MultiHash, options: Partial<DataOptions>, callback: NodeCallback<Buffer>): void;

    links(multihash: MultiHash, options?: Partial<LinksOptions>): Promise<DAGLink[]>;
    links(multihash: MultiHash, callback: NodeCallback<DAGLink[]>): void;
    links(
        multihash: MultiHash,
        options: Partial<LinksOptions>,
        callback: NodeCallback<DAGLink[]>,
    ): void;

    stat(multihash: MultiHash, options?: Partial<StatOptions>): Promise<StatResult>;
    stat(multihash: MultiHash, callback: NodeCallback<StatResult>): void;
    stat(
        multihash: MultiHash,
        options: Partial<StatOptions>,
        callback: NodeCallback<StatResult>,
    ): void;

    patch: {
        addLink(
            multihash: MultiHash,
            link: DAGLink,
            options?: Partial<PathObjectOptions>,
        ): Promise<CID>;
        addLink(multihash: MultiHash, link: DAGLink, callback: NodeCallback<CID>): void;
        addLink(
            multihash: MultiHash,
            link: DAGLink,
            options: Partial<PathObjectOptions>,
            callback: NodeCallback<CID>,
        ): void;

        rmLink(
            multihash: MultiHash,
            link: DAGLinkRm,
            options?: Partial<PathObjectOptions>,
        ): Promise<CID>;
        rmLink(multihash: MultiHash, link: DAGLinkRm, callback: NodeCallback<CID>): void;
        rmLink(
            multihash: MultiHash,
            link: DAGLinkRm,
            options: PathObjectOptions,
            callback: NodeCallback<CID>,
        ): void;

        appendData(
            multihash: MultiHash,
            data: Buffer,
            options?: Partial<PathObjectOptions>,
        ): Promise<CID>;
        appendData(multihash: MultiHash, data: Buffer, callback: Promise<CID>): void;
        appendData(
            multihash: MultiHash,
            data: Buffer,
            options: Partial<PathObjectOptions>,
            callback: Promise<CID>,
        ): void;

        setData(multihash: MultiHash, data: Buffer, options?: Partial<PathObjectOptions>): Promise<CID>;
        setData(multihash: MultiHash, data: Buffer, callback: Promise<CID>): void;
        setData(
            multihash: MultiHash,
            data: Buffer,
            options: Partial<PathObjectOptions>,
            callback: Promise<CID>,
        ): void;
    };
}
