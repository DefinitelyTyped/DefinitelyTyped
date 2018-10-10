// Type definitions for ip-address 5.8
// Project: https://github.com/beaugunderson/ip-address
// Definitions by: Ian Copp <https://github.com/icopp>
//                 Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace ipAddress;

import jsbn = require("jsbn");

export interface TeredoProperties {
  prefix: string;
  server4: Address4;
  client4: Address4;
  flags: string;
  coneNat: boolean;
  microsoft: {
    reserved: boolean;
    universalLocal: boolean;
    groupIndividual: boolean;
    nonce: string;
  };
  udpPort: string;
}
export interface SixToFourProperties {
  prefix: string;
  gateway: string;
}

export function group(): string;
export function href(port?: number): string;
export function link(options: any): string;
export function simpleGroup(addressString: string, offset: number): string;
export function spanAll(s: string, offset?: number): string;
export function spanLeadingZeroes(address: string): string;
export function spanAllZeroes(s: string): string;
export type IPv6Scope =
  "Reserved"
  | "Interface local"
  | "Link local"
  | "Admin local"
  | "Site local"
  | "Organization local"
  | "Global"
  | "Reserved";
export type IPv6Type =
  "Multicast (All nodes on this interface)"
  | "Multicast (All routers on this interface)"
  | "Multicast (All nodes on this link)"
  | "Multicast (All routers on this link)"
  | "Multicast (All routers in this site)"
  | "Multicast (OSPFv3 AllSPF routers)"
  | "Multicast (OSPFv3 AllDR routers)"
  | "Multicast (RIP routers)"
  | "Multicast (EIGRP routers)"
  | "Multicast (PIM routers)"
  | "Multicast (MLDv2 reports)"
  | "Multicast (mDNSv6)"
  | "Multicast (mDNSv6)"
  | "Multicast (mDNSv6)"
  | "Multicast (All DHCP servers and relay agents on this link)"
  | "Multicast (All DHCP servers and relay agents in this site)"
  | "Multicast (All DHCP servers on this link)"
  | "Multicast (All DHCP servers in this site)"
  | "Unspecified"
  | "Loopback"
  | "Multicast"
  | "Link-local unicast";
/** Represents an IPv4 address */
export class Address4 {
  /** Converts a BigInteger to a v4 address object */
  static fromBigInteger(bigInteger: jsbn.BigInteger): Address4;
  /** Converts a hex string to an IPv4 address object */
  static fromHex(hex: string): Address4;
  /** Converts an integer into a IPv4 address object */
  static fromInteger(integer: number): Address4;
  constructor(address: string);
  readonly groups: number;
  readonly subnet: string;
  readonly subnetMask: number;
  readonly v4: boolean;
  address: string;
  addressMinusSuffix: string;
  parsedAddress: string[];
  valid: boolean;
  /** Returns the address as a BigInteger */
  bigInteger(): jsbn.BigInteger;
  /** Returns a zero-padded base-2 string representation of the address */
  binaryZeroPad(): string;
  /** Returns the correct form of an address */
  correctForm(): string;
  /**
   * The last address in the range given by this address' subnet, often
   * referred to as the Broadcast
   */
  endAddress(): Address4;
  /**
   * The last host address in the range given by this address's subnet ie
   * the last address prior to the Broadcast Address
   */
  endAddressExclusive(): Address4;
  /** Returns the bits in the given range as a base-2 string */
  getBitsBase2(start: number, end: number): string;
  /** Returns true if the address is correct, false otherwise */
  isCorrect(): boolean;
  /** Returns true if the given address is in the subnet of the current address */
  isInSubnet(address: Address4 | Address6): boolean;
  /** Return true if the address is valid */
  isValid(): boolean;
  /** Returns the first n bits of the address, defaulting to the subnet mask */
  mask(mask?: string): string;
  /** Parses a v4 address */
  parse(address: string): string[];
  /**
   * The first address in the range given by this address' subnet, often
   * referred to as the Network Address.
   */
  startAddress(): Address4;
  /**
   * The first host address in the range given by this address's subnet ie
   * the first address after the Network Address
   */
  startAddressExclusive(): Address4;
  /** Converts an IPv4 address object to an array of bytes */
  toArray(): number[];
  /** Converts an IPv4 address object to an IPv6 address group */
  toGroup6(): string;
  /** Converts an IPv4 address object to a hex string */
  toHex(): string;
  /**
   * Converts an IPv4 address object to an IPv6 address group
   * @deprecated
   */
  toV6Group(): string;
}
/**
 * Represents an IPv6 address
 */
