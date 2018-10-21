import { Blob } from "./blob";
import { Data } from "./data";
import { DelegationSet } from "./delegation-set";
import { Name } from "./name";

export class Interest {
    constructor(name?: Name);
    constructor(interest: Interest);

    getCanBePrefix(): boolean;
    getForwardingHint(): DelegationSet;
    getIncomingFaceId(): number;
    getInterestLifetimeMilliseconds(): number;
    getMustBeFresh(): boolean;
    getName(): Name;
    getNonce(): Blob;

    setCanBePrefix(canBePrefix: boolean): Interest;
    setForwardingHint(fh: DelegationSet): Interest;
    setInterestLifetimeMilliseconds(lifetime: number): Interest;
    setMustBeFresh(mustBeFresh: boolean): Interest;
    setName(name: Name): Interest;

    matchesData(data: Data): boolean;
    matchesName(name: Name): boolean;
    refreshNonce(): void;
    wireDecode(input: Blob|Buffer): void;
    wireEncode(): Blob;
}
