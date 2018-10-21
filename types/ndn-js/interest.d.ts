import { Blob, BlobLike } from "./blob";
import { Data } from "./data";
import { DelegationSet } from "./delegation-set";
import { Name, NameCtor } from "./name";

export class Interest {
    constructor(name?: NameCtor);
    constructor(interest: Interest);

    // accessors
    getName(): Name;
    setName(name: NameCtor): Interest;
    getCanBePrefix(): boolean;
    setCanBePrefix(canBePrefix: boolean): Interest;
    getMustBeFresh(): boolean;
    setMustBeFresh(mustBeFresh: boolean): Interest;
    getForwardingHint(): DelegationSet;
    setForwardingHint(fh: DelegationSet): Interest;
    getNonce(): Blob;
    refreshNonce(): void;
    getInterestLifetimeMilliseconds(): number;
    setInterestLifetimeMilliseconds(lifetime: number): Interest;

    // algorithms
    matchesData(data: Data): boolean;
    matchesName(name: Name): boolean;

    // encoding
    wireEncode(): Blob;
    wireDecode(input: BlobLike): void;
}
