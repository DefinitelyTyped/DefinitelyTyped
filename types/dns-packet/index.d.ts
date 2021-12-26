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

export interface GenericAnswer<T> {
    type: T;
    name: string;
}

export interface BaseAnswer<T, D> extends GenericAnswer<T> {
    ttl?: number | undefined;
    class?: RecordClass | undefined;
    flush?: boolean | undefined;
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

interface OptCodes {
    "OPTION_0": 0;
    "LLQ": 1;
    "UL": 2;
    "NSID": 3;
    "OPTION_4": 4;
    "DAU": 5;
    "DHU": 6;
    "N3U": 7;
    "CLIENT_SUBNET": 8;
    "EXPIRE": 9;
    "COOKIE": 10;
    "TCP_KEEPALIVE": 11;
    "PADDING": 12;
    "CHAIN": 13;
    "KEY_TAG": 14;
    "DEVICEID": 26946;
    "OPTION_65535": 65535;
}

type OptCodeType = keyof OptCodes;
type OptCode<K extends OptCodeType> = OptCodes[K];

interface GenericOpt<T extends OptCodeType> {
    code: OptCode<T>;
    type?: T | undefined;
    data?: Buffer | undefined;
}

interface ClientSubnetOpt extends GenericOpt<"CLIENT_SUBNET"> {
    family?: number | undefined;
    sourcePrefixLength?: number | undefined;
    scopePrefixLength?: number | undefined;
    ip: string | undefined;
}

interface KeepAliveOpt extends GenericOpt<"TCP_KEEPALIVE"> {
    timeout?: number | undefined;
}

interface PaddingOpt extends GenericOpt<"PADDING"> {
    length?: number | undefined;
}

interface TagOpt extends GenericOpt<"KEY_TAG"> {
    tags: number[];
}

export type PacketOpt = ClientSubnetOpt | KeepAliveOpt | PaddingOpt | TagOpt;

export interface OptAnswer extends GenericAnswer<"OPT"> {
    udpPayloadSize: number;
    extendedRcode: number;
    ednsVersion: number;
    flags: number;

    /**
     * Whether or not the DNS DO bit is set
     */
    flag_do: boolean;

    options: PacketOpt[];
}

export type Answer =
    | StringAnswer
    | SrvAnswer
    | HInfoAnswer
    | SoaAnswer
    | TxtAnswer
    | CaaAnswer
    | MxAnswer
    | BufferAnswer
    | OptAnswer;

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
export namespace encode {
    let bytes: number;
}
export function decode(buf: Buffer, offset?: number): Packet;
export namespace decode {
    let bytes: number;
}
export function encodingLength(packet: Packet): number;
export function streamEncode(package: Packet): Buffer;
export namespace streamEncode {
    let bytes: number;
}
export function streamDecode(package: Buffer): Packet;
export namespace streamDecode {
    let bytes: number;
}

export {};
