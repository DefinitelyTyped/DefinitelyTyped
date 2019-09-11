// Type definitions for peer-id 0.13
// Project: https://github.com/libp2p/js-peer-id
// Definitions by: Henrique Barcelos <https://github.com/hbarcelos> and Victor Santana <https://github.com/victorSantana09>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = PeerId;

declare class PeerId {
    static isPeerId(obj: any): boolean;

    /**
     * TODO: find/create typings for [libp2p-crypto](https://github.com/libp2p/js-libp2p-crypto)
     *       The types for privKey and publicKey are defined there
     */
    constructor(id: Buffer, privKey?: any, publicKey?: any);

    readonly id: Buffer;
    privKey: any;
    publicKey: any;

    toHexString(): string;
    toBytes(): Buffer;
    toB58String(): string;
    toJSON(): PeerId.SerializedPeerId;
    marshal(excludePrivateKey: boolean): Buffer;
    marshalPubKey(): string | undefined;
    marshalPrivKey(): string | undefined;
    toPrint(): string;
    isEqual(other: PeerId | Buffer): boolean;
}

declare namespace PeerId {
    interface CreateOptions {
        bits: number;
        keyType: string;
    }

    interface SerializedPeerId {
        id: string;
        pubKey: string;
        privKey: string;
    }

    function create(opts?: Partial<CreateOptions>): Promise<PeerId>;
    function createFromHexString(str: string): PeerId;
    function createFromBytes(buf: Buffer): PeerId;
    function createFromB58String(str: string): PeerId;
    function createFromPubKey(pubKey: Buffer): Promise<PeerId>;
    function createFromPrivKey(privKey: Buffer): Promise<PeerId>;
    function createFromJSON(obj: SerializedPeerId): Promise<PeerId>;
    function createFromProtobuf(buf: string | Buffer): Promise<Buffer>;
}
