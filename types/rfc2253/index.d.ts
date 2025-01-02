/// <reference types="node" />

export class DistinguishedName {
    constructor(rdns?: ReadonlyArray<RelativeDistinguishedName>);
    has(key: number | Buffer | string): boolean;
    get(key: number | Buffer | string): RelativeDistinguishedName;
    getAll(key: number | Buffer | string): RelativeDistinguishedName[];
    set(key: number | Buffer | string, value: RelativeDistinguishedName | Buffer | string): number;
    delete(key: number | Buffer | string): RelativeDistinguishedName[];
    push(rdn: RelativeDistinguishedName): number;
    pop(): RelativeDistinguishedName | undefined;
    unshift(rdn: RelativeDistinguishedName): number | undefined;
    shift(): RelativeDistinguishedName | undefined;
    count(): number;
    match(dn: DistinguishedName): boolean;
    format(): string;
    toString(): string;
}

export class RelativeDistinguishedName {
    constructor(map?: DistinguishedName | RelativeDistinguishedName);
    has(key: Buffer | string): boolean;
    get(key: Buffer | string): Buffer | string;
    set(key: Buffer | string, value: Buffer | string): void;
    delete(key: Buffer | string): boolean;
    count(): number;
    match(rdn: RelativeDistinguishedName): boolean;
    format(): string;
    toString(): string;
}

/**
 * Escapes an attribute key or value and returns the escaped string.
 * @param value The value to escape. If the value is a {@link Buffer} it will be formatted as an octothorpe (#) followed by the hexadecimal representation of each byte in the buffer. Otherwise the value will be converted to a string and escaped according to RFC 2253.
 */
export function escape(value: Buffer | string): string;

/**
 * Formats a {@link DistinguishedName} or {@link RelativeDistinguishedName} instance according to RFC 2253 and returns a UTF-8 encoded string.
 * @param dn The distinguished name or relative distinguished name to format as a string.
 */
export function format(dn: ReadonlyArray<RelativeDistinguishedName> | DistinguishedName): string;

/**
 * Parses an RFC 2253 string representation of a distinguished name and returns a {@link DistinguishedName} object.
 * @param seq A UTF-8 encoded distinguished name.
 */
export function parse(seq: string): DistinguishedName;
