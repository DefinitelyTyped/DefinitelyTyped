import { Repository } from './repository';

export namespace Attr {
    const enum STATES {
        UNSPECIFIED_T = 0,
        TRUE_T = 1,
        FALSE_T = 2,
        VALUE_T = 3
    }
}

export class Attr {
    static addMacro(repo: Repository, name: string, values: string): number;
    static cacheFlush(repo: Repository): void;
    /**
     * @param repo - The repository containing the path.
     * @param flags - A combination of GIT_ATTR_CHECK... flags.
     * @param path - The path to check for attributes. Relative paths are interpreted relative to the repo root.
     * The file does not have to exist, but if it does not, then it will be treated as a plain file (not a directory).
     * @param name - The name of the attribute to look up.
     * @returns - Output of the value of the attribute. Use the GIT_ATTR_...
     */
    static get(repo: Repository, flags: number, path: string, name: string): Promise<string>;
    /**
     * @param repo - The repository containing the path.
     * @param flags - A combination of GIT_ATTR_CHECK... flags.
     * @param path - The path to check for attributes. Relative paths are interpreted relative to the repo root.
     * The file does not have to exist, but if it does not, then it will be treated as a plain file (not a directory).
     * @param numAttr - The number of attributes being looked up
     * @param names - An array of num_attr strings containing attribute names.
     */
    static getMany(repo: Repository, flags: number, path: string, numAttr: number, names: string): any[];
    /**
     * @param attr - The attribute
     * @returns - the value type for the attribute
     */
    static value(attr: string): number;
}
