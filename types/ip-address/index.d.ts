// Type definitions for ip-address 5.8
// Project: https://github.com/beaugunderson/ip-address
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace ipAddress;

export interface v6Helpers {
  spanAllZeroes(s: string): string;
  spanAll(s: string, optionalOffset?: number): string;
  spanLeadingZeroes(address: string): string;
  simpleGroup(addressString: string, offset?: number): string;
}

export interface TeredoObject {
  readonly prefix: string;
  readonly server4: string;
  readonly client4: string;
  readonly flags: string;
  readonly coneNat: any;
  readonly microsoft: {
    readonly reserved: any,
    readonly universalLocal: any,
    readonly groupIndividual: any,
    readonly nonce: any,
  };
  udpPort: string;
}

export interface SixToFourResponse {
  readonly prefix: string;
  readonly gateway: string;
}

export class Address4 {
  constructor(address: string);
  static fromHex(hex: string): Address4;
  static fromInteger(integer: number): Address4;
  static fromBigInteger(bigInteger: any): Address4;

  valid: boolean;
  address: string;
  parsedAddress: string;
  groups: number;
  v4: boolean;
  subnet: string;
  subnetMask: number;

  isValid(): boolean;
  correctForm(): string;
  isCorrect(): boolean;
  toHex(): string;
  toArray(): any;
  toGroup6(): string;
  bigInteger(): any;
  startAddress(): Address4;
  startAddressExclusive(): Address4;
  endAddress(): Address4;
  endAddressExclusive(): Address4;
  mask(optionalMask?: number): string;
  getBitsBase2(start: number, end: number): string;
  isInSubnet(): boolean;
  binaryZeroPad(): string;
}

export class Address6 {
  constructor(address: string, optionalGroups?: number);
  static fromBigInteger(bigInteger: any): Address6;
  static fromURL(url: string): Address6;
  static fromAddress4(address4: string): Address6;
  static fromArpa(arpaFormAddress: string): Address6;
  static fromByteArray(bytes: any): Address6;
  static fromUnsignedByteArray(bytes: any): Address6;

  valid: boolean;
  address: string;
  groups: number;
  v4: boolean;
  subnet: string;
  subnetMask: number;

  microsoftTranscription(): string;
  mask(optionalMask?: number): string;
  possibleSubnets(optionalSubnetSize?: number): string;
  startAddress(): Address6;
  startAddressExclusive(): Address6;
  endAddress(): Address6;
  endAddressExclusive(): Address6;
  getScope(): string;
  getType(): string;
  getBits(start: number, end: number): any;
  getBitsBase2(start: number, end: number): string;
  getBitsBase16(start: number, end: number): string;
  getBitsPastSubnet(): string;
  reverseForm(options?: { omitSuffix: boolean }): string;
  correctForm(): string;
  binaryZeroPad(): string;
  canonicalForm(): string;
  decimal(): string;
  bigInteger(): any;
  to4(): string;
  to4in6(): string;
  inspectTeredo(): TeredoObject;
  inspect6to4(): SixToFourResponse;
  to6to4(): Address6;
  toByteArray(): any;
  toUnsignedByteArray(): any;
}

export const v6: {helpers: v6Helpers};
