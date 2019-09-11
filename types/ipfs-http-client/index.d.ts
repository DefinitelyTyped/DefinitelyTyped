// Type definitions for ipfs-http-client 35.1
// Project: https://github.com/ipfs/js-ipfs-http-client
// Definitions by: Henrique Barcelos <https://github.com/hbarcelos> and Victor Santana <https://github.com/victorSantana09>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { IpfsPath, ReadableStream, CID } from './common';
import * as _ipfs from './regular-files-api';
import * as refs from './refs-api';
import * as files from './mfs-api';
import * as block from './block-api';
import * as dag from './dag-api';
import * as _object from './object-api';
import * as pin from './pin-api';

export interface MinimalOptions {
    protocol: string;
    'api-path': string;
    headers: {
        [key: string]: string;
    };
}

export interface Options extends MinimalOptions {
    host: string;
    port: string;
}

declare function ipfs(): IpfsClient;
declare function ipfs(multiaddr: string): IpfsClient;
declare function ipfs(host: string, port: string, opts?: Partial<MinimalOptions>): IpfsClient;
declare function ipfs(opts?: Partial<Options>): IpfsClient;

export default ipfs;

export { _ipfs as ipfs, refs, files, block, dag, _object as object, pin };

export interface IpfsClient extends _ipfs.RegularFiles {
    refsReadableStream(ipfsPath: IpfsPath, options?: Partial<refs.RefOptions>): ReadableStream;

    localReadableStream(ipfsPath: IpfsPath, options?: Partial<refs.RefOptions>): ReadableStream;

    files: files.Mfs;
    block: block.Block;
    refs: refs.Refs;
    dag: dag.Dag;
    object: _object._Object;
    pin: pin.Pin;

    /**
     * TODO: find/create proper typings for pull-stream package
     */
    addPullStream(options?: Partial<_ipfs.AddStreamOptions>): unknown;
    catPullStream(ipfsPath: IpfsPath, options?: Partial<_ipfs.CatOptions>): unknown;
    getPullStream(ipfsPath: IpfsPath): unknown;
    lsPullStream(ipfsPath: IpfsPath): unknown;
    refsPullStream(ipfsPath: IpfsPath, options?: Partial<refs.RefOptions>): unknown;
    localPullStream(): unknown;
}
