import { Repository } from './repository';

export namespace Attr {
    enum STATES {
        UNSPECIFIED_T = 0,
        TRUE_T = 1,
        FALSE_T = 2,
        VALUE_T = 3
    }
}

export class Attr {
    static addMacro(repo: Repository, name: string, values: string): number;
    static cacheFlush(repo: Repository): void;
    static get(repo: Repository, flags: number, path: string, name: string): Promise<string>;
    static getMany(repo: Repository, flags: number, path: string, numAttr: number, names: string): any[];
    static value(attr: string): number;
}
