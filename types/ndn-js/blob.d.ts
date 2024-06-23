export class Blob {
    constructor(value?: Blob);
    constructor(value: Buffer, copy?: boolean);
    constructor(value: readonly number[] | string);

    buf(): Buffer;
    equals(other: Blob): boolean;
    isNull(): boolean;
    size(): number;
}

export class SignedBlob extends Blob {
    constructor();
    constructor(
        value: Blob | Buffer | readonly number[],
        signedPortionBeginOffset: number,
        signedPortionEndOffset: number,
    );

    getSignedPortionBeginOffset(): number;
    getSignedPortionEndOffset(): number;
    signedBuf(): Buffer;
    signedSize(): number;
}
