import { Blob } from "./blob";
import { Name } from "./name";
import { Signature } from "./signature";

export class Data {
    constructor(name?: Name|string);
    constructor(data: Data);

    getName(): Name;
    getFullName(): Name;
    getMetaInfo(): MetaInfo;
    getContent(): Blob;
    getSignature(): Signature;
    getCongestionMark(): number;
    getIncomingFaceId(): number;

    setName(name: Name): Data;
    setMetaInfo(meta: MetaInfo): Data;
    setContent(content: Blob|Buffer): Data;
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

    getType(): ContentType;
    getOtherTypeCode(): number;
    getFreshnessPeriod(): number;
    getFinalBlockId(): Name.Component;

    setType(type: ContentType): void;
    setOtherTypeCode(otherTypeCode: number): void;
    setFreshnessPeriod(freshness: number): void;
    setFinalBlockId(comp: Name.Component): void;
}
