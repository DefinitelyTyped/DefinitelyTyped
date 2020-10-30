import multiaddr, { Code, Size, Protocol, Options, NodeAddress, Protocols } from 'multiaddr';

let udpAddr;

udpAddr = multiaddr('/ip4/127.0.0.1/udp/1234');

// $ExpectType boolean
multiaddr(udpAddr.buffer).buffer === udpAddr.buffer;

// $ExpectType boolean
multiaddr(udpAddr.toString()).buffer === udpAddr.buffer;

// $ExpectType boolean
multiaddr(udpAddr).buffer === udpAddr.buffer;

// $ExpectType boolean
multiaddr(JSON.parse(JSON.stringify(udpAddr))).buffer === udpAddr.buffer;

console.log(multiaddr('').toString());
// '/'

console.log(multiaddr().toString());
// '/'

console.log(multiaddr(null).toString());
// '/'

console.log(multiaddr(undefined).toString());
// '/'

let uTPAddr;

uTPAddr = multiaddr('/ip4/127.0.0.1/udp/1234/utp');

const uTPAddrClone = multiaddr(uTPAddr);

console.log(multiaddr('').toString());
// '/'

const udpAddrStr = '/ip4/127.0.0.1/udp/1234';
const udpAddrBuf = Buffer.from('047f000001910204d2', 'hex');

console.log(udpAddr.toString());

// [4, 273]
udpAddr.protoCodes(); // $ExpectType number[]
// ['ip4', 'udp']
udpAddr.protoNames(); // $ExpectType string[]
// [multiaddr.protocols.codes[4], multiaddr.protocols.codes[273]]
udpAddr.protos(); // $ExpectType Protocol[]
udpAddr.protos()[0]; // $ExpectType Protocol
multiaddr.protocols.codes[4];

const udpAddrBuf2 = udpAddr.encapsulate('/udp/5678');
udpAddrBuf2.toString(); // $ExpectType string

udpAddrBuf2.decapsulate('/udp').toString(); // $ExpectType string
udpAddrBuf2.decapsulate('/ip4').toString(); // '/'

multiaddr('/')
    .encapsulate(udpAddr)
    .toString();
multiaddr('/')
    .decapsulate('/')
    .toString(); // '/'

// IPFS

const ipfsAddr = multiaddr('/ipfs/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSupNKC');
const ip6Addr = multiaddr('/ip6/2001:8a0:7ac5:4201:3ac9:86ff:fe31:7095');
const tcpAddr = multiaddr('/tcp/8000');
const webAddr = multiaddr('/ws');

multiaddr('/')
    .encapsulate(ip6Addr)
    .encapsulate(tcpAddr)
    .encapsulate(webAddr)
    .encapsulate(ipfsAddr)
    .toString();

let str = '/ip4/127.0.0.1';
let addr = multiaddr(str);
addr.buffer;
addr.toString() === str; // $ExpectType boolean

str = '/ip6/2001:8a0:7ac5:4201:3ac9:86ff:fe31:7095';
addr = multiaddr(str);
addr.buffer;
addr.toString() === str; // $ExpectType boolean

multiaddr('/ip4/0.0.0.0/tcp/1234').toOptions(); // $ExpectType Options
multiaddr('/ip4/0.0.0.0/tcp/1234').inspect(); // $ExpectType string
multiaddr('/ip4/0.0.0.0/utp').protos(); // $ExpectType Protocol[]
multiaddr('/ip4/0.0.0.0/utp').tuples(); // $ExpectType [number, Buffer][]
multiaddr('/ip4/0.0.0.0/utp').stringTuples(); // $ExpectType [number, string | number | undefined][]

const relayTCP = multiaddr('/ip4/0.0.0.0/tcp/8080');
const relay = relayTCP.encapsulate('/p2p/QmZR5a9AAXGqQF2ADqoDdGS8zvqv8n3Pag6TDDnTNMcFW6/p2p-circuit');
const target = multiaddr('/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSupNKC');
const original = relay.encapsulate(target);
original.decapsulateCode(421); // $ExpectType Multiaddr

const addr1 = multiaddr('/ip4/192.168.0.1');
const addr2 = multiaddr('/ip4/192.168.0.1');

addr1.equals(addr2); // $ExpectType boolean

multiaddr('/ip4/192.168.0.1/tcp/1234').nodeAddress(); // $ExpectType NodeAddress

// $ExpectType Multiaddr
multiaddr.fromNodeAddress(
    {
        address: '192.168.0.1',
        family: 'IPv4',
        port: '1234',
    },
    'tcp',
);

const families = ['ip4', 'ip6'];
const transports = ['tcp', 'udp'];
const addresses: Map<string, string> = new Map([
    ['ip4', '192.168.0.1'],
    ['ip6', '2001:8a0:7ac5:4201:3ac9:86ff:fe31:7095'],
]);

families.forEach(family => {
    transports.forEach(transport => {
        multiaddr(`/${family}/${addresses.get(family)}/${transport}/1234`);
    });
});

multiaddr('/ip4/192.168.0.1/utp').isThinWaistAddress(); // $ExpectType boolean

// $ExpectType string | null
multiaddr('/p2p-circuit/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSupNKC').getPeerId();

// $ExpectType string | null
multiaddr('/ip4/0.0.0.0/tcp/1234/utp').getPeerId();

// $ExpectType string | null
multiaddr('/unix/tmp/p2p.sock').getPath();

// $ExpectType string | null
multiaddr('/ip4/0.0.0.0/tcp/1234/p2p-circuit/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSupNKC').getPath();

multiaddr.isMultiaddr(multiaddr('/')); // $ExpectType boolean

str = '/dns/ipfs.io';
addr = multiaddr(str);
multiaddr.isName(addr); // $ExpectType boolean
