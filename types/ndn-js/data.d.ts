import { Blob } from "./blob";
import { Name } from "./name";
import { Signature } from "./signature";

export class Data {
    constructor(name?: Name);

    getCongestionMark(): number;
    getContent(): Blob;
    getFullName(): Name;
    getIncomingFaceId(): number;
    getMetaInfo(): MetaInfo;
    getName(): Name;
    getSignature(): Signature;

    setContent(content: Blob): Data;
    setMetaInfo(meta: MetaInfo): Data;
    setName(name: Name): Data;
    setSignature(sig: Signature): Data;

    wireDecode(input: Blob|Buffer): void;
    wireEncode(): Blob;
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

    getFinalBlockId(): Name.Component;
    getFreshnessPeriod(): number;
    getOtherTypeCode(): number;
    getType(): ContentType;

    setFinalBlockId(comp: Name.Component): void;
    setFreshnessPeriod(freshness: number): void;
    setOtherTypeCode(otherTypeCode: number): void;
    setType(type: ContentType): void;
}