export class Address6 {
  static RE_BAD_ADDRESS: RegExp;
  static RE_BAD_CHARACTERS: RegExp;
  static RE_SUBNET_STRING: RegExp;
  static RE_ZONE_STRING: RegExp;
  static SCOPES: string;
  static TYPES: string;
  /** Create an IPv6-mapped address given an IPv4 address */
  static fromAddress4(address4: string): Address6;
  /** Convert a BigInteger to a v6 address object */
  static fromBigInteger(bigInteger: jsbn.BigInteger): Address6;
  /** Convert a byte array to an Address6 object */
  static fromByteArray(bytes: number[]): Address6;
  /** Convert a URL (with optional port number) to an address object */
  static fromURL(url: string): Address6;
  /** Convert an unsigned byte array to an Address6 object */
  static fromUnsignedByteArray(bytes: number[]): Address6;
  /** Return an address from ip6.arpa form */
  static fromArpa(ip6arpa: string): Address6;
  /**
   * @param address An IPv6 address string
   * @param groups  How many octets to parse (default 8)
   */
  constructor(address: string, groups?: number);
  readonly groups: number;
  readonly subnet: string;
  readonly subnetMask: number;
  readonly v4: boolean;
  valid: boolean;
  address: string;
  /** Return the address as a BigInteger */
  bigInteger(): jsbn.BigInteger;
  /** Return a zero-padded base-2 string representation of the address */
  binaryZeroPad(): string;
  /** Return the canonical form of the address */
  canonicalForm(): string;
  /** Return the correct form of the address */
  correctForm(): string;
  /** Return the decimal form of the address */
  decimal(): string;
  /** The last address in the range given by this address' subnet */
  endAddress(): Address6;
  /** Return the bits in the given range as a BigInteger */
  getBits(start: number, end: number): jsbn.BigInteger;
  /** Return the bits in the given range as a base-16 string */
  getBitsBase16(start: number, end: number): string;
  /** Return the bits in the given range as a base-2 string */
  getBitsBase2(start: number, end: number): string;
  /** Return the bits that are set past the subnet mask length */
  getBitsPastSubnet(): string;
  /** Return the scope of the address */
  getScope(): string;
  /** Return the type of the address */
  getType(): IPv6Type;
  /** Return an object containing the 6to4 properties of the address */
  inspect6to4(): SixToFourProperties;
  /** Return an object containing the Teredo properties of the address */
  inspectTeredo(): TeredoProperties;
  /** Returns true if the address is a v4-in-v6 address, false otherwise */
  is4(): boolean;
  /** Returns true if the address is a 6to4 address, false otherwise */
  is6to4(): boolean;
  /** Returns true if the address is in the canonical form, false otherwise */
  isCanonical(): boolean;
  /** Returns true if the address is correct, false otherwise */
  isCorrect(): boolean;
  /** Returns true if the given address is in the subnet of the current address */
  isInSubnet(address: Address4 | Address6): boolean;
  /** Returns true if the address is a link local address, false otherwise */
  isLinkLocal(): boolean;
  /** Returns true if the address is a loopback address, false otherwise */
  isLoopback(): boolean;
  /** Returns true if the address is a multicast address, false otherwise */
  isMulticast(): boolean;
  /** Returns true if the address is a Teredo address, false otherwise */
  isTeredo(): boolean;
  /** Returns true if the address is valid, false otherwise */
  isValid(): boolean;
  /** Return the first n bits of the address, defaulting to the subnet mask */
  mask(mask?: number): string;
  /** Return the Microsoft UNC transcription of the address */
  microsoftTranscription(): string;
  parse(address: string): string[];
  parse4in6(address: string): string;
  /** Return the number of possible subnets of a given size in the address */
  possibleSubnets(size?: number): string;
  regularExpression(substring?: string): RegExp;
  regularExpressionString(substring?: string): RegExp;
  /** Return the reversed ip6.arpa form of the address */
  reverseForm(options?: {omitSuffix: boolean}): string;
  /** The first address in the range given by this address' subnet */
  startAddress(): Address6;
  /** Return the last two groups of this address as an IPv4 address string */
  to4(): string;
  /** Return the v4-in-v6 form of the address */
  to4in6(): string;
  /** Return a v6 6to4 address from a v6 v4inv6 address */
  to6to4(): Address6;
  /** Return a byte array */
  toByteArray(): number[];
  /** Return an unsigned byte array */
  toUnsignedByteArray(): number[];
  /**
   * Return a v6 6to4 address from a v6 v4inv6 address
   * @deprecated
   */
  get6to4(): Address6;
  /**
   * Return an object containing the 6to4 properties of the address
   * @deprecated
   */
  six2four(): SixToFourProperties;
  /**
   * Return an object containing the Teredo properties of the address
   * @deprecated
   */
  toredo(): TeredoProperties;
  /**
   * Return the last two groups of this address as an IPv4 address string
   * @deprecated
   */
  tov4(): string;
  /**
   * Return the v4-in-v6 form of the address
   * @deprecated
   */
  v4inv6(): string;
}
