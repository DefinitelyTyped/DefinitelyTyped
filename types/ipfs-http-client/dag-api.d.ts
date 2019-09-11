import { IpfsPath, NodeCallback, CID } from './common';

export interface GetResult {
    value: unknown;
    remainderPath: string;
}

export interface GetOptions {
    localResolve: boolean;
}

export type PutOptions =
    | CID
    | {
          format: string;
          hashAlg: string;
      };

export interface Node {}

export interface TreeOptions {
    recursive: true;
}

export interface Dag {
    get(cid: IpfsPath, path?: string): Promise<GetResult>;
    get(cid: IpfsPath, path: string, options?: Partial<GetOptions>): Promise<GetResult>;
    get(cid: IpfsPath, callback: Promise<GetResult>): void;
    get(cid: IpfsPath, path: string, callback: Promise<GetResult>): void;
    get(cid: IpfsPath, options: Partial<GetOptions>, callback: Promise<GetResult>): void;
    get(cid: IpfsPath, path: string, options: Partial<GetOptions>, callback: Promise<GetResult>): void;

    put(dagNode: Node, options?: Partial<PutOptions>): Promise<CID>;
    put(dagNode: Node, callback: NodeCallback<CID>): void;
    put(dagNode: Node, options: Partial<PutOptions>, callback: NodeCallback<CID>): void;

    tree(cid: IpfsPath, path?: string): Promise<string[]>;
    tree(cid: IpfsPath, options?: Partial<TreeOptions>): Promise<string[]>;
    tree(cid: IpfsPath, path: string, options?: Partial<TreeOptions>): Promise<string[]>;
    tree(cid: IpfsPath, callback: NodeCallback<string[]>): void;
    tree(cid: IpfsPath, path: string, callback: NodeCallback<string[]>): void;
    tree(cid: IpfsPath, options: Partial<TreeOptions>, callback: NodeCallback<string[]>): void;
    tree(cid: IpfsPath, path: string, options: Partial<TreeOptions>, callback: NodeCallback<string[]>): void;
}
