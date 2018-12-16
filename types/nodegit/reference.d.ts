import { Repository } from './repository';
import { Oid } from './oid';
import { Object } from './object';

export namespace Reference {
    const enum TYPE {
        INVALID = 0,
        OID = 1,
        SYMBOLIC = 2,
        LISTALL = 3
    }

    const enum NORMALIZE {
        REF_FORMAT_NORMAL = 0,
        REF_FORMAT_ALLOW_ONELEVEL = 1,
        REF_FORMAT_REFSPEC_PATTERN = 2,
        REF_FORMAT_REFSPEC_SHORTHAND = 4
    }
}

export class Reference {
    static create(repo: Repository, name: string, id: Oid, force: number, logMessage: string): Promise<Reference>;
    static createMatching(repo: Repository, name: string, id: Oid, force: number, currentId: Oid, logMessage: string): Promise<Reference>;
    static dwim(repo: Repository, id: string | Reference, callback?: Function): Promise<Reference>;
    static ensureLog(repo: Repository, refname: string): number;
    static hasLog(repo: Repository, refname: string): number;
    static isValidName(refname: string): number;
    static list(repo: Repository): Promise<any[]>;
    static lookup(repo: Repository, id: string | Reference, callback?: Function): Promise<Reference>;
    static nameToId(repo: Repository, name: string): Promise<Oid>;
    static normalizeName(bufferOut: string, bufferSize: number, name: string, flags: number): number;
    static remove(repo: Repository, name: string): number;
    static symbolicCreate(repo: Repository, name: string, target: string, force: number, logMessage: string): Promise<Reference>;
    static symbolicCreateMatching(repo: Repository, name: string, target: string, force: number, currentValue: string, logMessage: string): Promise<Reference>;

    cmp(ref2: Reference): number;
    delete(): number;
    isBranch(): number;
    isNote(): number;
    isRemote(): number;
    isTag(): number;
    name(): string;
    owner(): Repository;
    peel(type: Object.TYPE): Promise<Object>;
    rename(newName: string, force: number, logMessage: string): Promise<Reference>;
    resolve(): Promise<Reference>;
    setTarget(id: Oid, logMessage: string): Promise<Reference>;
    shorthand(): string;
    symbolicSetTarget(target: string, logMessage: string): Promise<Reference>;
    symbolicTarget(): string;
    target(): Oid;
    targetPeel(): Oid;
    type(): number;
    isValid(): boolean;
    isConcrete(): boolean;
    isSymbolic(): boolean;
    toString(): string;
    isHead(): boolean;
    dup(): Promise<Reference>;
}
