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
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} name
     * @param {Oid} id
     * @param {number} force
     * @param {string} logMessage
     * @returns {Promise<Reference>}
     *
     * @memberof Reference
     */
    static create(repo: Repository, name: string, id: Oid, force: number, logMessage: string): Promise<Reference>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} name
     * @param {Oid} id
     * @param {number} force
     * @param {Oid} currentId
     * @param {string} logMessage
     * @returns {Promise<Reference>}
     *
     * @memberof Reference
     */
    static createMatching(repo: Repository, name: string, id: Oid, force: number, currentId: Oid, logMessage: string): Promise<Reference>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {(string | Reference)} id
     * @param {Function} callback
     * @returns {Promise<Reference>}
     *
     * @memberof Reference
     */
    static dwim(repo: Repository, id: string | Reference, callback: Function): Promise<Reference>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} refname
     * @returns {number}
     *
     * @memberof Reference
     */
    static ensureLog(repo: Repository, refname: string): number;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} refname
     * @returns {number}
     *
     * @memberof Reference
     */
    static hasLog(repo: Repository, refname: string): number;
    /**
     *
     *
     * @static
     * @param {string} refname
     * @returns {number}
     *
     * @memberof Reference
     */
    static isValidName(refname: string): number;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @returns {Promise<any[]>}
     *
     * @memberof Reference
     */
    static list(repo: Repository): Promise<any[]>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {(string | Reference)} id
     * @param {Function} callback
     * @returns {Promise<Reference>}
     *
     * @memberof Reference
     */
    static lookup(repo: Repository, id: string | Reference, callback: Function): Promise<Reference>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} name
     * @returns {Promise<Oid>}
     *
     * @memberof Reference
     */
    static nameToId(repo: Repository, name: string): Promise<Oid>;
    /**
     *
     *
     * @static
     * @param {string} bufferOut
     * @param {number} bufferSize
     * @param {string} name
     * @param {number} flags
     * @returns {number}
     *
     * @memberof Reference
     */
    static normalizeName(bufferOut: string, bufferSize: number, name: string, flags: number): number;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} name
     * @returns {number}
     *
     * @memberof Reference
     */
    static remove(repo: Repository, name: string): number;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} name
     * @param {string} target
     * @param {number} force
     * @param {string} logMessage
     * @returns {Promise<Reference>}
     *
     * @memberof Reference
     */
    static symbolicCreate(repo: Repository, name: string, target: string, force: number, logMessage: string): Promise<Reference>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {string} name
     * @param {string} target
     * @param {number} force
     * @param {string} currentValue
     * @param {string} logMessage
     * @returns {Promise<Reference>}
     *
     * @memberof Reference
     */
    static symbolicCreateMatching(repo: Repository, name: string, target: string, force: number, currentValue: string, logMessage: string): Promise<Reference>;

    /**
     *
     *
     * @param {Reference} ref2
     * @returns {number}
     *
     * @memberof Reference
     */
    cmp(ref2: Reference): number;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Reference
     */
    delete(): number;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Reference
     */
    isBranch(): number;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Reference
     */
    isNote(): number;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Reference
     */
    isRemote(): number;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Reference
     */
    isTag(): number;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Reference
     */
    name(): string;
    /**
     *
     *
     * @returns {Repository}
     *
     * @memberof Reference
     */
    owner(): Repository;
    /**
     *
     *
     * @param {number} type
     * @returns {Promise<Object>}
     *
     * @memberof Reference
     */
    peel(type: number): Promise<Object>;
    /**
     *
     *
     * @param {string} newName
     * @param {number} force
     * @param {string} logMessage
     * @returns {Promise<Reference>}
     *
     * @memberof Reference
     */
    rename(newName: string, force: number, logMessage: string): Promise<Reference>;
    /**
     *
     *
     * @returns {Promise<Reference>}
     *
     * @memberof Reference
     */
    resolve(): Promise<Reference>;
    /**
     *
     *
     * @param {Oid} id
     * @param {string} logMessage
     * @returns {Promise<Reference>}
     *
     * @memberof Reference
     */
    setTarget(id: Oid, logMessage: string): Promise<Reference>;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Reference
     */
    shorthand(): string;
    /**
     *
     *
     * @param {string} target
     * @param {string} logMessage
     * @returns {Promise<Reference>}
     *
     * @memberof Reference
     */
    symbolicSetTarget(target: string, logMessage: string): Promise<Reference>;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Reference
     */
    symbolicTarget(): string;
    /**
     *
     *
     * @returns {Oid}
     *
     * @memberof Reference
     */
    target(): Oid;
    /**
     *
     *
     * @returns {Oid}
     *
     * @memberof Reference
     */
    targetPeel(): Oid;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Reference
     */
    type(): number;
    /**
     *
     *
     * @returns {boolean}
     *
     * @memberof Reference
     */
    isValid(): boolean;
    /**
     *
     *
     * @returns {boolean}
     *
     * @memberof Reference
     */
    isConcrete(): boolean;
    /**
     *
     *
     * @returns {boolean}
     *
     * @memberof Reference
     */
    isSymbolic(): boolean;
    /**
     *
     *
     * @returns {string}
     *
     * @memberof Reference
     */
    toString(): string;
    /**
     *
     *
     * @returns {boolean}
     *
     * @memberof Reference
     */
    isHead(): boolean;
    /**
     *
     *
     * @returns {Promise<Reference>}
     *
     * @memberof Reference
     */
    dup(): Promise<Reference>;
}
