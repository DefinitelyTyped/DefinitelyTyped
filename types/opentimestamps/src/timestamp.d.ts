import { StreamDeserializationContext, StreamSerializationContext } from "./context";
import { TimeAttestation } from "./notary";
import { Op } from "./ops";

declare class Timestamp {
    constructor(msg: number[]);
    msg: number[];
    attestations: TimeAttestation[];
    ops: Map<Op, Timestamp>;
    getDigest(): number[];
    static deserialize(ctx: StreamDeserializationContext, initialMsg: number[]): Timestamp;
    serialize(ctx: StreamSerializationContext): void;
    merge(other: Timestamp): void;
    allAttestations(): Map<number[], TimeAttestation>;
    toString(indent?: number): string;
    toJson(fork?: number): any;
    static indention(pos: number): string;
    strTree(indent?: number, verbosity?: number): string;
    directlyVerified(): Timestamp[];
    getAttestations(): Set<TimeAttestation>;
    isTimestampComplete(): boolean;
    equals(another: Timestamp): boolean;
    add(op: Op): Timestamp;
    allTips(): Set<number[]>;
}
export = Timestamp;
