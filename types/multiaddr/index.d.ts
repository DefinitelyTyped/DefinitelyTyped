// Type definitions for Multiaddr 7.1
// Project: https://github.com/multiformats/js-Multiaddr
// Definitions by: Henrique Barcelos <https://github.com/hbarcelos> and Victor Santana <https://github.com/victorSantana09>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Multiaddr;

declare class Multiaddr {
    constructor(addr: string | Buffer | Multiaddr);

    static fromNodeAddress(addr: string, transport: string): Multiaddr | never;
    static isMultiaddr(obj: any): boolean;
    static isName(addr: Multiaddr): boolean;
    static resolve(addr: Multiaddr): Multiaddr[];

    buffer: Buffer;

    toString(): string;
    toJSON(): string;
    toOptions(): Multiaddr.Options;
    inspect(): string;
    protos(): Multiaddr.protocols.ProtocolInfo[];
    protoCodes(): number[];
    protoNames(): string[];
    tuples(): [number, Buffer][];
    stringTuples(): [number, string | number][];
    encapsulate(addr: Multiaddr): Multiaddr;
    decapsulate(addr: Multiaddr): Multiaddr;
    decapsulateCode(code: Multiaddr.protocols.Code): Multiaddr;
    getPeerId(): string | null;
    getPath(): string | null;
    equals(addr: Multiaddr): boolean;
    nodeAddress(): Multiaddr.NodeAddress;
    isThinWaistAddress(addr?: Multiaddr): boolean;
}

declare namespace Multiaddr {
    interface Options {
        family: string;
        host: string;
        transport: string;
        port: number;
    }

    interface NodeAddress {
        family: string;
        address: string;
        port: number;
    }

    namespace protocols {
        interface ProtocolInfo {
            code: any;
            name: any;
            size: any;
        }

        type Code = keyof typeof codes;

        const V: number;
        const codes: {
            '132': ProtocolInfo;
            '273': ProtocolInfo;
            '275': ProtocolInfo;
            '276': ProtocolInfo;
            '277': ProtocolInfo;
            '290': ProtocolInfo;
            '301': ProtocolInfo;
            '302': ProtocolInfo;
            '33': ProtocolInfo;
            '4': ProtocolInfo;
            '400': ProtocolInfo;
            '41': ProtocolInfo;
            '42': ProtocolInfo;
            '421': ProtocolInfo;
            '443': ProtocolInfo;
            '444': ProtocolInfo;
            '445': ProtocolInfo;
            '446': ProtocolInfo;
            '460': ProtocolInfo;
            '477': ProtocolInfo;
            '478': ProtocolInfo;
            '479': ProtocolInfo;
            '480': ProtocolInfo;
            '53': ProtocolInfo;
            '54': ProtocolInfo;
            '55': ProtocolInfo;
            '56': ProtocolInfo;
            '6': ProtocolInfo;
        };

        const names: {
            dccp: ProtocolInfo;
            dns: ProtocolInfo;
            dns4: ProtocolInfo;
            dns6: ProtocolInfo;
            dnsaddr: ProtocolInfo;
            garlic64: ProtocolInfo;
            http: ProtocolInfo;
            https: ProtocolInfo;
            ip4: ProtocolInfo;
            ip6: ProtocolInfo;
            ip6zone: ProtocolInfo;
            ipfs: ProtocolInfo;
            onion: ProtocolInfo;
            onion3: ProtocolInfo;
            p2p: ProtocolInfo;
            'p2p-circuit': ProtocolInfo;
            'p2p-stardust': ProtocolInfo;
            'p2p-webrtc-direct': ProtocolInfo;
            'p2p-webrtc-star': ProtocolInfo;
            'p2p-websocket-star': ProtocolInfo;
            quic: ProtocolInfo;
            sctp: ProtocolInfo;
            tcp: ProtocolInfo;
            udp: ProtocolInfo;
            udt: ProtocolInfo;
            unix: ProtocolInfo;
            utp: ProtocolInfo;
            ws: ProtocolInfo;
            wss: ProtocolInfo;
        };

        const table: ProtocolInfo[];
    }
}
