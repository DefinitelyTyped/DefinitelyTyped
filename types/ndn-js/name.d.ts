import { Blob } from "./blob";

export enum ComponentType {
    IMPLICIT_SHA256_DIGEST = 1,
    PARAMETERS_SHA256_DIGEST = 2,
    GENERIC = 8,
    OTHER_CODE = 0x7fff,
}

export type CompareResult = -1|0|1;

export namespace Name {
    class Component {
        constructor(value?: ReadonlyArray<number>|ArrayBuffer|Uint8Array|string|Blob, type?: ComponentType, otherTypeCode?: number);
        constructor(component: Component);

        compare(other: Component): CompareResult;
        equals(other: Component): boolean;
        static fromImplicitSha256Digest(digest: Blob): Component;
        static fromParametersSha256Digest(digest: Blob): Component;
        getOtherTypeCode(): number;
        getSuccessor(): Component;
        getType(): ComponentType;
        getValue(): Blob;
        isGeneric(): boolean;
        isImplicitSha256Digest(): boolean;
        isParametersSha256Digest(): boolean;
        toEscapedString(): string;

        static fromNumber(number: number, type?: ComponentType, otherTypeCode?: number): Component;
        static fromNumberWithMarker(number: number, marker: number): Component;
        static fromSegment(segment: number): Component;
        static fromSegmentOffset(segmentOffset: number): Component;
        static fromSequenceNumber(sequenceNumber: number): Component;
        static fromTimestamp(timestamp: number): Component;
        static fromVersion(version: number): Component;

        isSegment(): boolean;
        isSegmentOffset(): boolean;
        isSequenceNumber(): boolean;
        isTimestamp(): boolean;
        isVersion(): boolean;

        toNumber(): number;
        toNumberWithMarker(marker: number): number;
        toSegment(): number;
        toSegmentOffset(): number;
        toSequenceNumber(): number;
        toTimestamp(): number;
        toVersion(): number;
    }
}

export class Name {
    constructor(components?: ReadonlyArray<Name.Component|Uint8Array>);
    constructor(name: Name|string);

    append(value: ReadonlyArray<number>|ArrayBuffer|Uint8Array|string|Blob, type?: ComponentType, otherTypeCode?: number): Name;
    append(components: Name.Component|Name): Name;
    appendImplicitSha256Digest(digest: Blob): Name;
    appendParametersSha256Digest(digest: Blob): Name;
    appendSegment(segment: number): Name;
    appendSegmentOffset(segmentOffset: number): Name;
    appendSequenceNumber(sequenceNumber: number): Name;
    appendTimestamp(timestamp: number): Name;
    appendVersion(version: number): Name;

    clear(): void;

    compare(other: Name): CompareResult;
    compare(iStartComponent: number, nComponents: number, other: Name,
            iOtherStartComponent?: number, nOtherComponents?: number): CompareResult;

    equals(other: Name): boolean;
    static fromEscapedString(uri: string): Name;
    get(i: number): Name.Component;
    getPrefix(nComponents: number): Name;
    getSubName(iStartComponent: number, nComponents?: number): Name;
    getSuccessor(): Name;
    match(name: Name): boolean;
    set(uri: string): void;
    size(): number;
    toUri(includeScheme?: boolean): string;

    wireDecode(input: Blob|Buffer): void;
    wireEncode(): Blob;
}
