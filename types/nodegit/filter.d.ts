import { WriteStream } from 'fs';

import { Repository } from './repository';
import { Blob } from './blob';
import { Buf } from './buf';

export namespace Filter {
    const enum FLAG {
        DEFAULT = 0,
        ALLOW_UNSAFE = 1
    }

    const enum MODE {
        TO_WORKTREE = 0,
        SMUDGE = 0,
        TO_ODB = 1,
        CLEAN = 1
    }
}

export class Filter {
    /**
     *
     *
     * @static
     * @param {*} filters
     * @param {string} name
     * @returns {number}
     *
     * @memberof Filter
     */
    static listContains(filters: any, name: string): number;
    /**
     *
     *
     * @static
     * @param {*} fl
     * @returns {number}
     *
     * @memberof Filter
     */
    static listLength(fl: any): number;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {number} mode
     * @param {number} options
     * @returns {Promise<any>}
     *
     * @memberof Filter
     */
    static listNew(repo: Repository, mode: number, options: number): Promise<any>;
    /**
     *
     *
     * @static
     * @param {*} filters
     * @param {Blob} blob
     * @param {WriteStream} target
     * @returns {number}
     *
     * @memberof Filter
     */
    static listStreamBlob(filters: any, blob: Blob, target: WriteStream): number;
    /**
     *
     *
     * @static
     * @param {*} filters
     * @param {Buf} data
     * @param {WriteStream} target
     * @returns {number}
     *
     * @memberof Filter
     */
    static listStreamData(filters: any, data: Buf, target: WriteStream): number;
    /**
     *
     *
     * @static
     * @param {*} filters
     * @param {Repository} repo
     * @param {string} path
     * @param {WriteStream} target
     * @returns {number}
     *
     * @memberof Filter
     */
    static listStreamFile(filters: any, repo: Repository, path: string, target: WriteStream): number;
    /**
     *
     *
     * @static
     * @param {string} name
     * @returns {number}
     *
     * @memberof Filter
     */
    static unregister(name: string): number;

    /**
     *
     *
     * @param {string} name
     * @returns {Filter}
     *
     * @memberof Filter
     */
    lookup(name: string): Filter;
    /**
     *
     *
     * @param {string} name
     * @param {number} priority
     * @returns {number}
     *
     * @memberof Filter
     */
    register(name: string, priority: number): number;
    /**
     *
     *
     * @type {number}
     * @memberof Filter
     */
    version: number;
    /**
     *
     *
     * @type {string}
     * @memberof Filter
     */
    attributes: string;
    /**
     *
     *
     * @type {Function}
     * @memberof Filter
     */
    stream: Function;
}
