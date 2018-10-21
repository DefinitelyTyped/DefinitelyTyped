import { Blob, BlobLike } from "./blob";
import { NameCtor, Name } from "./name";
import { Signature } from "./signature";

export class Data {
    constructor(name?: NameCtor, content?: BlobLike);
    constructor(name: NameCtor, metaInfo: MetaInfo, content: Buffer);
    constructor(data: Data);

    // accessors
    getName(): Name;
    setName(name: NameCtor): Data;
    getMetaInfo(): MetaInfo;
    setMetaInfo(meta: MetaInfo): Data;
    getContent(): Blob;
    setContent(content: BlobLike): Data;
    getSignature(): Signature;
    setSignature(sig: Signature): Data;

    // algorithms
    getFullName(): Name;

    // encoding
    wireEncode(): Blob;
    wireDecode(input: BlobLike): void;
}

export enum ContentType {
    BLOB = 0,
    LINK = 1,
    KEY  = 2,
    NACK = 3,
    OTHER_CODE = 0x7fff,
}

export class MetaInfo {
    constructor(meta?: MetaInfo);

    getType(): ContentType;
    setType(type: ContentType|null): void;
    getOtherTypeCode(): number;
    setOtherTypeCode(otherTypeCode: number): void;
    getFreshnessPeriod(): number;
    setFreshnessPeriod(freshness: number): void;
    getFinalBlockId(): Name.Component;
    setFinalBlockId(comp: Name.ComponentCtor): void;
}
