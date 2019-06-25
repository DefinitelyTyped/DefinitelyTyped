import { Blob } from "./blob";
import { Data } from "./data";
import { Interest } from "./interest";
import { KeyChain } from "./key-chain";
import { Name } from "./name";
import { NetworkNack } from "./network-nack";
import { Transport, TransportConnectionInfo } from "./transport";

export interface FaceCtorOptions {
    getTransport?: () => Transport;
    getConnectionInfo?: () => TransportConnectionInfo;
    connectionInfo?: TransportConnectionInfo|null;
    host?: string|null;
    port?: number|null;
}

export type OnInterestCallback = (prefix: Name, interest: Interest, face: Face, filterId: number, filter: InterestFilter) => any;

export class Face {
    constructor(transport: Transport, connectionInfo: TransportConnectionInfo);
    constructor(settings?: FaceCtorOptions);

    expressInterest(interest: Interest|Name,
                    onData: (interest: Interest, data: Data) => any,
                    onTimeout?: (interest: Interest) => any,
                    onNetworkNack?: (interest: Interest, nack: NetworkNack) => any): number;
    expressInterest(name: Name,
                    interestTemplate: Interest,
                    onData: (interest: Interest, data: Data) => any,
                    onTimeout?: (interest: Interest) => any,
                    onNetworkNack?: (interest: Interest, nack: NetworkNack) => any): number;

    static getMaxNdnPacketSize(): number;
    putData(data: Data): void;

    registerPrefix(prefix: Name,
                   onInterest: OnInterestCallback,
                   onRegisterFailed: (prefix: Name) => any,
                   onRegisterSuccess?: (prefix: Name, registeredPrefixId: number) => any,
                   flags?: ForwardingFlags): number;

    removePendingInterest(id: number): void;
    removeRegisteredPrefix(id: number): void;
    send(encoding: Blob|Buffer): void;
    setCommandCertificateName(certificateName: Name): void;
    setCommandSigningInfo(keyChain: KeyChain, certificateName: Name): void;
    setInterestFilter(filter: InterestFilter|Name, onInterest: OnInterestCallback): number;
    unsetInterestFilter(id: number): void;
}

// no declaration because this type is rarely used
export class ForwardingFlags {}

export class InterestFilter {
    constructor(filter: InterestFilter);
    constructor(prefix: Name|string, regexFilter?: string);

    doesMatch(name: Name): boolean;
    getPrefix(): Name;
    getRegexFilter(): string;
    hasRegexFilter(): boolean;
}
