import { Blob, BlobLike } from "./blob";

export namespace Name {
    type ComponentCtor = string|number[]|ArrayBuffer|Buffer;
    type CompareResult = -1|0|1;

    enum ComponentType {
        IMPLICIT_SHA256_DIGEST = 1,
        PARAMETERS_SHA256_DIGEST = 2,
        GENERIC = 8,
        OTHER_CODE = 0x7fff,
    }

    class Component {
        constructor();
        constructor(comp: Component);
        constructor(value: ComponentCtor, type?: ComponentType);
        constructor(value: ComponentCtor, type: ComponentType.OTHER_CODE, otherTypeCode: number);

        // accessors
        getType(): ComponentType;
        getOtherTypeCode(): number;
        getValue(): Blob;
        toEscapedString(): string;

        // algorithms
        getSuccessor(): Component;
        equals(other: Component): boolean;
        compare(other: Component): CompareResult;

        // digest types
        isImplicitSha256Digest(): boolean;
        isParametersSha256Digest(): boolean;
        static fromImplicitSha256Digest(digest: BlobLike): Component;
        static fromParametersSha256Digest(digest: BlobLike): Component;

        // naming conventions
        isSegment(): boolean;
        isSegmentOffset(): boolean;
        isVersion(): boolean;
        isTimestamp(): boolean;
        isSequenceNumber(): boolean;
        isGeneric(): boolean;
        toNumber(): number;
        toNumberWithMarker(marker: number): number;
        toSegment(): number;
        toSegmentOffset(): number;
        toVersion(): number;
        toTimestamp(): number;
        toSequenceNumber(): number;
        static fromNumber(number: number, type?: ComponentType): Component;
        static fromNumber(number: number, type: ComponentType.OTHER_CODE, otherTypeCode: number): Component;
        static fromNumberWithMarker(number: number, marker: number): Component;
        static fromSegment(segment: number): Component;
        static fromSegmentOffset(segmentOffset: number): Component;
        static fromVersion(version: number): Component;
        static fromTimestamp(timestamp: number): Component;
        static fromSequenceNumber(sequenceNumber: number): Component;
    }
}

export type NameCtor = string|Name;

export class Name {
    constructor(name?: NameCtor);
    constructor(components: Array<Name.ComponentCtor|Name>);

    // accessors
    set(uri: string): void;
    clear(): void;
    getSubName(iStartComponent: number, nComponents?: number): Name;
    getPrefix(nComponents: number): Name;
    size(): number;
    get(i: number): Name.Component;

    // append
    append(component: Name.Component): Name;
    append(component: Name): Name;
    append(value: Name.ComponentCtor, type?: Name.ComponentType): Name;
    append(value: Name.ComponentCtor, type: Name.ComponentType.OTHER_CODE, otherTypeCode: number): Name;
    appendSegment(segment: number): Name;
    appendSegmentOffset(segmentOffset: number): Name;
    appendVersion(version: number): Name;
    appendTimestamp(timestamp: number): Name;
    appendSequenceNumber(sequenceNumber: number): Name;
    appendImplicitSha256Digest(digest: BlobLike): Name;
    appendParametersSha256Digest(digest: BlobLike): Name;

    // algorithms
    compare(other: Name): Name.CompareResult;
    compare(iStartComponent: number, nComponents: number, other: Name,
            iOtherStartComponent?: number, nOtherComponents?: number): Name.CompareResult;
    equals(other: Name): boolean;
    getSuccessor(): Name;
    match(name: Name): boolean;
    isPrefixOf(name: Name): boolean;

    // encoding
    wireEncode(): Blob;
    wireDecode(input: BlobLike): void;
    toUri(includeScheme?: boolean): string;
    static fromEscapedString(uri: string): Name;
}
