// Type definitions for dns-packet 5.2
// Project: https://github.com/mafintosh/dns-packet
// Definitions by: John Hurliman <https://github.com/jhurliman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * The currently defined set of DNS record types.
 */
export type RecordType =
    | "A"
    | "AAAA"
    | "AFSDB"
    | "APL"
    | "AXFR"
    | "CAA"
    | "CDNSKEY"
    | "CDS"
    | "CERT"
    | "CNAME"
    | "DNAME"
    | "DHCID"
    | "DLV"
    | "DNSKEY"
    | "DS"
    | "HINFO"
    | "HIP"
    | "IXFR"
    | "IPSECKEY"
    | "KEY"
    | "KX"
    | "LOC"
    | "MX"
    | "NAPTR"
    | "NS"
    | "NSEC"
    | "NSEC3"
    | "NSEC3PARAM"
    | "NULL"
    | "OPT"
    | "PTR"
    | "RRSIG"
    | "RP"
    | "SIG"
    | "SOA"
    | "SRV"
    | "SSHFP"
    | "TA"
    | "TKEY"
    | "TLSA"
    | "TSIG"
    | "TXT"
    | "URI";

export type RecordClass = "IN" | "CS" | "CH" | "HS" | "ANY";

export interface Question {
    type: RecordType;
    name: string;
    class?: RecordClass | undefined;
}

export interface SrvData {
    port: number;
    target: string;
    priority?: number | undefined;
    weight?: number | undefined;
}

export interface HInfoData {
    cpu: string;
    os: string;
}

export interface SoaData {
    mname: string;
    rname: string;
    serial?: number | undefined;
    refresh?: number | undefined;
    retry?: number | undefined;
    expire?: number | undefined;
    minimum?: number | undefined;
}

export type TxtData = string | Buffer | Array<string | Buffer>;

export interface CaaData {
    issuerCritical?: boolean | undefined;
    flags?: number | undefined;
    tag: string;
    value: string;
}

export interface MxData {
    preference?: number | undefined;
    exchange: string;
}

export interface BaseAnswer<T, D> {
    type: T;
    name: string;
    ttl?: number | undefined;
    class?: RecordClass | undefined;
    data: D;
}

/**
 * Record types for which the library will provide a string in the data field.
 */
export type StringRecordType = "A" | "AAAA" | "CNAME" | "DNAME" | "NS" | "PTR";

/**
 * Record types for which the library does not attempt to process the data
 * field.
 */
export type OtherRecordType =
    | "AFSDB"
    | "APL"
    | "AXFR"
    | "CDNSKEY"
    | "CDS"
    | "CERT"
    | "DHCID"
    | "DLV"
    | "DNSKEY"
    | "DS"
    | "HIP"
    | "IXFR"
    | "IPSECKEY"
    | "KEY"
    | "KX"
    | "LOC"
    | "NAPTR"
    | "NSEC"
    | "NSEC3"
    | "NSEC3PARAM"
    | "NULL"
    | "OPT"
    | "RRSIG"
    | "RP"
    | "SIG"
    | "SSHFP"
    | "TA"
    | "TKEY"
    | "TLSA"
    | "TSIG"
    | "URI";

export type StringAnswer = BaseAnswer<StringRecordType, string>;
export type SrvAnswer = BaseAnswer<"SRV", SrvData>;
export type HInfoAnswer = BaseAnswer<"HINFO", HInfoData>;
export type SoaAnswer = BaseAnswer<"SOA", SoaData>;
export type TxtAnswer = BaseAnswer<"TXT", TxtData>;
export type CaaAnswer = BaseAnswer<"CAA", CaaData>;
export type MxAnswer = BaseAnswer<"MX", MxData>;
export type BufferAnswer = BaseAnswer<OtherRecordType, Buffer>;

export type Answer =
    | StringAnswer
    | SrvAnswer
    | HInfoAnswer
    | SoaAnswer
    | TxtAnswer
    | CaaAnswer
    | MxAnswer
    | BufferAnswer;

export interface Packet {
    /**
     * Whether the packet is a query or a response. This field may be
     * omitted if it is clear from the context of usage what type of packet
     * it is.
     */
    type?: "query" | "response" | undefined;

    id?: number | undefined;

    /**
     * A bit-mask combination of zero or more of:
     * {@link AUTHORITATIVE_ANSWER},
     * {@link TRUNCATED_RESPONSE},
     * {@link RECURSION_DESIRED},
     * {@link RECURSION_AVAILABLE},
     * {@link AUTHENTIC_DATA},
     * {@link CHECKING_DISABLED}.
     */
    flags?: number | undefined;
    questions?: Question[] | undefined;
    answers?: Answer[] | undefined;
    additionals?: Answer[] | undefined;
    authorities?: Answer[] | undefined;
}

export const AUTHORITATIVE_ANSWER: number;
export const TRUNCATED_RESPONSE: number;
export const RECURSION_DESIRED: number;
export const RECURSION_AVAILABLE: number;
export const AUTHENTIC_DATA: number;
export const CHECKING_DISABLED: number;

export function encode(package: Packet, buf?: Buffer, offset?: number): Buffer;
export function decode(buf: Buffer, offset?: number): Packet;
export function encodingLength(packet: Packet): number;
