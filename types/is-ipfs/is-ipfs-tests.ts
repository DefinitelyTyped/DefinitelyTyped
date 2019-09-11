import CID = require('cids');
import Multiaddr = require('multiaddr');
import isIPFS = require('./index');

const isMultihash: boolean = isIPFS.multihash('bar');

let isCid: boolean = isIPFS.cid('fooo');
isCid = isIPFS.cid(new CID('foo'));

const isBase32Cid: boolean = isIPFS.base32Cid('foo');

let isMultiaddr: boolean = isIPFS.multiaddr('foo');
isMultiaddr = isIPFS.multiaddr(Buffer.from('foo'));
isMultiaddr = isIPFS.multiaddr(new Multiaddr(Buffer.from('foo')));

let isPeerMultiaddr: boolean = isIPFS.peerMultiaddr('foo');
isPeerMultiaddr = isIPFS.peerMultiaddr(Buffer.from('foo'));
isPeerMultiaddr = isIPFS.peerMultiaddr(new Multiaddr(Buffer.from('foo')));
