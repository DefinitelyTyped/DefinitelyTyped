// Type definitions for dns2 1.4
// Project: https://github.com/song940/node-dns#readme
// Definitions by: Tim Perry <https://github.com/pimterry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as net from 'net';
import * as udp from 'dgram';

declare class Packet {
    static TYPE: {
        A: 0x01;
        NS: 0x02;
        MD: 0x03;
        MF: 0x04;
        CNAME: 0x05;
        SOA: 0x06;
        MB: 0x07;
        MG: 0x08;
        MR: 0x09;
        NULL: 0x0a;
        WKS: 0x0b;
        PTR: 0x0c;
        HINFO: 0x0d;
        MINFO: 0x0e;
        MX: 0x0f;
        TXT: 0x10;
        AAAA: 0x1c;
        SRV: 0x21;
        EDNS: 0x29;
        SPF: 0x63;
        AXFR: 0xfc;
        MAILB: 0xfd;
        MAILA: 0xfe;
        ANY: 0xff;
        CAA: 0x101;
    };

    static CLASS: {
        IN: 0x01;
        CS: 0x02;
        CH: 0x03;
        HS: 0x04;
        ANY: 0xff;
    };

    static createResponseFromRequest(request: DNS.DnsRequest): DNS.DnsResponse;

    toBuffer(): Buffer;
}

declare namespace DNS {
    interface DnsRequest {
        header: { id: string };
        questions: DnsQuestion[];
    }

    interface DnsQuestion {
        name: string;
    }

    interface DnsResponse {
        answers: DnsAnswer[];
    }

    interface DnsAnswer {
        name: string;
        type: number;
        class: number;
        ttl: number;
        address: string;
    }
}

declare class DNS {
    static createServer(
        callback: (
            request: DNS.DnsRequest,
            sendResponse: (response: DNS.DnsResponse) => void,
            remoteInfo: udp.RemoteInfo,
        ) => void,
    ): net.Server;

    static Packet: typeof Packet;

    resolveA(domain: string, clientIp?: string): Promise<DNS.DnsResponse>;
    resolveAAAA(domain: string): Promise<DNS.DnsResponse>;
    resolveMX(domain: string): Promise<DNS.DnsResponse>;
    resolveCNAME(domain: string): Promise<DNS.DnsResponse>;
}

export = DNS;
