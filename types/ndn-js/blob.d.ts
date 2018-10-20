export type BlobLike = Blob|Buffer;

export class Blob {
    constructor(value?: Blob);
    constructor(value: Buffer, copy?: boolean);
    constructor(value: number[]);
    constructor(value: string);

    size(): number;
    buf(): Buffer;
    isNull(): boolean;
    toHex(): string;
    toString(): string;
    equals(other: Blob): boolean;
}

export class SignedBlob extends Blob {
    constructor();
    constructor(value: Blob|Buffer|number[], signedPortionBeginOffset: number, signedPortionEndOffset: number);

    signedSize(): number;
    signedBuf(): Buffer;
    getSignedPortionBeginOffset(): number;
    getSignedPortionEndOffset(): number;
}
