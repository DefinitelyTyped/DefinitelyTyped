import { Blob } from "./blob";
import { Data } from "./data";
import { Name } from "./name";

export class Interest {
    constructor(name?: Name|string);
    constructor(interest: Interest);

    getName(): Name;
    getCanBePrefix(): boolean;
    getMustBeFresh(): boolean;
    getForwardingHint(): DelegationSet;
    getNonce(): Blob;
    getInterestLifetimeMilliseconds(): number;
    getApplicationParameters(): Blob;
    getIncomingFaceId(): number;

    setName(name: Name): Interest;
    setCanBePrefix(canBePrefix: boolean): Interest;
    setMustBeFresh(mustBeFresh: boolean): Interest;
    setForwardingHint(fh: DelegationSet): Interest;
    setInterestLifetimeMilliseconds(lifetime: number): Interest;
    setApplicationParameters(parameters: Blob|Buffer): Interest;

    appendParametersDigestToName(): Interest;
    matchesData(data: Data): boolean;
    matchesName(name: Name): boolean;
    refreshNonce(): void;
    toUri(): string;
    wireDecode(input: Blob|Buffer): void;
    wireEncode(): Blob;
}

export class DelegationSet {
    size(): number;
    get(i: number): DelegationSet.Delegation;
    find(name: Name): number;

    add(preference: number, name: Name): void;
    remove(name: Name): boolean;
    clear(): void;
}

export namespace DelegationSet {
    class Delegation {
        getPreference(): number;
        getName(): Name;
    }
}
