// Type definitions for is-ipfs 0.6
// Project: https://github.com/ipfs/is-ipfs
// Definitions by: Henrique Barcelos <https://github.com/hbarcelos> and Victor Santana <https://github.com/victorSantana09>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import CID = require('cids');
import Multiaddr = require('multiaddr');

export = isIPFS;

declare namespace isIPFS {
    function multihash(hash: string): boolean;
    function cid(hash: string | CID): boolean;
    function base32Cid(hash: string): boolean;
    function url(url: string): boolean;
    function ipfsUrl(url: string): boolean;
    function ipnsUrl(url: string): boolean;
    function path(path: string): boolean;
    function urlOrPath(path: string): boolean;
    function ipfsPath(path: string): boolean;
    function ipnsPath(path: string): boolean;
    function cidPath(path: string): boolean;
    function subdomain(url: string): boolean;
    function ipfsSubdomain(url: string): boolean;
    function ipnsSubdomain(url: string): boolean;
    function multiaddr(addr: string | Buffer | Multiaddr): boolean;
    function peerMultiaddr(addr: string | Buffer | Multiaddr): boolean;
}
