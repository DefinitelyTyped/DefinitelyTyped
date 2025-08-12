import { BlockHeader } from "./bitcoin";
import { StreamDeserializationContext, StreamSerializationContext } from "./context";

export class VerificationError extends Error {
    name: "VerificationError";
    constructor(message?: string);
}

export abstract class TimeAttestation {
    static deserialize(ctx: StreamDeserializationContext): TimeAttestation;
    serialize(ctx: StreamSerializationContext): void;
    abstract serializePayload(ctx: StreamSerializationContext): void;
    abstract _TAG(): number[];
    compareTo(other: TimeAttestation): number;
}

// @ts-ignore Opentimestamps library extends and change signature of deserialize method
export class UnknownAttestation extends TimeAttestation {
    constructor(tag: number[], payload: number[]);
    _tag: number[];
    payload: number[];
    serializePayload(ctx: StreamSerializationContext): void;
    static deserialize(
        ctxPayload: StreamDeserializationContext,
        tag: number[],
    ): UnknownAttestation;
    _TAG(): number[];
    toString(): string;
    equals(another: UnknownAttestation): boolean;
    compareTo(other: TimeAttestation): number;
}

export class PendingAttestation extends TimeAttestation {
    constructor(uri_: string);
    uri: string;
    static checkUri(uri: number[]): boolean;
    static deserialize(ctxPayload: StreamDeserializationContext): PendingAttestation;
    serializePayload(ctx: StreamSerializationContext): void;
    _TAG(): number[];
    _MAX_URI_LENGTH(): number;
    _ALLOWED_URI_CHARS(): string;
    toString(): string;
    equals(another: PendingAttestation): boolean;
    compareTo(other: TimeAttestation): number;
}

export class BitcoinBlockHeaderAttestation extends TimeAttestation {
    constructor(height_: number);
    height: number;
    static deserialize(ctxPayload: StreamDeserializationContext): BitcoinBlockHeaderAttestation;
    serializePayload(ctx: StreamSerializationContext): void;
    _TAG(): number[];
    toString(): string;
    equals(another: BitcoinBlockHeaderAttestation): boolean;
    compareTo(other: TimeAttestation): number;
    verifyAgainstBlockheader(digest: number[], block: BlockHeader): number;
}
export class LitecoinBlockHeaderAttestation extends TimeAttestation {
    constructor(height_: number);
    height: number;
    static deserialize(ctxPayload: StreamDeserializationContext): LitecoinBlockHeaderAttestation;
    serializePayload(ctx: StreamSerializationContext): void;
    _TAG(): number[];
    toString(): string;
    equals(another: LitecoinBlockHeaderAttestation): boolean;
    compareTo(other: TimeAttestation): number;
    verifyAgainstBlockheader(digest: number[], block: BlockHeader): number;
}
