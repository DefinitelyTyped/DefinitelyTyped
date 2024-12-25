import { StreamDeserializationContext, StreamSerializationContext } from "./context";

export class Op {
    _MAX_RESULT_LENGTH(): number;
    _MAX_MSG_LENGTH(): number;
    static deserialize(ctx: StreamDeserializationContext): Op;
    static deserializeFromTag(ctx: StreamDeserializationContext, tag: number): Op;
    serialize(ctx: StreamSerializationContext): void;
    _TAG(): number;
    _TAG_NAME(): string;
    call(msg: number[]): number[];
    equals(another: Op): boolean;
}

export class OpBinary extends Op {
    constructor(arg_?: number[]);
    arg: number[];
    static deserializeFromTag(ctx: StreamDeserializationContext, tag: number): OpBinary;
    serialize(ctx: StreamSerializationContext): void;
    toString(): string;
}

export class OpAppend extends OpBinary {
    _TAG(): number;
    _TAG_NAME(): string;
    call(msg: number[]): number[];
    static deserializeFromTag(ctx: StreamDeserializationContext, tag: number): OpAppend;
    equals(another: Op): boolean;
}

export class OpPrepend extends OpBinary {
    _TAG(): number;
    _TAG_NAME(): string;
    call(msg: number[]): number[];
    static deserializeFromTag(ctx: StreamDeserializationContext, tag: number): OpPrepend;
    equals(another: Op): boolean;
}

export class OpUnary extends Op {
    static deserializeFromTag(ctx: StreamDeserializationContext, tag: number): OpUnary;
    toString(): string;
}

export class OpReverse extends OpUnary {
    _TAG(): number;
    _TAG_NAME(): string;
    call(msg: number[]): number[];
    static deserializeFromTag(ctx: StreamDeserializationContext, tag: number): OpReverse;
    equals(another: Op): boolean;
}

export class OpHexlify extends OpUnary {
    _TAG(): number;
    _TAG_NAME(): string;
    _MAX_MSG_LENGTH(): number;
    // @ts-ignore library override the call method function
    call(msg: number[]): void;
    static deserializeFromTag(ctx: StreamDeserializationContext, tag: number): OpHexlify;
    equals(another: Op): boolean;
}

export abstract class CryptOp extends OpUnary {
    _HASHLIB_NAME(): string;
    _DIGEST_LENGTH(): number;
    call(msg: number[]): number[];
    static deserializeFromTag(ctx: StreamDeserializationContext, tag: number): CryptOp;
    hashFd(ctx: StreamDeserializationContext): number[];
}

export class OpSHA1 extends CryptOp {
    _TAG(): number;
    _TAG_NAME(): string;
    _HASHLIB_NAME(): string;
    _DIGEST_LENGTH(): number;
    static deserializeFromTag(ctx: StreamDeserializationContext, tag: number): OpSHA1;
    call(msg: number[]): number[];
    equals(another: Op): boolean;
}

export class OpRIPEMD160 extends CryptOp {
    _TAG(): number;
    _TAG_NAME(): string;
    _HASHLIB_NAME(): string;
    _DIGEST_LENGTH(): number;
    static deserializeFromTag(ctx: StreamDeserializationContext, tag: number): OpRIPEMD160;
    call(msg: number[]): number[];
    equals(another: Op): boolean;
}

export class OpSHA256 extends CryptOp {
    _TAG(): number;
    _TAG_NAME(): string;
    _HASHLIB_NAME(): string;
    _DIGEST_LENGTH(): number;
    static deserializeFromTag(ctx: StreamDeserializationContext, tag: number): OpSHA256;
    call(msg: number[]): number[];
    equals(another: Op): boolean;
}
