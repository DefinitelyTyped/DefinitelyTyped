// Type definitions for bittorrent-protocol 3.1
// Project: https://github.com/webtorrent/bittorrent-protocol
// Definitions by: Feross Aboukhadijeh <https://github.com/feross>,
//                 Tomasz Łaziuk <https://github.com/tlaziuk>,
//                 H1b9b <https://github.com/h1b9b>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as stream from 'stream';

declare const BittorrentProtocol: BittorrentProtocol.BittorrentProtocol;

declare namespace BittorrentProtocol {
    interface BittorrentProtocol {
        new (): Wire;
        (): Wire;
    }

    interface ExtensionConstructor {
        new (wire: Wire): Extension;
    }

    interface Extension {
        onHandshake?(infoHash: string, peerId: string, extensions: { [name: string]: boolean }): void;
        onExtendedHandshake?(handshake: { [key: string]: any }): void;
        onMessage?(buf: Buffer): void;
        name: string;
    }

    interface Request {
        piece: number;
        offset: number;
        length: number;
        callback(): void;
    }

    interface Wire extends stream.Duplex {
        readonly peerId: string; // remote peer id (hex string)
        readonly peerIdBuffer: Buffer; // remote peer id (Buffer)
        readonly type: 'webrtc' | 'tcpIncoming' | 'tcpOutgoing' | 'webSeed'; // connection type
        readonly amChoking: boolean; // are we choking the peer?
        readonly amInterested: boolean; // are we interested in the peer?
        readonly peerChoking: boolean; // is the peer choking us?
        readonly peerInterested: boolean; // is the peer interested in us?
        readonly requests: Request[];
        readonly peerRequests: Request[];
        readonly extendedMapping: { [key: number]: string, };
        readonly peerExtendedMapping: { [key: string]: number, };

        setKeepAlive(enable: boolean): void;

        setTimeout(ms: number, unref?: boolean): void;

        destroy(): void;

        use(ext: ExtensionConstructor): void;

        [key: string]: any;

        handshake(infoHash: string | Buffer, peerId: string | Buffer, extensions?: any): void;

        choke(): void;

        unchoke(): void;

        interested(): void;

        uninterested(): void;

        have(index: number): void;

        // TODO: bitfield can be also a bitfield instance
        bitfield(bitfield: Buffer | any): void;

        request<T extends any>(index: number, offset: number, length: number, cb?: (err: Error) => T): T | void;

        piece(index: number, offset: number, buffer: Buffer): void;

        cancel(index: number, offset: number, length: number): void;

        port(port: number): void;

        extended(ext: number | string, obj: any): void;

        // TODO: bitfield is a bitfield instance
        on(event: 'bitfield', listener: (bitfield: any) => void): this;
        on(event: 'keep-alive' | 'choke' | 'unchoke' | 'interested' | 'uninterested' | 'timeout', listener: () => void): this;
        on(event: 'upload' | 'have' | 'download' | 'port', listener: (length: number) => void): this;
        on(event: 'handshake', listener: (infoHash: string, peerId: string, extensions: Extension[]) => void): this;
        on(event: 'request', listener: (index: number, offset: number, length: number, respond: () => void) => void): this;
        on(event: 'piece', listener: (index: number, offset: number, buffer: Buffer) => void): this;
        on(event: 'cancel', listener: (index: number, offset: number, length: number) => void): this;
        on(event: 'extended', listener: (ext: 'handshake' | string, buf: any) => void): void;
        on(event: 'unknownmessage', listener: (buffer: Buffer) => void): this;
        on(event: string, listener: (...args: any[]) => void): this;
    }
}

export = BittorrentProtocol;
