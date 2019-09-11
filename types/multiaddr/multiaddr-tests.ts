import Multiaddr = require('./index');

const multiaddr = new Multiaddr('/ip4/127.0.0.1/tcp/80')
multiaddr.buffer;

const str = multiaddr.toString();

const nodeAddr = multiaddr.nodeAddress();
const address: string = nodeAddr.address
const family: string = nodeAddr.family
const port: number = nodeAddr.port

const is: boolean = Multiaddr.isMultiaddr(multiaddr);

